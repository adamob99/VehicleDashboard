const AWS = require("aws-sdk");

// Set the correct AWS region
AWS.config.update({ region: "us-east-1" }); // Replace with your DynamoDB table's region
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        console.log("Full event:", JSON.stringify(event, null, 2));
        console.log("Raw event body:", event.body);

        // Parse the body only if it's a string
        const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

        // Extract data from the request
        const {
            id,
            motorSpeed,
            batteryLevel,
            motorOn,
            batteryOn,
            parkingBreak,
            checkEngine,
        } = body;

        console.log("Parsed data:", { id, motorSpeed, batteryLevel, motorOn, batteryOn, parkingBreak, checkEngine });

        // Validate that the required `id` field is present
        if (!id) {
            throw new Error("Missing 'id' field in request body");
        }

        // Parameters for updating the DynamoDB table
        const params = {
            TableName: "VehicleData", // Correct table name
            Key: { id },
            UpdateExpression: `
                SET motorSpeed = :motorSpeed,
                    batteryLevel = :batteryLevel,
                    motorOn = :motorOn,
                    batteryOn = :batteryOn,
                    parkingBreak = :parkingBreak,
                    checkEngine = :checkEngine
            `,
            ExpressionAttributeValues: {
                ":motorSpeed": motorSpeed,
                ":batteryLevel": batteryLevel,
                ":motorOn": motorOn,
                ":batteryOn": batteryOn,
                ":parkingBreak": parkingBreak,
                ":checkEngine": checkEngine,
            },
            ReturnValues: "ALL_NEW", // Return the updated attributes
        };

        console.log("DynamoDB update params:", params);

        // Perform the update operation
        const result = await dynamoDB.update(params).promise();
        console.log("DynamoDB update result:", result);

        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Update successful", updatedAttributes: result.Attributes }),
        };
    } catch (error) {
        console.error("Error updating vehicle:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to update vehicle data", details: error.message }),
        };
    }
};
