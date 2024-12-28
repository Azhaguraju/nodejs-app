const mongoose = require("mongoose");

// Localhost DB
mongoose.connect(
  "mongodb://localhost:27017/employee",
  { useNewUrlParser: true },

// Atlas DB
// mongoose.connect(
//   "mongodb+srv://azhagu1010:Handsome2103@devcluster.lxju4.mongodb.net/?retryWrites=true&w=majority&appName=DevCluster",
//   { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Successfully Established Connection with MongoDB");
    } else {
      console.log(
        "Failed to Establish Connection with MongoDB with Error: " + err
      );
    }
  }
);
module.exports = mongoose;
