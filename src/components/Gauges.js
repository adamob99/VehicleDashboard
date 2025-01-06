import React from "react";

function Gauges({ power, motorRPM }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            {/* Power Gauge */}
            <div style={{ textAlign: "center" }}>
                <h3>Power (kW)</h3>
                <div
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        border: "8px solid #4CAF50",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#4CAF50",
                    }}
                >
                    {power} kW
                </div>
            </div>

            {/* Motor RPM Gauge */}
            <div style={{ textAlign: "center" }}>
                <h3>Motor RPM</h3>
                <div
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        border: "8px solid #2196F3",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#2196F3",
                    }}
                >
                    {motorRPM} RPM
                </div>
            </div>
        </div>
    );
}

export default Gauges;
