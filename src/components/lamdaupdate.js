const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log("Full event:", JSON.stringify(event, null, 2));

    try {
        const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

        console.log("Parsed body:", body);

        const params = {
            TableName: "VehicleData", // Replace with your DynamoDB table name
            Key: { id: body.id },
            UpdateExpression: `
                SET motorSpeed = :motorSpeed,
                    batteryLevel = :batteryLevel,
                    parkingBreak = :parkingBreak,
                    checkEngine = :checkEngine
            `,
            ExpressionAttributeValues: {
                ":motorSpeed": body.motorSpeed,
                ":batteryLevel": body.batteryLevel,
                ":parkingBreak": body.parkingBreak,
                ":checkEngine": body.checkEngine,
            },
            ReturnValues: "ALL_NEW",
        };

        console.log("DynamoDB Update Params:", JSON.stringify(params, null, 2));

        const result = await dynamoDB.update(params).promise();

        console.log("DynamoDB Update Result:", JSON.stringify(result, null, 2));

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Update successful",
                updatedAttributes: result.Attributes,
            }),
        };
    } catch (error) {
        console.error("Error updating DynamoDB:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Failed to update DynamoDB",
                details: error.message,
            }),
        };
    }
};
