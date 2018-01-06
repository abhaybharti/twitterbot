'use strict';

var google = require('googleapis');
var blogger = google.blogger('v3');
var util = require('util');

blogger.blogs.get({
  key: '<YOUR API KEY HERE>',
  blogId: '<YOUR BLOG ID HERE>'
}, function (err, result) {
  if (err) {
    console.error(err);
  }
  if (result) {
    console.log(util.inspect(result));
  }
});