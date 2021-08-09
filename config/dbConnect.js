const mongoose = require("mongoose");

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect('mongodb://localhost:27017/bookit', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((con) => console.log("Conected to local DB"))
    .catch((error) => console.log(`Error ${error}`));
};

module.exports = dbConnect;
