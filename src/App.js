import React, { useState, useEffect } from "react";
import Indicators from "./components/Indicators";
import Gauges from "./components/Gauges";
import MiddleRow from "./components/MiddleRow";
import BottomRow from "./components/BottomRow";
import Controls from "./components/Controls"; // Import Controls
import Dashboard from "./components/Dashboard"; // Import Dashboard
import "./App.css"; // Ensure CSS is imported

function App() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            console.log("Fetching data...");
            const response = await fetch(
                "https://yubj00fz6a.execute-api.us-east-1.amazonaws.com/dev/data"
            );
            const rawResult = await response.json();
            const parsedData =
                typeof rawResult.body === "string"
                    ? JSON.parse(rawResult.body)
                    : rawResult.body;
            console.log("Parsed Data: ", parsedData);
            setData(parsedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSpeedChange = async (mappedSpeed) => {
        try {
            const updatedData = { ...data, motorSpeed: mappedSpeed };
            setData(updatedData); // Update locally for immediate UI feedback

            // Update on the server
            await fetch("https://yubj00fz6a.execute-api.us-east-1.amazonaws.com/dev/data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            fetchData(); // Refresh the data after the update
        } catch (error) {
            console.error("Error updating motor speed:", error);
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
                        {/* Full-Row Indicators */}
                        <div className="indicators-container">
                            <Indicators
                                parkingBrake={data.parkingBreak || false}
                                checkEngine={data.checkEngine || false}
                                motorHighSpeed={data.motorSpeed > 50}
                                batteryLow={data.batteryLevel < 20}
                            />
                        </div>

                        {/* Full-Row Gauges */}
                        <div className="gauges-container">
                            <Gauges power={data.power || 0} motorRPM={data.motorSpeed || 0} />
                        </div>

                        {/* Full-Row Middle Row */}
                        <div className="middle-row-container">
                            <MiddleRow
                                gearRatio={data.gearRatio || "N/A"}
                                batteryPercentage={data.batteryLevel || 0}
                                batteryTemperature={data.batteryTemperature || 0}
                                motorRPM={data.motorSpeed || 0}
                                motorSpeedSetting={data.motorSpeed || 1}
                                onSpeedChange={handleSpeedChange}
                            />
                        </div>

                        {/* Full-Row Bottom Row */}
                        <div className="bottom-row-container">
                            <BottomRow />
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div className="controls-section">
                        <Controls refreshData={fetchData} />
                    </div>

                    {/* Dashboard Section */}
                    <div className="dashboard-section">
                        <Dashboard data={data} fetchData={fetchData} />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
