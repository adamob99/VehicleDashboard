import React from "react";

const Dashboard = ({ data }) => {
    return (
        <div className="dashboard">
            <h2>Dashboard Data</h2>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Attribute Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID </td>
                        <td>{data.id}</td>
                    </tr>
                    <tr>
                        <td>Battery Level</td>
                        <td>{data.batteryLevel}</td>
                    </tr>
                    <tr>
                        <td>Check Engine</td>
                        <td>{data.checkEngine ? "True" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Gear Ratio</td>
                        <td>{data.gearRatio}</td>
                    </tr>
                    <tr>
                        <td>Motor Speed</td>
                        <td>{data.motorSpeed}</td>
                    </tr>
                    <tr>
                        <td>Parking Brake</td>
                        <td>{data.parkingBreak ? "True" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Power</td>
                        <td>{data.power}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
