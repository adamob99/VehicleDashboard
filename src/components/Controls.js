import React, { useState } from "react";

const Controls = ({ refreshData }) => {
    const [motorSpeed, setMotorSpeed] = useState(0);
    const [batteryLevel, setBatteryLevel] = useState(0);
    const [parkingBreak, setParkingBreak] = useState(false);
    const [checkEngine, setCheckEngine] = useState(false);

    const handleSubmit = async () => {
        const payload = {
            id: "vehicle-1",
            motorSpeed,
            batteryLevel,
            parkingBreak,
            checkEngine,
        };

        console.log("Submitting values:", payload);

        try {
            const response = await fetch(
                "https://yubj00fz6a.execute-api.us-east-1.amazonaws.com/dev/data",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Update result:", result);

            // Call refreshData to fetch updated data
            if (refreshData) {
                refreshData();
            } else {
                console.warn("refreshData function not passed to Controls.");
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div>
            <h2>Controls</h2>
            <label>
                Motor Speed:
                <input
                    type="number"
                    value={motorSpeed}
                    onChange={(e) => setMotorSpeed(Number(e.target.value))}
                />
            </label>
            <label>
                Battery Level:
                <input
                    type="number"
                    value={batteryLevel}
                    onChange={(e) => setBatteryLevel(Number(e.target.value))}
                />
            </label>
            <label>
                Parking Break:
                <input
                    type="checkbox"
                    checked={parkingBreak}
                    onChange={(e) => setParkingBreak(e.target.checked)}
                />
            </label>
            <label>
                Check Engine:
                <input
                    type="checkbox"
                    checked={checkEngine}
                    onChange={(e) => setCheckEngine(e.target.checked)}
                />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Controls;
