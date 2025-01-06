import React, { useState, useEffect } from "react";

function MiddleRow({
    motorSpeedSetting,
    onSpeedChange,
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

    const [calculatedBatteryPercentage, setCalculatedBatteryPercentage] = useState(100);
    const [calculatedTemperature, setCalculatedTemperature] = useState(25); // Default temperature
    const [calculatedGearRatio, setCalculatedGearRatio] = useState("N/A");

    useEffect(() => {
        setSpeedLevel(reverseSpeedMapping[motorSpeedSetting] || 0);

        // Calculate battery percentage
        const mappedSpeed = speedMapping[speedLevel];
        const batteryPercentage = 100 - ((mappedSpeed / 150) * 75); // Scale 100% -> 25%
        setCalculatedBatteryPercentage(batteryPercentage);

        // Calculate temperature dynamically
        const temperature = 25 + mappedSpeed * 0.1; // Example formula
        setCalculatedTemperature(temperature);

        // Calculate gear ratio dynamically
        const gearRatio = mappedSpeed > 125 ? 4 : mappedSpeed > 75 ? 3 : mappedSpeed > 50 ? 2 : 1;
        setCalculatedGearRatio(gearRatio);
    }, [motorSpeedSetting, speedLevel]);

    const handleSpeedChange = (event) => {
        const newSpeedLevel = Number(event.target.value);
        setSpeedLevel(newSpeedLevel);

        const mappedSpeed = speedMapping[newSpeedLevel];
        onSpeedChange(mappedSpeed);

        // Update calculations
        const batteryPercentage = 100 - ((mappedSpeed / 150) * 75); // Scale 100% -> 25%
        setCalculatedBatteryPercentage(batteryPercentage);

        const temperature = 25 + mappedSpeed * 0.1; // Example formula
        setCalculatedTemperature(temperature);

        const gearRatio = mappedSpeed > 125 ? 4 : mappedSpeed > 75 ? 3 : mappedSpeed > 50 ? 2 : 1;
        setCalculatedGearRatio(gearRatio);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
            {/* Gear Ratio */}
            <div style={{ textAlign: "center" }}>
                <h3>Gear Ratio</h3>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>{calculatedGearRatio}</p>
            </div>

            {/* Battery Percentage */}
            <div style={{ textAlign: "center" }}>
                <h3>Battery %</h3>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {calculatedBatteryPercentage.toFixed(1)}%
                </p>
            </div>

            {/* Battery Temperature */}
            <div style={{ textAlign: "center" }}>
                <h3>Battery Temp</h3>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {calculatedTemperature.toFixed(1)}°C
                </p>
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
