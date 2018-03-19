var getHTML = require('../step-5-http-functions');

var requireOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowercase(html) {
  console.log(html.toLowerCase());
}

getHTML(requireOptions, printLowercase);