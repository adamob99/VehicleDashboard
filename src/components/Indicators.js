import React from "react";
import "./Indicators.css";
import ParkingBrakeOnImage from "../assets/parking-brake-engaged.png";
import ParkingBrakeOffImage from "../assets/parking-brake-disengaged.png";
import CheckEngineOnImage from "../assets/check-engine-red.png"; // New Image
import CheckEngineOffImage from "../assets/check-engine-green.png"; // New Image

const Indicators = ({ parkingBreak, checkEngine, motorHighSpeed, batteryLow }) => {
    return (
        <div className="indicators-container">
            {/* Parking Brake Indicator */}
            <div className="indicator-item">
                <img
                    src={parkingBreak ? ParkingBrakeOnImage : ParkingBrakeOffImage}
                    alt={parkingBreak ? "Parking Brake Engaged" : "Parking Brake Disengaged"}
                    className="indicator-image"
                />
                <div className="indicator-label">Parking Brake</div>
            </div>

            {/* Check Engine Indicator */}
            <div className="indicator-item">
                <img
                    src={checkEngine ? CheckEngineOnImage : CheckEngineOffImage}
                    alt={checkEngine ? "Check Engine Active" : "Check Engine Inactive"}
                    className="indicator-image"
                />
                <div className="indicator-label">Check Engine</div>
            </div>

            {/* Motor High Speed Indicator */}
            <div className="indicator-item">
                <div className={`indicator-icon ${motorHighSpeed ? "active" : "inactive"}`}>
                    ⚡
                </div>
                <div className="indicator-label">Motor High Speed</div>
            </div>

            {/* Battery Low Indicator */}
            <div className="indicator-item">
                <div className={`indicator-icon ${batteryLow ? "active" : "inactive"}`}>
                    🔋
                </div>
                <div className="indicator-label">Battery Low</div>
            </div>
        </div>
    );
};

export default Indicators;
