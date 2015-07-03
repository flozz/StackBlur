# StackBlur.js - Fast blur

StackBlur.js is a fast, almost Gaussian blur created by by Mario Klingemann.

  * **More informations:** http://incubator.quasimondo.com/processing/fast_blur_deluxe.php
  * **Demo:** http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html

Original source:

  * http://www.quasimondo.com/StackBlurForCanvas/StackBlur.js


## Usage

**Image as source:**

```javascript
stackBlurImage(sourceImage, targetCanvas, radius, blurAlphaChannel);
```

  * `sourceImage`: the `HTMLImageElement` or its `id`.
  * `targetCanvas`: the `HTMLCanvasElement` or its `id`.
  * `radius`: the radius of the blur.
  * `blurAlphaChannel`: Set it to `true` if you want to blur a RGBA image (optional, default = `false`)

**RGBA Canvas as source:**

```javascript
stackBlurCanvasRGBA(targetCanvas, top_x, top_y, width, height, radius);
```

  * `targetCanvas`: the `HTMLCanvasElement` or its `id`.
  * `top_x`: the horizontal coordinate of the top-left corner of the rectangle to blur.
  * `top_y`: the vertical coordinate of the top-left corner of the rectangle to blur.
  * `width`: the width of the rectangle to blur.
  * `height`: the height of the rectangle to blur.
  * `radius`: the radius of the blur.

**RGB Canvas as source:**

```javascript
stackBlurCanvasRGB(targetCanvas, top_x, top_y, width, height, radius);
```

  * `targetCanvas`: the `HTMLCanvasElement` or its `id`.
  * `top_x`: the horizontal coordinate of the top-left corner of the rectangle to blur.
  * `top_y`: the vertical coordinate of the top-left corner of the rectangle to blur.
  * `width`: the width of the rectangle to blur.
  * `height`: the height of the rectangle to blur.
  * `radius`: the radius of the blur.


## Copying

```
Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
```
