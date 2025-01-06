import React from 'react';
import './Indicators.css';
import ParkingBrakeOnImage from '../assets/parking-brake-engaged.png'; // Update path if needed
import ParkingBrakeOffImage from '../assets/parking-brake-disengaged.png'; // Update path if needed

const Indicators = ({ parkingBreak, checkEngine, motorHighSpeed, batteryLow }) => {
    return (
        <div className="indicators-container">
            <div className="indicator-item">
                {/* Display image based on parkingBreak state */}
                <img
                    src={parkingBreak ? ParkingBrakeOnImage : ParkingBrakeOffImage}
                    alt={parkingBreak ? "Parking Brake Engaged" : "Parking Brake Disengaged"}
                    className="indicator-image"
                />
                <div className="indicator-label">Parking Brake</div>
            </div>
            <div className="indicator-item">
                <div className={`indicator-icon ${checkEngine ? 'active' : 'inactive'}`}>
                    🚨
                </div>
                <div className="indicator-label">Check Engine</div>
            </div>
            <div className="indicator-item">
                <div className={`indicator-icon ${motorHighSpeed ? 'active' : 'inactive'}`}>
                    ⚡
                </div>
                <div className="indicator-label">Motor Status</div>
            </div>
            <div className="indicator-item">
                <div className={`indicator-icon ${batteryLow ? 'active' : 'inactive'}`}>
                    🔋
                </div>
                <div className="indicator-label">Battery Low</div>
            </div>
        </div>
    );
};

export default Indicators;
