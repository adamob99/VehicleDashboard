import React, { useState } from "react";

function BottomRow() {
    const [isCharging, setIsCharging] = useState(false);

    const handleChargingClick = (event) => {
        event.preventDefault(); // Prevent default behavior
        setIsCharging((prevState) => !prevState); // Toggle charging state
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
            {/* Gear Button */}
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#ccc",
                    border: "1px solid #000",
                    borderRadius: "5px",
                    cursor: "not-allowed", // Non-functional button styling
                }}
            >
                Gear Info
            </button>

            {/* Motor Button */}
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#ccc",
                    border: "1px solid #000",
                    borderRadius: "5px",
                    cursor: "not-allowed",
                }}
            >
                Motor Info
            </button>

            {/* Battery Temperature Button */}
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#ccc",
                    border: "1px solid #000",
                    borderRadius: "5px",
                    cursor: "not-allowed",
                }}
            >
                Battery Temp Info
            </button>

            {/* View Menu Button */}
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#ccc",
                    border: "1px solid #000",
                    borderRadius: "5px",
                    cursor: "not-allowed",
                }}
            >
                View Menu
            </button>

            {/* Charging Button */}
            <button
                onClick={handleChargingClick}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: isCharging ? "#4CAF50" : "#f44336", // Green or Red based on state
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                {isCharging ? "Stop Charging" : "Start Charging"}
            </button>
        </div>
    );
}

export default BottomRow;
