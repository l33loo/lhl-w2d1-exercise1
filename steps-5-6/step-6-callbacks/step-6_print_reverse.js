var getHTML = require('../step-5-http-functions');

var requireOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(requireOptions, printReverse);