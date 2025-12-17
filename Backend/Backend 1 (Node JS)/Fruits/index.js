//index.js is a spl file which requires the exports of all the files in the folder in which it is present

//It should always be named as "index.js" only bcz when we import the entire directory in some another file it searches the index.js to get entry into that directory

const apple = require('./apple');
const banana = require('./banana');
const orange = require('./orange');

const arr = [apple, banana, orange];

module.exports = arr; 