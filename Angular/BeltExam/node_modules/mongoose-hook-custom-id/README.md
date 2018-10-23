# mongoose-hook-custom-id
Mongoose plugin to use String _id and by default will generate 16-char base64 string representation of ObjectId.

# Installation
```shell
git clone git@github.com:tarquas/mongoose-hook-custom-id.git mongoose-hook-custom-id
```

# Package
```js
{
  "mongoose-hook-custom-id": "0.1.4"
}
```

# Usage

Example:

```js
var
  mongoose = require('mongoose'),
  customId = require('mongoose-hook-custom-id'),
  PersonSchema;

PersonSchema = {
  name: String,
  email: String
};

PersonSchema.plugin(customId, {mongoose: mongoose}); // _id will look like 'VQvnBImPTGAoqeVY'
//PersonSchema.plugin(customId, {mongoose: mongoose,
  generator: function() {return Math.random();}}); // _id will look like '0.45921047893352807'
//PersonSchema.plugin(customId, {mongoose: mongoose,
  generatorAsync: function(callback) {callback(Math.random());}}); // same as above, but using async generator

mongoose.model('Person', PersonSchema);
```

# Notes

* This plugin must be provided with an exact instance of `mongoose`, where the processing models expected to be processed, in `opts` parameter.

* This plugin forces _id field on Schema to be of type `String`. New documents will get it generated, if it wasn't specified.

* By default (if no specific generator option is provided to plugin), plugin will generate URI-compatible base64-representation of generated ObjectId, which is 16 characters long.

* If `generator` option is specified, it's a function, taking no arguments and returning `String` result, which will be called every time the new _id needs to be generated.

* If `generatorAsync` option is specified, it's a function, taking a callback argument, which accepts `String` parameter. Async generator will be called every time the new _id needs to be generated.
