var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./db");
const router = express.Router();
var cors = require('cors')
app.use(cors())
//const auth = require("./auth/verify-token");
/**
 * parse requests of content-type - application/json
 */
app.use(bodyParser.json());
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router);
//app.use("/users", require("./routes/user_route"));

/* User management */
const employeeRouter = require("./routes/employee_route");
app.use("/employee", employeeRouter);

app.listen(8000);
console.log("Listening to PORT 8000");

module.exports = app;

