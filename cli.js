#!/usr/bin/env node
var sunTzu = require('./')
var path = require('path')
var argv = require('minimist')(process.argv.slice(2), {
  alias: { help: 'h' }
})

if (argv.help) {
  require('fs')
    .createReadStream(path.join(__dirname, 'help.txt'))
    .pipe(process.stdout)
} else {
  console.log(argv.all ? sunTzu.quotes.join('\n') : sunTzu())
}