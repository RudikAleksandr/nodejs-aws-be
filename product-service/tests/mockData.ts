import { APIGatewayProxyEvent } from 'aws-lambda';

const event: APIGatewayProxyEvent = {
  body: '',
  headers: {},
  httpMethod: 'GET',
  isBase64Encoded: false,
  path: '',
  pathParameters: {},
  queryStringParameters: undefined,
  multiValueHeaders: {},
  multiValueQueryStringParameters: {},
  requestContext: null,
  stageVariables: {},
  resource: ''
};

export {
  event
};