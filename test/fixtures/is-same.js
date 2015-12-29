'use strict';

const Jimp = require('jimp');
const path = require('path');

const isSame = (arrayBuffer, fileName) => {
  return Promise.all([
    Jimp.read(new Buffer(arrayBuffer)),
    Jimp.read(path.join(__dirname, 'images', fileName))
  ]).then(images => {
    return Jimp.diff(images[0], images[1], 0).percent === 0;
  });
};

module.exports = isSame;