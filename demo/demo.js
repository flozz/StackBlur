// Canvas
import * as StackBlur from '../src/stackblur.js';

const canvas = document.querySelector('#canvas');
const cctx = canvas.getContext('2d');
const buff = document.createElement('canvas');
buff.width = canvas.width;
buff.height = canvas.height;
const bctx = buff.getContext('2d');

bctx.fillStyle = '#eee';
bctx.fillRect(0, 0, canvas.width, canvas.height);

bctx.fillStyle = '#08f';
bctx.fillRect(30, 30, 120, 90);

bctx.fillStyle = '#f04';
bctx.beginPath();
bctx.arc(120, 120, 50, 0, 2 * Math.PI);
bctx.fill();

cctx.drawImage(buff, 0, 0);

// Slider
const slider = document.querySelector('#slider');
slider.addEventListener('change', function () {
  cctx.drawImage(buff, 0, 0);
  StackBlur.canvasRGB(
    canvas, 0, 0, canvas.width, canvas.height, slider.value
  );
}, false);
