const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        postcssPresetEnv(),
        purgecss({
            content: ['./src/**/*.html'],
            safelist: ['collapsed'],
        }),
        cssnano({
            preset: 'default',
        }),
    ]
}
