/// <binding AfterBuild='default' />
var gulp = require('gulp');
var del = require('del');

function clean() {
  return del([
    'Pioneer.Console.Boilerplate.Template/Content/**/*',
    'Pioneer.Console.Boilerplate.Template/Content/.template.config/**/*'
  ]);
}

function move() {
  return gulp.src([
    'Pioneer.Console.Boilerplate/**/*',
    '!Pioneer.Console.Boilerplate/{bin,bin/**/*,obj,obj/**/*}',
    'Pioneer.Console.Boilerplate/*.cs',
    'Pioneer.Console.Boilerplate/*.csproj'
  ])
    .pipe(gulp.dest('Pioneer.Console.Boilerplate.Template/Content'));
}

function moveTemplate() {
  return gulp.src([
    'Pioneer.Console.Boilerplate/.template.config/**/*'
  ])
    .pipe(gulp.dest('Pioneer.Console.Boilerplate.Template/Content/.template.config/'));
}

gulp.task('clean', gulp.series(clean));
gulp.task('default', gulp.series(clean, move, moveTemplate));