import React, { useState } from "react";

function MiddleRow({
    gearRatio,
    batteryPercentage,
    batteryTemperature,
    motorRPM,
    motorSpeedSetting,
    onSpeedChange,
}) {
    const [speedLevel, setSpeedLevel] = useState(motorSpeedSetting || 1);

    // Map slider values to motor speeds
    const speedMapping = {
        0: 0,
        1: 50,
        2: 75,
        3: 125,
        4: 150,
    };

    const handleSpeedChange = (event) => {
        const newSpeedLevel = Number(event.target.value);
        setSpeedLevel(newSpeedLevel);

        // Map the speed level to motor speed
        const mappedSpeed = speedMapping[newSpeedLevel];

        // Pass the mapped speed back to the parent component
        onSpeedChange(mappedSpeed);
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
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>{batteryTemperature}°C</p>
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
