let express = require("express"),
cors = require("cors"),//to resolve cross origin requests where webapplication is on different domain and api is on different
app = express(),
router = require("./router"),
port = process.env.PORT || 9090,
bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'200mb', extended:false}));

app.use('/',router);

console.log("we are listening at", port);
app.listen(port);