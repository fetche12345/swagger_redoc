var yaml = require('js-yaml'),
fs = require('fs'),
gulp = require('gulp'),
path = require('path');

gulp.task('swagger', function () {
  var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'api/swagger/swagger.yaml')));
  return fs.writeFileSync(path.join(__dirname, 'public/swagger.json'), JSON.stringify(doc, null, ' '));
})

gulp.task('watch', function () {
	gulp.watch(path.join(__dirname, 'api/swagger/swagger.yaml'), ['swagger']);
});

gulp.task('default', ['watch'], function () {
	console.log('hello world');
});