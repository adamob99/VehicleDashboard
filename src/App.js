import React, { useState, useEffect } from "react";
import Indicators from "./components/Indicators";
import Gauges from "./components/Gauges";
import MiddleRow from "./components/MiddleRow";
import BottomRow from "./components/BottomRow";
import Dashboard from "./components/Dashboard";
import Controls from "./components/Controls";

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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Vehicle Dashboard</h1>
            {data ? (
                <div className="dashboard-grid">
                    <div className="indicators-container">
                        <Indicators
                            parkingBrake={data.parkingBreak || false}
                            checkEngine={data.checkEngine || false}
                            motorHighSpeed={data.motorSpeed > 50}
                            batteryLow={data.batteryLevel < 20}
                        />
                    </div>
                    <div className="gauges-container">
                        <Gauges power={data.power || 0} motorRPM={data.motorSpeed || 0} />
                    </div>
                    <div className="middle-row-container">
                        <MiddleRow
                            gearRatio={data.gearRatio || "N/A"}
                            batteryPercentage={data.batteryLevel || 0}
                            batteryTemperature={data.batteryTemperature || 0}
                            motorRPM={data.motorSpeed || 0}
                            motorSpeedSetting={data.motorSpeed || 1}
                            onSpeedChange={(newSpeed) => {
                                const updatedData = { ...data, motorSpeed: newSpeed };
                                setData(updatedData);
                                fetchData(); // Trigger data fetch after change
                            }}
                        />
                    </div>
                    <div className="controls-container">
                        <Controls refreshData={fetchData} />
                    </div>
                    <div className="bottom-row-container">
                        <BottomRow />
                    </div>
                    <div className="dashboard-container">
                        <Dashboard data={data} />
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
