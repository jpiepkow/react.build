#! /usr/bin/env node

var path = require('path');
var shell = require('shelljs');
var argv = require('yargs').argv;
var realPath = path.join(process.cwd(),argv._[0])

const task = {
  'build:clean': () => {
    shell.exec('rm -rf lib')
    shell.exec('mkdir lib')
  },
  'build': () => {
    task['build:clean']()
    shell.exec(`babel ${realPath} --plugins transform-react-jsx --presets es2015 --out-dir lib`)
  },
}
task.build()
