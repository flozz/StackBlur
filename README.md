# StackBlur.js

[![NPM Version](https://img.shields.io/npm/v/stackblur-canvas.svg)][pkg-npm]
[![Bower](https://img.shields.io/bower/v/stackblur-canvas.svg)][pkg-bower]
[![License](https://img.shields.io/npm/l/stackblur-canvas.svg)](https://github.com/flozz/StackBlur/blob/master/COPYING)


StackBlur.js is a fast, almost Gaussian blur created by Mario Klingemann.

  * **More informations:** http://incubator.quasimondo.com/processing/fast_blur_deluxe.php
  * **Demo:** http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html

Original source:

  * http://www.quasimondo.com/StackBlurForCanvas/StackBlur.js


## Getting Started

### Standalone version

To use the standalone version,

download the [latest zip][dl-zip-master] from Github or clone the repository

    git clone git@github.com:flozz/StackBlur.git

and include the `dist/stackblur.js` or `dist/stackblur.min.js` file in your HTML page:

```html
<script src="StackBlur/dist/stackblur.js"></script>
```

### NPM / Browserify

To use the [NPM package][pkg-npm],

install the package

    npm install --save stackblur-canvas

and require it where needed

```javascript
var StackBlur = require("stackblur-canvas");
```

### Bower

To use the [Bower package][pkg-bower],

Install the package

    bower install stackblur-canvas

and include the `dist/stackblur.js` or `dist/stackblur.min.js` file in your HTML page:

```html
<script src="bower_components/stackblur-canvas/dist/stackblur.js"></script>
```


## API

**Image as source:**

```javascript
StackBlur.image(sourceImage, targetCanvas, radius, blurAlphaChannel);
```

  * `sourceImage`: the `HTMLImageElement` or its `id`.
  * `targetCanvas`: the `HTMLCanvasElement` or its `id`.
  * `radius`: the radius of the blur.
  * `blurAlphaChannel`: Set it to `true` if you want to blur a RGBA image (optional, default = `false`)

**RGBA Canvas as source:**

```javascript
StackBlur.canvasRGBA(targetCanvas, top_x, top_y, width, height, radius);
```

  * `targetCanvas`: the `HTMLCanvasElement`.
  * `top_x`: the horizontal coordinate of the top-left corner of the rectangle to blur.
  * `top_y`: the vertical coordinate of the top-left corner of the rectangle to blur.
  * `width`: the width of the rectangle to blur.
  * `height`: the height of the rectangle to blur.
  * `radius`: the radius of the blur.

**RGB Canvas as source:**

```javascript
StackBlur.canvasRGB(targetCanvas, top_x, top_y, width, height, radius);
```

  * `targetCanvas`: the `HTMLCanvasElement`.
  * `top_x`: the horizontal coordinate of the top-left corner of the rectangle to blur.
  * `top_y`: the vertical coordinate of the top-left corner of the rectangle to blur.
  * `width`: the width of the rectangle to blur.
  * `height`: the height of the rectangle to blur.
  * `radius`: the radius of the blur.

**RGBA ImageData as source:**

```javascript
StackBlur.imageDataRGBA(imageData, top_x, top_y, width, height, radius);
```

  * `imageData`: the canvas' `ImageData`.
  * `top_x`: the horizontal coordinate of the top-left corner of the rectangle to blur.
  * `top_y`: the vertical coordinate of the top-left corner of the rectangle to blur.
  * `width`: the width of the rectangle to blur.
  * `height`: the height of the rectangle to blur.
  * `radius`: the radius of the blur.

**RGB ImageData as source:**

```javascript
StackBlur.imageDataRGB(imageData, top_x, top_y, width, height, radius);
```

  * `imageData`: the canvas' `ImageData`.
  * `top_x`: the horizontal coordinate of the top-left corner of the rectangle to blur.
  * `top_y`: the vertical coordinate of the top-left corner of the rectangle to blur.
  * `width`: the width of the rectangle to blur.
  * `height`: the height of the rectangle to blur.
  * `radius`: the radius of the blur.


## Hacking

### Building

This library is built using [Grunt][grunt]. If you change somthing in the `src/` folder, use the following command to re-build the files in the `dist/` folder:

    grunt


## Changelog

* **1.2.0:** Remove alerts and obsolete `netscape.security.PrivilegeManager`
* **1.1.0:** Allow blur to be applied to `ImageData` directly (thanks @WebSeed)
* **1.0.0:** First Release



[dl-zip-master]: https://github.com/flozz/StackBlur/archive/master.zip
[pkg-npm]: https://www.npmjs.com/package/stackblur-canvas
[pkg-bower]: http://bower.io/
[grunt]: http://gruntjs.com/
