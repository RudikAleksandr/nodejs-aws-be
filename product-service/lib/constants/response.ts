const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PATCH, PUT'
};

const RESPONSE = {
  _200: (data = {}) => ({
    headers,
    statusCode: 200,
    body: JSON.stringify(data),
  }),
  _404: (data = {}) => ({
    headers,
    statusCode: 404,
    body: JSON.stringify(data),
  }),
  _500: (data = {}) => ({
    headers,
    statusCode: 500,
    body: JSON.stringify(data),
  }),
};

export {
  RESPONSE
};