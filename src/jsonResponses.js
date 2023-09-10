const text = require('./textResponses.js');

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(stringMessage);
  response.end();
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: text.hello,
  };
  const stringMessage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(stringMessage);
  response.end();
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
