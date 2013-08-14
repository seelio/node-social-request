// Generated by CoffeeScript 1.3.3
(function() {
  var OAuth2, async, googlePlusClient, request;

  async = require('async');

  request = require("request");

  OAuth2 = require('oauth').OAuth2;

  googlePlusClient = function(keys) {
    var oa, self;
    self = this;
    this.clientId = keys.clientId;
    this.clientSecret = keys.clientSecret;
    oa = new OAuth2;
    this.requestFunctions = {
      contacts: function(tokens, cb) {
        return cb(null, {
          error: new Error('Google Plus API does not currently support contacts')
        });
      },
      details: function(tokens, cb) {
        return oa._request('get', 'https://www.googleapis.com/plus/v1/people/me', {}, "", tokens.access_token, function(err, data, res) {
          var _ref;
          if (err) {
            return cb(null, {
              error: new Error((_ref = err.data) != null ? _ref : err)
            });
          }
          return cb(null, JSON.parse(data));
        });
      }
    };
  };

  module.exports = googlePlusClient;

}).call(this);