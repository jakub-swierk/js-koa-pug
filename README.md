# js-koa-pug

Koa 2 middleware for rendering pug templates.

## Installation

`npm install --save js-koa-pug`

## Options

Every option available for [pug](pugjs.org/api/reference.html).

On a every route:

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
