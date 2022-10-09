class Helper {
  static formatJSONResponse = (response, code) => {
    console.log(response, code);
    return {
      statusCode: code,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(response),
    };
  };
}

module.exports.Helper = Helper;
