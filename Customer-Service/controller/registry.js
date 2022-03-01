const axios = require("axios");

module.exports = {
  register: (appName, port) => {
    axios
      .post(`${process.env.REGISTRY}`, null, {
        params: {
          appName: appName,
          port: port,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
