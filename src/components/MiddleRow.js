import React, { useState, useEffect } from "react";

function MiddleRow({
    motorSpeedSetting,
    onSpeedChange,
    batteryPercentage,
    motorRPM,
}) {
    const speedMapping = {
        0: 0,
        1: 50,
        2: 75,
        3: 125,
        4: 150,
    };

    const reverseSpeedMapping = Object.keys(speedMapping).reduce((acc, level) => {
        acc[speedMapping[level]] = parseInt(level);
        return acc;
    }, {});

    const [speedLevel, setSpeedLevel] = useState(
        reverseSpeedMapping[motorSpeedSetting] || 0
    );
    const [batteryTemperature, setBatteryTemperature] = useState(25); // Default temp
    const [gearRatio, setGearRatio] = useState("N/A");

    useEffect(() => {
        setSpeedLevel(reverseSpeedMapping[motorSpeedSetting] || 0);

        // Update battery temperature and gear ratio based on motor speed
        const mappedSpeed = speedMapping[speedLevel];
        setBatteryTemperature(25 + mappedSpeed * 0.1); // Example: Increase temp with speed
        setGearRatio(mappedSpeed > 125 ? 4 : mappedSpeed > 75 ? 3 : mappedSpeed > 50 ? 2 : 1);
    }, [motorSpeedSetting, speedLevel]);

    const handleSpeedChange = (event) => {
        const newSpeedLevel = Number(event.target.value);
        setSpeedLevel(newSpeedLevel);

        const mappedSpeed = speedMapping[newSpeedLevel];
        onSpeedChange(mappedSpeed);

        // Update battery temperature and gear ratio dynamically
        setBatteryTemperature(25 + mappedSpeed * 0.1); // Adjust temp formula as needed
        setGearRatio(mappedSpeed > 125 ? 4 : mappedSpeed > 75 ? 3 : mappedSpeed > 50 ? 2 : 1);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
            {/* Gear Ratio */}
            <div style={{ textAlign: "center" }}>
                <h3>Gear Ratio</h3>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>{gearRatio}</p>
            </div>

            {/* Battery Percentage */}
            <div style={{ textAlign: "center" }}>
                <h3>Battery %</h3>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>{batteryPercentage}%</p>
            </div>

            {/* Battery Temperature */}
            <div style={{ textAlign: "center" }}>
                <h3>Battery Temp</h3>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>{batteryTemperature.toFixed(1)}°C</p>
            </div>

            {/* Motor RPM */}
            <div style={{ textAlign: "center" }}>
                <h3>Motor RPM</h3>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>{motorRPM} RPM</p>
            </div>

            {/* Motor Speed Setting */}
            <div style={{ textAlign: "center" }}>
                <h3>Motor Speed Setting</h3>
                <input
                    type="range"
                    min="0"
                    max="4"
                    value={speedLevel}
                    onChange={handleSpeedChange}
                    style={{ width: "100px" }}
                />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Speed: {speedMapping[speedLevel]}
                </p>
            </div>
        </div>
    );
}

export default MiddleRow;
