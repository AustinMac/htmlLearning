var router = require('express').Router; // importing Router function from express module
var api = router(); // creating a new router from imported function

// all endpoints get accessed from localhost:8080/api/... when app.use('api', api) in index.js is invoked

api.get('/', function(req, res) { // creating endpoint specific to this router
    res.send('hello from api');
});

module.exports = api;  // exporting our created router to be 'require'd in other files