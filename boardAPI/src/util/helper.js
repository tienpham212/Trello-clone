class Helper {
  static formatJSONResponse = (response, code) => {
    console.log(response, code);
    return {
      statusCode: code,
      body: JSON.stringify(response),
    };
  };
}

module.exports.Helper = Helper;
