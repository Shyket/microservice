const axios = require("axios");
const ip = require("ip");
const request = require("request");

module.exports = {
  register: (appName, port) => {
    console.log(appName);
    request.post(
      {
        headers: { "content-type": "application/json" },
        url: `${process.env.EUREKA_URL}/${appName}`,
        body: JSON.stringify({
          instance: {
            hostName: `localhost`,
            instanceId: `${appName}-${port}`,
            vipAddress: `${appName}`,
            app: `${appName.toUpperCase()}`,
            ipAddr: ip.address(),
            status: `UP`,
            port: {
              $: port,
              "@enabled": true,
            },
            dataCenterInfo: {
              "@class": `com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo`,
              name: `MyOwn`,
            },
          },
        }),
      },
      (error, response, body) => {
        if (!error) {
          console.log(`Registered with Eureka.`);
          setInterval(() => {
            request.put(
              {
                headers: { "content-type": "application/json" },
                url: `${process.env.EUREKA_URL}/${appName}/${appName}-${port}`,
              },
              (error,
              response,
              (body) => {
                if (error) {
                  console.log("Sending heartbeat to Eureka failed.");
                } else {
                  console.log("Successfully sent heartbeat to Eureka.");
                }
              })
            );
          }, 50 * 10);
        } else {
          console.log(`Not registered with eureka due to: ${error}`);
        }
      }
    );
  },
};
