const express = require('express');
const path = require('path');
const apiRoutes = require('./api/api_routes');


// init app
const app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//Start server
app.listen(3000, function () {
    console.log('Server started on port 3000...');
});

// Home route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/calendar-api', apiRoutes);

app.post('/addappointment', function (request, response, next)  {
    console.log('OBJECT:', request.body);
    InsertAppointment(request.body);
    response.json({
        "status": true,
        "message": ""
    });
    next();
});



