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

# Assets Setup

1. Styling(CSS)

 1.1. Create style in src with style.css like so -
 
`.<name>{property:value}`
 
 1.2 Import style.css in index.js
 
 1.3 Install css loader
 
 `npm install --save-dev style-loader css-loader`
 
 1.4 Add Loader in webpack like so -
 ` module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }`
   
# Run script in Development

 1. Install webpack-dev-server
  `npm install --save-dev webpack-dev-server`
  
 2. webpack-dev-server --open in package.json 
 
 3. Add key in webpack.config.json
 
  `mode: development`
