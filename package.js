Package.describe({
  name: 'praneybehl:react-dropzone',
  version: '3.0.0',
  summary: 'Simple HTML5 drag-drop zone for ReactJs packaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-dropzone',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.export('Dropzone');
});


Npm.depends({
  "react-dropzone": "3.0.0",
  "exposify": "0.5.0"
});
