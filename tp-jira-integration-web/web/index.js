const path = require('path');
const express = require('express');
var ip = require("ip");

var ipAddress = ip.address();

const port = process.env.PORT === undefined ? 8080 : process.env.PORT;
const app = express();

const staticPath = path.join(__dirname, './dist');
app.use(express.static(staticPath));

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info(`==> 🌎 Listening on port %s. Open up http://${ipAddress}:%s/ in your browser.`, port, port);
});