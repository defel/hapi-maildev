var Maildev = require('maildev');

exports.register = function (plugin, options, next) {
  var maildev = new Maildev(options);

  console.log('HAPI MAILDEV PLUGIN', options, next);

  next(null);
}

exports.register.attributes = {
    name: 'maildev'
};