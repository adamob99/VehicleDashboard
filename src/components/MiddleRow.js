import React, { useState } from "react";

function MiddleRow({
    gearRatio,
    batteryPercentage,
    batteryTemperature,
    motorRPM,
    motorSpeedSetting,
    onSpeedChange,
}) {
    const [speed, setSpeed] = useState(motorSpeedSetting || 1);

    const handleSpeedChange = (event) => {
        const newSpeed = Number(event.target.value);
        setSpeed(newSpeed);
        onSpeedChange(newSpeed); // Pass the new speed back to the parent component
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
                    min="1"
                    max="4"
                    value={speed}
                    onChange={handleSpeedChange}
                    style={{ width: "100px" }}
                />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Speed: {speed}</p>
            </div>
        </div>
    );
}

export default MiddleRow;
