import React from "react";

function Controls({ data, updateData }) {
    const handleToggle = (field) => {
        updateData({ [field]: !data[field] });
    };

    return (
        <div className="controls-container">
            <h2>Controls</h2>
            <label>
                Parking Brake:
                <input
                    type="checkbox"
                    checked={data.parkingBreak || false}
                    onChange={() => handleToggle("parkingBreak")}
                />
            </label>
            <label>
                Check Engine:
                <input
                    type="checkbox"
                    checked={data.checkEngine || false}
                    onChange={() => handleToggle("checkEngine")}
                />
            </label>
        </div>
    );
}

export default Controls;
