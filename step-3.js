var https = require('https');

function getAndPrintHTML (options) {
  var fullData = "";
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      fullData += data;
    });
    response.on('end', function() {
      console.log(fullData);
    });
  });
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);