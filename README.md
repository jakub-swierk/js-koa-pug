# js-koa-pug

Koa 2 middleware for rendering pug templates.

## Installation

`npm install --save js-koa-pug`

## API

#### `pug(root, options)`

* `root`: Path to your views.
* `options` Default render options see  [pug documentation](https://pugjs.org/api/reference.html) for more.


#### `context.render(file, options)`

* `file`: Path relative to root, without `.pug` extension.
* `options` Overrides default options.


# Example

```javascript
var pug = require('js-koa-pug');

app.use(pug('views'));

app.use(function(ctx) {
  ctx.render('index');
});
```

## Hint

For production environments its nice to have cache option enabled.

## License

MIT, see more in LICENSE file.
