#!/usr/bin/env node

/**
 * build.js
 *
 * Spawns xterms to build all of the docker containers generated by debian.js
 *
 * Used for sweeping tests after making changes to the generators.
 */

// Dependencies
var spawn = require('child_process').spawn
var path  = require('path')
var dists = require('./dists.js')
var fs    = require('fs')
var argv  = require('minimist')(process.argv.slice(2))


// arg parsing
if(argv.h) return printHelp()
var newDists = []
if(argv.d) argv.d=argv.d.split(',')
if(argv.r) argv.r=argv.r.split(',')
if(argv.p) argv.p=argv.p.split(',')
if(argv.v) argv.v=argv.v.split(',')

for(dist in dists) {
  if(argv.d && argv.d.indexOf(dist) == -1) continue;
  newDists[dist] = []
  for(release in dists[dist]) {
    if(argv.r && argv.r.indexOf(release) == -1) continue;
    newDists[dist][release] = []
    for(project in dists[dist][release]) {
      if(argv.p && argv.p.indexOf(project) == -1) continue;
      newDists[dist][release][project] = []
      for(version in dists[dist][release][project]) {
        if(argv.v && argv.v.indexOf(version) == -1) continue;
        newDists[dist][release][project][version] = dists[dist][release][project][version]
      }
    }
  }
}

dists = newDists

for(dist in dists) {
  for(release in dists[dist]) {
    for(project in dists[dist][release]) {
      for(version in dists[dist][release][project]) {
        (function scope(dist,release,project,version) {
          var dir = path.join(__dirname,dist,release,project,version)
          var file = path.join(dir,'output')
          var command = "docker"
          var args = ["build","--no-cache","."]
          var file = fs.createWriteStream(file)
          var child = spawn(command,args,{cwd:dir})
          child.on('error',function(e) {
            console.log(e)
          })
          child.stdout.pipe(file)
          child.stderr.pipe(file)
          console.log("Spawned: "+dir)
        })(dist,release,project,version)
      }
    }
  }
}

function printHelp() {
  var help =
  'Usage:\n ./build.js [OPTION...]\n\n' +
  'Options:\n' +
  ' -h Display this help text and exit\n' +
  ' -d A comma separated list of distributions to build\n' +
  ' -r A comma separated list of releases to build\n' +
  ' -p A comma separated list of platforms to build\n' +
  ' -v A comma separated list of versions to build\n'
  console.log(help)
}
