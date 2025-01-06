import React from "react";

const Dashboard = ({ data }) => {
    return (
        <div>
            <h2>Dashboard Data</h2>
            <p>ID: {data.id}</p>
            <p>Gear Ratio: {data.gearRatio}</p>
            <p>Power: {data.power}</p>
            <p>Battery Level: {data.batteryLevel}</p>
        </div>
    );
};

export default Dashboard;
