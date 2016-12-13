var express = require('express');
var router = express.Router();

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    res.setHeader('Content-Type', 'application/json');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;