// Import the DynamoDB service
const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();
// Get the table name from environment variable
const tableName = process.env.TABLE_NAME;

exports.getAllThoughtsHandler = async (event) => {
  // assign the environment variable from the SAM template
  const params = {
    TableName: tableName,
  };

  const { Items } = await docClient.scan(params).promise();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify(Items),
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );

  return response;
};
