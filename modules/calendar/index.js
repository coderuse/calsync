var google = require('googleapis');
var googleAuth = require('google-auth-library');

// constants
var SCOPES = ['https://www.googleapis.com/auth/calendar'];

var calendar = {};
var appConf = undefined;

calendar.getAuthUrl = function(req, res) {
  var db = req.db;
  var collection = db.get('confcollection');

  if (!appConf)
    collection.find({},{},function(e,docs){
      appConf = docs;
      createAuthUrl(res);
    });
  else 
    createAuthUrl(res);
};

calendar.listCalendars = function(req, res) {
  var authCode  = req.params.authCode? req.params.authCode: 0;
  var oauth2Client = getOAuth2Client();
  oauth2Client.getToken(code, function(err, token) {
    if (err) {
      console.log('Error while trying to retrieve access token', err);
      return;
    }
    oauth2Client.credentials = token;
    storeToken(token);
    res.json(token);
  });
}

function storeToken(token) {

}

function createAuthUrl(res) {
  var oauth2Client = getOAuth2Client();
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
      console.log(authUrl);

  res.json({
    authUrl: authUrl
  });
}

function getOAuth2Client() {
  var clientSecret = appConf.installed.client_secret;
  var clientId = appConf.installed.client_id;
  var redirectUrl = appConf.installed.redirect_uris[0];

  console.log(clientId, clientSecret, redirectUrl);

  var auth = new googleAuth();
  return new auth.OAuth2(clientId, clientSecret, redirectUrl);
}

//calendar.

module.exports = calendar;