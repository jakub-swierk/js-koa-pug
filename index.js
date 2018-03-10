const pug = require('pug');
const path = require('path');

module.exports = function(base, config) {
    return function(ctx, next) {
        ctx.render = function(file, options) {
            ctx.body = pug.renderFile(path.resolve(base || '', file + '.pug'), Object.assign({}, options, config));
        };
        return next();
    };
};
