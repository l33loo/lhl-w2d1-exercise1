var getHTML = require('./step-5-http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, function(html) {
  console.log(html);
});

