// postcss.config.js
module.exports = {
    plugins: [
        require('postcss-import'), // Risolve gli import CSS
        require('cssnano')({ preset: 'default' }) // Minifica i CSS
    ]
};
