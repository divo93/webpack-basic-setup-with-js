# webpack-basic-setup-with-js
Basic guide to use webpack with JavaScript.
# Basic Setup Steps

1. Create dist folder for outer world
2. Create src folder for js code.
3. Install webpack, webpack-dev-server and webpack-cli.
4. Create webpack.config.js file to run npm with webpack customized configurations as follows - 
 
 `const path = require('path');
  module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
      }
    };`
    
    Instead of dist, build folder is used to bundle js files.
