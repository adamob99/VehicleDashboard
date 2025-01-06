import React, { useState, useEffect } from "react";
import Indicators from "./components/Indicators";
import Gauges from "./components/Gauges";
import MiddleRow from "./components/MiddleRow";
import BottomRow from "./components/BottomRow";
import Dashboard from "./components/Dashboard";

function App() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            console.log("Fetching data...");
            const response = await fetch(
                "https://yubj00fz6a.execute-api.us-east-1.amazonaws.com/dev/data"
            );
            const rawResult = await response.json();
            console.log("Raw API Response: ", rawResult);
            const parsedData = rawResult.body;
            console.log("Parsed Data: ", parsedData);
            setData(parsedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSpeedChange = async (newSpeed) => {
        try {
            const updatedData = { ...data, motorSpeedSetting: newSpeed };
            setData(updatedData); // Update locally for an immediate UI update

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
        <div>
            <h1>Vehicle Dashboard</h1>
            {data ? (
                <>
                    <Indicators
                        parkingBrake={data.parkingBrake || false}
                        checkEngine={data.checkEngine || false}
                        motorHighSpeed={data.motorSpeed > 700} // Example condition
                        batteryLow={data.batteryLevel < 20} // Example condition
                    />
                    <Gauges power={data.power || 0} motorRPM={data.motorSpeed || 0} />
                    <MiddleRow
                        gearRatio={data.gearRatio || "N/A"}
                        batteryPercentage={data.batteryLevel || 0}
                        batteryTemperature={data.batteryTemperature || 0}
                        motorRPM={data.motorSpeed || 0}
                        motorSpeedSetting={data.motorSpeed || 1}
                        onSpeedChange={handleSpeedChange}
                    />
                    <BottomRow />
                    <Dashboard data={data} fetchData={fetchData} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
