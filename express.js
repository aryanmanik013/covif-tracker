var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});