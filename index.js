
const express = require('express')
const request = require('request')
const app = express()
var { ZOOM_JWT_TOKEN } = require('./config.js');

app.use(express.json());

JWT_Token = ''
ZOOM_API_ENDPOINT = 'https://api.zoom.us/v2/'

app.listen(1337, () => {
    console.log("Server is up and listening on 1337...")
})

app.get("/", (req, res) =>{
    res.send('Welcome to the ZOOM REST API caller for V2 of the Zoom Rest API. Created By Aaron Fletcher')
})

//List Users
app.get("/users", (req, res) => {

       
        options = {
            method: 'GET',
            url: ZOOM_API_ENDPOINT + 'users/',
            headers: {
                 authorization: 'Bearer '+ JWT_Token
             }
        }
        request.get(options, function(error, response, body)
        {
            if(error) throw new Error(error);
            res.send(body)
        })
    })

app.get("/users/:id/meetings", (req, res) => {
//List User Meetings
    userid = req.params.id
    options = {
        method: 'GET',
        url: ZOOM_API_ENDPOINT + 'users/' + userid + '/meetings',
        headers: {
             authorization: 'Bearer '+ JWT_Token
         }
    }
    request.get(options, function(error, response, body)
    {
        if(error) throw new Error(error);
        res.send(body)
    })
})

//Retrieve the details of a meeting.
app.get("/meetings/:id", (req, res) => {

        meetingid = req.params.id
        options = {
            method: 'GET',
            url: ZOOM_API_ENDPOINT + 'meetings/' + meetingid,
            headers: {
                 authorization: 'Bearer '+ JWT_Token
             }
        }
        request.get(options, function(error, response, body)
        {
            if(error) throw new Error(error);
            res.send(body)
        })
    })

//Retrieve the Participants of a meeting
app.get("/past_meetings/:uuid/participants", (req, res) => {

    meetinguuid = req.params.uuid
    options = {
        method: 'GET',
        url: ZOOM_API_ENDPOINT + 'past_meetings/' + meetinguuid + '/participants',
        headers: {
             authorization: 'Bearer '+ JWT_Token
         }
    }
    request.get(options, function(error, response, body)
    {
        if(error) throw new Error(error);
        res.send(body)
    })
})

//Retrieve the Meeting Report For User
app.get("/report/users/:id/meetings", (req, res) => {

    id = req.params.id
    options = {
        method: 'GET',
        url: ZOOM_API_ENDPOINT + 'report/users/' + id + '/meetings',
        headers: {
             authorization: 'Bearer '+ JWT_Token
         }
    }
    request.get(options, function(error, response, body)
    {
        if(error) throw new Error(error);
        res.send(body)
    })
})

//Retrieve the meetings that were schedueld for a user


//Post a meeting
app.post("/users/:id/meetings", (req,res) =>{  
    id = req.params.id
    options = {
         method: 'POST',
         url: ZOOM_API_ENDPOINT + 'users/' + id + '/meetings',
         headers: { authorization: 'Bearer '+ JWT_Token },
         body: req.body, 
         json: true,     
     }
     request.post(options, function(error, response, body)
     {
         if(error) throw new Error(error);
         res.send(body)
     })



})