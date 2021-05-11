// defines a lambda function
exports.handler = async function(event) {

  // an Array of to-dos

  // write the Array of to-dos to the *back-end* console

  // turn the Array into a String

  // write the "stringified" Array to the *back-end* console

  // a lambda function returns a status code and a string of data
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    body: `Hello from the back-end!` // a string of data
  }
}