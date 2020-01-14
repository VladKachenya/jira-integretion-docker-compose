const path = require('path');
const express = require('express');

const port = process.env.PORT === undefined ? 8080 : process.env.PORT;
const app = express();

const staticPath = path.join(__dirname, './web/dist');
app.use(express.static(staticPath));

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});