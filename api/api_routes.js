var express = require('express');
const db = require('./db');
var router = express.Router();

var tools = require('./db');

router.get('/', function (request, response, next) {
    response.json({ "status": true });
    next();
});

router.get('/test', async function (request, response, next)  {
    console.log("Test 2");
    let parameters = {}
    parameters.name = 'TestName';
    parameters.start_at = '2021-08-01 15:00';
    parameters.end_at = '2021-08-07 18:00';
    parameters.location = 'TestLocation';
    await InsertAppointment(parameters);
    //response.header("Access-Control-Allow-Origin", "*");
    response.json({
        "status": true,
        "message": ""
    });
    next();
});

router.post('/appointment', async function (request, response, next) {
    console.log("Router /appointment");
    console.log(request.body);
    let participants = request.body.participants.split(',');
    participants.forEach(function(item, index) {
        participants[index] = item.trim();
    });
    request.body.participants = participants;
    //console.log(request.body);
    try {
        await InsertAppointment(request.body);
    } catch (err) {
        console.log(err);
    }
    response.json({ 
        "status": true,
        "message": ""
    });
    next();
});

router.put('/appointment/:id', async function (request, response, next) {
    console.log("Patch /appointment/:id");
    console.log(request.body);
    let participants = request.body.participants.split(',');
    participants.forEach(function(item, index) {
        participants[index] = item.trim();
    });
    request.body.participants = participants;
    await UpdateAppointment(request.params.id, request.body);
    response.json({ 
        "status": true,
        "message": ""
    });
    next();
});

router.get('/appointment/:id', async function (request, response, next) {
    console.log('GET appointment');
    var appointments = await SelectAppointment(request.params.id);
    if (appointments.length > 0) {
        appointments[0].participants = await SelectParticipants(appointments[0].id);
        delete(appointments[0].participants.meta);
    }     
    response.json({
        "status": true,
        "message": "",
        "appointment": appointments[0] ? appointments[0] : []
    });
    
    next();
});

router.patch('/appointment/:id', async function (request, response, next) {
    response.json({ "foo": "bar" });
    next();
});

router.delete('/appointment/:id', async function (request, response, next) {
    console.log('Delete');
    //console.log(request);
    await DeleteAppointment(request.params.id);
    //response.header("Access-Control-Allow-Origin", "*");
    response.json({
        "status": true,
        "message": ""
    });
    next();
});

router.get('/appointments', async function (request, response, next) {
    
    var appointments = await SelectAppointments();
    console.log(appointments.length)

    for (var i = 0; i < appointments.length; i++) {
        //console.log(appointments[index].participants);
        
        var participants = await SelectParticipants(appointments[i].id);
        delete(participants.meta);
        console.log(participants);
        appointments[i].participants = participants;

    }
    console.log('Select');
    delete(appointments.meta);
    //console.log(appointments);
    response.json({ "appointments": appointments });
    next();
});

module.exports = router;

