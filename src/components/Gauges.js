import React, { useState, useEffect } from "react";
import "./gauges.css";

function Gauges({ power, motorRPM }) {
    const [animatedPower, setAnimatedPower] = useState(0);
    const [animatedRPM, setAnimatedRPM] = useState(0);

    useEffect(() => {
        const powerAnimation = setInterval(() => {
            setAnimatedPower((prev) => {
                if (Math.abs(prev - power) < 1) {
                    clearInterval(powerAnimation);
                    return power;
                }
                return prev + (power - prev) * 0.1; // Smooth animation
            });
        }, 16);
        return () => clearInterval(powerAnimation);
    }, [power]);

    useEffect(() => {
        const rpmAnimation = setInterval(() => {
            setAnimatedRPM((prev) => {
                if (Math.abs(prev - motorRPM) < 1) {
                    clearInterval(rpmAnimation);
                    return motorRPM;
                }
                return prev + (motorRPM - prev) * 0.1;
            });
        }, 16);
        return () => clearInterval(rpmAnimation);
    }, [motorRPM]);

    const calculatePowerAngle = (powerValue) => {
        return (powerValue / 100) * 270 - 135; // Map power to needle angle (-135 to 135 degrees)
    };

    const calculateRPMAngle = (rpmValue) => {
        return (rpmValue / 200) * 270 - 135; // Map RPM to needle angle (-135 to 135 degrees)
    };

    return (
        <div className="gauges-wrapper">
            {/* Power Gauge */}
            <div className="gauge-container">
                <div className="gauge-face">
                    <div
                        className="needle"
                        style={{
                            height: "45%", // Shorten the needle slightly
                            transform: `translate(-50%, -100%) rotate(${calculatePowerAngle(
                                animatedPower
                            )}deg)`,
                        }}
                    ></div>
                    <div className="gauge-label">Power (kW)</div>
                </div>
                <div className="gauge-value">{animatedPower.toFixed(1)} kW</div>
            </div>

            {/* Motor RPM Gauge */}
            <div className="gauge-container">
                <div className="gauge-face">
                    <div
                        className="needle"
                        style={{
                            height: "45%", // Shorten the needle slightly
                            transform: `translate(-50%, -100%) rotate(${calculateRPMAngle(
                                animatedRPM
                            )}deg)`,
                        }}
                    ></div>
                    <div className="gauge-label">Motor RPM</div>
                </div>
                <div className="gauge-value">{animatedRPM.toFixed(0)} RPM</div>
            </div>
        </div>
    );
}

export default Gauges;
