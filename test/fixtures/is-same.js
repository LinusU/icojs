'use strict';

const Image = require('../../src/node/image');
const bufferToArrayBuffer = require('../../src/node/buffer-to-arraybuffer');
const fs = require('fs');
const path = require('path');
const pixelmatch = require('pixelmatch');

const isSame = (arrayBuffer, fileName) => {
  const img1 = Image.decodeSync(arrayBuffer);
  const arrayBuffer2 = bufferToArrayBuffer(fs.readFileSync(path.join(__dirname, 'images', fileName)));
  const img2 = Image.decodeSync(arrayBuffer2);
  const diff = pixelmatch(img1.data, img2.data, null, img1.width, img1.height, {
    threshold: 0,
    includeAA: true
  });
  return diff === 0;
};

module.exports = isSame;
