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
    return (
        <div className="indicators-container">
            {/* Parking Brake Indicator */}
            <div className="indicator-item">
                <img
                    className="indicator-icon"
                    src={parkingBrake ? parkingBrakeEngaged : parkingBrakeDisengaged}
                    alt={parkingBrake ? "Parking Brake Engaged" : "Parking Brake Disengaged"}
                />
                <div className="indicator-label">Parking Brake</div>
            </div>

            {/* Check Engine Indicator */}
            <div className="indicator-item">
                <img
                    className="indicator-icon"
                    src={checkEngine ? checkEngineOn : checkEngineOff}
                    alt={checkEngine ? "Check Engine On" : "Check Engine Off"}
                />
                <div className="indicator-label">Check Engine</div>
            </div>

            {/* Motor Speed Indicator */}
            <div className="indicator-item">
                <img
                    className="indicator-icon"
                    src={motorHighSpeed ? motorHigh : motorLow}
                    alt={motorHighSpeed ? "Motor High Speed" : "Motor Low Speed"}
                />
                <div className="indicator-label">Motor Speed</div>
            </div>

            {/* Battery Level Indicator */}
            <div className="indicator-item">
                <img
                    className="indicator-icon"
                    src={batteryLow ? batteryLowImage : batteryOkImage}
                    alt={batteryLow ? "Battery Low" : "Battery OK"}
                />
                <div className="indicator-label">Battery</div>
            </div>
        </div>
    );
};

export default Indicators;
