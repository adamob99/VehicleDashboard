import React, { useState } from "react";
import Controls from "./Controls";
import Indicators from "./Indicators";

const Dashboard = () => {
    const [indicators, setIndicators] = useState({
        parkingBreak: false,
        checkEngine: false,
        motorHighSpeed: false,
        batteryLow: false,
        motorSpeed: 0,
        batteryLevel: 100,
    });

    const updateIndicator = (key, value) => {
        setIndicators((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <div>
            <h1>Vehicle Dashboard</h1>
            <Controls
                indicators={indicators} // Pass the entire state object
                updateIndicator={updateIndicator} // Pass the updater function
            />
            <Indicators
                parkingBreak={indicators.parkingBreak}
                checkEngine={indicators.checkEngine}
                motorHighSpeed={indicators.motorHighSpeed}
                batteryLow={indicators.batteryLow}
            />
        </div>
    );
};

export default Dashboard;
