var Maildev = require('maildev');

exports.register = function (plugin, options, next) {
  var maildev = new Maildev(options);
  next(null);
}

exports.register.attributes = {
    name: 'maildev'
};