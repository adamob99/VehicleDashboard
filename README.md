Vehicle Dashboard
A dynamic web application that visualizes and controls vehicle metrics such as motor speed, power consumption, gear ratio, and battery status in real-time. The dashboard uses an AWS DynamoDB database as its backend to store and retrieve data.

Features
Real-Time Visualization:

Animated gauges for power and motor RPM with smooth needle transitions.
Indicators for parking brake, engine status, and battery health.
Visual components update dynamically with changes from the backend.
Interactive Controls:

Slider for motor speed setting that updates the backend database.
Start/Stop charging button that toggles power consumption levels.
Backend Integration:

Fully integrated with an AWS DynamoDB database.
REST API (hosted on AWS) for fetching and updating data.
Technologies Used
Frontend:

React.js
CSS for styling
Backend:

AWS DynamoDB for data storage
AWS API Gateway for API hosting
Lambda functions for serverless processing
Live Deployment
The application is deployed using Netlify. Live Demo
https://677ba602c668f3c9c843c591--clever-yeot-b5fe0f.netlify.app/

Replace https://your-netlify-deployment-url with your actual Netlify deployment link.

Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/adamob99/VehicleDashboard.git
cd VehicleDashboard
Install Dependencies: Ensure you have Node.js installed, then run:

bash
Copy code
npm install
Environment Variables: Create a .env file in the root directory with the following content:

env
Copy code
REACT_APP_API_URL=https://your-aws-api-endpoint
Replace https://your-aws-api-endpoint with your actual AWS API Gateway URL.

Start the Development Server:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Build for Production: To generate a production-ready build, run:

bash
Copy code
npm run build
Deploying to Netlify
Connect GitHub Repository:

Log in to Netlify and create a new site by linking your GitHub repository.
Set Build Command and Publish Directory:

Build Command: npm run build
Publish Directory: build
Environment Variables: Add the REACT_APP_API_URL environment variable in Netlify settings.

Deploy: Once configured, deploy your application, and Netlify will provide a live URL.

Usage
Dashboard:

Displays real-time metrics fetched from AWS DynamoDB.
Allows interaction with vehicle controls such as motor speed and power.
Backend API:

Data is fetched and updated via an AWS API Gateway connected to DynamoDB.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
