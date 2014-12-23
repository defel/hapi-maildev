hapi-maildev
============

start maildev instance when hapi app start:

```js
server.pack.register({
  plugin: require('hapi-maildev'),
  options: {
    smtp: 1025,
    outgoingHost: 'email-smtp.us-west-2.amazonaws.com',
    outgoingUser: 'AAABBBCCCDDDEEEFFF12',
    outgoingPass: '.. pass ..',
    open: true,
    web: 1080
  }
}, pluginErrorHandler);

```

then configure hapi-mailer:

```js
server.pack.register({
  plugin: require('hapi-mailer'),
  options: {
    transport: {
      secure: true,
      host: 'localhost',
      port: 1025
    }, 
    views: {
      engines: {
        html: {
          module: require('handlebars'),
          path: __dirname + '/lib/views/emails'
        }
      }
    }
  }
}, pluginErrorHandler);
```