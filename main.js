


 const randomArray = require('unique-random-array');
 const images = require('./tivg-images.json');
 const words = require('./tivg-words.json');

exports.aImages = randomArray(images);

exports.mostImages = images;

exports.aWords = randomArray(words);

exports.mostWords = words;