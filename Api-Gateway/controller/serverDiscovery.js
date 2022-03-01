const axios = require("axios");

module.exports = {
  getServices: () => {
    let data;
    
  },
  getServicesByName: async (appName) => {
    const servers = await axios.get(`${process.env.REGISTRY}/${appName}`);
    return servers;
  },
};
