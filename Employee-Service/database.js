const mongoose = require("mongoose");

const database = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }

  mongoose.connection.on("error", (err) => {
    logError(err);
  });
};

module.exports = database;
