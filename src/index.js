import React from "react";
import ReactDOM from "react-dom/client"; // Use the new API
import App from "./App";
import "./index.css"; // Include your global styles if any

// Create the root element for the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
