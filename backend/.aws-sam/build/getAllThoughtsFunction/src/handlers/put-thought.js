// Import the DynamoDB service
const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

// Get the DynamoDB table name from environment variables
const tableName = process.env.TABLE_NAME;

exports.putThoughtHandler = async (event) => {
  // All log statements are written to CloudWatch
  console.info("TABLE NAME:", tableName);

  // Get username and thought from the body of the request
  const body = JSON.parse(event.body);
  const { username, thought } = body;

  // An image variable is declared to capture the URL from the user data
  const { username, thought, image } = JSON.parse(event.body);

  const params = {
    TableName: tableName,
    // image is added to the record in DynamoDB
    Item: { username, thought, image, createdAt: Date.now() }, // note the shorthand notation for objects
  };

  try {
    const reply = await docClient.put(params).promise();
  } catch (err) {
    console.error(err);
  }

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    // image is added to verify the record's data is correct
    body: JSON.stringify({ username, image, thought }),
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );

  return response;
};
