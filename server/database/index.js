const mongoose = require("mongoose");

const connection = async () => {
  try {
    const databaseInfo = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Mongoose connected at ${databaseInfo.connection.host}`);
  } catch (error) {
    console.log("Mongooes connected Sucessfully");
    console.log(error);
  }
};

module.exports = connection;
