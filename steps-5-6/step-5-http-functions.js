module.exports = function getHTML(options, callback) {
  var https = require('https');
  var fullData = "";
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      fullData += data;
    });
    response.on('end', function() {
      callback(fullData);
    });
  });
}

