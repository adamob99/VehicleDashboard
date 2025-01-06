import React, { useState } from "react";

const Controls = ({ indicators = {}, updateIndicator }) => {
    const {
        motorSpeed = 0,
        batteryLevel = 100,
        parkingBreak = false,
        checkEngine = false,
    } = indicators;

    const [localMotorSpeed, setLocalMotorSpeed] = useState(motorSpeed);
    const [localBatteryLevel, setLocalBatteryLevel] = useState(batteryLevel);
    const [localParkingBreak, setLocalParkingBreak] = useState(parkingBreak);
    const [localCheckEngine, setLocalCheckEngine] = useState(checkEngine);

    const handleSubmit = () => {
        // Update the parent state with the local values
        updateIndicator("motorSpeed", localMotorSpeed);
        updateIndicator("batteryLevel", localBatteryLevel);
        updateIndicator("parkingBreak", localParkingBreak);
        updateIndicator("checkEngine", localCheckEngine);
        console.log("Controls updated");
    };

    return (
        <div>
            <h2>Controls</h2>
            <label>
                Motor Speed:
                <input
                    type="number"
                    value={localMotorSpeed}
                    onChange={(e) => setLocalMotorSpeed(Number(e.target.value))}
                />
            </label>
            <label>
                Battery Level:
                <input
                    type="number"
                    value={localBatteryLevel}
                    onChange={(e) => setLocalBatteryLevel(Number(e.target.value))}
                />
            </label>
            <label>
                Parking Break:
                <input
                    type="checkbox"
                    checked={localParkingBreak}
                    onChange={(e) => setLocalParkingBreak(e.target.checked)}
                />
            </label>
            <label>
                Check Engine:
                <input
                    type="checkbox"
                    checked={localCheckEngine}
                    onChange={(e) => setLocalCheckEngine(e.target.checked)}
                />
            </label>
            <button onClick={handleSubmit}>Update Indicators</button>
        </div>
    );
};

export default Controls;
