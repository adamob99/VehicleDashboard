import React, { useState, useEffect } from "react";
import Indicators from "./components/Indicators";
import Gauges from "./components/Gauges";
import MiddleRow from "./components/MiddleRow";
import BottomRow from "./components/BottomRow";
import Controls from "./components/Controls";
import "./App.css";

function App() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://yubj00fz6a.execute-api.us-east-1.amazonaws.com/dev/data"
            );
            const rawResult = await response.json();
            const parsedData =
                typeof rawResult.body === "string"
                    ? JSON.parse(rawResult.body)
                    : rawResult.body;
            setData(parsedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const updateData = async (updatedFields) => {
        try {
            const updatedData = { ...data, ...updatedFields };
            setData(updatedData); // Optimistically update the state

            const response = await fetch(
                "https://yubj00fz6a.execute-api.us-east-1.amazonaws.com/dev/data",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData),
                }
            );

            if (!response.ok) {
                console.error("Failed to update backend.");
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Vehicle Dashboard</h1>
            {data ? (
                <>
                    <div className="dashboard-grid">
                        {/* Indicators Row */}
                        <div className="indicators-container">
                            <Indicators
                                parkingBrake={data.parkingBreak || false}
                                checkEngine={data.checkEngine || false}
                                motorHighSpeed={data.motorSpeed > 50}
                                batteryLow={data.batteryLevel < 50} // Updated to use batteryLevel
                            />
                        </div>

                        {/* Gauges Row */}
                        <div className="gauges-container">
                            <Gauges
                                power={data.power || 0}
                                motorRPM={data.motorSpeed || 0}
                            />
                        </div>

                        {/* Middle Row */}
                        <div className="middle-row-container">
                            <MiddleRow
                                gearRatio={data.gearRatio || "N/A"}
                                batteryPercentage={data.batteryLevel || 0}
                                batteryTemperature={data.batteryTemperature || 0}
                                motorRPM={data.motorSpeed || 0}
                                motorSpeedSetting={data.motorSpeed || 0}
                                onSpeedChange={(speed) => {
                                    const batteryLevel = Math.max(
                                        0,
                                        100 - (speed / 150) * 100
                                    ); // Adjust battery level dynamically
                                    const gearRatio =
                                        speed > 125
                                            ? 4
                                            : speed > 75
                                            ? 3
                                            : speed > 50
                                            ? 2
                                            : 1; // Adjust gear ratio dynamically
                                    const batteryTemperature =
                                        25 + speed * 0.1; // Adjust battery temp dynamically

                                    updateData({
                                        motorSpeed: speed,
                                        batteryLevel,
                                        gearRatio,
                                        batteryTemperature,
                                    });
                                }}
                            />
                        </div>

                        {/* Bottom Row */}
                        <div className="bottom-row-container">
                            <BottomRow
                                onToggleCharging={(isCharging) =>
                                    updateData({ power: isCharging ? 100 : 50 })
                                }
                            />
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div className="controls-section">
                        <Controls data={data} updateData={updateData} />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
