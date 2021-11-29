// Import the DynamoDB service
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

// Get the DynamoDB table name from environment variables
const tableName = process.env.TABLE_NAME;

exports.putThoughtHandler = async (event) => {
  // All log statements are written to CloudWatch
  console.info('TABLE NAME:', tableName);

  // Get username and thought from the body of the request
  const body = JSON.parse(event.body);
  const { username, thought } = body;

  const params = {
    TableName: tableName,
    Item: { username: username, thought: thought, createdAt: Date.now() },
  };

  const reply = await docClient.put(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
  }

  // All log statements are written to CloudWatch
  console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);

  return response;
};