configure development tools:

* nodemon
* morgan

more tools:

files             | packages
------------------|---------
.babelrc          | dev:[babel-core,babel-loader,babel-plugin-transform-object-rest-spread,babel-preset-env]
.editorconfing    | vscode extension
.elist            | dev: [ elist, eslint-config-airbnb ]
webpack.config.js | dev: [ webpack, webpack-node-externals]  

** Basic server **
* Preperation to connection to mongo with mongoose.
* Added model schema.
* Added Body Parser, not being used yet.
