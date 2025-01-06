import React from "react";
import parkingBrakeEngaged from "../assets/parking-brake-engaged.png";
import parkingBrakeDisengaged from "../assets/parking-brake-disengaged.png";
import checkEngineOn from "../assets/check-engine-red.png";
import checkEngineOff from "../assets/check-engine-green.png";
import motorHigh from "../assets/motor-status-red.png";
import motorLow from "../assets/motor-status-green.png";
import batteryLowImage from "../assets/battery-low-red.png";
import batteryOkImage from "../assets/battery-low-green.png";

const Indicators = ({ parkingBrake, checkEngine, motorHighSpeed, batteryLow }) => {
    console.log("Indicators Props:", { parkingBrake, checkEngine, motorHighSpeed, batteryLow });

    return (
        <div>
            <h2>Indicators</h2>

            {/* Parking Brake Indicator */}
            <img
                src={parkingBrake ? parkingBrakeEngaged : parkingBrakeDisengaged}
                alt={parkingBrake ? "Parking Brake Engaged" : "Parking Brake Disengaged"}
            />

            {/* Check Engine Indicator */}
            <img
                src={checkEngine ? checkEngineOn : checkEngineOff}
                alt={checkEngine ? "Check Engine On" : "Check Engine Off"}
            />

            {/* Motor Speed Indicator */}
            <img
                src={motorHighSpeed ? motorHigh : motorLow}
                alt={motorHighSpeed ? "Motor High Speed" : "Motor Low Speed"}
            />

            {/* Battery Level Indicator */}
            <img
                src={batteryLow ? batteryLowImage : batteryOkImage}
                alt={batteryLow ? "Battery Low" : "Battery OK"}
            />
        </div>
    );
};

export default Indicators;
