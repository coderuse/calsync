var express = require('express');
var router = express.Router();

var calendar = require('../modules/calendar/index');

/* get userlist */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/* get authUrl */
router.get('/getAuthUrl', function(req, res){
  calendar.getAuthUrl(req, res);
});

/** get calendar list */
router.get('/listCalendars/:authCode', function(req, res) {
  calendar.listCalendars(req, res);
});

module.exports = router;