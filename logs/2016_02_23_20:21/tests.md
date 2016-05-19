# Tested image `nodesource/wheezy:4.2.5`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 67a76714e970
 ---> 9462e1cbcda2
Removing intermediate container 67a76714e970
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.5-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 27b4588bc32a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.2.5-1nodesource1~wheezy1) ...
 ---> 94aabd19525d
Removing intermediate container 27b4588bc32a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1e0122f3777b
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, caseless@0.8.0, aws-sign2@0.5.0, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.2.5 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.5/node-v4.2.5.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.2.5/node-v4.2.5.tar.gz
[0m[91mgyp http GET[0m[91m http://nodejs.org/dist/v4.2.5/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp [0m[91m200 http://nodejs.org/dist/v4.2.5/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp[0m[91m info [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
[0m[91mgyp info [0m[91mspawn args   '-I',
gyp[0m[91m info spawn args[0m[91m   '/build/config.gypi',
gyp[0m[91m [0m[91minfo spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/root/.node-gyp/4.2.5/common.gypi',
[0m[91mgyp[0m[91m info[0m[91m spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.5',
gyp info spawn args   '-Druntime=node',
gyp [0m[91minfo[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info [0m[91mspawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp [0m[91minfo [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp ERR! stack[0m[91m Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System[0m[91m Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v4.2.5
gyp ERR! [0m[91mpangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 08259aea28aa
Error removing intermediate container 1e0122f3777b: rmfs: Unable to remove filesystem for 1e0122f3777b79026c5918a9e4fab84ba7f3299dc79d931e737147035823255f: remove /var/lib/docker/containers/1e0122f3777b79026c5918a9e4fab84ba7f3299dc79d931e737147035823255f/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in c40aeac89cb5
 ---> 114f1570aca8
Error removing intermediate container 1e0122f3777b: nosuchcontainer: No such container: 1e0122f3777b79026c5918a9e4fab84ba7f3299dc79d931e737147035823255f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 64b947954c2a
 ---> 42db8b0d6cb6
Error removing intermediate container 1e0122f3777b: nosuchcontainer: No such container: 1e0122f3777b79026c5918a9e4fab84ba7f3299dc79d931e737147035823255f
Step 7 : CMD npm start
 ---> Running in 2e8503a77882
 ---> 1b2ceaec125e
Error removing intermediate container 1e0122f3777b: nosuchcontainer: No such container: 1e0122f3777b79026c5918a9e4fab84ba7f3299dc79d931e737147035823255f
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 275d2466c5d6
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 4s (1805 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b472bec9dbd0
Error removing intermediate container 1e0122f3777b: nosuchcontainer: No such container: 1e0122f3777b79026c5918a9e4fab84ba7f3299dc79d931e737147035823255f
Successfully built b472bec9dbd0

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test40`

Contents of dockerfile `/root/docker-node/.~tmp.test40/Dockerfile`:

```
FROM nodesource/wheezy:4.2.5
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.2.5-test1` from `/root/docker-node/.~tmp.test40`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.2.5
 ---> b472bec9dbd0
Step 2 : ENV NODE_ENV test
 ---> Running in 7c79a9d0e442
 ---> ab8dbb5d125a
Removing intermediate container 7c79a9d0e442
Step 3 : RUN node -v
 ---> Running in 9aee99ba20b4
v4.2.5
 ---> 7bb385a6acac
Removing intermediate container 9aee99ba20b4
Step 4 : RUN node -p "process.versions"
 ---> Running in cfb9c787595e
{ http_parser: '2.5.0',
  node: '4.2.5',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> abf906fe62dc
Removing intermediate container cfb9c787595e
Step 5 : RUN npm --version
 ---> Running in 9702e47d6d7e
2.14.12
 ---> a5a6a9ec9e79
Removing intermediate container 9702e47d6d7e
Successfully built a5a6a9ec9e79

```

# Tested image `nodesource/jessie:0.10.36`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in f7a050ed3e18
 ---> d4ed11f6567a
Removing intermediate container f7a050ed3e18
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.36-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6f61f28a1025
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.36-1nodesource1~jessie1) ...
Setting up nodejs (0.10.36-1nodesource1~jessie1) ...
 ---> f3abd4bd50fa
Removing intermediate container 6f61f28a1025
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 85c0006100c1
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, tunnel-agent@0.4.2, oauth-sign@0.5.0, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.36 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.36/node-v0.10.36.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.36/node-v0.10.36.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v0.10.36/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.36/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.36/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.36',
gyp info spawn args   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.36
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> ab492cee60c3
Error removing intermediate container 85c0006100c1: rmfs: Unable to remove filesystem for 85c0006100c13712ff817e7f4044912fccb8ef86f5ff6f0a6e1f1c1dfc99cd6b: remove /var/lib/docker/containers/85c0006100c13712ff817e7f4044912fccb8ef86f5ff6f0a6e1f1c1dfc99cd6b/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 0fee15e20c73
 ---> e69b16188ef2
Error removing intermediate container 85c0006100c1: nosuchcontainer: No such container: 85c0006100c13712ff817e7f4044912fccb8ef86f5ff6f0a6e1f1c1dfc99cd6b
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8e2dae7a29a8
 ---> 9dc03cab9072
Error removing intermediate container 85c0006100c1: nosuchcontainer: No such container: 85c0006100c13712ff817e7f4044912fccb8ef86f5ff6f0a6e1f1c1dfc99cd6b
Step 7 : CMD npm start
 ---> Running in 2d40687b4750
 ---> 61c506dfb67a
Error removing intermediate container 85c0006100c1: nosuchcontainer: No such container: 85c0006100c13712ff817e7f4044912fccb8ef86f5ff6f0a6e1f1c1dfc99cd6b
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in faf5d3d54f47
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (6036 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> e8ceb0cdb5ea
Removing intermediate container 2d40687b4750
Removing intermediate container faf5d3d54f47
Error removing intermediate container 85c0006100c1: nosuchcontainer: No such container: 85c0006100c13712ff817e7f4044912fccb8ef86f5ff6f0a6e1f1c1dfc99cd6b
Successfully built e8ceb0cdb5ea

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test64`

Contents of dockerfile `/root/docker-node/.~tmp.test64/Dockerfile`:

```
FROM nodesource/jessie:0.10.36
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.36-test1` from `/root/docker-node/.~tmp.test64`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.36
 ---> e8ceb0cdb5ea
Step 2 : ENV NODE_ENV test
 ---> Running in 6283363fa081
 ---> 3245df459aa8
Removing intermediate container 6283363fa081
Step 3 : RUN node -v
 ---> Running in f0c3db3a946b
v0.10.36
 ---> 2b184c2d5f76
Removing intermediate container f0c3db3a946b
Step 4 : RUN node -p "process.versions"
 ---> Running in b026c3c0fd59
{ http_parser: '1.0',
  node: '0.10.36',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1l' }
 ---> 5e2a89c20ee8
Removing intermediate container b026c3c0fd59
Step 5 : RUN npm --version
 ---> Running in 9b3d48957ae9
1.4.28
 ---> f967d6c21971
Removing intermediate container 9b3d48957ae9
Successfully built f967d6c21971

```

# Tested image `nodesource/jessie:5.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ebfdf59bacf3
 ---> 2182c45a2aff
Removing intermediate container ebfdf59bacf3
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.0.0-3nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in bc63a4d89443
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.0.0-3nodesource1~jessie1) ...
Setting up nodejs (5.0.0-3nodesource1~jessie1) ...
 ---> d20e680a4e88
Removing intermediate container bc63a4d89443
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 5f0904774a4c
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
gyp info using node@5.0.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.0.0/node-v5.0.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.0.0/node-v5.0.0.tar.gz
[0m[91mgyp[0m
[91m http GET http://nodejs.org/dist/v5.0.0/SHASUMS256.txt
gyp http 200 http://nodejs.org/dist/v5.0.0/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.0.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.0.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
gyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.0.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 6cf542146386
Error removing intermediate container 5f0904774a4c: rmfs: Unable to remove filesystem for 5f0904774a4cdc200e61ebfd6db8e67da66cc0f06828dc077fa39bcad5b70956: remove /var/lib/docker/containers/5f0904774a4cdc200e61ebfd6db8e67da66cc0f06828dc077fa39bcad5b70956/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 9ac09434eeda
 ---> 4574360a5766
Error removing intermediate container 5f0904774a4c: nosuchcontainer: No such container: 5f0904774a4cdc200e61ebfd6db8e67da66cc0f06828dc077fa39bcad5b70956
Step 6 : WORKDIR /usr/src/app
 ---> Running in fe014a6fe2cb
 ---> da0976883776
Removing intermediate container 9ac09434eeda
Removing intermediate container fe014a6fe2cb
Error removing intermediate container 5f0904774a4c: nosuchcontainer: No such container: 5f0904774a4cdc200e61ebfd6db8e67da66cc0f06828dc077fa39bcad5b70956
Step 7 : CMD npm start
 ---> Running in 7cdb9735142e
 ---> 72f02c0a5a0f
Error removing intermediate container 5f0904774a4c: nosuchcontainer: No such container: 5f0904774a4cdc200e61ebfd6db8e67da66cc0f06828dc077fa39bcad5b70956
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 382f2bf6e97b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (3206 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 99085852da47
Error removing intermediate container 5f0904774a4c: nosuchcontainer: No such container: 5f0904774a4cdc200e61ebfd6db8e67da66cc0f06828dc077fa39bcad5b70956
Successfully built 99085852da47

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test51`

Contents of dockerfile `/root/docker-node/.~tmp.test51/Dockerfile`:

```
FROM nodesource/jessie:5.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.0.0-test1` from `/root/docker-node/.~tmp.test51`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.0.0
 ---> 99085852da47
Step 2 : ENV NODE_ENV test
 ---> Running in a9c32c235d83
 ---> edae4de59b4c
Removing intermediate container a9c32c235d83
Step 3 : RUN node -v
 ---> Running in e5d48df92c4b
v5.0.0
 ---> bdacd2da80b1
Removing intermediate container e5d48df92c4b
Step 4 : RUN node -p "process.versions"
 ---> Running in ac4eddf3f888
{ http_parser: '2.5.0',
  node: '5.0.0',
  v8: '4.6.85.28',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '52.1',
  modules: '47',
  openssl: '1.0.2d' }
 ---> 8d07bcb0f385
Removing intermediate container ac4eddf3f888
Step 5 : RUN npm --version
 ---> Running in c6b54edc7a0f
3.3.6
 ---> 3dac981b63e4
Removing intermediate container c6b54edc7a0f
Successfully built 3dac981b63e4

```

# Tested image `nodesource/jessie:0.10.41`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 007af2b6bda8
 ---> 8d5409f8d377
Removing intermediate container 007af2b6bda8
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.41-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 57d14a72e840
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  [0m[91mUpload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.41-1nodesource1~jessie1) ...
Setting up nodejs (0.10.41-1nodesource1~jessie1) ...
 ---> ae55ca20a1ee
Removing intermediate container 57d14a72e840
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in e4b9e1038473
[91mnpm WARN deprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
npm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN deprecated To upgrade to the latest stable version, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN deprecated semver behavior.
[0m[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, hawk@1.1.1, bl@0.9.5, form-data@0.2.0)
[91mnpm[0m[91m WARN deprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
[0m[91mnpm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN [0m[91mdeprecated To upgrade to the latest stable version, run:
npm [0m[91mWARN deprecated 
npm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
[0m[91mnpm WARN[0m[91m [0m[91mdeprecated[0m[91m (Depending on how Node.js was installed on your system, you
[0m[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m may need to prefix the preceding commands with `sudo`, or if
[0m[91mnpm WARN[0m[91m deprecated on Windows, run them from an Administrator prompt.)
[0m[91mnpm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN deprecated semver behavior.
[0m[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info [0m[91musing pangyp@2.3.3
[0m[91mgyp info using node@0.10.41 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.41/node-v0.10.41.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.41/node-v0.10.41.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.41/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.41/SHASUMS256.txt
[0m[91mgyp [0m[91minfo spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.41/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.41',
gyp info[0m[91m [0m[91mspawn args[0m[91m   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args[0m[91m   '--depth=.',
gyp info [0m[91mspawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.41
gyp ERR! pangyp -v v2.3.3
gyp [0m[91mERR! [0m[91mnot ok 
[0m
 ---> a172bf698f8f
Removing intermediate container e4b9e1038473
Step 5 : ENV NODE_ENV production
 ---> Running in 30a3c6ad856b
 ---> 6de06b0c5524
Removing intermediate container 30a3c6ad856b
Step 6 : WORKDIR /usr/src/app
 ---> Running in f7d377203e68
 ---> f52dd98f901a
Removing intermediate container f7d377203e68
Step 7 : CMD npm start
 ---> Running in 0bc817ed0944
 ---> 54ab751e2e5f
Removing intermediate container 0bc817ed0944
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 72de74b236dc
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2694 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> ece5697284f3
Removing intermediate container 72de74b236dc
Successfully built ece5697284f3

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test69`

Contents of dockerfile `/root/docker-node/.~tmp.test69/Dockerfile`:

```
FROM nodesource/jessie:0.10.41
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.41-test1` from `/root/docker-node/.~tmp.test69`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.41
 ---> ece5697284f3
Step 2 : ENV NODE_ENV test
 ---> Running in fe447024a245
 ---> 48f8d706c70a
Removing intermediate container fe447024a245
Step 3 : RUN node -v
 ---> Running in 668b219d12c2
v0.10.41
 ---> 6c656cbf7a27
Removing intermediate container 668b219d12c2
Step 4 : RUN node -p "process.versions"
 ---> Running in 5729710a6094
{ http_parser: '1.0',
  node: '0.10.41',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1q' }
 ---> 1286ebe13fb5
Removing intermediate container 5729710a6094
Step 5 : RUN npm --version
 ---> Running in 82fb17ce8d0a
1.4.29
 ---> 04b192595e19
Removing intermediate container 82fb17ce8d0a
Successfully built 04b192595e19

```

# Tested image `nodesource/wheezy:5.4.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in d91bd55a43fb
 ---> 2939f4a73450
Removing intermediate container d91bd55a43fb
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.4.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 533396a95d7f
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.4.0-1nodesource1~wheezy1) ...
 ---> c01467e5cfc2
Removing intermediate container 533396a95d7f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 8013d241539a
[91mnpm[0m[91m [0m[91mWARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@5.4.0 | linux | x64
[0m[91mgyp http [0m[91mGET http://nodejs.org/dist/v5.4.0/node-v5.4.0.tar.gz
[0m[91mgyp http 200[0m[91m http://nodejs.org/dist/v5.4.0/node-v5.4.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.4.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.4.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.4.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.4.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.4.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 53809f40ca8c
Error removing intermediate container 8013d241539a: rmfs: Unable to remove filesystem for 8013d241539ae603754086664f9ccc05170f2290669ec67de63737f441d4f635: remove /var/lib/docker/containers/8013d241539ae603754086664f9ccc05170f2290669ec67de63737f441d4f635/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 99636703fdd7
 ---> 65e5b3f71ece
Error removing intermediate container 8013d241539a: nosuchcontainer: No such container: 8013d241539ae603754086664f9ccc05170f2290669ec67de63737f441d4f635
Step 6 : WORKDIR /usr/src/app
 ---> Running in d077cdb1151a
 ---> 1bffeb3894fc
Error removing intermediate container 8013d241539a: nosuchcontainer: No such container: 8013d241539ae603754086664f9ccc05170f2290669ec67de63737f441d4f635
Step 7 : CMD npm start
 ---> Running in 91b267365a8f
 ---> 58dc864ecf12
Error removing intermediate container 8013d241539a: nosuchcontainer: No such container: 8013d241539ae603754086664f9ccc05170f2290669ec67de63737f441d4f635
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 7e324aae270d
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3162 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 8bc26bc3bdf7
Removing intermediate container 91b267365a8f
Removing intermediate container 7e324aae270d
Error removing intermediate container 8013d241539a: nosuchcontainer: No such container: 8013d241539ae603754086664f9ccc05170f2290669ec67de63737f441d4f635
Successfully built 8bc26bc3bdf7

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test43`

Contents of dockerfile `/root/docker-node/.~tmp.test43/Dockerfile`:

```
FROM nodesource/wheezy:5.4.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.4.0-test1` from `/root/docker-node/.~tmp.test43`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.4.0
 ---> 8bc26bc3bdf7
Step 2 : ENV NODE_ENV test
 ---> Running in 46d0dd54ac12
 ---> 7d8b7bb5b8d5
Removing intermediate container 46d0dd54ac12
Step 3 : RUN node -v
 ---> Running in 09b3b97d01b0
v5.4.0
 ---> 8630109314d8
Removing intermediate container 09b3b97d01b0
Step 4 : RUN node -p "process.versions"
 ---> Running in 70ca1d3a0efd
{ http_parser: '2.6.0',
  node: '5.4.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> eb3a1f2b434e
Removing intermediate container 70ca1d3a0efd
Step 5 : RUN npm --version
 ---> Running in bc913fb236a6
3.3.12
 ---> 5782f884451a
Removing intermediate container bc913fb236a6
Successfully built 5782f884451a

```

# Tested image `nodesource/wheezy:4.2.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in f45467ddd2bb
 ---> cb240641e815
Removing intermediate container f45467ddd2bb
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.3-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in cefbe6aded3f
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.2.3-1nodesource1~wheezy1) ...
 ---> 8f2749c28a38
Removing intermediate container cefbe6aded3f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in feb3a04520c9
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with[0m[91m ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@4.2.3 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.3/node-v4.2.3.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.3/node-v4.2.3.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.3/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.3/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp[0m[91m [0m[91minfo spawn args   'binding.gyp',
gyp info [0m[91mspawn args   '-f',
gyp[0m[91m info spawn args   'make',
gyp info spawn args   '-I',
[0m[91mgyp [0m[91minfo spawn args[0m[91m   '/build/config.gypi',
[0m[91mgyp info spawn args   '-I',
[0m[91mgyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp [0m[91minfo spawn args[0m[91m   '-I',
gyp [0m[91minfo [0m[91mspawn args[0m[91m   '/root/.node-gyp/4.2.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.3',
gyp info spawn args   '-Druntime=node',
gyp[0m[91m info spawn args[0m[91m   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 33712ff1e9e3
Error removing intermediate container feb3a04520c9: rmfs: Unable to remove filesystem for feb3a04520c9d03212d8ba2cf496414bc9a53ee4712fb747375fa0073ffb7a3f: remove /var/lib/docker/containers/feb3a04520c9d03212d8ba2cf496414bc9a53ee4712fb747375fa0073ffb7a3f/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 7932bc610511
 ---> 1b117dfaff92
Error removing intermediate container feb3a04520c9: nosuchcontainer: No such container: feb3a04520c9d03212d8ba2cf496414bc9a53ee4712fb747375fa0073ffb7a3f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 9722a4192441
 ---> d42119183bf8
Error removing intermediate container feb3a04520c9: nosuchcontainer: No such container: feb3a04520c9d03212d8ba2cf496414bc9a53ee4712fb747375fa0073ffb7a3f
Step 7 : CMD npm start
 ---> Running in 6d1ba108df4c
 ---> f0b8e9f592de
Removing intermediate container 9722a4192441
Removing intermediate container 6d1ba108df4c
Error removing intermediate container feb3a04520c9: nosuchcontainer: No such container: feb3a04520c9d03212d8ba2cf496414bc9a53ee4712fb747375fa0073ffb7a3f
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e775985ae55f
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3410 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 4907cde1296e
Error removing intermediate container feb3a04520c9: nosuchcontainer: No such container: feb3a04520c9d03212d8ba2cf496414bc9a53ee4712fb747375fa0073ffb7a3f
Successfully built 4907cde1296e

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test38`

Contents of dockerfile `/root/docker-node/.~tmp.test38/Dockerfile`:

```
FROM nodesource/wheezy:4.2.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.2.3-test1` from `/root/docker-node/.~tmp.test38`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.2.3
 ---> 4907cde1296e
Step 2 : ENV NODE_ENV test
 ---> Running in b9934e8c96dc
 ---> 2aafb5decae2
Removing intermediate container b9934e8c96dc
Step 3 : RUN node -v
 ---> Running in 60546caae491
v4.2.3
 ---> e650d093c058
Removing intermediate container 60546caae491
Step 4 : RUN node -p "process.versions"
 ---> Running in 7eaa6ba94558
{ http_parser: '2.5.0',
  node: '4.2.3',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> d79035c4aa93
Removing intermediate container 7eaa6ba94558
Step 5 : RUN npm --version
 ---> Running in 12e54246bcff
2.14.7
 ---> 3d235427db39
Removing intermediate container 12e54246bcff
Successfully built 3d235427db39

```

# Tested image `nodesource/jessie:5.4.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in e2812b889c4e
 ---> 5ccd6376aa57
Removing intermediate container e2812b889c4e
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.4.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6f986a163b3c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.4.0-1nodesource1~jessie1) ...
Setting up nodejs (5.4.0-1nodesource1~jessie1) ...
 ---> 191ca7a20f09
Removing intermediate container 6f986a163b3c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 569624c90126
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using[0m[91m pangyp@2.3.3
gyp info using node@5.4.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.4.0/node-v5.4.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.4.0/node-v5.4.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.4.0/SHASUMS256.txt
gyp http 200 http://nodejs.org/dist/v5.4.0/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.4.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.4.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
gyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.4.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> c0eb0ce317ac
Error removing intermediate container 569624c90126: rmfs: Unable to remove filesystem for 569624c90126c5454d54a33f486d467e24cd539ade98457a911da9552053a11b: remove /var/lib/docker/containers/569624c90126c5454d54a33f486d467e24cd539ade98457a911da9552053a11b/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 82e55aaa3fad
 ---> cca199eea994
Error removing intermediate container 569624c90126: nosuchcontainer: No such container: 569624c90126c5454d54a33f486d467e24cd539ade98457a911da9552053a11b
Step 6 : WORKDIR /usr/src/app
 ---> Running in ad23e29322ce
 ---> ea7e6ebed275
Removing intermediate container 82e55aaa3fad
Removing intermediate container ad23e29322ce
Error removing intermediate container 569624c90126: nosuchcontainer: No such container: 569624c90126c5454d54a33f486d467e24cd539ade98457a911da9552053a11b
Step 7 : CMD npm start
 ---> Running in d8a8ef352216
 ---> 086df3779e29
Error removing intermediate container 569624c90126: nosuchcontainer: No such container: 569624c90126c5454d54a33f486d467e24cd539ade98457a911da9552053a11b
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 611f0ca05e00
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3678 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> ff222dce802d
Error removing intermediate container 569624c90126: nosuchcontainer: No such container: 569624c90126c5454d54a33f486d467e24cd539ade98457a911da9552053a11b
Successfully built ff222dce802d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test89`

Contents of dockerfile `/root/docker-node/.~tmp.test89/Dockerfile`:

```
FROM nodesource/jessie:5.4.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.4.0-test1` from `/root/docker-node/.~tmp.test89`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.4.0
 ---> ff222dce802d
Step 2 : ENV NODE_ENV test
 ---> Running in 522b151918db
 ---> 943b743c1763
Removing intermediate container 522b151918db
Step 3 : RUN node -v
 ---> Running in a8fd7063f526
v5.4.0
 ---> 9229c8ee1c9a
Removing intermediate container a8fd7063f526
Step 4 : RUN node -p "process.versions"
 ---> Running in 7586adaa9299
{ http_parser: '2.6.0',
  node: '5.4.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 4ef1ca2b93c0
Removing intermediate container 7586adaa9299
Step 5 : RUN npm --version
 ---> Running in ad72ea0d06cb
3.3.12
 ---> 69abe59cb265
Removing intermediate container ad72ea0d06cb
Successfully built 69abe59cb265

```

# Tested image `nodesource/wheezy:0.12.7`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ec50439f4428
 ---> 6e0a3535d6b5
Removing intermediate container ec50439f4428
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.7-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ee7e1f893b43
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.7-1nodesource1~wheezy1) ...
 ---> eb66829e2332
Removing intermediate container ee7e1f893b43
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 10106bb15db3
[91mnpm WARN [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with ok
[0m[91mgyp [0m[91minfo[0m[91m using[0m[91m pangyp@2.3.3
[0m[91mgyp info [0m[91musing node@0.12.7 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.7/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.7/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.7/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.7',
gyp info spawn args   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.7
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> a869f6856822
Removing intermediate container 10106bb15db3
Step 5 : ENV NODE_ENV production
 ---> Running in 30117ca891c9
 ---> b3fc1f212ece
Removing intermediate container 30117ca891c9
Step 6 : WORKDIR /usr/src/app
 ---> Running in 2bc753add044
 ---> 1cf6f7b26346
Removing intermediate container 2bc753add044
Step 7 : CMD npm start
 ---> Running in a015c60b6b77
 ---> 317b23a92af8
Removing intermediate container a015c60b6b77
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 1eff3a2613bd
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 3s (2326 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 851189f226e8
Removing intermediate container 1eff3a2613bd
Successfully built 851189f226e8

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test32`

Contents of dockerfile `/root/docker-node/.~tmp.test32/Dockerfile`:

```
FROM nodesource/wheezy:0.12.7
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.7-test1` from `/root/docker-node/.~tmp.test32`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.7
 ---> 851189f226e8
Step 2 : ENV NODE_ENV test
 ---> Running in 37f7b98524e5
 ---> 25e797c3a016
Removing intermediate container 37f7b98524e5
Step 3 : RUN node -v
 ---> Running in 3e90eaa7c9a8
v0.12.7
 ---> 212f2a8a3944
Removing intermediate container 3e90eaa7c9a8
Step 4 : RUN node -p "process.versions"
 ---> Running in a27afcb17cf0
{ http_parser: '2.3',
  node: '0.12.7',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1p' }
 ---> 6a0b5682d68b
Removing intermediate container a27afcb17cf0
Step 5 : RUN npm --version
 ---> Running in 23117824989c
2.11.3
 ---> 84181176788a
Removing intermediate container 23117824989c
Successfully built 84181176788a

```

# Tested image `nodesource/jessie:0.12.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 47c5b6f8eb50
 ---> 7906aab524ea
Removing intermediate container 47c5b6f8eb50
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in fb06fbc08add
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.3-1nodesource1~jessie1) ...
Setting up nodejs (0.12.3-1nodesource1~jessie1) ...
 ---> e68d76f04d77
Removing intermediate container fb06fbc08add
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in ecf6c53fecc9
[91mnpm[0m[91m WARN [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN[0m[91m deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
gyp info[0m[91m [0m[91musing node@0.12.3 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.3/node-v0.12.3.tar.gz
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.3/node-v0.12.3.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.3/SHASUMS256.txt
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.3/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp [0m[91minfo spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp [0m[91minfo spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp[0m[91m info spawn args   '-I',
[0m[91mgyp info spawn args   '/build/config.gypi',
gyp[0m[91m info [0m[91mspawn args   '-I',
gyp info [0m[91mspawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info[0m[91m spawn args   '-I',
gyp info[0m[91m spawn args[0m[91m   '/root/.node-gyp/0.12.3/common.gypi',
[0m[91mgyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp [0m[91minfo spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.3',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m spawn args[0m[91m   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp[0m[91m info [0m[91mspawn args   '--no-parallel',
gyp[0m[91m info[0m[91m spawn args   '--generator-output',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args   'build',
gyp [0m[91minfo spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> cfdc5b31596e
Removing intermediate container ecf6c53fecc9
Step 5 : ENV NODE_ENV production
 ---> Running in 87684e4cbbe2
 ---> 081e3fac046d
Removing intermediate container 87684e4cbbe2
Step 6 : WORKDIR /usr/src/app
 ---> Running in 22fbfef15f1f
 ---> c69e51df20d5
Removing intermediate container 22fbfef15f1f
Step 7 : CMD npm start
 ---> Running in 11850a944fec
 ---> dccf42aaa42d
Removing intermediate container 11850a944fec
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in dc676b173c41
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3248 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 7ed067533b7c
Removing intermediate container dc676b173c41
Successfully built 7ed067533b7c

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test73`

Contents of dockerfile `/root/docker-node/.~tmp.test73/Dockerfile`:

```
FROM nodesource/jessie:0.12.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.3-test1` from `/root/docker-node/.~tmp.test73`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.3
 ---> 7ed067533b7c
Step 2 : ENV NODE_ENV test
 ---> Running in 5632a889606e
 ---> d6f74c60a685
Removing intermediate container 5632a889606e
Step 3 : RUN node -v
 ---> Running in 2154f2966fda
v0.12.3
 ---> e6e2cb118c61
Removing intermediate container 2154f2966fda
Step 4 : RUN node -p "process.versions"
 ---> Running in c9fb63d69197
{ http_parser: '2.3',
  node: '0.12.3',
  v8: '3.28.71.19',
  uv: '1.5.0',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> ffab5b0d365f
Removing intermediate container c9fb63d69197
Step 5 : RUN npm --version
 ---> Running in bd4b7adfb99e
2.9.1
 ---> b3109e77dd43
Removing intermediate container bd4b7adfb99e
Successfully built b3109e77dd43

```

# Tested image `nodesource/jessie:0.10.33`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 930b7a08c9c8
 ---> 6bf7f2cfbd7b
Removing intermediate container 930b7a08c9c8
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.33-2nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in a543158b183a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.33-2nodesource1~jessie1) ...
Setting up nodejs (0.10.33-2nodesource1~jessie1) ...
 ---> e5c8a5579f56
Removing intermediate container a543158b183a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in af9f2f686756
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
gyp info using node@0.10.33 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.33/node-v0.10.33.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.33/node-v0.10.33.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.33/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.33/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.33/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.33',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
gyp [0m[91minfo spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.33
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 2748391c22ca
Removing intermediate container af9f2f686756
Step 5 : ENV NODE_ENV production
 ---> Running in e2a97d1a3f9c
 ---> 7635e6ed4d72
Removing intermediate container e2a97d1a3f9c
Step 6 : WORKDIR /usr/src/app
 ---> Running in 9cab06befd4d
 ---> 7f7626eee630
Removing intermediate container 9cab06befd4d
Step 7 : CMD npm start
 ---> Running in c331d01b327a
 ---> 9195cf46e081
Removing intermediate container c331d01b327a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d5dab172d79f
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2601 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 679dd883982c
Removing intermediate container d5dab172d79f
Successfully built 679dd883982c

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test61`

Contents of dockerfile `/root/docker-node/.~tmp.test61/Dockerfile`:

```
FROM nodesource/jessie:0.10.33
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.33-test1` from `/root/docker-node/.~tmp.test61`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.33
 ---> 679dd883982c
Step 2 : ENV NODE_ENV test
 ---> Running in 2c0e069a496e
 ---> 0295f5c61f95
Removing intermediate container 2c0e069a496e
Step 3 : RUN node -v
 ---> Running in 159c9dc55512
v0.10.33
 ---> 2b2e92423364
Removing intermediate container 159c9dc55512
Step 4 : RUN node -p "process.versions"
 ---> Running in e34fa474d4ba
{ http_parser: '1.0',
  node: '0.10.33',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.29',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1j' }
 ---> 5f6c94369054
Removing intermediate container e34fa474d4ba
Step 5 : RUN npm --version
 ---> Running in 6c8f8218f874
1.4.28
 ---> 71c4a04fdc9b
Removing intermediate container 6c8f8218f874
Successfully built 71c4a04fdc9b

```

# Tested image `nodesource/wheezy:0.10.38`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 19cac6323914
 ---> fe1cdee229df
Removing intermediate container 19cac6323914
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.38-1chl1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in e2d107ad956c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                               [0m[91m  Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.38-1chl1~wheezy1) ...
 ---> 3c603d8aaab0
Removing intermediate container e2d107ad956c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 5b2fac735bbf
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp [0m[91minfo [0m[91musing[0m[91m pangyp@2.3.3
gyp info using node@0.10.38 | linux | x64
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v0.10.38/node-v0.10.38.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.38/node-v0.10.38.tar.gz
[0m[91mgyp http GET[0m[91m http://nodejs.org/dist/v0.10.38/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.38/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.38/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.38',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
gyp[0m[91m info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! [0m[91mconfigure error 
[0m[91mgyp ERR! [0m[91mstack Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
[0m[91mgyp ERR! [0m[91mstack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.38
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 757c70b69c4c
Removing intermediate container 5b2fac735bbf
Step 5 : ENV NODE_ENV production
 ---> Running in 3ebfd923afa1
 ---> bfbf12a503b8
Removing intermediate container 3ebfd923afa1
Step 6 : WORKDIR /usr/src/app
 ---> Running in d188ce84e25f
 ---> 3c498b5b1a0d
Removing intermediate container d188ce84e25f
Step 7 : CMD npm start
 ---> Running in f121b4423e84
 ---> fc601d86e69b
Removing intermediate container f121b4423e84
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f84935417079
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (6156 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 85a43e521afc
Removing intermediate container f84935417079
Successfully built 85a43e521afc

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test21`

Contents of dockerfile `/root/docker-node/.~tmp.test21/Dockerfile`:

```
FROM nodesource/wheezy:0.10.38
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.38-test1` from `/root/docker-node/.~tmp.test21`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.38
 ---> 85a43e521afc
Step 2 : ENV NODE_ENV test
 ---> Running in ab238cc41e49
 ---> 8a2c2f58bd76
Removing intermediate container ab238cc41e49
Step 3 : RUN node -v
 ---> Running in 3cec9ccf5448
v0.10.38
 ---> 5d835c284ed6
Removing intermediate container 3cec9ccf5448
Step 4 : RUN node -p "process.versions"
 ---> Running in 02ded8f22db7
{ http_parser: '1.0',
  node: '0.10.38',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1m' }
 ---> 883659eae5a6
Removing intermediate container 02ded8f22db7
Step 5 : RUN npm --version
 ---> Running in 223792ee6401
1.4.28
 ---> a9971975c560
Removing intermediate container 223792ee6401
Successfully built a9971975c560

```

# Tested image `nodesource/jessie:0.12.10`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a837dcaa3b7f
 ---> ea51fdff653a
Removing intermediate container a837dcaa3b7f
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.10-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 5fc9e0809360
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.10-1nodesource1~jessie1) ...
Setting up nodejs (0.12.10-1nodesource1~jessie1) ...
 ---> 66a7dd3cd4aa
Removing intermediate container 5fc9e0809360
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 7f961762bf00
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@0.12.10 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp [0m[91mGET http://nodejs.org/dist/v0.12.10/node-v0.12.10.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v0.12.10/node-v0.12.10.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.10/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.10/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.10/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.10',
gyp info spawn args   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp [0m[91minfo spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1075:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.10
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> e7f67cefa847
Removing intermediate container 7f961762bf00
Step 5 : ENV NODE_ENV production
 ---> Running in ecd59b79145c
 ---> 5c4ef186f3f6
Removing intermediate container ecd59b79145c
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6a3b9e98a77d
 ---> d214b74df69d
Removing intermediate container 6a3b9e98a77d
Step 7 : CMD npm start
 ---> Running in 9708f246dfd3
 ---> e5b5fb5cbdbf
Removing intermediate container 9708f246dfd3
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in dfc2ea439b50
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (6280 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> be476fdafa4d
Removing intermediate container dfc2ea439b50
Successfully built be476fdafa4d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test71`

Contents of dockerfile `/root/docker-node/.~tmp.test71/Dockerfile`:

```
FROM nodesource/jessie:0.12.10
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.10-test1` from `/root/docker-node/.~tmp.test71`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.10
 ---> be476fdafa4d
Step 2 : ENV NODE_ENV test
 ---> Running in 095363a8fe2c
 ---> 8ea4215d8ec8
Removing intermediate container 095363a8fe2c
Step 3 : RUN node -v
 ---> Running in 1b60c71563e2
v0.12.10
 ---> 45d81d91c2c8
Removing intermediate container 1b60c71563e2
Step 4 : RUN node -p "process.versions"
 ---> Running in be833146b18e
{ http_parser: '2.3',
  node: '0.12.10',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1r' }
 ---> a4fa2815bbf2
Removing intermediate container be833146b18e
Step 5 : RUN npm --version
 ---> Running in e7bca7c6b7ff
2.14.9
 ---> aab3adde8ef5
Removing intermediate container e7bca7c6b7ff
Successfully built aab3adde8ef5

```

# Tested image `nodesource/jessie:iojs-2.0.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in d400b6475374
 ---> a9b32d72eb38
Removing intermediate container d400b6475374
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.0.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in a690017825dc
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.0.2-1nodesource1~jessie1) ...
Setting up iojs (2.0.2-1nodesource1~jessie1) ...
 ---> a70ad5f580a1
Removing intermediate container a690017825dc
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in d999c553d75e
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@2.0.2 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v2.0.2/iojs-v2.0.2.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.0.2/iojs-v2.0.2.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.0.2/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.0.2/SHASUMS256.txt
[0m[91mgyp [0m[91minfo spawn python
[0m[91mgyp info spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args[0m[91m   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
[0m[91mgyp [0m[91minfo spawn args   '-I',
[0m[91mgyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp [0m[91minfo [0m[91mspawn args[0m[91m   '-I',
gyp info spawn args   '/root/.node-gyp/2.0.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info[0m[91m [0m[91mspawn args   '-Dvisibility=default',
gyp info spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/2.0.2',
[0m[91mgyp[0m[91m info[0m[91m spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp [0m[91minfo spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m
[91mERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.0.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 5cab91e26a81
Error removing intermediate container d999c553d75e: rmfs: Unable to remove filesystem for d999c553d75e284fc51eb0639597c15a638f16d08fb3d7166e94546253e53b45: remove /var/lib/docker/containers/d999c553d75e284fc51eb0639597c15a638f16d08fb3d7166e94546253e53b45/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 75ae1c81dd39
 ---> 87d92d8dfd1f
Error removing intermediate container d999c553d75e: nosuchcontainer: No such container: d999c553d75e284fc51eb0639597c15a638f16d08fb3d7166e94546253e53b45
Step 6 : WORKDIR /usr/src/app
 ---> Running in d7dfdf0aef9b
 ---> 74a7a0097f4a
Error removing intermediate container d999c553d75e: nosuchcontainer: No such container: d999c553d75e284fc51eb0639597c15a638f16d08fb3d7166e94546253e53b45
Step 7 : CMD npm start
 ---> Running in b8c284a1fc46
 ---> bf29be1085e3
Removing intermediate container d7dfdf0aef9b
Removing intermediate container b8c284a1fc46
Error removing intermediate container d999c553d75e: nosuchcontainer: No such container: d999c553d75e284fc51eb0639597c15a638f16d08fb3d7166e94546253e53b45
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 5704c424b3ba
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5065 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> a03c2fba0f5e
Error removing intermediate container d999c553d75e: nosuchcontainer: No such container: d999c553d75e284fc51eb0639597c15a638f16d08fb3d7166e94546253e53b45
Successfully built a03c2fba0f5e

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test98`

Contents of dockerfile `/root/docker-node/.~tmp.test98/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.0.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.0.2-test1` from `/root/docker-node/.~tmp.test98`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.0.2
 ---> a03c2fba0f5e
Step 2 : ENV NODE_ENV test
 ---> Running in 86afb5881cd4
 ---> 1961284803cf
Removing intermediate container 86afb5881cd4
Step 3 : RUN node -v
 ---> Running in 5037efd46163
v2.0.2
 ---> a2a81fd69836
Removing intermediate container 5037efd46163
Step 4 : RUN node -p "process.versions"
 ---> Running in f18aab95a8c6
{ http_parser: '2.5.0',
  node: '2.0.2',
  v8: '4.2.77.20',
  uv: '1.5.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> f4860cf32a4d
Removing intermediate container f18aab95a8c6
Step 5 : RUN npm --version
 ---> Running in 05644d7236ff
2.9.0
 ---> d67d885c6785
Removing intermediate container 05644d7236ff
Successfully built d67d885c6785

```

# Tested image `nodesource/wheezy:0.10.31`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 50f7967a2717
 ---> 99868894b5be
Removing intermediate container 50f7967a2717
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.31-1chl1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 7c20ab6c67aa
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  S[0m[91mpeed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.31-1chl1~wheezy1) ...
 ---> 2a271e9224e1
Removing intermediate container 7c20ab6c67aa
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 085bee6c5e7a
[91mnpm WARN [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.31 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.31/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.31/SHASUMS256.txt
[0m[91mgyp [0m[91minfo spawn python
[0m[91mgyp [0m[91minfo[0m[91m spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args[0m[91m   'make',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args[0m[91m   '-I',
gyp[0m[91m info[0m[91m spawn args   '/root/.node-gyp/0.10.31/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args[0m[91m   '-Dvisibility=default',
gyp[0m[91m [0m[91minfo spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.31',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.31
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> cf7eb31ffcc5
Removing intermediate container 085bee6c5e7a
Step 5 : ENV NODE_ENV production
 ---> Running in 3b05333448c4
 ---> 622cee1f302b
Removing intermediate container 3b05333448c4
Step 6 : WORKDIR /usr/src/app
 ---> Running in 0ea384e5d1a4
 ---> 85b489659671
Removing intermediate container 0ea384e5d1a4
Step 7 : CMD npm start
 ---> Running in bf42b87a7fac
 ---> 6b52c7c7b5f0
Removing intermediate container bf42b87a7fac
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 3a9ee4a6da59
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3481 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 1016233222d5
Removing intermediate container 3a9ee4a6da59
Successfully built 1016233222d5

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test14`

Contents of dockerfile `/root/docker-node/.~tmp.test14/Dockerfile`:

```
FROM nodesource/wheezy:0.10.31
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.31-test1` from `/root/docker-node/.~tmp.test14`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.31
 ---> 1016233222d5
Step 2 : ENV NODE_ENV test
 ---> Running in ed589a9ad07c
 ---> 7ee3a8b1de17
Removing intermediate container ed589a9ad07c
Step 3 : RUN node -v
 ---> Running in 103f6eee0cc2
v0.10.31
 ---> cc1985faa51f
Removing intermediate container 103f6eee0cc2
Step 4 : RUN node -p "process.versions"
 ---> Running in 101a2feafa15
{ http_parser: '1.0',
  node: '0.10.31',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1i' }
 ---> f6a277be73a5
Removing intermediate container 101a2feafa15
Step 5 : RUN npm --version
 ---> Running in 2cc4201f3c71
1.4.23
 ---> 57d240296c7a
Removing intermediate container 2cc4201f3c71
Successfully built 57d240296c7a

```

# Tested image `nodesource/wheezy:0.10.35`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 98bdb9cbe449
 ---> e372a48cfbb9
Removing intermediate container 98bdb9cbe449
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.35-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 206dbf26eaaa
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.35-1nodesource1~wheezy1) ...
 ---> 55224b09fd6a
Removing intermediate container 206dbf26eaaa
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in cb125b68a6c6
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with ok
[0m[91mgyp[0m[91m [0m[91minfo using pangyp@2.3.3
gyp info using node@0.10.35 | linux | x64
[0m[91mgyp [0m[91mhttp GET[0m[91m http://nodejs.org/dist/v0.10.35/node-v0.10.35.tar.gz
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200 http://nodejs.org/dist/v0.10.35/node-v0.10.35.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.35/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.35/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.35/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.35',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp[0m[91m info [0m[91mspawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! [0m[91mconfigure error 
[0m[91mgyp ERR! [0m[91mstack Error: `gyp` failed with exit code: 1
gyp ERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp[0m[91m ERR! [0m[91mstack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
[0m[91mgyp ERR! [0m[91mSystem Linux 3.13.0-79-generic
[0m[91mgyp ERR! command[0m[91m "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp[0m[91m ERR! [0m[91mcwd /
gyp ERR! node -v v0.10.35
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> b1a1deab4055
Removing intermediate container cb125b68a6c6
Step 5 : ENV NODE_ENV production
 ---> Running in b78260f43311
 ---> 49db6a54fb35
Removing intermediate container b78260f43311
Step 6 : WORKDIR /usr/src/app
 ---> Running in aa6bbaea6682
 ---> 8257ad6898c4
Removing intermediate container aa6bbaea6682
Step 7 : CMD npm start
 ---> Running in 22a83813410c
 ---> 430b9efb3f05
Removing intermediate container 22a83813410c
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 10de879319f6
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3212 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 2072e6ebc19f
Removing intermediate container 10de879319f6
Successfully built 2072e6ebc19f

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test18`

Contents of dockerfile `/root/docker-node/.~tmp.test18/Dockerfile`:

```
FROM nodesource/wheezy:0.10.35
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.35-test1` from `/root/docker-node/.~tmp.test18`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.35
 ---> 2072e6ebc19f
Step 2 : ENV NODE_ENV test
 ---> Running in 515dcbdec3b7
 ---> 8f9244806f34
Removing intermediate container 515dcbdec3b7
Step 3 : RUN node -v
 ---> Running in 320e16a17c0f
v0.10.35
 ---> 4a2c6dc6d3d0
Removing intermediate container 320e16a17c0f
Step 4 : RUN node -p "process.versions"
 ---> Running in 0de12644d5ab
{ http_parser: '1.0',
  node: '0.10.35',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1j' }
 ---> 2398cdc198c0
Removing intermediate container 0de12644d5ab
Step 5 : RUN npm --version
 ---> Running in 7bb8c25f8083
1.4.28
 ---> 35429189acdc
Removing intermediate container 7bb8c25f8083
Successfully built 35429189acdc

```

# Tested image `nodesource/jessie:5.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in e5813e8c0b8a
 ---> 81e984d17ea1
Removing intermediate container e5813e8c0b8a
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 4eb8541b1efd
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.3.0-1nodesource1~jessie1) ...
Setting up nodejs (5.3.0-1nodesource1~jessie1) ...
 ---> f93887c02e58
Removing intermediate container 4eb8541b1efd
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in e2803a5d6bc7
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@5.3.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200 http://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.3.0/SHASUMS256.txt
gyp http 200 http://nodejs.org/dist/v5.3.0/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.3.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
gyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.3.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 6bd721bda9a4
Error removing intermediate container e2803a5d6bc7: rmfs: Unable to remove filesystem for e2803a5d6bc7384a35bb9e1c54e0195caf81626a600b5235cde20c9b70b56251: remove /var/lib/docker/containers/e2803a5d6bc7384a35bb9e1c54e0195caf81626a600b5235cde20c9b70b56251/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 0250a5f737b3
 ---> 0451a3055e7b
Error removing intermediate container e2803a5d6bc7: nosuchcontainer: No such container: e2803a5d6bc7384a35bb9e1c54e0195caf81626a600b5235cde20c9b70b56251
Step 6 : WORKDIR /usr/src/app
 ---> Running in 2aadbbe9c81c
 ---> b6ff1e3af55a
Error removing intermediate container e2803a5d6bc7: nosuchcontainer: No such container: e2803a5d6bc7384a35bb9e1c54e0195caf81626a600b5235cde20c9b70b56251
Step 7 : CMD npm start
 ---> Running in 887e385a991d
 ---> 41d34b05595f
Removing intermediate container 0250a5f737b3
Removing intermediate container 2aadbbe9c81c
Removing intermediate container 887e385a991d
Error removing intermediate container e2803a5d6bc7: nosuchcontainer: No such container: e2803a5d6bc7384a35bb9e1c54e0195caf81626a600b5235cde20c9b70b56251
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 13c1757133cb
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 4s (2178 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 96a1e8e7d5d1
Error removing intermediate container e2803a5d6bc7: nosuchcontainer: No such container: e2803a5d6bc7384a35bb9e1c54e0195caf81626a600b5235cde20c9b70b56251
Successfully built 96a1e8e7d5d1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test54`

Contents of dockerfile `/root/docker-node/.~tmp.test54/Dockerfile`:

```
FROM nodesource/jessie:5.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.3.0-test1` from `/root/docker-node/.~tmp.test54`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.3.0
 ---> 96a1e8e7d5d1
Step 2 : ENV NODE_ENV test
 ---> Running in a3d19b6a18a7
 ---> 1c94fc9244d9
Removing intermediate container a3d19b6a18a7
Step 3 : RUN node -v
 ---> Running in 1f53928f3d06
v5.3.0
 ---> 80a4e989bed0
Removing intermediate container 1f53928f3d06
Step 4 : RUN node -p "process.versions"
 ---> Running in 6878a819be74
{ http_parser: '2.6.0',
  node: '5.3.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> f1d73f0c6d53
Removing intermediate container 6878a819be74
Step 5 : RUN npm --version
 ---> Running in 37648ed88747
3.3.12
 ---> 09fec3de56eb
Removing intermediate container 37648ed88747
Successfully built 09fec3de56eb

```

# Tested image `nodesource/jessie:0.10.38`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in b02644090fe6
 ---> e9d7010279dd
Removing intermediate container b02644090fe6
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.38-1chl1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 4843156af997
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.38-1chl1~jessie1) ...
Setting up nodejs (0.10.38-1chl1~jessie1) ...
 ---> 85a2bee4dd9c
Removing intermediate container 4843156af997
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 8766adb15d95
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
└── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using[0m[91m node@0.10.38 | linux | x64
[0m[91mgyp http[0m[91m GET http://nodejs.org/dist/v0.10.38/node-v0.10.38.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.38/node-v0.10.38.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.38/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.38/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m info spawn args[0m[91m   'binding.gyp',
[0m[91mgyp info spawn args   '-f',
gyp info spawn args   'make',
gyp [0m[91minfo spawn args[0m[91m   '-I',
[0m[91mgyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.38/common.gypi',
gyp info spawn args[0m[91m   '-Dlibrary=shared_library',
gyp [0m[91minfo spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.38',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! [0m[91mconfigure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp [0m[91mERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! [0m[91mstack[0m[91m     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! [0m[91mSystem Linux 3.13.0-79-generic
[0m[91mgyp ERR![0m[91m command[0m[91m "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.38
gyp [0m[91mERR! [0m[91mpangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> cfd69ed13753
Removing intermediate container 8766adb15d95
Step 5 : ENV NODE_ENV production
 ---> Running in 2ff83757e74b
 ---> b3999f845968
Removing intermediate container 2ff83757e74b
Step 6 : WORKDIR /usr/src/app
 ---> Running in 90bf8546a06f
 ---> aa563e39f412
Removing intermediate container 90bf8546a06f
Step 7 : CMD npm start
 ---> Running in d1ec283aff1a
 ---> 19c07c9c8655
Removing intermediate container d1ec283aff1a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in a860a89a921e
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3924 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 73931e73b3d3
Removing intermediate container a860a89a921e
Successfully built 73931e73b3d3

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test66`

Contents of dockerfile `/root/docker-node/.~tmp.test66/Dockerfile`:

```
FROM nodesource/jessie:0.10.38
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.38-test1` from `/root/docker-node/.~tmp.test66`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.38
 ---> 73931e73b3d3
Step 2 : ENV NODE_ENV test
 ---> Running in 6cb51a17828d
 ---> f44c706066f5
Removing intermediate container 6cb51a17828d
Step 3 : RUN node -v
 ---> Running in 380c15a2e823
v0.10.38
 ---> aa206901dad1
Removing intermediate container 380c15a2e823
Step 4 : RUN node -p "process.versions"
 ---> Running in 40fb329f4ae5
{ http_parser: '1.0',
  node: '0.10.38',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1m' }
 ---> 037b25fad07c
Removing intermediate container 40fb329f4ae5
Step 5 : RUN npm --version
 ---> Running in 164416132a83
1.4.28
 ---> bdeab660e1ce
Removing intermediate container 164416132a83
Successfully built bdeab660e1ce

```

# Tested image `nodesource/wheezy:0.12.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 146cd6408bd1
 ---> 01ba695dd7ac
Removing intermediate container 146cd6408bd1
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 24a32d20e263
[91m  % Total  [0m[91m  % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.0-1nodesource1~wheezy1) ...
 ---> a2b31c4cf0ad
Removing intermediate container 24a32d20e263
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in f07099600f10
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN [0m[91mdeprecated[0m[91m graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
gyp info using node@0.12.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.0/SHASUMS256.txt
gyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m
[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1067:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 409e392089e6
Removing intermediate container f07099600f10
Step 5 : ENV NODE_ENV production
 ---> Running in da06cd0ad3cb
 ---> 7bca2a8a0502
Removing intermediate container da06cd0ad3cb
Step 6 : WORKDIR /usr/src/app
 ---> Running in 24146275a313
 ---> f5cc4b65e2c8
Removing intermediate container 24146275a313
Step 7 : CMD npm start
 ---> Running in 3906d914ddf0
 ---> 889ce8af7104
Removing intermediate container 3906d914ddf0
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 79fa0569a912
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 4s (2050 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f1e5fcf8efdb
Removing intermediate container 79fa0569a912
Successfully built f1e5fcf8efdb

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test25`

Contents of dockerfile `/root/docker-node/.~tmp.test25/Dockerfile`:

```
FROM nodesource/wheezy:0.12.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.0-test1` from `/root/docker-node/.~tmp.test25`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.0
 ---> f1e5fcf8efdb
Step 2 : ENV NODE_ENV test
 ---> Running in 234442637efa
 ---> d475f0cd77ed
Removing intermediate container 234442637efa
Step 3 : RUN node -v
 ---> Running in 7c300462839a
v0.12.0
 ---> 54393639a912
Removing intermediate container 7c300462839a
Step 4 : RUN node -p "process.versions"
 ---> Running in 0518d8ef04b6
{ http_parser: '2.3',
  node: '0.12.0',
  v8: '3.28.73',
  uv: '1.0.2',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1l' }
 ---> 66f21adb5a56
Removing intermediate container 0518d8ef04b6
Step 5 : RUN npm --version
 ---> Running in 1d88bf123586
2.5.1
 ---> f0cc6ed7b58d
Removing intermediate container 1d88bf123586
Successfully built f0cc6ed7b58d

```

# Tested image `nodesource/wheezy:4.1.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 7788750bb756
 ---> e27d8e8d2ba6
Removing intermediate container 7788750bb756
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.1.1-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 1bb9e3b15971
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total[0m[91m   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.1.1-1nodesource1~wheezy1) ...
 ---> 80c40fdec952
Removing intermediate container 1bb9e3b15971
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1a91ec9c177d
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.1.1 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp [0m[91mGET http://nodejs.org/dist/v4.1.1/node-v4.1.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.1.1/node-v4.1.1.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.1.1/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.1.1/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.1.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.1.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info [0m[91mspawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.1.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 33d4013c0daa
Removing intermediate container 1a91ec9c177d
Step 5 : ENV NODE_ENV production
 ---> Running in 53a5652120ae
 ---> fce20a6e3625
Removing intermediate container 53a5652120ae
Step 6 : WORKDIR /usr/src/app
 ---> Running in 548c4a3886c6
 ---> 5e16daf35958
Removing intermediate container 548c4a3886c6
Step 7 : CMD npm start
 ---> Running in 26f3547b2dbb
 ---> 971d59e4a424
Removing intermediate container 26f3547b2dbb
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in a5259cff4b0f
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (6620 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 3a791915ec5e
Removing intermediate container a5259cff4b0f
Successfully built 3a791915ec5e

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test34`

Contents of dockerfile `/root/docker-node/.~tmp.test34/Dockerfile`:

```
FROM nodesource/wheezy:4.1.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.1.1-test1` from `/root/docker-node/.~tmp.test34`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.1.1
 ---> 3a791915ec5e
Step 2 : ENV NODE_ENV test
 ---> Running in 3d364fb1c7f2
 ---> 814c347cdc4b
Removing intermediate container 3d364fb1c7f2
Step 3 : RUN node -v
 ---> Running in e1ffa39a8f45
v4.1.1
 ---> 063b9dc41a3a
Removing intermediate container e1ffa39a8f45
Step 4 : RUN node -p "process.versions"
 ---> Running in 4d0f5659e66e
{ http_parser: '2.5.0',
  node: '4.1.1',
  v8: '4.5.103.33',
  uv: '1.7.4',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> e7b57ba495ce
Removing intermediate container 4d0f5659e66e
Step 5 : RUN npm --version
 ---> Running in c142635a3a86
2.14.4
 ---> 1e05137ad670
Removing intermediate container c142635a3a86
Successfully built 1e05137ad670

```

# Tested image `nodesource/wheezy:0.10.41`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in d791a7df8ebf
 ---> 822e8ce3f019
Removing intermediate container d791a7df8ebf
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.41-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 78d68290bc2f
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.41-1nodesource1~wheezy1) ...
 ---> e584ed88dd24
Removing intermediate container 78d68290bc2f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in eee723d7f549
[91mnpm[0m[91m [0m[91mWARN deprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
[0m[91mnpm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
[0m[91mnpm [0m[91mWARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN deprecated To upgrade to the latest stable version, run:
[0m[91mnpm WARN deprecated[0m[91m 
[0m[91mnpm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
[0m[91mnpm WARN [0m[91mdeprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
[0m[91mnpm[0m[91m [0m[91mWARN [0m[91mdeprecated will be bundled with a version of npm@2, which has some small
[0m[91mnpm[0m[91m WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN [0m[91mdeprecated semver behavior.
[0m[91mnpm WARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mnpm [0m[91mWARN deprecated This version of npm lacks support for important features,
npm WARN[0m[91m deprecated such as scoped packages, offered by the primary npm
[0m[91mnpm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN[0m[91m deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN deprecated To upgrade to the latest stable version, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
[0m[91mnpm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
[0m[91mnpm WARN deprecated semver behavior.
[0m[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
[0m[91mgyp info using node@0.10.41 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.41/node-v0.10.41.tar.gz
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v0.10.41/node-v0.10.41.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.41/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.41/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.41/common.gypi',
[0m[91mgyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.41',
gyp info[0m[91m spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.41
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 0f02c4b1f73d
Removing intermediate container eee723d7f549
Step 5 : ENV NODE_ENV production
 ---> Running in be0853f3d8b0
 ---> 3d06d6cb363e
Removing intermediate container be0853f3d8b0
Step 6 : WORKDIR /usr/src/app
 ---> Running in a5f73fabf6c9
 ---> dac3ee896d08
Removing intermediate container a5f73fabf6c9
Step 7 : CMD npm start
 ---> Running in f1b865c94650
 ---> 6798ec06d9b9
Removing intermediate container f1b865c94650
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 05e40b75f98b
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:3 http://security.debian.org wheezy/updates Release [102 kB]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:8 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (6316 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> ed05f5fef474
Removing intermediate container 05e40b75f98b
Successfully built ed05f5fef474

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test24`

Contents of dockerfile `/root/docker-node/.~tmp.test24/Dockerfile`:

```
FROM nodesource/wheezy:0.10.41
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.41-test1` from `/root/docker-node/.~tmp.test24`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.41
 ---> ed05f5fef474
Step 2 : ENV NODE_ENV test
 ---> Running in de14a8ba953a
 ---> a15253192b92
Removing intermediate container de14a8ba953a
Step 3 : RUN node -v
 ---> Running in ca5fa4582fc3
v0.10.41
 ---> dcd6cff491bf
Removing intermediate container ca5fa4582fc3
Step 4 : RUN node -p "process.versions"
 ---> Running in ac016b739ec8
{ http_parser: '1.0',
  node: '0.10.41',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1q' }
 ---> e017526e3359
Removing intermediate container ac016b739ec8
Step 5 : RUN npm --version
 ---> Running in a5d65e25a893
1.4.29
 ---> 064cff886d9e
Removing intermediate container a5d65e25a893
Successfully built 064cff886d9e

```

# Tested image `nodesource/jessie:5.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ffa2be5c7ba2
 ---> 509337b4fa82
Removing intermediate container ffa2be5c7ba2
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.1.0-2nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6f83b23a1d0a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.1.0-2nodesource1~jessie1) ...
Setting up nodejs (5.1.0-2nodesource1~jessie1) ...
 ---> 482d070e2aaa
Removing intermediate container 6f83b23a1d0a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 459a222303dd
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@5.1.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.1.0/node-v5.1.0.tar.gz
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v5.1.0/node-v5.1.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.1.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.1.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.1.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.1.0',
gyp info spawn args   '-Druntime=node',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR![0m[91m configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.1.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok[0m[91m 
[0m
 ---> 42a4fb5e3cad
Removing intermediate container 459a222303dd
Step 5 : ENV NODE_ENV production
 ---> Running in dcf9f301a9aa
 ---> e60b707d91dc
Removing intermediate container dcf9f301a9aa
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8961b02050ac
 ---> aebb2bd970d6
Removing intermediate container 8961b02050ac
Step 7 : CMD npm start
 ---> Running in 7ed6d2b08656
 ---> 78c59712ef4e
Removing intermediate container 7ed6d2b08656
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 204a88fbb458
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3328 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 7d7878589b7e
Removing intermediate container 204a88fbb458
Successfully built 7d7878589b7e

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test88`

Contents of dockerfile `/root/docker-node/.~tmp.test88/Dockerfile`:

```
FROM nodesource/jessie:5.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.1.0-test1` from `/root/docker-node/.~tmp.test88`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.1.0
 ---> 7d7878589b7e
Step 2 : ENV NODE_ENV test
 ---> Running in af02cc923942
 ---> fd956bc2ee5d
Removing intermediate container af02cc923942
Step 3 : RUN node -v
 ---> Running in 64c1b56c7f5f
v5.1.0
 ---> 28e7ba682348
Removing intermediate container 64c1b56c7f5f
Step 4 : RUN node -p "process.versions"
 ---> Running in 0e706faf9d24
{ http_parser: '2.6.0',
  node: '5.1.0',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2d' }
 ---> 9905f701ca7f
Removing intermediate container 0e706faf9d24
Step 5 : RUN npm --version
 ---> Running in a1e4a2069873
3.3.12
 ---> 352059dd898a
Removing intermediate container a1e4a2069873
Successfully built 352059dd898a

```

# Tested image `nodesource/jessie:iojs-1.6.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 383cfda8296c
 ---> 35a54408e500
Removing intermediate container 383cfda8296c
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.6.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in a21edffb55c6
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.6.4-1nodesource1~jessie1) ...
Setting up iojs (1.6.4-1nodesource1~jessie1) ...
 ---> 05d57c951882
Removing intermediate container a21edffb55c6
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 9ae3f62a9be4
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@1.6.4 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.6.4/iojs-v1.6.4.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.6.4/iojs-v1.6.4.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.6.4/SHASUMS256.txt
[0m[91mgyp http 200[0m[91m https://iojs.org/dist/v1.6.4/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.6.4/common.gypi',
[0m[91mgyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.6.4',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.6.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 0551a937f912
Removing intermediate container 9ae3f62a9be4
Step 5 : ENV NODE_ENV production
 ---> Running in dd0b0cb52b79
 ---> 4f6ce466bec1
Removing intermediate container dd0b0cb52b79
Step 6 : WORKDIR /usr/src/app
 ---> Running in 310459c01281
 ---> 0346226a726f
Removing intermediate container 310459c01281
Step 7 : CMD npm start
 ---> Running in f1370599013f
 ---> 5fa583f8868c
Removing intermediate container f1370599013f
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 665db334f62a
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2752 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 42df206f66c3
Error removing intermediate container 665db334f62a: rmdriverfs: Driver aufs failed to remove root filesystem 665db334f62a2b4f24342205a780ec2e4d83893d08288313ae4201c1e50f767c: rename /var/lib/docker/aufs/mnt/4a5e59db21a10670d1e2e6f66f3626eb0a5cfdfed99620ef783f012fc0cd6b2e /var/lib/docker/aufs/mnt/4a5e59db21a10670d1e2e6f66f3626eb0a5cfdfed99620ef783f012fc0cd6b2e-removing: device or resource busy
Successfully built 42df206f66c3

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test96`

Contents of dockerfile `/root/docker-node/.~tmp.test96/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.6.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.6.4-test1` from `/root/docker-node/.~tmp.test96`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.6.4
 ---> 42df206f66c3
Step 2 : ENV NODE_ENV test
 ---> Running in e94aed9e4888
 ---> 8d2db504101a
Removing intermediate container e94aed9e4888
Step 3 : RUN node -v
 ---> Running in 014164e10d46
v1.6.4
 ---> 87976b106092
Removing intermediate container 014164e10d46
Step 4 : RUN node -p "process.versions"
 ---> Running in 95c0c027c403
{ http_parser: '2.3.0',
  node: '1.6.4',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 293d9e930fe4
Removing intermediate container 95c0c027c403
Step 5 : RUN npm --version
 ---> Running in 5dfd042b7b9f
2.7.5
 ---> 9511d3f3cfd1
Removing intermediate container 5dfd042b7b9f
Successfully built 9511d3f3cfd1

```

# Tested image `nodesource/jessie:iojs-1.7.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 7db6904cfdab
 ---> fe389c80edda
Removing intermediate container 7db6904cfdab
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.7.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 81e1e5deee87
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.7.1-1nodesource1~jessie1) ...
Setting up iojs (1.7.1-1nodesource1~jessie1) ...
 ---> ac0a9d2cc6d6
Removing intermediate container 81e1e5deee87
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 64ce73b24409
[91mnpm [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, mime-types@1.0.2, node-uuid@1.4.7, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with[0m[91m ok
[0m[91mgyp [0m[91minfo[0m[91m using pangyp@2.3.3
gyp info using node@1.7.1 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.7.1/iojs-v1.7.1.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.7.1/iojs-v1.7.1.tar.gz
[0m[91mgyp[0m[91m http GET[0m[91m https://iojs.org/dist/v1.7.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.7.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp[0m[91m info [0m[91mspawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.7.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info [0m[91mspawn args   '-Dvisibility=default',
[0m[91mgyp[0m[91m info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.7.1',
gyp [0m[91minfo[0m[91m spawn args[0m[91m   '-Druntime=iojs',
gyp info spawn args[0m[91m   '-Dmodule_root_dir=/',
[0m[91mgyp info spawn args   '--depth=.',
[0m[91mgyp info[0m[91m spawn args   '--no-parallel',
[0m[91mgyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp [0m[91minfo [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.7.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> a71438dfd3e2
Removing intermediate container 64ce73b24409
Step 5 : ENV NODE_ENV production
 ---> Running in ce2e9da89ef1
 ---> 7a84664fba2e
Removing intermediate container ce2e9da89ef1
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6718bd245ea1
 ---> d33df8a16198
Removing intermediate container 6718bd245ea1
Step 7 : CMD npm start
 ---> Running in a5426b6de2b7
 ---> 39994c384bad
Removing intermediate container a5426b6de2b7
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d49fe5cc8c26
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 5s (1827 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0f6f28401716
Removing intermediate container d49fe5cc8c26
Successfully built 0f6f28401716

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test97`

Contents of dockerfile `/root/docker-node/.~tmp.test97/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.7.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.7.1-test1` from `/root/docker-node/.~tmp.test97`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.7.1
 ---> 0f6f28401716
Step 2 : ENV NODE_ENV test
 ---> Running in e04c7a3410e8
 ---> 86f96864d0bf
Removing intermediate container e04c7a3410e8
Step 3 : RUN node -v
 ---> Running in 49ba2c7210d1
v1.7.1
 ---> 2beb0eec07e6
Removing intermediate container 49ba2c7210d1
Step 4 : RUN node -p "process.versions"
 ---> Running in 7a90e869c30a
{ http_parser: '2.3.0',
  node: '1.7.1',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 904d128daef5
Removing intermediate container 7a90e869c30a
Step 5 : RUN npm --version
 ---> Running in 299560ca4613
2.7.6
 ---> c452b2c6f2d2
Removing intermediate container 299560ca4613
Successfully built c452b2c6f2d2

```

# Tested image `nodesource/wheezy:5.7.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 79c94e211af8
 ---> 0256e9571a7f
Removing intermediate container 79c94e211af8
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.7.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d0ec683a6389
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.7.0-1nodesource1~wheezy1) ...
 ---> 841359372f51
Removing intermediate container d0ec683a6389
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 188af03ab080
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using[0m[91m node@5.7.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.7.0/node-v5.7.0.tar.gz
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v5.7.0/node-v5.7.0.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v5.7.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.7.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.7.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args[0m[91m   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.7.0',
gyp[0m[91m info spawn args   '-Druntime=node',
gyp info spawn args[0m[91m   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:100:13)
gyp ERR! stack     at ChildProcess.emit (events.js:185:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.7.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 84b7224fc27c
Removing intermediate container 188af03ab080
Step 5 : ENV NODE_ENV production
 ---> Running in 6689be886526
 ---> 79361ba709db
Removing intermediate container 6689be886526
Step 6 : WORKDIR /usr/src/app
 ---> Running in a26a5acbdfa3
 ---> 3873ac12f34c
Removing intermediate container a26a5acbdfa3
Step 7 : CMD npm start
 ---> Running in c71dde836700
 ---> 34386adca82b
Removing intermediate container c71dde836700
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 1b49f90cb42c
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3399 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 45389bfba6f8
Removing intermediate container 1b49f90cb42c
Successfully built 45389bfba6f8

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test1`

Contents of dockerfile `/root/docker-node/.~tmp.test1/Dockerfile`:

```
FROM nodesource/wheezy:5.7.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.7.0-test1` from `/root/docker-node/.~tmp.test1`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.7.0
 ---> 45389bfba6f8
Step 2 : ENV NODE_ENV test
 ---> Running in e2d806a3c784
 ---> c4348175094b
Removing intermediate container e2d806a3c784
Step 3 : RUN node -v
 ---> Running in 9d0c8b2a8a6c
v5.7.0
 ---> e66bfb79b43b
Removing intermediate container 9d0c8b2a8a6c
Step 4 : RUN node -p "process.versions"
 ---> Running in 50bdcedfea1a
{ http_parser: '2.6.2',
  node: '5.7.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2f' }
 ---> b22125d108b1
Removing intermediate container 50bdcedfea1a
Step 5 : RUN npm --version
 ---> Running in 85b9bb4d2bc2
3.6.0
 ---> 08fc5b286583
Error removing intermediate container 85b9bb4d2bc2: rmdriverfs: Driver aufs failed to remove root filesystem 85b9bb4d2bc23209639ee6a546e7982a4e04c5ae5890b917acebbcf7985d7029: rename /var/lib/docker/aufs/mnt/f05af62d145cd932973a8c58ae124efdd027bbd10f862cb4d0dca0a2f3138657 /var/lib/docker/aufs/mnt/f05af62d145cd932973a8c58ae124efdd027bbd10f862cb4d0dca0a2f3138657-removing: device or resource busy
Successfully built 08fc5b286583

```

# Tested image `nodesource/jessie:0.12.9`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 58f658bf565b
 ---> 701b3143bae1
Removing intermediate container 58f658bf565b
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.9-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 7faed67e6dac
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.9-1nodesource1~jessie1) ...
Setting up nodejs (0.12.9-1nodesource1~jessie1) ...
 ---> 8111eaf52a26
Removing intermediate container 7faed67e6dac
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 5ed489d8123f
[91mnpm[0m[91m [0m[91mWARN[0m[91m deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, aws-sign2@0.5.0, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.9 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.9/node-v0.12.9.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v0.12.9/node-v0.12.9.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.9/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.9/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.9/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.9',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR![0m[91m configure error 
[0m
[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1075:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.9
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> e72924d2c7b4
Removing intermediate container 5ed489d8123f
Step 5 : ENV NODE_ENV production
 ---> Running in c308d6d58502
 ---> 1d37bf758bbf
Removing intermediate container c308d6d58502
Step 6 : WORKDIR /usr/src/app
 ---> Running in 509ace647078
 ---> cfdfa1409f78
Removing intermediate container 509ace647078
Step 7 : CMD npm start
 ---> Running in ca646395d298
 ---> 9fc31ed4bb28
Removing intermediate container ca646395d298
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 8aa9f53a8409
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3278 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 73d27d647861
Removing intermediate container 8aa9f53a8409
Successfully built 73d27d647861

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test47`

Contents of dockerfile `/root/docker-node/.~tmp.test47/Dockerfile`:

```
FROM nodesource/jessie:0.12.9
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.9-test1` from `/root/docker-node/.~tmp.test47`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.9
 ---> 73d27d647861
Step 2 : ENV NODE_ENV test
 ---> Running in c7ce60b284bb
 ---> 55e7ad785a96
Removing intermediate container c7ce60b284bb
Step 3 : RUN node -v
 ---> Running in eae27ec05e6d
v0.12.9
 ---> 5188d5a249e8
Removing intermediate container eae27ec05e6d
Step 4 : RUN node -p "process.versions"
 ---> Running in 28f8e0de21a2
{ http_parser: '2.3',
  node: '0.12.9',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1q' }
 ---> 77972092042a
Removing intermediate container 28f8e0de21a2
Step 5 : RUN npm --version
 ---> Running in f5f1dd25b308
2.14.9
 ---> 63851cfd14d1
Removing intermediate container f5f1dd25b308
Successfully built 63851cfd14d1

```

# Tested image `nodesource/jessie:0.12.5`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 8fa23a98dc53
 ---> 7ca2217c5094
Removing intermediate container 8fa23a98dc53
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.5-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 9e09ff34afc8
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.5-1nodesource1~jessie1) ...
Setting up nodejs (0.12.5-1nodesource1~jessie1) ...
 ---> 4a05509c8a15
Removing intermediate container 9e09ff34afc8
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b3d88af83faa
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.12.5 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.5/node-v0.12.5.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.5/node-v0.12.5.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.5/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.5/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.5/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args[0m[91m   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.5',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! [0m[91mnode -v v0.12.5
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp[0m[91m ERR! not ok 
[0m
 ---> b9405e1aac88
Removing intermediate container b3d88af83faa
Step 5 : ENV NODE_ENV production
 ---> Running in e56b8f65ed50
 ---> b23ca3cc7c83
Removing intermediate container e56b8f65ed50
Step 6 : WORKDIR /usr/src/app
 ---> Running in 7ed45cf03ef3
 ---> 28b5631f25da
Removing intermediate container 7ed45cf03ef3
Step 7 : CMD npm start
 ---> Running in dcd8f2205234
 ---> 7810edb9ebc7
Removing intermediate container dcd8f2205234
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in ab2bbde63bd6
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (4533 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 2610f674da7e
Removing intermediate container ab2bbde63bd6
Successfully built 2610f674da7e

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test75`

Contents of dockerfile `/root/docker-node/.~tmp.test75/Dockerfile`:

```
FROM nodesource/jessie:0.12.5
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.5-test1` from `/root/docker-node/.~tmp.test75`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.5
 ---> 2610f674da7e
Step 2 : ENV NODE_ENV test
 ---> Running in 9dd9029a476c
 ---> 733cc119e957
Removing intermediate container 9dd9029a476c
Step 3 : RUN node -v
 ---> Running in afccd886ff5f
v0.12.5
 ---> ae11b18dca5e
Removing intermediate container afccd886ff5f
Step 4 : RUN node -p "process.versions"
 ---> Running in 06ceb5f6a2ce
{ http_parser: '2.3',
  node: '0.12.5',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1o' }
 ---> 169c7e871bbf
Removing intermediate container 06ceb5f6a2ce
Step 5 : RUN npm --version
 ---> Running in f2b23746044f
2.11.2
 ---> 3cd0a858908f
Removing intermediate container f2b23746044f
Successfully built 3cd0a858908f

```

# Tested image `nodesource/jessie:5.4.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 112c919b1413
 ---> 9d933aed8fc4
Removing intermediate container 112c919b1413
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.4.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in f3db135cecde
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.4.1-1nodesource1~jessie1) ...
Setting up nodejs (5.4.1-1nodesource1~jessie1) ...
 ---> 9fd831267916
Removing intermediate container f3db135cecde
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 70f602b249eb
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m [0m[91mWARN[0m[91m deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@5.4.1 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.4.1/node-v5.4.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.4.1/node-v5.4.1.tar.gz
[0m[91mgyp http [0m[91mGET[0m[91m http://nodejs.org/dist/v5.4.1/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.4.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info[0m[91m spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.4.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.4.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
[0m[91mgyp [0m[91minfo[0m[91m spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR![0m[91m command[0m[91m "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v5.4.1
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp ERR! not ok[0m[91m 
[0m
 ---> f052f4cbe094
Removing intermediate container 70f602b249eb
Step 5 : ENV NODE_ENV production
 ---> Running in b066182e61dd
 ---> 45ef1f931c92
Removing intermediate container b066182e61dd
Step 6 : WORKDIR /usr/src/app
 ---> Running in 0c289697aaa4
 ---> 95d90e78c7cf
Removing intermediate container 0c289697aaa4
Step 7 : CMD npm start
 ---> Running in 4c72ee1c4d22
 ---> 58a2fa46f100
Removing intermediate container 4c72ee1c4d22
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d409e89c9b13
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3662 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> ac052c38258b
Removing intermediate container d409e89c9b13
Successfully built ac052c38258b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test55`

Contents of dockerfile `/root/docker-node/.~tmp.test55/Dockerfile`:

```
FROM nodesource/jessie:5.4.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.4.1-test1` from `/root/docker-node/.~tmp.test55`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.4.1
 ---> ac052c38258b
Step 2 : ENV NODE_ENV test
 ---> Running in 58ffbb5dbe23
 ---> a5b0685c4d3a
Removing intermediate container 58ffbb5dbe23
Step 3 : RUN node -v
 ---> Running in 9da78cc83142
v5.4.1
 ---> 453975099d39
Removing intermediate container 9da78cc83142
Step 4 : RUN node -p "process.versions"
 ---> Running in 0ed7d00f0a4a
{ http_parser: '2.6.0',
  node: '5.4.1',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 4c0e024cfc6e
Removing intermediate container 0ed7d00f0a4a
Step 5 : RUN npm --version
 ---> Running in b76dc5fb0510
3.3.12
 ---> 1189b6afcc83
Removing intermediate container b76dc5fb0510
Successfully built 1189b6afcc83

```

# Tested image `nodesource/wheezy:0.10.32`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 3c1867c08ecf
 ---> b5c1b45321b1
Removing intermediate container 3c1867c08ecf
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.32-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 172daee38939
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.32-1nodesource1~wheezy1) ...
 ---> 366d615307ca
Removing intermediate container 172daee38939
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c5983360a83f
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, http-signature@0.10.1, tough-cookie@2.2.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.32 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.32/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.32/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp [0m[91minfo spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info [0m[91mspawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.32/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.32',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error[0m[91m 
[0m[91mgyp [0m[91mERR![0m[91m stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.32
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 8690327045e6
Removing intermediate container c5983360a83f
Step 5 : ENV NODE_ENV production
 ---> Running in 8c67430d6f88
 ---> 1133b7b316f5
Removing intermediate container 8c67430d6f88
Step 6 : WORKDIR /usr/src/app
 ---> Running in 4ba8d9320ad8
 ---> 89db48a87302
Removing intermediate container 4ba8d9320ad8
Step 7 : CMD npm start
 ---> Running in 83651c78e3e9
 ---> b4d2c12634d1
Removing intermediate container 83651c78e3e9
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in cb67362492cd
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:3 http://security.debian.org wheezy/updates Release [102 kB]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:8 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 3s (2308 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 649bb4a9f7f7
Removing intermediate container cb67362492cd
Successfully built 649bb4a9f7f7

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test15`

Contents of dockerfile `/root/docker-node/.~tmp.test15/Dockerfile`:

```
FROM nodesource/wheezy:0.10.32
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.32-test1` from `/root/docker-node/.~tmp.test15`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.32
 ---> 649bb4a9f7f7
Step 2 : ENV NODE_ENV test
 ---> Running in 8963b970a010
 ---> 0bc6bc63d7cd
Removing intermediate container 8963b970a010
Step 3 : RUN node -v
 ---> Running in dea64413c640
v0.10.32
 ---> 1f75d96bfc98
Removing intermediate container dea64413c640
Step 4 : RUN node -p "process.versions"
 ---> Running in f795df214503
{ http_parser: '1.0',
  node: '0.10.32',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1i' }
 ---> 009d56b16c62
Removing intermediate container f795df214503
Step 5 : RUN npm --version
 ---> Running in 76ba6ae6ea78
1.4.28
 ---> 7c04126681f0
Removing intermediate container 76ba6ae6ea78
Successfully built 7c04126681f0

```

# Tested image `nodesource/jessie:iojs-1.8.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 13f6c4e14ae7
 ---> 89312dbf03a0
Removing intermediate container 13f6c4e14ae7
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.8.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 7e177f8794ae
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.8.4-1nodesource1~jessie1) ...
Setting up iojs (1.8.4-1nodesource1~jessie1) ...
 ---> 60951f32a40f
Removing intermediate container 7e177f8794ae
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b7f2bb1557fd
[91mnpm[0m[91m [0m[91mWARN[0m[91m deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp [0m[91minfo [0m[91musing pangyp@2.3.3
gyp info using node@1.8.4 | linux | x64
[0m[91mgyp[0m[91m http [0m[91mGET https://iojs.org/dist/v1.8.4/iojs-v1.8.4.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.8.4/iojs-v1.8.4.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.8.4/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.8.4/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.8.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.8.4',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
[0m[91mgyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR![0m[91m System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.8.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 61be8ac04f7c
Removing intermediate container b7f2bb1557fd
Step 5 : ENV NODE_ENV production
 ---> Running in 4640ab442647
 ---> f76e1e67d6a7
Removing intermediate container 4640ab442647
Step 6 : WORKDIR /usr/src/app
 ---> Running in 76a62aeebce2
 ---> 3473f20ac5aa
Removing intermediate container 76a62aeebce2
Step 7 : CMD npm start
 ---> Running in 4b33c062d8b3
 ---> 8d1873bb8ba0
Removing intermediate container 4b33c062d8b3
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in ecc52615f856
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3835 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 69eba4241641
Removing intermediate container ecc52615f856
Successfully built 69eba4241641

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test90`

Contents of dockerfile `/root/docker-node/.~tmp.test90/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.8.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.8.4-test1` from `/root/docker-node/.~tmp.test90`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.8.4
 ---> 69eba4241641
Step 2 : ENV NODE_ENV test
 ---> Running in 2464310de98c
 ---> e0a3728ce61e
Removing intermediate container 2464310de98c
Step 3 : RUN node -v
 ---> Running in 266e98c1bef5
v1.8.4
 ---> 87f8f07827fc
Removing intermediate container 266e98c1bef5
Step 4 : RUN node -p "process.versions"
 ---> Running in 95f4c3f752cb
{ http_parser: '2.5.0',
  node: '1.8.4',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.2d' }
 ---> c084b34d67d4
Removing intermediate container 95f4c3f752cb
Step 5 : RUN npm --version
 ---> Running in c85e064230a7
2.9.0
 ---> bc00926a9a33
Removing intermediate container c85e064230a7
Successfully built bc00926a9a33

```

# Tested image `nodesource/wheezy:5.5.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in cc97670ea960
 ---> f8d74e0d7b42
Removing intermediate container cc97670ea960
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.5.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in b40a72adfbdd
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left[0m[91m  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.5.0-1nodesource1~wheezy1) ...
 ---> d818d991f5b2
Removing intermediate container b40a72adfbdd
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 2126a2609b29
[91mnpm[0m[91m WARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@5.5.0 | linux | x64
gyp http GET http://nodejs.org/dist/v5.5.0/node-v5.5.0.tar.gz
gyp http 200 http://nodejs.org/dist/v5.5.0/node-v5.5.0.tar.gz
[0m[91mgyp[0m[91m http[0m[91m GET http://nodejs.org/dist/v5.5.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.5.0/SHASUMS256.txt
[0m[91mgyp info[0m[91m spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info [0m[91mspawn args   '-I',
gyp[0m[91m info spawn args[0m[91m   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.5.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.5.0',
gyp info spawn args   '-Druntime=node',
gyp info[0m[91m spawn args[0m[91m   '-Dmodule_root_dir=/',
gyp[0m[91m info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
gyp [0m[91minfo [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:100:13)
gyp ERR! stack     at ChildProcess.emit (events.js:185:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.5.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 2443c6258bbe
Removing intermediate container 2126a2609b29
Step 5 : ENV NODE_ENV production
 ---> Running in 54233d2ff096
 ---> 891552b7fadb
Removing intermediate container 54233d2ff096
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6a9719af2b54
 ---> c5175b50b955
Removing intermediate container 6a9719af2b54
Step 7 : CMD npm start
 ---> Running in 96607332246f
 ---> e2cad5ef60f5
Removing intermediate container 96607332246f
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f2214b5f8889
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:3 http://security.debian.org wheezy/updates Release [102 kB]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:8 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (6163 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b6f2b7f4b9d3
Removing intermediate container f2214b5f8889
Successfully built b6f2b7f4b9d3

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test11`

Contents of dockerfile `/root/docker-node/.~tmp.test11/Dockerfile`:

```
FROM nodesource/wheezy:5.5.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.5.0-test1` from `/root/docker-node/.~tmp.test11`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.5.0
 ---> b6f2b7f4b9d3
Step 2 : ENV NODE_ENV test
 ---> Running in d355b59ebb7a
 ---> c72aba1df819
Removing intermediate container d355b59ebb7a
Step 3 : RUN node -v
 ---> Running in 9190e985221f
v5.5.0
 ---> 4e00c0f23ba0
Removing intermediate container 9190e985221f
Step 4 : RUN node -p "process.versions"
 ---> Running in 79b2ca08d43f
{ http_parser: '2.6.0',
  node: '5.5.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 314319d1a8a7
Removing intermediate container 79b2ca08d43f
Step 5 : RUN npm --version
 ---> Running in 37981aa5d884
3.3.12
 ---> f9e8404f8def
Removing intermediate container 37981aa5d884
Successfully built f9e8404f8def

```

# Tested image `nodesource/wheezy:0.10.33`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 110158c7d06d
 ---> bee0a3b6f485
Removing intermediate container 110158c7d06d
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.33-2nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d148555d3a1d
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.33-2nodesource1~wheezy1) ...
 ---> 94d705ef6d17
Removing intermediate container d148555d3a1d
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 93da030c8fb6
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, http-signature@0.10.1, tough-cookie@2.2.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.33 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.33/node-v0.10.33.tar.gz
[0m[91mgyp [0m[91mhttp [0m[91m200[0m[91m http://nodejs.org/dist/v0.10.33/node-v0.10.33.tar.gz
[0m[91mgyp [0m[91mhttp [0m[91mGET http://nodejs.org/dist/v0.10.33/SHASUMS256.txt
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v0.10.33/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.33/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.33',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
[0m[91mgyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp ERR![0m[91m stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR![0m[91m node -v[0m[91m v0.10.33
[0m[91mgyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 8a4e779f1de2
Removing intermediate container 93da030c8fb6
Step 5 : ENV NODE_ENV production
 ---> Running in d39a13a9f92f
 ---> 109e58aee21c
Removing intermediate container d39a13a9f92f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 390d2e5606c1
 ---> 0893460ef7ed
Removing intermediate container 390d2e5606c1
Step 7 : CMD npm start
 ---> Running in c3a7351c650d
 ---> 9c939611b50d
Removing intermediate container c3a7351c650d
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 4ab80b6eee39
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3463 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> cd23579f2dc2
Removing intermediate container 4ab80b6eee39
Successfully built cd23579f2dc2

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test16`

Contents of dockerfile `/root/docker-node/.~tmp.test16/Dockerfile`:

```
FROM nodesource/wheezy:0.10.33
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.33-test1` from `/root/docker-node/.~tmp.test16`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.33
 ---> cd23579f2dc2
Step 2 : ENV NODE_ENV test
 ---> Running in 77162f05b458
 ---> 0ad1aa8cd232
Removing intermediate container 77162f05b458
Step 3 : RUN node -v
 ---> Running in 226432211c21
v0.10.33
 ---> 7259a6ea338c
Removing intermediate container 226432211c21
Step 4 : RUN node -p "process.versions"
 ---> Running in cbd6a390a881
{ http_parser: '1.0',
  node: '0.10.33',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.29',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1j' }
 ---> 62415e6d781d
Removing intermediate container cbd6a390a881
Step 5 : RUN npm --version
 ---> Running in 974b3717b038
1.4.28
 ---> f98122fc1b28
Error removing intermediate container 974b3717b038: rmdriverfs: Driver aufs failed to remove root filesystem 974b3717b0380a675008079b10fae3067bda16a03be8f51d9bea958935cfff55: rename /var/lib/docker/aufs/mnt/6ce08b397fd1fe105002e8c265ea6b88fdf3b1314556ecc6919b82b2a3a5b837 /var/lib/docker/aufs/mnt/6ce08b397fd1fe105002e8c265ea6b88fdf3b1314556ecc6919b82b2a3a5b837-removing: device or resource busy
Successfully built f98122fc1b28

```

# Tested image `nodesource/wheezy:4.2.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 04b3cbd1a336
 ---> 1b8b5c09d466
Removing intermediate container 04b3cbd1a336
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.1-2nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 01c430d2dc16
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.2.1-2nodesource1~wheezy1) ...
 ---> 69bea151d1cf
Removing intermediate container 01c430d2dc16
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0a2d7dbd8f67
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
[0m[91mgyp info using node@4.2.1 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.1/node-v4.2.1.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp 200 http://nodejs.org/dist/v4.2.1/node-v4.2.1.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.1/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.1/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m
[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 5fb8803caa0e
Removing intermediate container 0a2d7dbd8f67
Step 5 : ENV NODE_ENV production
 ---> Running in c3d18492d5cc
 ---> 7ed5dccfaeec
Removing intermediate container c3d18492d5cc
Step 6 : WORKDIR /usr/src/app
 ---> Running in ac170a259e54
 ---> 80a5c6e7e84e
Removing intermediate container ac170a259e54
Step 7 : CMD npm start
 ---> Running in fbb2f3fc6e77
 ---> dd85710181b2
Removing intermediate container fbb2f3fc6e77
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e66f274fe991
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (4963 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> d1358bc2e093
Removing intermediate container e66f274fe991
Successfully built d1358bc2e093

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test36`

Contents of dockerfile `/root/docker-node/.~tmp.test36/Dockerfile`:

```
FROM nodesource/wheezy:4.2.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.2.1-test1` from `/root/docker-node/.~tmp.test36`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.2.1
 ---> d1358bc2e093
Step 2 : ENV NODE_ENV test
 ---> Running in f6cb78b3b157
 ---> b8562e6939cd
Removing intermediate container f6cb78b3b157
Step 3 : RUN node -v
 ---> Running in fe472a40e174
v4.2.1
 ---> f8f37ebb8cf3
Removing intermediate container fe472a40e174
Step 4 : RUN node -p "process.versions"
 ---> Running in b7aabf5f7e64
{ http_parser: '2.5.0',
  node: '4.2.1',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 0208da1d0d6e
Removing intermediate container b7aabf5f7e64
Step 5 : RUN npm --version
 ---> Running in 36839c7dbf9c
2.14.7
 ---> a8483fb90f49
Removing intermediate container 36839c7dbf9c
Successfully built a8483fb90f49

```

# Tested image `nodesource/wheezy:5.6.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 35d1f92dd7e4
 ---> 6814ea2b1b06
Removing intermediate container 35d1f92dd7e4
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.6.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ad4586def18f
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.6.0-1nodesource1~wheezy1) ...
 ---> 3f861ea13e4a
Removing intermediate container ad4586def18f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1937fe9f2fb9
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@5.6.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.6.0/node-v5.6.0.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v5.6.0/node-v5.6.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.6.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.6.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.6.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.6.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp [0m[91minfo spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! stack[0m[91m     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at emitTwo (events.js:100:13)
gyp ERR! stack     at ChildProcess.emit (events.js:185:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.6.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 4da239d93bfd
Removing intermediate container 1937fe9f2fb9
Step 5 : ENV NODE_ENV production
 ---> Running in be3f62b1bdfc
 ---> 105520b1d67e
Removing intermediate container be3f62b1bdfc
Step 6 : WORKDIR /usr/src/app
 ---> Running in 567f3b3d29f9
 ---> 8e4ee11116f5
Removing intermediate container 567f3b3d29f9
Step 7 : CMD npm start
 ---> Running in d3f6178e6cd0
 ---> 45150d704f1d
Removing intermediate container d3f6178e6cd0
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 57cb355b39fc
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3513 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b2e4de983d35
Removing intermediate container 57cb355b39fc
Successfully built b2e4de983d35

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test12`

Contents of dockerfile `/root/docker-node/.~tmp.test12/Dockerfile`:

```
FROM nodesource/wheezy:5.6.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.6.0-test1` from `/root/docker-node/.~tmp.test12`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.6.0
 ---> b2e4de983d35
Step 2 : ENV NODE_ENV test
 ---> Running in d52d452a4340
 ---> a9223bd9d163
Removing intermediate container d52d452a4340
Step 3 : RUN node -v
 ---> Running in 770aa6444caf
v5.6.0
 ---> fd49151b2d76
Removing intermediate container 770aa6444caf
Step 4 : RUN node -p "process.versions"
 ---> Running in 239214b0f8b2
{ http_parser: '2.6.1',
  node: '5.6.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2f' }
 ---> bf441341b19e
Removing intermediate container 239214b0f8b2
Step 5 : RUN npm --version
 ---> Running in fe8876afbed9
3.6.0
 ---> 025fc97fbd44
Removing intermediate container fe8876afbed9
Successfully built 025fc97fbd44

```

# Tested image `nodesource/wheezy:0.10.40`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ea693616b51b
 ---> 8a4604d0897f
Removing intermediate container ea693616b51b
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.40-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 10cc7c6e2a7f
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.40-1nodesource1~wheezy1) ...
 ---> d2152bd90333
Removing intermediate container 10cc7c6e2a7f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1f889c50e8b3
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.40 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.40/node-v0.10.40.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.40/node-v0.10.40.tar.gz
[0m
[91mgyp http GET http://nodejs.org/dist/v0.10.40/SHASUMS256.txt
gyp http 200 http://nodejs.org/dist/v0.10.40/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.40/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.40',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
gyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.40
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 3770a7febea8
Removing intermediate container 1f889c50e8b3
Step 5 : ENV NODE_ENV production
 ---> Running in c3b26145c4e4
 ---> 8a1e3573540e
Removing intermediate container c3b26145c4e4
Step 6 : WORKDIR /usr/src/app
 ---> Running in 4d0945146e32
 ---> a19d565468c2
Removing intermediate container 4d0945146e32
Step 7 : CMD npm start
 ---> Running in f8c5c2033791
 ---> f427d213e0a5
Removing intermediate container f8c5c2033791
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d08407041b7c
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3545 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 8939dd32b565
Removing intermediate container d08407041b7c
Successfully built 8939dd32b565

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test23`

Contents of dockerfile `/root/docker-node/.~tmp.test23/Dockerfile`:

```
FROM nodesource/wheezy:0.10.40
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.40-test1` from `/root/docker-node/.~tmp.test23`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.40
 ---> 8939dd32b565
Step 2 : ENV NODE_ENV test
 ---> Running in 11a87502fc0b
 ---> a5d8bc655787
Removing intermediate container 11a87502fc0b
Step 3 : RUN node -v
 ---> Running in e23cf7008628
v0.10.40
 ---> fb705bad1dc6
Removing intermediate container e23cf7008628
Step 4 : RUN node -p "process.versions"
 ---> Running in 94aadbb0d3d2
{ http_parser: '1.0',
  node: '0.10.40',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1p' }
 ---> 6f8f835e3324
Removing intermediate container 94aadbb0d3d2
Step 5 : RUN npm --version
 ---> Running in 6726abab5e9b
1.4.28
 ---> acc047561b41
Removing intermediate container 6726abab5e9b
Successfully built acc047561b41

```

# Tested image `nodesource/jessie:4.2.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ec7cf68bc690
 ---> 24684b3e2d36
Removing intermediate container ec7cf68bc690
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.2-2nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 4dbcd3572e2b
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.2-2nodesource1~jessie1) ...
Setting up nodejs (4.2.2-2nodesource1~jessie1) ...
 ---> 20140558bd0f
Removing intermediate container 4dbcd3572e2b
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in d7814195c6f4
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1, bl@0.9.5)
└── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.2.2 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.2/node-v4.2.2.tar.gz
[0m[91mgyp [0m[91mhttp 200[0m[91m http://nodejs.org/dist/v4.2.2/node-v4.2.2.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.2/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.2/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
[0m[91mgyp[0m[91m info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info[0m[91m [0m[91mspawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/root/.node-gyp/4.2.2/common.gypi',
gyp[0m[91m [0m[91minfo spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.2',
[0m[91mgyp info[0m[91m spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
[0m[91mgyp [0m[91minfo spawn args   '--depth=.',
gyp info spawn args[0m[91m   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m
[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 80a7051e8892
Removing intermediate container d7814195c6f4
Step 5 : ENV NODE_ENV production
 ---> Running in e35ed9a274e1
 ---> 22c0b0fbfe0d
Removing intermediate container e35ed9a274e1
Step 6 : WORKDIR /usr/src/app
 ---> Running in 5d8b2f8a79f4
 ---> 11f56426feaf
Removing intermediate container 5d8b2f8a79f4
Step 7 : CMD npm start
 ---> Running in 8328a8384705
 ---> 493c0b0201ba
Removing intermediate container 8328a8384705
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 0cb94318ddc1
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3684 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0ef0624cdcc5
Removing intermediate container 0cb94318ddc1
Successfully built 0ef0624cdcc5

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test83`

Contents of dockerfile `/root/docker-node/.~tmp.test83/Dockerfile`:

```
FROM nodesource/jessie:4.2.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.2-test1` from `/root/docker-node/.~tmp.test83`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.2
 ---> 0ef0624cdcc5
Step 2 : ENV NODE_ENV test
 ---> Running in 070f2022ac83
 ---> f41716c15c08
Removing intermediate container 070f2022ac83
Step 3 : RUN node -v
 ---> Running in bc90a82d1e4e
v4.2.2
 ---> ecce163913b8
Removing intermediate container bc90a82d1e4e
Step 4 : RUN node -p "process.versions"
 ---> Running in ca37bc164c9d
{ http_parser: '2.5.0',
  node: '4.2.2',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '52.1',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 161539c3430d
Removing intermediate container ca37bc164c9d
Step 5 : RUN npm --version
 ---> Running in 4a12f46fc0e9
2.14.7
 ---> 8cd90dc7aac2
Removing intermediate container 4a12f46fc0e9
Successfully built 8cd90dc7aac2

```

# Tested image `nodesource/jessie:0.10.31`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in e87f6354b6d6
 ---> b3543811b8ef
Removing intermediate container e87f6354b6d6
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.31-1chl1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d974092d19bf
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.31-1chl1~jessie1) ...
Setting up nodejs (0.10.31-1chl1~jessie1) ...
 ---> 8d6aa9ac9d9f
Removing intermediate container d974092d19bf
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in e90f744df22e
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.31 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.31/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.31/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.31/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.31',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.31
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 4d938420c4cd
Removing intermediate container e90f744df22e
Step 5 : ENV NODE_ENV production
 ---> Running in 148fcb67aeb7
 ---> db2664a2860e
Removing intermediate container 148fcb67aeb7
Step 6 : WORKDIR /usr/src/app
 ---> Running in fb00b6044255
 ---> 157562271a45
Removing intermediate container fb00b6044255
Step 7 : CMD npm start
 ---> Running in f357c0e30bb9
 ---> 2dd0a3ef87a1
Removing intermediate container f357c0e30bb9
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 99f65969471d
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2484 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> eaa1ddad8bc8
Removing intermediate container 99f65969471d
Successfully built eaa1ddad8bc8

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test59`

Contents of dockerfile `/root/docker-node/.~tmp.test59/Dockerfile`:

```
FROM nodesource/jessie:0.10.31
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.31-test1` from `/root/docker-node/.~tmp.test59`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.31
 ---> eaa1ddad8bc8
Step 2 : ENV NODE_ENV test
 ---> Running in 5f329c7b96b5
 ---> 08cf88c229aa
Removing intermediate container 5f329c7b96b5
Step 3 : RUN node -v
 ---> Running in 44e3529978ae
v0.10.31
 ---> 2c675dc5e9c4
Removing intermediate container 44e3529978ae
Step 4 : RUN node -p "process.versions"
 ---> Running in f329d901b115
{ http_parser: '1.0',
  node: '0.10.31',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1i' }
 ---> cdba3a6a1fea
Removing intermediate container f329d901b115
Step 5 : RUN npm --version
 ---> Running in e04018e3e422
1.4.23
 ---> ececa341b6be
Removing intermediate container e04018e3e422
Successfully built ececa341b6be

```

# Tested image `nodesource/wheezy:4.3.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2198f9f9a5bc
 ---> e98245f94111
Removing intermediate container 2198f9f9a5bc
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.3.1-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ddf61947612d
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Cur[0m[91mrent
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.3.1-1nodesource1~wheezy1) ...
 ---> 00aa62d254f3
Removing intermediate container ddf61947612d
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 7a60cf87b5db
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
└── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.3.1 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.3.1/node-v4.3.1.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp [0m[91m200 http://nodejs.org/dist/v4.3.1/node-v4.3.1.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.3.1/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.3.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.3.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.3.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
[0m[91mgyp ERR! node -v v4.3.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> a4ace6d8fadb
Removing intermediate container 7a60cf87b5db
Step 5 : ENV NODE_ENV production
 ---> Running in 9891fed9dc00
 ---> fd22187f4dea
Removing intermediate container 9891fed9dc00
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8519ad566ae7
 ---> ad96a03a766d
Removing intermediate container 8519ad566ae7
Step 7 : CMD npm start
 ---> Running in 38065d2ab6ee
 ---> 17c8eb2bc048
Removing intermediate container 38065d2ab6ee
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in b435673aae68
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 4s (1804 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> c875f42b85ea
Removing intermediate container b435673aae68
Successfully built c875f42b85ea

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test0`

Contents of dockerfile `/root/docker-node/.~tmp.test0/Dockerfile`:

```
FROM nodesource/wheezy:4.3.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.3.1-test1` from `/root/docker-node/.~tmp.test0`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.3.1
 ---> c875f42b85ea
Step 2 : ENV NODE_ENV test
 ---> Running in fdd92be4eceb
 ---> 7119bc24e327
Removing intermediate container fdd92be4eceb
Step 3 : RUN node -v
 ---> Running in af80584c6489
v4.3.1
 ---> e74f3ffdd9b5
Removing intermediate container af80584c6489
Step 4 : RUN node -p "process.versions"
 ---> Running in 99d4a9839198
{ http_parser: '2.5.2',
  node: '4.3.1',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2f' }
 ---> 298395ab767f
Removing intermediate container 99d4a9839198
Step 5 : RUN npm --version
 ---> Running in a2fa8324cccd
2.14.12
 ---> 96d7f6a47fa0
Removing intermediate container a2fa8324cccd
Successfully built 96d7f6a47fa0

```

# Tested image `nodesource/jessie:0.10.40`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 4c86984d830f
 ---> 5f11e568e791
Removing intermediate container 4c86984d830f
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.40-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d1f6f54ab313
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.40-1nodesource1~jessie1) ...
Setting up nodejs (0.10.40-1nodesource1~jessie1) ...
 ---> 693a8099abae
Removing intermediate container d1f6f54ab313
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 4604dcd807b3
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info [0m[91musing pangyp@2.3.3
[0m[91mgyp info using node@0.10.40 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v0.10.40/node-v0.10.40.tar.gz
[0m[91mgyp http[0m[91m [0m[91m200 http://nodejs.org/dist/v0.10.40/node-v0.10.40.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v0.10.40/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp[0m[91m 200 http://nodejs.org/dist/v0.10.40/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.40/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info[0m[91m spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.40',
gyp info[0m[91m [0m[91mspawn args   '-Druntime=node',
[0m[91mgyp info spawn args[0m[91m   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp[0m[91m ERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp [0m[91mERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.40
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 755e467f400b
Removing intermediate container 4604dcd807b3
Step 5 : ENV NODE_ENV production
 ---> Running in 4cda3243104f
 ---> 5fe895dcafdd
Removing intermediate container 4cda3243104f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 1dcb9baf08f7
 ---> b03cc77af7b3
Removing intermediate container 1dcb9baf08f7
Step 7 : CMD npm start
 ---> Running in 32c00afb306d
 ---> e35a0c93fa13
Removing intermediate container 32c00afb306d
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in dccac3b92e4d
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2562 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 25bd5ba5527a
Removing intermediate container dccac3b92e4d
Successfully built 25bd5ba5527a

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test68`

Contents of dockerfile `/root/docker-node/.~tmp.test68/Dockerfile`:

```
FROM nodesource/jessie:0.10.40
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.40-test1` from `/root/docker-node/.~tmp.test68`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.40
 ---> 25bd5ba5527a
Step 2 : ENV NODE_ENV test
 ---> Running in 21caad2c039c
 ---> 9c7ab0a4ce0d
Removing intermediate container 21caad2c039c
Step 3 : RUN node -v
 ---> Running in 6123d34c9008
v0.10.40
 ---> 85140e457abe
Removing intermediate container 6123d34c9008
Step 4 : RUN node -p "process.versions"
 ---> Running in 4d0f43804eca
{ http_parser: '1.0',
  node: '0.10.40',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1p' }
 ---> 4798ab512d3a
Removing intermediate container 4d0f43804eca
Step 5 : RUN npm --version
 ---> Running in 47b247a37956
1.4.28
 ---> f7ce530decc1
Removing intermediate container 47b247a37956
Successfully built f7ce530decc1

```

# Tested image `nodesource/jessie:0.10.39`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 64d0b70a09c1
 ---> ef8c83640e26
Removing intermediate container 64d0b70a09c1
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.39-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ae86fef29522
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.39-1nodesource1~jessie1) ...
Setting up nodejs (0.10.39-1nodesource1~jessie1) ...
 ---> a94242acac87
Removing intermediate container ae86fef29522
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in d51d5cbbdae8
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.39 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.39/node-v0.10.39.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.39/node-v0.10.39.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v0.10.39/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.39/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp[0m[91m info spawn args[0m[91m   'binding.gyp',
[0m[91mgyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp [0m[91minfo spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info[0m[91m spawn args[0m[91m   '-I',
gyp info[0m[91m spawn args   '/root/.node-gyp/0.10.39/common.gypi',
gyp[0m[91m info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.39',
gyp info[0m[91m spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
[0m[91mgyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp [0m[91mERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp [0m[91mERR![0m[91m [0m[91mstack     at ChildProcess.emit (events.js:98:17)
gyp [0m[91mERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command[0m[91m "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.39
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> b94d57e5389c
Removing intermediate container d51d5cbbdae8
Step 5 : ENV NODE_ENV production
 ---> Running in 94a413aae2ad
 ---> e7e360b4b61c
Removing intermediate container 94a413aae2ad
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8319e51f19a8
 ---> d822bed1107f
Removing intermediate container 8319e51f19a8
Step 7 : CMD npm start
 ---> Running in f82b9939e0a0
 ---> 2422d42bdb4f
Removing intermediate container f82b9939e0a0
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 2a5d78b078ae
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (4643 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b2a550e1de26
Removing intermediate container 2a5d78b078ae
Successfully built b2a550e1de26

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test67`

Contents of dockerfile `/root/docker-node/.~tmp.test67/Dockerfile`:

```
FROM nodesource/jessie:0.10.39
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.39-test1` from `/root/docker-node/.~tmp.test67`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.39
 ---> b2a550e1de26
Step 2 : ENV NODE_ENV test
 ---> Running in 9bd090298920
 ---> 2bbbe5ae0a3e
Removing intermediate container 9bd090298920
Step 3 : RUN node -v
 ---> Running in 10741661ee2f
v0.10.39
 ---> f837594c3cf1
Removing intermediate container 10741661ee2f
Step 4 : RUN node -p "process.versions"
 ---> Running in 18fb1e1c4826
{ http_parser: '1.0',
  node: '0.10.39',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1o' }
 ---> d12125f5470b
Removing intermediate container 18fb1e1c4826
Step 5 : RUN npm --version
 ---> Running in 7cb1a303c80a
1.4.28
 ---> 1991094d1b96
Removing intermediate container 7cb1a303c80a
Successfully built 1991094d1b96

```

# Tested image `nodesource/wheezy:0.12.8`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 450d690d4396
 ---> 47b509212cae
Removing intermediate container 450d690d4396
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.8-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ef7f3ef50ce7
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.8-1nodesource1~wheezy1) ...
 ---> 86076a562a43
Removing intermediate container ef7f3ef50ce7
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in e7793f9ce0e9
[91mnpm[0m[91m [0m[91mWARN[0m[91m deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1, bl@0.9.5)
└── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with ok
[0m[91mgyp info using[0m[91m pangyp@2.3.3
gyp info [0m[91musing node@0.12.8 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp [0m[91mGET http://nodejs.org/dist/v0.12.8/node-v0.12.8.tar.gz
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.8/node-v0.12.8.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.8/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.8/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp [0m[91minfo spawn args   'binding.gyp',
gyp info[0m[91m spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.8/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.8',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1075:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.8
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 236b4968ba6e
Removing intermediate container e7793f9ce0e9
Step 5 : ENV NODE_ENV production
 ---> Running in 1bf7b9041068
 ---> 61bad4da80d0
Removing intermediate container 1bf7b9041068
Step 6 : WORKDIR /usr/src/app
 ---> Running in 97b58df41265
 ---> 0f25f4286c1f
Removing intermediate container 97b58df41265
Step 7 : CMD npm start
 ---> Running in cbceba5a4b1b
 ---> 47cdc710bbfd
Removing intermediate container cbceba5a4b1b
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 5da78c530282
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3307 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> dc64f3c44cae
Removing intermediate container 5da78c530282
Successfully built dc64f3c44cae

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test33`

Contents of dockerfile `/root/docker-node/.~tmp.test33/Dockerfile`:

```
FROM nodesource/wheezy:0.12.8
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.8-test1` from `/root/docker-node/.~tmp.test33`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.8
 ---> dc64f3c44cae
Step 2 : ENV NODE_ENV test
 ---> Running in da611d0ac807
 ---> efc75dbc5281
Removing intermediate container da611d0ac807
Step 3 : RUN node -v
 ---> Running in 4b171618ba03
v0.12.8
 ---> 52b0820520d4
Removing intermediate container 4b171618ba03
Step 4 : RUN node -p "process.versions"
 ---> Running in 92e4830ff87c
{ http_parser: '2.3',
  node: '0.12.8',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1p' }
 ---> 27daac7990ed
Removing intermediate container 92e4830ff87c
Step 5 : RUN npm --version
 ---> Running in 28af25f9a0e2
2.14.9
 ---> ba9ffa6411c5
Removing intermediate container 28af25f9a0e2
Successfully built ba9ffa6411c5

```

# Tested image `nodesource/wheezy:4.2.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in eaf36e9aaedd
 ---> 385db9db2b5d
Removing intermediate container eaf36e9aaedd
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 4a104cf1dcac
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  S[0m[91mpeed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.2.0-1nodesource1~wheezy1) ...
 ---> 35463af73f61
Removing intermediate container 4a104cf1dcac
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0ec406883f3e
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1, bl@0.9.5)
[91mgyp [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp[0m[91m info using node@4.2.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.0/node-v4.2.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.0/node-v4.2.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 4ab6adb41169
Removing intermediate container 0ec406883f3e
Step 5 : ENV NODE_ENV production
 ---> Running in 36efd0be87a5
 ---> f9d7dea6702a
Removing intermediate container 36efd0be87a5
Step 6 : WORKDIR /usr/src/app
 ---> Running in be85c571fd97
 ---> 66e5c909f9af
Removing intermediate container be85c571fd97
Step 7 : CMD npm start
 ---> Running in 5b7fc968f0b3
 ---> 768fda355123
Removing intermediate container 5b7fc968f0b3
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 37f13a0c9c69
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (6458 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 315bad10f671
Removing intermediate container 37f13a0c9c69
Successfully built 315bad10f671

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test35`

Contents of dockerfile `/root/docker-node/.~tmp.test35/Dockerfile`:

```
FROM nodesource/wheezy:4.2.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.2.0-test1` from `/root/docker-node/.~tmp.test35`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.2.0
 ---> 315bad10f671
Step 2 : ENV NODE_ENV test
 ---> Running in e6622eaf674a
 ---> 0bf3752176c7
Removing intermediate container e6622eaf674a
Step 3 : RUN node -v
 ---> Running in d99da843289a
v4.2.0
 ---> d5cf048fe686
Removing intermediate container d99da843289a
Step 4 : RUN node -p "process.versions"
 ---> Running in ab7f2a6c8dab
{ http_parser: '2.5.0',
  node: '4.2.0',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 704c45914ec7
Removing intermediate container ab7f2a6c8dab
Step 5 : RUN npm --version
 ---> Running in 4cb14839951d
2.14.7
 ---> 83ade8858f80
Removing intermediate container 4cb14839951d
Successfully built 83ade8858f80

```

# Tested image `nodesource/wheezy:0.10.30`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in cdea67a4aa99
 ---> 3f7b6d32e2f6
Removing intermediate container cdea67a4aa99
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.30-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ba4b02029b33
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.30-1nodesource1~wheezy1) ...
 ---> e9001160b19d
Removing intermediate container ba4b02029b33
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 18ad5fdd026d
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, oauth-sign@0.5.0, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.30 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.30/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.30/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.30/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.30',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m
[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR![0m[91m stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.30
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> b03956f1e1b4
Removing intermediate container 18ad5fdd026d
Step 5 : ENV NODE_ENV production
 ---> Running in a8eec340ce1f
 ---> ce4587daf9fa
Removing intermediate container a8eec340ce1f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 11441ce56572
 ---> 778ee95d465c
Removing intermediate container 11441ce56572
Step 7 : CMD npm start
 ---> Running in f85de5a4a0e3
 ---> 75f45edb42dc
Removing intermediate container f85de5a4a0e3
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6eac6a95e8eb
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:3 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:4 http://security.debian.org wheezy/updates Release [102 kB]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:8 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Get:9 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Fetched 8511 kB in 4s (1922 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 018b78303521
Removing intermediate container 6eac6a95e8eb
Successfully built 018b78303521

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test13`

Contents of dockerfile `/root/docker-node/.~tmp.test13/Dockerfile`:

```
FROM nodesource/wheezy:0.10.30
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.30-test1` from `/root/docker-node/.~tmp.test13`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.30
 ---> 018b78303521
Step 2 : ENV NODE_ENV test
 ---> Running in d5a4ec6211fa
 ---> 00070c99bbde
Removing intermediate container d5a4ec6211fa
Step 3 : RUN node -v
 ---> Running in 48c728aaa49f
v0.10.30
 ---> 4f788878086a
Removing intermediate container 48c728aaa49f
Step 4 : RUN node -p "process.versions"
 ---> Running in 7b3995c558e5
{ http_parser: '1.0',
  node: '0.10.30',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1h' }
 ---> 83e96a12bb93
Removing intermediate container 7b3995c558e5
Step 5 : RUN npm --version
 ---> Running in 28cf788c95bd
1.4.21
 ---> 08b159cf5da6
Removing intermediate container 28cf788c95bd
Successfully built 08b159cf5da6

```

# Tested image `nodesource/wheezy:0.12.6`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 9634fc56616c
 ---> 3df45819adbf
Removing intermediate container 9634fc56616c
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.6-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 12878b180f4c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.6-1nodesource1~wheezy1) ...
 ---> 12f43fa066a2
Removing intermediate container 12878b180f4c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in feee031910d9
[91mnpm[0m[91m [0m[91mWARN[0m[91m deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@0.12.6 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.6/node-v0.12.6.tar.gz
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.6/node-v0.12.6.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.6/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.6/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.6/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.6',
gyp info spawn args   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.6
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> cab1d43e0f18
Removing intermediate container feee031910d9
Step 5 : ENV NODE_ENV production
 ---> Running in a917adbd259c
 ---> c22758df030c
Removing intermediate container a917adbd259c
Step 6 : WORKDIR /usr/src/app
 ---> Running in 30ab146bd645
 ---> e00186f80252
Removing intermediate container 30ab146bd645
Step 7 : CMD npm start
 ---> Running in 63dff636aabf
 ---> 65b28166c6ed
Removing intermediate container 63dff636aabf
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in ed0d6b3c37ca
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 3s (2329 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 40632937d0d1
Removing intermediate container ed0d6b3c37ca
Successfully built 40632937d0d1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test31`

Contents of dockerfile `/root/docker-node/.~tmp.test31/Dockerfile`:

```
FROM nodesource/wheezy:0.12.6
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.6-test1` from `/root/docker-node/.~tmp.test31`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.6
 ---> 40632937d0d1
Step 2 : ENV NODE_ENV test
 ---> Running in af927c72ddb7
 ---> 221910281e2c
Removing intermediate container af927c72ddb7
Step 3 : RUN node -v
 ---> Running in 6cc8ec88820a
v0.12.6
 ---> 4d5cc44ac6a2
Removing intermediate container 6cc8ec88820a
Step 4 : RUN node -p "process.versions"
 ---> Running in 4a2d6cc3ae9d
{ http_parser: '2.3',
  node: '0.12.6',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1o' }
 ---> 2f38cbaa7f09
Removing intermediate container 4a2d6cc3ae9d
Step 5 : RUN npm --version
 ---> Running in 82817a781a55
2.11.2
 ---> 8969bd6b98a1
Removing intermediate container 82817a781a55
Successfully built 8969bd6b98a1

```

# Tested image `nodesource/jessie:5.5.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 3d78208613af
 ---> 5d57dcb970d8
Removing intermediate container 3d78208613af
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.5.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 5a56c06edd61
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.5.0-1nodesource1~jessie1) ...
Setting up nodejs (5.5.0-1nodesource1~jessie1) ...
 ---> df84c27ea3d1
Removing intermediate container 5a56c06edd61
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in bfa420a8b7a5
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated[0m[91m graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
gyp info using node@5.5.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.5.0/node-v5.5.0.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v5.5.0/node-v5.5.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.5.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.5.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.5.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.5.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:100:13)
gyp ERR! stack     at ChildProcess.emit (events.js:185:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.5.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> bec58831291f
Removing intermediate container bfa420a8b7a5
Step 5 : ENV NODE_ENV production
 ---> Running in 8d18c9348335
 ---> 4328e897519b
Removing intermediate container 8d18c9348335
Step 6 : WORKDIR /usr/src/app
 ---> Running in 88bfa4d0451e
 ---> c8101e7e1ae9
Removing intermediate container 88bfa4d0451e
Step 7 : CMD npm start
 ---> Running in eecda118f244
 ---> b3ab9ba36811
Removing intermediate container eecda118f244
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 9df3046253e7
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Get:7 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Fetched 9651 kB in 2s (3816 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> aa7d184a93d1
Removing intermediate container 9df3046253e7
Successfully built aa7d184a93d1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test56`

Contents of dockerfile `/root/docker-node/.~tmp.test56/Dockerfile`:

```
FROM nodesource/jessie:5.5.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.5.0-test1` from `/root/docker-node/.~tmp.test56`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.5.0
 ---> aa7d184a93d1
Step 2 : ENV NODE_ENV test
 ---> Running in 7b327cd23859
 ---> a65ef2b04edb
Removing intermediate container 7b327cd23859
Step 3 : RUN node -v
 ---> Running in c38961bb0776
v5.5.0
 ---> 2c6d4999f76a
Removing intermediate container c38961bb0776
Step 4 : RUN node -p "process.versions"
 ---> Running in 6e28f980938f
{ http_parser: '2.6.0',
  node: '5.5.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 8d0bcda315ce
Removing intermediate container 6e28f980938f
Step 5 : RUN npm --version
 ---> Running in 674371abaa10
3.3.12
 ---> ed52ed7dee2f
Removing intermediate container 674371abaa10
Successfully built ed52ed7dee2f

```

# Tested image `nodesource/jessie:4.1.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 152d4ddd8408
 ---> 00574f543022
Removing intermediate container 152d4ddd8408
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.1.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in cf915e47543c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.1.1-1nodesource1~jessie1) ...
Setting up nodejs (4.1.1-1nodesource1~jessie1) ...
 ---> 90b390c96fc6
Removing intermediate container cf915e47543c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0c86d8d72479
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated[0m[91m graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info[0m[91m using pangyp@2.3.3
gyp info using[0m[91m node@4.1.1 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.1.1/node-v4.1.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.1.1/node-v4.1.1.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.1.1/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v4.1.1/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info [0m[91mspawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.1.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.1.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp[0m[91m info spawn args   '--generator-output',
gyp [0m[91minfo[0m[91m spawn args   'build',
gyp info spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR![0m[91m stack     at emitTwo (events.js:87:13)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.1.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> b0bc46e1f87c
Removing intermediate container 0c86d8d72479
Step 5 : ENV NODE_ENV production
 ---> Running in e64ea9116dc1
 ---> 7260cd3f8b33
Removing intermediate container e64ea9116dc1
Step 6 : WORKDIR /usr/src/app
 ---> Running in 63add4131752
 ---> 23f45ced6da8
Removing intermediate container 63add4131752
Step 7 : CMD npm start
 ---> Running in cba0fb8e21f0
 ---> 496ca5bc292a
Removing intermediate container cba0fb8e21f0
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 8f67974e33ef
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 6s (1599 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 6295b1584170
Removing intermediate container 8f67974e33ef
Successfully built 6295b1584170

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test80`

Contents of dockerfile `/root/docker-node/.~tmp.test80/Dockerfile`:

```
FROM nodesource/jessie:4.1.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.1.1-test1` from `/root/docker-node/.~tmp.test80`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.1.1
 ---> 6295b1584170
Step 2 : ENV NODE_ENV test
 ---> Running in 78ab5d927524
 ---> a71ec09f6599
Removing intermediate container 78ab5d927524
Step 3 : RUN node -v
 ---> Running in 6c347733ec33
v4.1.1
 ---> a995162d91a5
Removing intermediate container 6c347733ec33
Step 4 : RUN node -p "process.versions"
 ---> Running in e02ff548c40f
{ http_parser: '2.5.0',
  node: '4.1.1',
  v8: '4.5.103.33',
  uv: '1.7.4',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 109ce28589ae
Removing intermediate container e02ff548c40f
Step 5 : RUN npm --version
 ---> Running in c3655145c131
2.14.4
 ---> a968c06b04f2
Removing intermediate container c3655145c131
Successfully built a968c06b04f2

```

# Tested image `nodesource/wheezy:5.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 9f0912ba88d1
 ---> 7ea3cf0e8ac8
Removing intermediate container 9f0912ba88d1
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.0.0-3nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6490afba2eba
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.0.0-3nodesource1~wheezy1) ...
 ---> 64103df644c8
Removing intermediate container 6490afba2eba
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c029ba381ae1
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp[0m[91m info[0m[91m using pangyp@2.3.3
gyp info using node@5.0.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v5.0.0/node-v5.0.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m 200 http://nodejs.org/dist/v5.0.0/node-v5.0.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.0.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.0.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
[0m[91mgyp info spawn args[0m[91m   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info [0m[91mspawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.0.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/5.0.0',
gyp info spawn args[0m[91m   '-Druntime=node',
gyp[0m[91m info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp[0m[91m info[0m[91m spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp info[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
[0m[91mgyp [0m[91mERR! [0m[91mstack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.0.0
[0m[91mgyp ERR! pangyp -v v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> 6e758098a227
Removing intermediate container c029ba381ae1
Step 5 : ENV NODE_ENV production
 ---> Running in c7dc224b11b1
 ---> 0ddf10a32ed0
Removing intermediate container c7dc224b11b1
Step 6 : WORKDIR /usr/src/app
 ---> Running in bf8d0b0778c7
 ---> 0edbbe18743b
Removing intermediate container bf8d0b0778c7
Step 7 : CMD npm start
 ---> Running in 10a2afdfb662
 ---> 340f7b949bca
Removing intermediate container 10a2afdfb662
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in fdea9f94ae8e
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Get:9 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Fetched 8511 kB in 3s (2512 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 05efc0123d13
Removing intermediate container fdea9f94ae8e
Successfully built 05efc0123d13

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test6`

Contents of dockerfile `/root/docker-node/.~tmp.test6/Dockerfile`:

```
FROM nodesource/wheezy:5.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.0.0-test1` from `/root/docker-node/.~tmp.test6`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.0.0
 ---> 05efc0123d13
Step 2 : ENV NODE_ENV test
 ---> Running in 4b30cbfa881b
 ---> 012ab34eb003
Removing intermediate container 4b30cbfa881b
Step 3 : RUN node -v
 ---> Running in ae0b2191f7d6
v5.0.0
 ---> 9bb5cb8d7246
Removing intermediate container ae0b2191f7d6
Step 4 : RUN node -p "process.versions"
 ---> Running in f0c8c0c18ba8
{ http_parser: '2.5.0',
  node: '5.0.0',
  v8: '4.6.85.28',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '4.8.1.1',
  modules: '47',
  openssl: '1.0.2d' }
 ---> ae8a64658982
Removing intermediate container f0c8c0c18ba8
Step 5 : RUN npm --version
 ---> Running in 25c7303c42d7
3.3.6
 ---> d4f637b386a1
Removing intermediate container 25c7303c42d7
Successfully built d4f637b386a1

```

# Tested image `nodesource/jessie:5.1.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 18d76743c1de
 ---> a40336a8771c
Removing intermediate container 18d76743c1de
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.1.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d1224ee8d098
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.1.1-1nodesource1~jessie1) ...
Setting up nodejs (5.1.1-1nodesource1~jessie1) ...
 ---> 9d8a59654ed4
Removing intermediate container d1224ee8d098
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 5f013f64a366
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
npm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@5.1.1 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET http://nodejs.org/dist/v5.1.1/node-v5.1.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.1.1/node-v5.1.1.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.1.1/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200[0m[91m http://nodejs.org/dist/v5.1.1/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
[0m[91mgyp[0m[91m info spawn args   'make',
[0m[91mgyp info[0m[91m spawn args   '-I',
gyp info spawn args[0m[91m   '/build/config.gypi',
gyp [0m[91minfo spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.1.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.1.1',
gyp info spawn args[0m[91m   '-Druntime=node',
[0m[91mgyp [0m[91minfo spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args[0m[91m   '--no-parallel',
gyp [0m[91minfo spawn args[0m[91m   '--generator-output',
gyp info spawn args   'build',
gyp[0m[91m [0m[91minfo[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! [0m[91mconfigure error[0m[91m 
[0m[91mgyp[0m[91m ERR! [0m[91mstack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp [0m[91mERR! stack     at emitTwo (events.js:87:13)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR![0m[91m [0m[91mSystem Linux 3.13.0-79-generic
gyp ERR![0m[91m command[0m[91m "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! [0m[91mnode -v v5.1.1
[0m[91mgyp ERR! [0m[91mpangyp -v[0m[91m v2.3.3
[0m[91mgyp [0m[91mERR! [0m[91mnot ok[0m[91m 
[0m
 ---> 51604761145d
Removing intermediate container 5f013f64a366
Step 5 : ENV NODE_ENV production
 ---> Running in 848925a1051b
 ---> 429579d0f1b4
Removing intermediate container 848925a1051b
Step 6 : WORKDIR /usr/src/app
 ---> Running in 823d6fdad585
 ---> 587fdf2020d4
Removing intermediate container 823d6fdad585
Step 7 : CMD npm start
 ---> Running in d8dcfc30819c
 ---> 12aea84aeb59
Removing intermediate container d8dcfc30819c
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 567501c9747c
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2454 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f68f2be9e52d
Removing intermediate container 567501c9747c
Successfully built f68f2be9e52d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test52`

Contents of dockerfile `/root/docker-node/.~tmp.test52/Dockerfile`:

```
FROM nodesource/jessie:5.1.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.1.1-test1` from `/root/docker-node/.~tmp.test52`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.1.1
 ---> f68f2be9e52d
Step 2 : ENV NODE_ENV test
 ---> Running in e4cf25d7bdd4
 ---> 397c26837065
Removing intermediate container e4cf25d7bdd4
Step 3 : RUN node -v
 ---> Running in c68f0efa412e
v5.1.1
 ---> deecc48a98bf
Removing intermediate container c68f0efa412e
Step 4 : RUN node -p "process.versions"
 ---> Running in d87e3664d286
{ http_parser: '2.6.0',
  node: '5.1.1',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 92fc4dcc244e
Removing intermediate container d87e3664d286
Step 5 : RUN npm --version
 ---> Running in 0f295d0fe693
3.3.12
 ---> 7e9459ae7d8d
Removing intermediate container 0f295d0fe693
Successfully built 7e9459ae7d8d

```

# Tested image `nodesource/jessie:0.10.35`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 03fdac93d822
 ---> 6fd3e288b4f0
Removing intermediate container 03fdac93d822
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.35-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 3885fcc4f9bc
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.35-1nodesource1~jessie1) ...
Setting up nodejs (0.10.35-1nodesource1~jessie1) ...
 ---> fc2b43190ba3
Removing intermediate container 3885fcc4f9bc
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 176cb589fdf6
[91mnpm[0m[91m WARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, oauth-sign@0.5.0, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.35 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.35/node-v0.10.35.tar.gz
[0m[91mgyp [0m[91mhttp[0m[91m 200 http://nodejs.org/dist/v0.10.35/node-v0.10.35.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v0.10.35/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v0.10.35/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.35/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.35',
gyp info [0m[91mspawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m [0m[91mERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.35
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 1748e674795d
Removing intermediate container 176cb589fdf6
Step 5 : ENV NODE_ENV production
 ---> Running in b5bbca573ee0
 ---> daef466b67bc
Removing intermediate container b5bbca573ee0
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6d50bcb152b2
 ---> c4c2a5cfb658
Removing intermediate container 6d50bcb152b2
Step 7 : CMD npm start
 ---> Running in af25634961a2
 ---> c7ecb032b774
Removing intermediate container af25634961a2
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 230c83279b97
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5601 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 9e0bbcc09173
Removing intermediate container 230c83279b97
Successfully built 9e0bbcc09173

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test63`

Contents of dockerfile `/root/docker-node/.~tmp.test63/Dockerfile`:

```
FROM nodesource/jessie:0.10.35
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.35-test1` from `/root/docker-node/.~tmp.test63`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.35
 ---> 9e0bbcc09173
Step 2 : ENV NODE_ENV test
 ---> Running in ac2293c063a0
 ---> a23180c8354b
Removing intermediate container ac2293c063a0
Step 3 : RUN node -v
 ---> Running in a060130cea51
v0.10.35
 ---> 6f2332af2cbf
Removing intermediate container a060130cea51
Step 4 : RUN node -p "process.versions"
 ---> Running in 844a6e9eb1b3
{ http_parser: '1.0',
  node: '0.10.35',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1j' }
 ---> d7807fd1c018
Removing intermediate container 844a6e9eb1b3
Step 5 : RUN npm --version
 ---> Running in 198d115bf2ed
1.4.28
 ---> 63020b1fc1c9
Removing intermediate container 198d115bf2ed
Successfully built 63020b1fc1c9

```

# Tested image `nodesource/jessie:4.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 22c3ca9668e0
 ---> ea27889d9502
Removing intermediate container 22c3ca9668e0
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.0.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d35bb4c39a19
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.0.0-1nodesource1~jessie1) ...
Setting up nodejs (4.0.0-1nodesource1~jessie1) ...
 ---> 6b1bfc15974a
Removing intermediate container d35bb4c39a19
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c16e297996fe
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.0.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v4.0.0/node-v4.0.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp 200 http://nodejs.org/dist/v4.0.0/node-v4.0.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.0.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.0.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info [0m[91mspawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info [0m[91mspawn args   '-I',
gyp info[0m[91m spawn args   '/root/.node-gyp/4.0.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.0.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info[0m[91m spawn args[0m[91m   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info[0m[91m spawn args[0m[91m   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error[0m[91m 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command[0m[91m "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v4.0.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! [0m[91mnot ok 
[0m
 ---> 9c44b9147f22
Removing intermediate container c16e297996fe
Step 5 : ENV NODE_ENV production
 ---> Running in dfdceb095745
 ---> 02d906058fbc
Removing intermediate container dfdceb095745
Step 6 : WORKDIR /usr/src/app
 ---> Running in 5325f592bb68
 ---> b857efca9301
Removing intermediate container 5325f592bb68
Step 7 : CMD npm start
 ---> Running in 6c71024b1c02
 ---> e0ab407425be
Removing intermediate container 6c71024b1c02
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6e64eb517769
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 4s (2373 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0380db358772
Removing intermediate container 6e64eb517769
Successfully built 0380db358772

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test48`

Contents of dockerfile `/root/docker-node/.~tmp.test48/Dockerfile`:

```
FROM nodesource/jessie:4.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.0.0-test1` from `/root/docker-node/.~tmp.test48`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.0.0
 ---> 0380db358772
Step 2 : ENV NODE_ENV test
 ---> Running in 4ef15e831b24
 ---> de09358b28eb
Removing intermediate container 4ef15e831b24
Step 3 : RUN node -v
 ---> Running in 8e7087b125cb
v4.0.0
 ---> fe6edfb717f7
Removing intermediate container 8e7087b125cb
Step 4 : RUN node -p "process.versions"
 ---> Running in 85dfcaac9ca7
{ http_parser: '2.5.0',
  node: '4.0.0',
  v8: '4.5.103.30',
  uv: '1.7.3',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 420ef9c8ad2a
Removing intermediate container 85dfcaac9ca7
Step 5 : RUN npm --version
 ---> Running in 029ed0f79c4a
2.14.2
 ---> cd461a599650
Removing intermediate container 029ed0f79c4a
Successfully built cd461a599650

```

# Tested image `nodesource/jessie:0.12.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 17704830fdef
 ---> aa202155e1c5
Removing intermediate container 17704830fdef
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 00f35858f532
[91m  % Total    % Received % Xferd  Average Speed   Time    Time   [0m[91m  Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.2-1nodesource1~jessie1) ...
Setting up nodejs (0.12.2-1nodesource1~jessie1) ...
 ---> 355154ca6998
Removing intermediate container 00f35858f532
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1657e714d59d
[91mnpm[0m[91m WARN [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.12.2 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.2/node-v0.12.2.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.2/node-v0.12.2.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.2/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.2/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args[0m[91m   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.2',
gyp info spawn args   '-Druntime=node',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> dffbb01edb06
Removing intermediate container 1657e714d59d
Step 5 : ENV NODE_ENV production
 ---> Running in 5c51a9fc0441
 ---> b3d0b25b1bf9
Removing intermediate container 5c51a9fc0441
Step 6 : WORKDIR /usr/src/app
 ---> Running in 49c12e671c8a
 ---> 1187226d32d3
Removing intermediate container 49c12e671c8a
Step 7 : CMD npm start
 ---> Running in 37a00878fd64
 ---> ddbc015861ce
Removing intermediate container 37a00878fd64
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in aecff97fecb6
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5124 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 7b8a5d543339
Removing intermediate container aecff97fecb6
Successfully built 7b8a5d543339

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test72`

Contents of dockerfile `/root/docker-node/.~tmp.test72/Dockerfile`:

```
FROM nodesource/jessie:0.12.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.2-test1` from `/root/docker-node/.~tmp.test72`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.2
 ---> 7b8a5d543339
Step 2 : ENV NODE_ENV test
 ---> Running in 8e44782796e3
 ---> 452323189f32
Removing intermediate container 8e44782796e3
Step 3 : RUN node -v
 ---> Running in 623679118dea
v0.12.2
 ---> d920d313e9d6
Removing intermediate container 623679118dea
Step 4 : RUN node -p "process.versions"
 ---> Running in b6a0c4940a87
{ http_parser: '2.3',
  node: '0.12.2',
  v8: '3.28.73',
  uv: '1.4.2-node1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> 0442fc716026
Removing intermediate container b6a0c4940a87
Step 5 : RUN npm --version
 ---> Running in 491883c5cdad
2.7.4
 ---> 74effb8a0122
Removing intermediate container 491883c5cdad
Successfully built 74effb8a0122

```

# Tested image `nodesource/jessie:0.10.32`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 8603bc30959b
 ---> 90591bd8965a
Removing intermediate container 8603bc30959b
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.32-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in daa8ffa212bd
[91m  % Total    % Receiv[0m[91med % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.32-1nodesource1~jessie1) ...
Setting up nodejs (0.10.32-1nodesource1~jessie1) ...
 ---> 879caa77a2d8
Removing intermediate container daa8ffa212bd
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in ebf3aa76f349
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m [0m[91mWARN[0m[91m deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.32 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v0.10.32/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.32/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.32/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.32',
gyp info[0m[91m spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.32
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7620c55671ca
Removing intermediate container ebf3aa76f349
Step 5 : ENV NODE_ENV production
 ---> Running in 0fed335009d1
 ---> 37a9e8f578fc
Removing intermediate container 0fed335009d1
Step 6 : WORKDIR /usr/src/app
 ---> Running in 964e198ddec2
 ---> 50f7e97ccbd8
Removing intermediate container 964e198ddec2
Step 7 : CMD npm start
 ---> Running in e13915d42b45
 ---> c0e5978a4262
Removing intermediate container e13915d42b45
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e0d438166e61
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (4122 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 4ecd85d216b0
Removing intermediate container e0d438166e61
Successfully built 4ecd85d216b0

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test60`

Contents of dockerfile `/root/docker-node/.~tmp.test60/Dockerfile`:

```
FROM nodesource/jessie:0.10.32
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.32-test1` from `/root/docker-node/.~tmp.test60`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.32
 ---> 4ecd85d216b0
Step 2 : ENV NODE_ENV test
 ---> Running in b0c2ad0cdd82
 ---> 83a65f8de624
Removing intermediate container b0c2ad0cdd82
Step 3 : RUN node -v
 ---> Running in 1c3deee4e3bf
v0.10.32
 ---> 6f3c199a27c2
Removing intermediate container 1c3deee4e3bf
Step 4 : RUN node -p "process.versions"
 ---> Running in df78f3441940
{ http_parser: '1.0',
  node: '0.10.32',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1i' }
 ---> 1fa7ce596103
Removing intermediate container df78f3441940
Step 5 : RUN npm --version
 ---> Running in 93eaa9fb326d
1.4.28
 ---> c7260a096f65
Removing intermediate container 93eaa9fb326d
Successfully built c7260a096f65

```

# Tested image `nodesource/wheezy:5.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2f7686a68683
 ---> aa302f814766
Removing intermediate container 2f7686a68683
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.3.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 4ea707ccd69b
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.3.0-1nodesource1~wheezy1) ...
 ---> 59ffaf9a33bf
Removing intermediate container 4ea707ccd69b
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in a581938fe00b
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated[0m[91m graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@5.3.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.3.0/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp 200 http://nodejs.org/dist/v5.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
[0m[91mgyp info spawn args[0m[91m   'make',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.3.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
gyp [0m[91minfo[0m[91m [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.3.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 771ca9407bb8
Removing intermediate container a581938fe00b
Step 5 : ENV NODE_ENV production
 ---> Running in 8752b32931f7
 ---> ec99e0343804
Removing intermediate container 8752b32931f7
Step 6 : WORKDIR /usr/src/app
 ---> Running in 69fbd42d9b9b
 ---> 848a212fb6d7
Removing intermediate container 69fbd42d9b9b
Step 7 : CMD npm start
 ---> Running in 28c3b2b9b047
 ---> 7977c4367a33
Removing intermediate container 28c3b2b9b047
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in bf08b3895211
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3533 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 8d922ae10016
Removing intermediate container bf08b3895211
Successfully built 8d922ae10016

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test9`

Contents of dockerfile `/root/docker-node/.~tmp.test9/Dockerfile`:

```
FROM nodesource/wheezy:5.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.3.0-test1` from `/root/docker-node/.~tmp.test9`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.3.0
 ---> 8d922ae10016
Step 2 : ENV NODE_ENV test
 ---> Running in 01e4ec56e6ff
 ---> 5e40e903804b
Removing intermediate container 01e4ec56e6ff
Step 3 : RUN node -v
 ---> Running in 91aa07ddd664
v5.3.0
 ---> 0126be38c791
Removing intermediate container 91aa07ddd664
Step 4 : RUN node -p "process.versions"
 ---> Running in 0b5c107af1b7
{ http_parser: '2.6.0',
  node: '5.3.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 828266c62f5e
Removing intermediate container 0b5c107af1b7
Step 5 : RUN npm --version
 ---> Running in 3dd23d2bbe5a
3.3.12
 ---> 9ea7b766479b
Removing intermediate container 3dd23d2bbe5a
Successfully built 9ea7b766479b

```

# Tested image `nodesource/jessie:0.10.30`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 0f95419184e1
 ---> b83ec0b74610
Removing intermediate container 0f95419184e1
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.30-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in b998494cd8d7
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.30-1nodesource1~jessie1) ...
Setting up nodejs (0.10.30-1nodesource1~jessie1) ...
 ---> 48a1e67f8450
Removing intermediate container b998494cd8d7
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 05ce3b83f372
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN[0m[91m [0m[91mdeprecated[0m[91m graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with ok
[0m[91mgyp info using[0m[91m pangyp@2.3.3
gyp info using node@0.10.30 | linux | x64
[0m[91mgyp http [0m[91mGET http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.30/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.30/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp[0m[91m info[0m[91m spawn args   'binding.gyp',
[0m[91mgyp info spawn args   '-f',
gyp info [0m[91mspawn args   'make',
[0m[91mgyp info[0m[91m spawn args[0m[91m   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/root/.node-gyp/0.10.30/common.gypi',
gyp [0m[91minfo [0m[91mspawn args   '-Dlibrary=shared_library',
[0m[91mgyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.30',
gyp info[0m[91m [0m[91mspawn args[0m[91m   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp [0m[91minfo[0m[91m spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR![0m[91m stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.30
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 80e4d3ec4b01
Removing intermediate container 05ce3b83f372
Step 5 : ENV NODE_ENV production
 ---> Running in fd4b1eb82543
 ---> c9c28b98b8dc
Removing intermediate container fd4b1eb82543
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6536691c71ad
 ---> bada4a58bee1
Removing intermediate container 6536691c71ad
Step 7 : CMD npm start
 ---> Running in ca70831f4043
 ---> 8d11b771462b
Removing intermediate container ca70831f4043
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in a681177430ba
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3861 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 61662be5a639
Removing intermediate container a681177430ba
Successfully built 61662be5a639

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test58`

Contents of dockerfile `/root/docker-node/.~tmp.test58/Dockerfile`:

```
FROM nodesource/jessie:0.10.30
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.30-test1` from `/root/docker-node/.~tmp.test58`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.30
 ---> 61662be5a639
Step 2 : ENV NODE_ENV test
 ---> Running in 628ce37ce726
 ---> 17cc2f2f9e42
Removing intermediate container 628ce37ce726
Step 3 : RUN node -v
 ---> Running in 1f1438fad532
v0.10.30
 ---> a85e2ab8d873
Removing intermediate container 1f1438fad532
Step 4 : RUN node -p "process.versions"
 ---> Running in b4c21a1b69ce
{ http_parser: '1.0',
  node: '0.10.30',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1h' }
 ---> 97dc63fa1a67
Removing intermediate container b4c21a1b69ce
Step 5 : RUN npm --version
 ---> Running in 05eec0389cbb
1.4.21
 ---> 23e17ef64500
Removing intermediate container 05eec0389cbb
Successfully built 23e17ef64500

```

# Tested image `nodesource/jessie:4.2.5`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in fb7df3f30a81
 ---> db5e446e3fd1
Removing intermediate container fb7df3f30a81
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.5-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 5dc36f51bfb0
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.5-1nodesource1~jessie1) ...
Setting up nodejs (4.2.5-1nodesource1~jessie1) ...
 ---> 2698bf2862a4
Removing intermediate container 5dc36f51bfb0
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 147336b1b85a
[91mnpm[0m[91m WARN [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.2.5 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.5/node-v4.2.5.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.5/node-v4.2.5.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.5/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp 200 http://nodejs.org/dist/v4.2.5/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info[0m[91m [0m[91mspawn args[0m[91m   'make',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.5/common.gypi',
[0m[91mgyp info [0m[91mspawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.5',
gyp info spawn args   '-Druntime=node',
gyp[0m[91m info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args[0m[91m   '--depth=.',
[0m[91mgyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info[0m[91m [0m[91mspawn args[0m[91m   'build',
gyp [0m[91minfo[0m[91m spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.5
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 67d53e72bf10
Removing intermediate container 147336b1b85a
Step 5 : ENV NODE_ENV production
 ---> Running in 27dbb37aebe1
 ---> 3f42b49b58b7
Removing intermediate container 27dbb37aebe1
Step 6 : WORKDIR /usr/src/app
 ---> Running in 481a1c121069
 ---> 64e71eec21c3
Removing intermediate container 481a1c121069
Step 7 : CMD npm start
 ---> Running in c5f7784d9d42
 ---> 5a21489ff540
Removing intermediate container c5f7784d9d42
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 604347f51658
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (6124 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f37d25055425
Removing intermediate container 604347f51658
Successfully built f37d25055425

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test86`

Contents of dockerfile `/root/docker-node/.~tmp.test86/Dockerfile`:

```
FROM nodesource/jessie:4.2.5
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.5-test1` from `/root/docker-node/.~tmp.test86`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.5
 ---> f37d25055425
Step 2 : ENV NODE_ENV test
 ---> Running in d90c89e74fba
 ---> 8099bc840d7b
Removing intermediate container d90c89e74fba
Step 3 : RUN node -v
 ---> Running in a64c52284fcc
v4.2.5
 ---> cc25f2ca69dd
Removing intermediate container a64c52284fcc
Step 4 : RUN node -p "process.versions"
 ---> Running in 2cc8ed750af1
{ http_parser: '2.5.0',
  node: '4.2.5',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> 2691e5bc136d
Removing intermediate container 2cc8ed750af1
Step 5 : RUN npm --version
 ---> Running in f66a4904467e
2.14.12
 ---> b8a392856b75
Removing intermediate container f66a4904467e
Successfully built b8a392856b75

```

# Tested image `nodesource/jessie:4.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 6cec4f962659
 ---> b328d0eb837c
Removing intermediate container 6cec4f962659
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 38ad1054fe2a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.3.0-1nodesource1~jessie1) ...
Setting up nodejs (4.3.0-1nodesource1~jessie1) ...
 ---> 445ab77294b4
Removing intermediate container 38ad1054fe2a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in f933f32e16f9
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.3.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.3.0/node-v4.3.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.3.0/node-v4.3.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.3.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.3.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.3.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 412c1d70a64e
Removing intermediate container f933f32e16f9
Step 5 : ENV NODE_ENV production
 ---> Running in 97489d2f3774
 ---> 8271bea51c7a
Removing intermediate container 97489d2f3774
Step 6 : WORKDIR /usr/src/app
 ---> Running in a3490cb009d9
 ---> f6ad381bf694
Removing intermediate container a3490cb009d9
Step 7 : CMD npm start
 ---> Running in c695ff1af512
 ---> 258e858a58ac
Removing intermediate container c695ff1af512
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d1ce7f0debdc
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (4028 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f88ab3dad2ff
Removing intermediate container d1ce7f0debdc
Successfully built f88ab3dad2ff

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test87`

Contents of dockerfile `/root/docker-node/.~tmp.test87/Dockerfile`:

```
FROM nodesource/jessie:4.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.3.0-test1` from `/root/docker-node/.~tmp.test87`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.3.0
 ---> f88ab3dad2ff
Step 2 : ENV NODE_ENV test
 ---> Running in 366062fc63f1
 ---> 06baf21f38f6
Removing intermediate container 366062fc63f1
Step 3 : RUN node -v
 ---> Running in 576a4baeb4fa
v4.3.0
 ---> d9f00e2a187d
Removing intermediate container 576a4baeb4fa
Step 4 : RUN node -p "process.versions"
 ---> Running in 39d11e4536a7
{ http_parser: '2.5.1',
  node: '4.3.0',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2f' }
 ---> 513bbfba97ba
Removing intermediate container 39d11e4536a7
Step 5 : RUN npm --version
 ---> Running in caab227f7004
2.14.12
 ---> e8f2160c2972
Removing intermediate container caab227f7004
Successfully built e8f2160c2972

```

# Tested image `nodesource/wheezy:5.2.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 7aeb0897fd1c
 ---> d5de3387f978
Removing intermediate container 7aeb0897fd1c
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.2.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 8cf41bc9c853
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.2.0-1nodesource1~wheezy1) ...
 ---> 04e329fa084d
Removing intermediate container 8cf41bc9c853
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 942a1c72ed26
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@5.2.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.2.0/node-v5.2.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.2.0/node-v5.2.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.2.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.2.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.2.0/common.gypi',
gyp[0m[91m info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.2.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:88:13)
gyp ERR! stack     at ChildProcess.emit (events.js:173:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:201:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.2.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 8852c84b6e85
Removing intermediate container 942a1c72ed26
Step 5 : ENV NODE_ENV production
 ---> Running in 1bce1bdaf5fb
 ---> 64e27750b898
Removing intermediate container 1bce1bdaf5fb
Step 6 : WORKDIR /usr/src/app
 ---> Running in 836f1050f5f8
 ---> f98e463836ae
Removing intermediate container 836f1050f5f8
Step 7 : CMD npm start
 ---> Running in 744619f2564a
 ---> 178dad5ded24
Removing intermediate container 744619f2564a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d1c2ef901530
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 4s (2081 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> fdbef6eef123
Removing intermediate container d1c2ef901530
Successfully built fdbef6eef123

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test8`

Contents of dockerfile `/root/docker-node/.~tmp.test8/Dockerfile`:

```
FROM nodesource/wheezy:5.2.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.2.0-test1` from `/root/docker-node/.~tmp.test8`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.2.0
 ---> fdbef6eef123
Step 2 : ENV NODE_ENV test
 ---> Running in f5b21f3f7a9a
 ---> 1da3d1ad48b0
Removing intermediate container f5b21f3f7a9a
Step 3 : RUN node -v
 ---> Running in 9b7e55f76746
v5.2.0
 ---> c481a4e444a2
Removing intermediate container 9b7e55f76746
Step 4 : RUN node -p "process.versions"
 ---> Running in 9828f6f0e404
{ http_parser: '2.6.0',
  node: '5.2.0',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> cbf6b9030e56
Removing intermediate container 9828f6f0e404
Step 5 : RUN npm --version
 ---> Running in 64a04d15946f
3.3.12
 ---> 5ae230f4c030
Removing intermediate container 64a04d15946f
Successfully built 5ae230f4c030

```

# Tested image `nodesource/jessie:5.7.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ab8faf30668b
 ---> 9ab1500527e4
Removing intermediate container ab8faf30668b
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.7.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 781b08ea3734
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.7.0-1nodesource1~jessie1) ...
Setting up nodejs (5.7.0-1nodesource1~jessie1) ...
 ---> 0fde935a73e6
Removing intermediate container 781b08ea3734
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 637ad3ef04b9
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@5.7.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.7.0/node-v5.7.0.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v5.7.0/node-v5.7.0.tar.gz
[0m[91mgyp [0m[91mhttp[0m[91m [0m[91mGET[0m[91m http://nodejs.org/dist/v5.7.0/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v5.7.0/SHASUMS256.txt
[0m[91mgyp info[0m[91m spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp [0m[91minfo spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.7.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info [0m[91mspawn args   '-Dvisibility=default',
gyp[0m[91m info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.7.0',
gyp info[0m[91m spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
[0m[91mgyp info[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:100:13)
gyp ERR! stack     at ChildProcess.emit (events.js:185:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.7.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7d8407e29bd6
Removing intermediate container 637ad3ef04b9
Step 5 : ENV NODE_ENV production
 ---> Running in 740cddab2f20
 ---> 27ee277aa766
Removing intermediate container 740cddab2f20
Step 6 : WORKDIR /usr/src/app
 ---> Running in acc2690e4d4a
 ---> 9502a6cddf11
Removing intermediate container acc2690e4d4a
Step 7 : CMD npm start
 ---> Running in 87ac008c8b50
 ---> a2d65d25b442
Removing intermediate container 87ac008c8b50
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f054d1c55781
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2658 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 2e1936ac899a
Removing intermediate container f054d1c55781
Successfully built 2e1936ac899a

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test45`

Contents of dockerfile `/root/docker-node/.~tmp.test45/Dockerfile`:

```
FROM nodesource/jessie:5.7.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.7.0-test1` from `/root/docker-node/.~tmp.test45`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.7.0
 ---> 2e1936ac899a
Step 2 : ENV NODE_ENV test
 ---> Running in 7aea65a7134f
 ---> 8263770a5ea3
Removing intermediate container 7aea65a7134f
Step 3 : RUN node -v
 ---> Running in cddaebd5d51f
v5.7.0
 ---> c8fb35c0f39f
Removing intermediate container cddaebd5d51f
Step 4 : RUN node -p "process.versions"
 ---> Running in b1e388bc8451
{ http_parser: '2.6.2',
  node: '5.7.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2f' }
 ---> c4bf4e0008eb
Removing intermediate container b1e388bc8451
Step 5 : RUN npm --version
 ---> Running in b2706cfe2a5e
3.6.0
 ---> 4dcad6312369
Removing intermediate container b2706cfe2a5e
Successfully built 4dcad6312369

```

# Tested image `nodesource/jessie:4.3.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in cd207edb09af
 ---> f4f2cf077bb6
Removing intermediate container cd207edb09af
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.3.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 534941fa28bc
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.3.1-1nodesource1~jessie1) ...
Setting up nodejs (4.3.1-1nodesource1~jessie1) ...
 ---> 58042a4ac272
Removing intermediate container 534941fa28bc
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in bf173769b24b
[91mnpm[0m[91m WARN [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.3.1 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.3.1/node-v4.3.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.3.1/node-v4.3.1.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.3.1/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.3.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.3.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.3.1',
[0m[91mgyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp [0m[91mERR![0m[91m cwd /
gyp ERR! node -v v4.3.1
gyp [0m[91mERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> dfd2698b8e1e
Removing intermediate container bf173769b24b
Step 5 : ENV NODE_ENV production
 ---> Running in bad144ad7427
 ---> 26802ddaa65c
Removing intermediate container bad144ad7427
Step 6 : WORKDIR /usr/src/app
 ---> Running in d4daa447c757
 ---> 216103ac67ec
Removing intermediate container d4daa447c757
Step 7 : CMD npm start
 ---> Running in 5de5886684c5
 ---> f6e2aba8e703
Removing intermediate container 5de5886684c5
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 2948b64b96e2
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2860 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0503bd3d98e5
Removing intermediate container 2948b64b96e2
Successfully built 0503bd3d98e5

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test44`

Contents of dockerfile `/root/docker-node/.~tmp.test44/Dockerfile`:

```
FROM nodesource/jessie:4.3.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.3.1-test1` from `/root/docker-node/.~tmp.test44`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.3.1
 ---> 0503bd3d98e5
Step 2 : ENV NODE_ENV test
 ---> Running in 52a363d67ac3
 ---> 72c3a7b808a2
Removing intermediate container 52a363d67ac3
Step 3 : RUN node -v
 ---> Running in daa61ced3f38
v4.3.1
 ---> 79e9dd0c8858
Removing intermediate container daa61ced3f38
Step 4 : RUN node -p "process.versions"
 ---> Running in 3461283fc470
{ http_parser: '2.5.2',
  node: '4.3.1',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2f' }
 ---> 662f0c37405a
Removing intermediate container 3461283fc470
Step 5 : RUN npm --version
 ---> Running in 6282b6f88958
2.14.12
 ---> b0b568b75182
Removing intermediate container 6282b6f88958
Successfully built b0b568b75182

```

# Tested image `nodesource/jessie:4.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 6b73a50df619
 ---> 4f24a4554d8b
Removing intermediate container 6b73a50df619
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.1.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 2326f346e5bc
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.1.0-1nodesource1~jessie1) ...
Setting up nodejs (4.1.0-1nodesource1~jessie1) ...
 ---> be194f80f9af
Removing intermediate container 2326f346e5bc
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 79eef43c3fa3
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, node-uuid@1.4.7, qs@2.3.3, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
└── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.1.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.1.0/node-v4.1.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.1.0/node-v4.1.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.1.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.1.0/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
[0m[91mgyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.1.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.1.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System[0m[91m Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.1.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 405e24269e15
Removing intermediate container 79eef43c3fa3
Step 5 : ENV NODE_ENV production
 ---> Running in f1ba196cf742
 ---> cb34fab851f4
Removing intermediate container f1ba196cf742
Step 6 : WORKDIR /usr/src/app
 ---> Running in 9cc10a72a0a1
 ---> f206ad6943ef
Removing intermediate container 9cc10a72a0a1
Step 7 : CMD npm start
 ---> Running in 3a5cbfc7bf75
 ---> 8ea245fab9e8
Removing intermediate container 3a5cbfc7bf75
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 39b32dc685e5
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (4552 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 09c8493997de
Removing intermediate container 39b32dc685e5
Successfully built 09c8493997de

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test79`

Contents of dockerfile `/root/docker-node/.~tmp.test79/Dockerfile`:

```
FROM nodesource/jessie:4.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.1.0-test1` from `/root/docker-node/.~tmp.test79`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.1.0
 ---> 09c8493997de
Step 2 : ENV NODE_ENV test
 ---> Running in 90a394bfb2fb
 ---> 98fd8572927a
Removing intermediate container 90a394bfb2fb
Step 3 : RUN node -v
 ---> Running in f91a96397e4f
v4.1.0
 ---> 52c6d22e5bb6
Removing intermediate container f91a96397e4f
Step 4 : RUN node -p "process.versions"
 ---> Running in ab0156f4bc7f
{ http_parser: '2.5.0',
  node: '4.1.0',
  v8: '4.5.103.33',
  uv: '1.7.4',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 2b3a937a0626
Removing intermediate container ab0156f4bc7f
Step 5 : RUN npm --version
 ---> Running in 37a279221957
2.14.3
 ---> 39d8d8441f1f
Removing intermediate container 37a279221957
Successfully built 39d8d8441f1f

```

# Tested image `nodesource/wheezy:4.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 5aab5e2a4ae8
 ---> 8fc8c7632e3e
Removing intermediate container 5aab5e2a4ae8
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.3.0-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 1834c200eca0
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Ti[0m[91mme  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.3.0-1nodesource1~wheezy1) ...
 ---> 7c1c989fe88d
Removing intermediate container 1834c200eca0
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 5613ec0a5c26
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
└── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@4.3.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.3.0/node-v4.3.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.3.0/node-v4.3.0.tar.gz
[0m[91mgyp[0m[91m http [0m[91mGET http://nodejs.org/dist/v4.3.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp [0m[91minfo spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.3.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
[0m[91mgyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp [0m[91mERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack[0m[91m     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd[0m[91m /
gyp ERR! node -v v4.3.0
gyp ERR! pangyp -v v2.3.3
gyp [0m[91mERR! not ok[0m[91m 
[0m
 ---> cdb9a5934506
Removing intermediate container 5613ec0a5c26
Step 5 : ENV NODE_ENV production
 ---> Running in a224483225e9
 ---> 814bb0d3c9ea
Removing intermediate container a224483225e9
Step 6 : WORKDIR /usr/src/app
 ---> Running in 0adba1e335dc
 ---> d0575238c948
Removing intermediate container 0adba1e335dc
Step 7 : CMD npm start
 ---> Running in 83f99da10605
 ---> f22a872bdea5
Removing intermediate container 83f99da10605
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d6516a0b5d62
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:8 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 4s (1995 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> e61247e8bdb2
Removing intermediate container d6516a0b5d62
Successfully built e61247e8bdb2

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test41`

Contents of dockerfile `/root/docker-node/.~tmp.test41/Dockerfile`:

```
FROM nodesource/wheezy:4.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.3.0-test1` from `/root/docker-node/.~tmp.test41`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.3.0
 ---> e61247e8bdb2
Step 2 : ENV NODE_ENV test
 ---> Running in d9c85830d4b7
 ---> 1f96184d9169
Removing intermediate container d9c85830d4b7
Step 3 : RUN node -v
 ---> Running in 51626a84425a
v4.3.0
 ---> 66f9d5a4cced
Removing intermediate container 51626a84425a
Step 4 : RUN node -p "process.versions"
 ---> Running in cb957fc43c6f
{ http_parser: '2.5.1',
  node: '4.3.0',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2f' }
 ---> 54bbcdd14bc0
Removing intermediate container cb957fc43c6f
Step 5 : RUN npm --version
 ---> Running in 0a7b2670f3c1
2.14.12
 ---> d942304d463f
Removing intermediate container 0a7b2670f3c1
Successfully built d942304d463f

```

# Tested image `nodesource/jessie:0.12.6`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 247d48b9d231
 ---> f962e3f45d7c
Removing intermediate container 247d48b9d231
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.6-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 4a3415e87d95
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.6-1nodesource1~jessie1) ...
Setting up nodejs (0.12.6-1nodesource1~jessie1) ...
 ---> b674f44df2c5
Removing intermediate container 4a3415e87d95
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 9e1a8b18feaf
[91mnpm [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info[0m[91m using[0m[91m pangyp@2.3.3
[0m[91mgyp info using node@0.12.6 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.6/node-v0.12.6.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.6/node-v0.12.6.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp [0m[91mGET http://nodejs.org/dist/v0.12.6/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.6/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.6/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info [0m[91mspawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.6',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
[0m[91mgyp [0m[91minfo [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp[0m[91m ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.6
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 67de1df60c75
Removing intermediate container 9e1a8b18feaf
Step 5 : ENV NODE_ENV production
 ---> Running in c30f8f4cb95c
 ---> ae70636865c5
Removing intermediate container c30f8f4cb95c
Step 6 : WORKDIR /usr/src/app
 ---> Running in f338f614d437
 ---> 4f436d8a36ba
Removing intermediate container f338f614d437
Step 7 : CMD npm start
 ---> Running in f29b4431d0af
 ---> b238461015e7
Removing intermediate container f29b4431d0af
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 44d73e5bc67d
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 4s (2255 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 38cf5c0a409d
Removing intermediate container 44d73e5bc67d
Successfully built 38cf5c0a409d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test76`

Contents of dockerfile `/root/docker-node/.~tmp.test76/Dockerfile`:

```
FROM nodesource/jessie:0.12.6
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.6-test1` from `/root/docker-node/.~tmp.test76`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.6
 ---> 38cf5c0a409d
Step 2 : ENV NODE_ENV test
 ---> Running in 68f1e8c5b1bf
 ---> 37a74a44d01d
Removing intermediate container 68f1e8c5b1bf
Step 3 : RUN node -v
 ---> Running in 83dc652eba4c
v0.12.6
 ---> 3de06710dbaf
Removing intermediate container 83dc652eba4c
Step 4 : RUN node -p "process.versions"
 ---> Running in 3a35dfe56154
{ http_parser: '2.3',
  node: '0.12.6',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1o' }
 ---> b9dacc50a964
Removing intermediate container 3a35dfe56154
Step 5 : RUN npm --version
 ---> Running in f636119158f6
2.11.2
 ---> facb00267483
Removing intermediate container f636119158f6
Successfully built facb00267483

```

# Tested image `nodesource/jessie:iojs-1.5.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 3d435792247d
 ---> 1adbaffca225
Removing intermediate container 3d435792247d
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.5.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 8a0c4631285f
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.5.1-1nodesource1~jessie1) ...
Setting up iojs (1.5.1-1nodesource1~jessie1) ...
 ---> cd6d9a05bcb0
Removing intermediate container 8a0c4631285f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1856c20bce1a
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
gyp info using node@1.5.1 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.5.1/iojs-v1.5.1.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.5.1/iojs-v1.5.1.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.5.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.5.1/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info[0m[91m spawn args   '-f',
[0m[91mgyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp[0m[91m info spawn args   '-I',
[0m[91mgyp[0m[91m [0m[91minfo spawn args[0m[91m   '/root/.node-gyp/1.5.1/common.gypi',
gyp [0m[91minfo [0m[91mspawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.5.1',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=iojs',
[0m[91mgyp info [0m[91mspawn args   '-Dmodule_root_dir=/',
[0m[91mgyp[0m[91m info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info[0m[91m spawn args   'build',
[0m[91mgyp [0m[91minfo[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m
[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.5.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> e2baa7f4e14a
Removing intermediate container 1856c20bce1a
Step 5 : ENV NODE_ENV production
 ---> Running in 44a43d0dc848
 ---> 1caac06ddcfc
Removing intermediate container 44a43d0dc848
Step 6 : WORKDIR /usr/src/app
 ---> Running in 3dcb536aff7e
 ---> fd3b074ffd52
Removing intermediate container 3dcb536aff7e
Step 7 : CMD npm start
 ---> Running in 13304fc1bd2a
 ---> 7ce1597cbf8d
Removing intermediate container 13304fc1bd2a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e0395d52f23b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3222 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> c2f3417c0208
Removing intermediate container e0395d52f23b
Successfully built c2f3417c0208

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test95`

Contents of dockerfile `/root/docker-node/.~tmp.test95/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.5.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.5.1-test1` from `/root/docker-node/.~tmp.test95`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.5.1
 ---> c2f3417c0208
Step 2 : ENV NODE_ENV test
 ---> Running in 51d3f61bd242
 ---> 8a49c735be7b
Removing intermediate container 51d3f61bd242
Step 3 : RUN node -v
 ---> Running in 2bfe3dfabb17
v1.5.1
 ---> 239f2637e29d
Removing intermediate container 2bfe3dfabb17
Step 4 : RUN node -p "process.versions"
 ---> Running in fc415776df55
{ http_parser: '2.3.0',
  node: '1.5.1',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> a25d49afbd96
Removing intermediate container fc415776df55
Step 5 : RUN npm --version
 ---> Running in 2bed0c373d14
2.7.0
 ---> 325ba7f158c8
Removing intermediate container 2bed0c373d14
Successfully built 325ba7f158c8

```

# Tested image `nodesource/wheezy:0.10.37`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2f4e2d644cf6
 ---> c01706f1c6f3
Removing intermediate container 2f4e2d644cf6
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.37-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in b732e29acd71
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.37-1nodesource1~wheezy1) ...
 ---> 10c61b630c7a
Removing intermediate container b732e29acd71
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in ef0557264c00
[91mnpm [0m[91mWARN[0m[91m deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.37 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.37/node-v0.10.37.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v0.10.37/node-v0.10.37.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.37/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.37/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.37/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.37',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.37
gyp [0m[91mERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> e0feebde16ca
Removing intermediate container ef0557264c00
Step 5 : ENV NODE_ENV production
 ---> Running in b0205de95f01
 ---> 9b3bc463a9e3
Removing intermediate container b0205de95f01
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6d34facb003f
 ---> 729d5de680ba
Removing intermediate container 6d34facb003f
Step 7 : CMD npm start
 ---> Running in e97203d62294
 ---> 6e82a038bc50
Removing intermediate container e97203d62294
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 11cf45f5c94a
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:3 http://security.debian.org wheezy/updates Release [102 kB]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:8 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (5750 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> ad951efbc500
Removing intermediate container 11cf45f5c94a
Successfully built ad951efbc500

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test20`

Contents of dockerfile `/root/docker-node/.~tmp.test20/Dockerfile`:

```
FROM nodesource/wheezy:0.10.37
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.37-test1` from `/root/docker-node/.~tmp.test20`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.37
 ---> ad951efbc500
Step 2 : ENV NODE_ENV test
 ---> Running in da04f2b2c4c6
 ---> 127a9ce082d6
Removing intermediate container da04f2b2c4c6
Step 3 : RUN node -v
 ---> Running in 38cf5bfe2f66
v0.10.37
 ---> 09a1b676ae3e
Removing intermediate container 38cf5bfe2f66
Step 4 : RUN node -p "process.versions"
 ---> Running in e1a0d06e0bb8
{ http_parser: '1.0',
  node: '0.10.37',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1l' }
 ---> 6737f0689d9f
Removing intermediate container e1a0d06e0bb8
Step 5 : RUN npm --version
 ---> Running in 230565c03e16
1.4.28
 ---> b67572cc2e6b
Removing intermediate container 230565c03e16
Successfully built b67572cc2e6b

```

# Tested image `nodesource/jessie:iojs-1.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in c309d17b7ff8
 ---> 12149d5268e6
Removing intermediate container c309d17b7ff8
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in f9878b117630
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.3.0-1nodesource1~jessie1) ...
Setting up iojs (1.3.0-1nodesource1~jessie1) ...
 ---> d1658dc357dc
Removing intermediate container f9878b117630
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 07d7357bfdf9
[91mnpm[0m[91m [0m[91mWARN [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, form-data@0.2.0, http-signature@0.10.1, hawk@1.1.1)
[91mgyp [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@1.3.0 | linux | x64
[0m[91mgyp [0m[91mhttp[0m[91m [0m[91mGET https://iojs.org/dist/v1.3.0/iojs-v1.3.0.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.3.0/iojs-v1.3.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.3.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp[0m[91m info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info[0m[91m spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.3.0',
gyp info spawn args   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info[0m[91m spawn args[0m[91m   '--generator-output',
[0m[91mgyp info [0m[91mspawn args[0m[91m   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m
[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.3.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> a682eacc1526
Error removing intermediate container 07d7357bfdf9: rmfs: Unable to remove filesystem for 07d7357bfdf934712c74c9e9ee28c75a81c2f4678e6c627a0f8ae925d9da630c: remove /var/lib/docker/containers/07d7357bfdf934712c74c9e9ee28c75a81c2f4678e6c627a0f8ae925d9da630c/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 507ccfafbb4c
 ---> 74d428fea181
Error removing intermediate container 07d7357bfdf9: nosuchcontainer: No such container: 07d7357bfdf934712c74c9e9ee28c75a81c2f4678e6c627a0f8ae925d9da630c
Step 6 : WORKDIR /usr/src/app
 ---> Running in 752fe4b388c3
 ---> b41d9712eac4
Removing intermediate container 752fe4b388c3
Error removing intermediate container 07d7357bfdf9: nosuchcontainer: No such container: 07d7357bfdf934712c74c9e9ee28c75a81c2f4678e6c627a0f8ae925d9da630c
Step 7 : CMD npm start
 ---> Running in 0972a48ec52a
 ---> 90f4a37c4d94
Error removing intermediate container 07d7357bfdf9: nosuchcontainer: No such container: 07d7357bfdf934712c74c9e9ee28c75a81c2f4678e6c627a0f8ae925d9da630c
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 04b433a03f13
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3546 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> dac57e6b325f
Removing intermediate container 507ccfafbb4c
Removing intermediate container 0972a48ec52a
Removing intermediate container 04b433a03f13
Error removing intermediate container 07d7357bfdf9: nosuchcontainer: No such container: 07d7357bfdf934712c74c9e9ee28c75a81c2f4678e6c627a0f8ae925d9da630c
Successfully built dac57e6b325f

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test93`

Contents of dockerfile `/root/docker-node/.~tmp.test93/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.3.0-test1` from `/root/docker-node/.~tmp.test93`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.3.0
 ---> dac57e6b325f
Step 2 : ENV NODE_ENV test
 ---> Running in 654eb9f90a4f
 ---> 43e7bca1fe18
Removing intermediate container 654eb9f90a4f
Step 3 : RUN node -v
 ---> Running in 4d111c843106
v1.3.0
 ---> eead3aca4c4d
Removing intermediate container 4d111c843106
Step 4 : RUN node -p "process.versions"
 ---> Running in 0b4f2ca7dcc1
{ http_parser: '2.3.0',
  node: '1.3.0',
  v8: '4.1.0.14',
  uv: '1.4.0',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> 17721fc46ad5
Removing intermediate container 0b4f2ca7dcc1
Step 5 : RUN npm --version
 ---> Running in 023f2fe117ec
2.5.1
 ---> 7ebd00b32bd6
Removing intermediate container 023f2fe117ec
Successfully built 7ebd00b32bd6

```

# Tested image `nodesource/wheezy:0.12.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 607f52f91685
 ---> f70b3e73e6bc
Removing intermediate container 607f52f91685
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.3-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in fa63c2a1f06d
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
            [0m[91m                     Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.3-1nodesource1~wheezy1) ...
 ---> 8ffddeaff766
Removing intermediate container fa63c2a1f06d
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b6a9ee6c8d56
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp [0m[91minfo it worked if it ends with ok
gyp info using pangyp@2.3.3
[0m[91mgyp info using node@0.12.3 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.3/node-v0.12.3.tar.gz
[0m[91mgyp http[0m[91m 200[0m[91m http://nodejs.org/dist/v0.12.3/node-v0.12.3.tar.gz
[0m
[91mgyp http GET http://nodejs.org/dist/v0.12.3/SHASUMS256.txt
gyp http 200 http://nodejs.org/dist/v0.12.3/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.3',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
gyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> f7464eee198e
Removing intermediate container b6a9ee6c8d56
Step 5 : ENV NODE_ENV production
 ---> Running in 1d83c1e432cd
 ---> 907c62712916
Removing intermediate container 1d83c1e432cd
Step 6 : WORKDIR /usr/src/app
 ---> Running in 95d373875c60
 ---> 3dbc167bd601
Removing intermediate container 95d373875c60
Step 7 : CMD npm start
 ---> Running in 680b6a16dc11
 ---> bfcabebe826e
Removing intermediate container 680b6a16dc11
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6bd2281523c1
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 3s (2727 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f6ccbde37838
Removing intermediate container 6bd2281523c1
Successfully built f6ccbde37838

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test28`

Contents of dockerfile `/root/docker-node/.~tmp.test28/Dockerfile`:

```
FROM nodesource/wheezy:0.12.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.3-test1` from `/root/docker-node/.~tmp.test28`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.3
 ---> f6ccbde37838
Step 2 : ENV NODE_ENV test
 ---> Running in 2cfdc41b7bf7
 ---> ec51a75c051c
Removing intermediate container 2cfdc41b7bf7
Step 3 : RUN node -v
 ---> Running in eee491c5af5b
v0.12.3
 ---> 2df0982d7688
Removing intermediate container eee491c5af5b
Step 4 : RUN node -p "process.versions"
 ---> Running in d9e4bbaf3d4a
{ http_parser: '2.3',
  node: '0.12.3',
  v8: '3.28.71.19',
  uv: '1.5.0',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> 0a375b004cce
Removing intermediate container d9e4bbaf3d4a
Step 5 : RUN npm --version
 ---> Running in 556f02c2ed8f
2.9.1
 ---> 3c75b265013e
Removing intermediate container 556f02c2ed8f
Successfully built 3c75b265013e

```

# Tested image `nodesource/jessie:iojs-2.5.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 3154d0853bd9
 ---> 1aba8060342a
Removing intermediate container 3154d0853bd9
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.5.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 4df30828ff4e
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.5.0-1nodesource1~jessie1) ...
Setting up iojs (2.5.0-1nodesource1~jessie1) ...
 ---> 430effdbd47e
Removing intermediate container 4df30828ff4e
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 464466dbc66e
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN[0m[91m deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, tunnel-agent@0.4.2, oauth-sign@0.5.0, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp[0m[91m info using pangyp@2.3.3
gyp info using node@2.5.0 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v2.5.0/iojs-v2.5.0.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.5.0/iojs-v2.5.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.5.0/SHASUMS256.txt
[0m[91mgyp http [0m[91m200 https://iojs.org/dist/v2.5.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.5.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.5.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info[0m[91m spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
[0m[91mgyp info spawn args   '--generator-output',
[0m[91mgyp[0m[91m info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.5.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7d50234328f3
Removing intermediate container 464466dbc66e
Step 5 : ENV NODE_ENV production
 ---> Running in 4d375d1ac3e5
 ---> 026a30c87408
Removing intermediate container 4d375d1ac3e5
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6058a7e9d47a
 ---> 2b5e6a74998f
Removing intermediate container 6058a7e9d47a
Step 7 : CMD npm start
 ---> Running in 985d3fd42054
 ---> acd5c0d317e5
Removing intermediate container 985d3fd42054
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f3562a8c1e48
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 6s (1431 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f0c37e18a4ec
Removing intermediate container f3562a8c1e48
Successfully built f0c37e18a4ec

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test91`

Contents of dockerfile `/root/docker-node/.~tmp.test91/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.5.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.5.0-test1` from `/root/docker-node/.~tmp.test91`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.5.0
 ---> f0c37e18a4ec
Step 2 : ENV NODE_ENV test
 ---> Running in 56406232b1c9
 ---> fc86fd4a114f
Removing intermediate container 56406232b1c9
Step 3 : RUN node -v
 ---> Running in 5b7bb4b785a6
v2.5.0
 ---> 2e58f2681455
Removing intermediate container 5b7bb4b785a6
Step 4 : RUN node -p "process.versions"
 ---> Running in 782a887403e1
{ http_parser: '2.5.0',
  node: '2.5.0',
  v8: '4.2.77.21',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2d' }
 ---> 0d7db58006fc
Removing intermediate container 782a887403e1
Step 5 : RUN npm --version
 ---> Running in da1888385aa1
2.13.2
 ---> 97e0486bf21c
Removing intermediate container da1888385aa1
Successfully built 97e0486bf21c

```

# Tested image `nodesource/wheezy:0.12.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 32ef1b722a90
 ---> c307584f5063
Removing intermediate container 32ef1b722a90
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.4-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in a9799864ed8c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.4-1nodesource1~wheezy1) ...
 ---> 3555b04803f4
Removing intermediate container a9799864ed8c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b02f9637673f
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.12.4 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
[0m[91mgyp[0m[91m http [0m[91mGET[0m[91m http://nodejs.org/dist/v0.12.4/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.4/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info [0m[91mspawn args[0m[91m   '-f',
gyp info spawn args   'make',
gyp info spawn args[0m[91m   '-I',
gyp info [0m[91mspawn args   '/build/config.gypi',
[0m[91mgyp[0m[91m info spawn args   '-I',
gyp info spawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args   '-I',
[0m[91mgyp[0m[91m info spawn args   '/root/.node-gyp/0.12.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp [0m[91minfo spawn args[0m[91m   '-Dvisibility=default',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/0.12.4',
[0m[91mgyp info[0m[91m [0m[91mspawn args[0m[91m   '-Druntime=node',
[0m[91mgyp[0m[91m info spawn args   '-Dmodule_root_dir=/',
gyp info [0m[91mspawn args   '--depth=.',
[0m[91mgyp info spawn args   '--no-parallel',
gyp info spawn args[0m[91m   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 45464f241257
Removing intermediate container b02f9637673f
Step 5 : ENV NODE_ENV production
 ---> Running in fb72b2d8acb8
 ---> d3382d9f0468
Removing intermediate container fb72b2d8acb8
Step 6 : WORKDIR /usr/src/app
 ---> Running in a7d6d1be75f3
 ---> 1de23ff25e4b
Removing intermediate container a7d6d1be75f3
Step 7 : CMD npm start
 ---> Running in a07047e9981a
 ---> 2b8b6f0ff8f2
Removing intermediate container a07047e9981a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 4cb7ce01f2f2
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (4730 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 79400194a1ef
Removing intermediate container 4cb7ce01f2f2
Successfully built 79400194a1ef

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test29`

Contents of dockerfile `/root/docker-node/.~tmp.test29/Dockerfile`:

```
FROM nodesource/wheezy:0.12.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.4-test1` from `/root/docker-node/.~tmp.test29`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.4
 ---> 79400194a1ef
Step 2 : ENV NODE_ENV test
 ---> Running in 41f54815c0c5
 ---> ca6c533d5b61
Removing intermediate container 41f54815c0c5
Step 3 : RUN node -v
 ---> Running in 2bf5878383e4
v0.12.4
 ---> 7e6011ca1ad2
Removing intermediate container 2bf5878383e4
Step 4 : RUN node -p "process.versions"
 ---> Running in 1ffa1bce02a3
{ http_parser: '2.3',
  node: '0.12.4',
  v8: '3.28.71.19',
  uv: '1.5.0',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> 27d7f7dfe6b5
Removing intermediate container 1ffa1bce02a3
Step 5 : RUN npm --version
 ---> Running in 9546d507ecd3
2.10.1
 ---> 19af29dcee1a
Removing intermediate container 9546d507ecd3
Successfully built 19af29dcee1a

```

# Tested image `nodesource/jessie:0.12.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 8ca87f29b57e
 ---> b4a2af1b209a
Removing intermediate container 8ca87f29b57e
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 7949176f7739
[91m  % T[0m[91motal    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.0-1nodesource1~jessie1) ...
Setting up nodejs (0.12.0-1nodesource1~jessie1) ...
 ---> cf5f437563a0
Removing intermediate container 7949176f7739
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b4fdc19e50c9
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz
[0m
[91mgyp http GET http://nodejs.org/dist/v0.12.0/SHASUMS256.txt
gyp http 200 http://nodejs.org/dist/v0.12.0/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
gyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1067:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 68a08eb8535e
Error removing intermediate container b4fdc19e50c9: rmfs: Unable to remove filesystem for b4fdc19e50c9fc3024ea8cb281c78824496276930f12ba6a9f3c74711e068913: remove /var/lib/docker/containers/b4fdc19e50c9fc3024ea8cb281c78824496276930f12ba6a9f3c74711e068913/shm: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in 0a531c29abb3
 ---> 6ae20cc60df1
Error removing intermediate container b4fdc19e50c9: nosuchcontainer: No such container: b4fdc19e50c9fc3024ea8cb281c78824496276930f12ba6a9f3c74711e068913
Step 6 : WORKDIR /usr/src/app
 ---> Running in 01af5d5f2a61
 ---> dc37b336e01d
Error removing intermediate container b4fdc19e50c9: nosuchcontainer: No such container: b4fdc19e50c9fc3024ea8cb281c78824496276930f12ba6a9f3c74711e068913
Step 7 : CMD npm start
 ---> Running in 1d96a7be10cb
 ---> 8ce0834a8057
Removing intermediate container 01af5d5f2a61
Removing intermediate container 1d96a7be10cb
Error removing intermediate container b4fdc19e50c9: nosuchcontainer: No such container: b4fdc19e50c9fc3024ea8cb281c78824496276930f12ba6a9f3c74711e068913
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 032cb6a63017
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (6249 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> db5d712472b6
Removing intermediate container 0a531c29abb3
Removing intermediate container 032cb6a63017
Error removing intermediate container b4fdc19e50c9: nosuchcontainer: No such container: b4fdc19e50c9fc3024ea8cb281c78824496276930f12ba6a9f3c74711e068913
Successfully built db5d712472b6

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test70`

Contents of dockerfile `/root/docker-node/.~tmp.test70/Dockerfile`:

```
FROM nodesource/jessie:0.12.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.0-test1` from `/root/docker-node/.~tmp.test70`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.0
 ---> db5d712472b6
Step 2 : ENV NODE_ENV test
 ---> Running in d3c99058a6b2
 ---> 5f32f74e4d70
Removing intermediate container d3c99058a6b2
Step 3 : RUN node -v
 ---> Running in 2d0c3b3ee0b4
v0.12.0
 ---> 9feddbed543e
Removing intermediate container 2d0c3b3ee0b4
Step 4 : RUN node -p "process.versions"
 ---> Running in a12502e81611
{ http_parser: '2.3',
  node: '0.12.0',
  v8: '3.28.73',
  uv: '1.0.2',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1l' }
 ---> bad6eae639d4
Removing intermediate container a12502e81611
Step 5 : RUN npm --version
 ---> Running in d05aa1fddad3
2.5.1
 ---> 6f39b29fab21
Removing intermediate container d05aa1fddad3
Successfully built 6f39b29fab21

```

# Tested image `nodesource/wheezy:0.10.34`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 5767c3cafb8b
 ---> 142fa2ede44f
Removing intermediate container 5767c3cafb8b
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.34-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 91803dffb501
[91m  % Total  [0m[91m  % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.34-1nodesource1~wheezy1) ...
 ---> 47772a5d893e
Removing intermediate container 91803dffb501
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in cf3759764af6
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.34 | linux | x64
[0m[91mgyp [0m[91mhttp [0m[91mGET[0m[91m http://nodejs.org/dist/v0.10.34/node-v0.10.34.tar.gz
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v0.10.34/node-v0.10.34.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.34/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.34/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.34/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.34',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp ERR! stack[0m[91m Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.34
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 887e85336eb0
Removing intermediate container cf3759764af6
Step 5 : ENV NODE_ENV production
 ---> Running in 5ae558ddf04c
 ---> 72ae2c0330c8
Removing intermediate container 5ae558ddf04c
Step 6 : WORKDIR /usr/src/app
 ---> Running in 9156a39708cd
 ---> 5cdef0ed9f05
Removing intermediate container 9156a39708cd
Step 7 : CMD npm start
 ---> Running in d45442689184
 ---> b35669f1a4f2
Removing intermediate container d45442689184
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e0c91e0fae85
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (5069 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 668bbc78575d
Removing intermediate container e0c91e0fae85
Successfully built 668bbc78575d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test17`

Contents of dockerfile `/root/docker-node/.~tmp.test17/Dockerfile`:

```
FROM nodesource/wheezy:0.10.34
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.34-test1` from `/root/docker-node/.~tmp.test17`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.34
 ---> 668bbc78575d
Step 2 : ENV NODE_ENV test
 ---> Running in 639e27fdf7eb
 ---> ea4b60b4444d
Removing intermediate container 639e27fdf7eb
Step 3 : RUN node -v
 ---> Running in 7359a39315b8
v0.10.34
 ---> bcc260903b38
Removing intermediate container 7359a39315b8
Step 4 : RUN node -p "process.versions"
 ---> Running in 1395d3ae7167
{ http_parser: '1.0',
  node: '0.10.34',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1j' }
 ---> 7679432323d4
Removing intermediate container 1395d3ae7167
Step 5 : RUN npm --version
 ---> Running in c4136bba54d9
1.4.28
 ---> 8ff927cac59b
Removing intermediate container c4136bba54d9
Successfully built 8ff927cac59b

```

# Tested image `nodesource/jessie:0.12.8`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 13579a9eed83
 ---> 8535223cc80c
Removing intermediate container 13579a9eed83
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.8-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in deee73002716
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
[0m[91m
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.8-1nodesource1~jessie1) ...
Setting up nodejs (0.12.8-1nodesource1~jessie1) ...
 ---> c31ca227d855
Removing intermediate container deee73002716
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 00233637f000
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.8 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.8/node-v0.12.8.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.8/node-v0.12.8.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v0.12.8/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.8/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.8/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.8',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp [0m[91minfo spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1075:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.8
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> f4653a764bc5
Removing intermediate container 00233637f000
Step 5 : ENV NODE_ENV production
 ---> Running in f10b92408de6
 ---> d2c7669a4b3d
Removing intermediate container f10b92408de6
Step 6 : WORKDIR /usr/src/app
 ---> Running in 1eeb2241443d
 ---> a1c094462f6f
Removing intermediate container 1eeb2241443d
Step 7 : CMD npm start
 ---> Running in f144ebd234dc
 ---> b03e2c9e0fad
Removing intermediate container f144ebd234dc
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in b1514399671a
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (3141 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 784960f35ddf
Removing intermediate container b1514399671a
Successfully built 784960f35ddf

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test78`

Contents of dockerfile `/root/docker-node/.~tmp.test78/Dockerfile`:

```
FROM nodesource/jessie:0.12.8
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.8-test1` from `/root/docker-node/.~tmp.test78`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.8
 ---> 784960f35ddf
Step 2 : ENV NODE_ENV test
 ---> Running in 2ba02107bc51
 ---> 38c72513d914
Removing intermediate container 2ba02107bc51
Step 3 : RUN node -v
 ---> Running in 37fefaddcfb6
v0.12.8
 ---> 929633f831a5
Removing intermediate container 37fefaddcfb6
Step 4 : RUN node -p "process.versions"
 ---> Running in ee705062effe
{ http_parser: '2.3',
  node: '0.12.8',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1p' }
 ---> 828d3bffea23
Removing intermediate container ee705062effe
Step 5 : RUN npm --version
 ---> Running in 386a8deda9a4
2.14.9
 ---> 7595c628b6e4
Removing intermediate container 386a8deda9a4
Successfully built 7595c628b6e4

```

# Tested image `nodesource/wheezy:0.12.10`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 95947a866cb3
 ---> 49c43ffc22ce
Removing intermediate container 95947a866cb3
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.10-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in b8d8d6119eb3
[91m  % Total   [0m[91m % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.10-1nodesource1~wheezy1) ...
 ---> ea4b6fa5c4d3
Removing intermediate container b8d8d6119eb3
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 383d890993b4
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.12.10 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.10/node-v0.12.10.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.10/node-v0.12.10.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v0.12.10/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v0.12.10/SHASUMS256.txt
[0m[91mgyp info[0m[91m spawn python
[0m[91mgyp[0m[91m info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info [0m[91mspawn args   '/build/config.gypi',
[0m[91mgyp[0m[91m info spawn args[0m[91m   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info[0m[91m spawn args[0m[91m   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.10/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.10',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR![0m[91m configure error 
[0m[91mgyp ERR! stack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m ERR![0m[91m stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1075:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp [0m[91mERR! cwd /
gyp ERR! [0m[91mnode -v v0.12.10
gyp [0m[91mERR! pangyp -v[0m[91m v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> f85dd6c6d703
Removing intermediate container 383d890993b4
Step 5 : ENV NODE_ENV production
 ---> Running in 032fca4d458c
 ---> 3071ec3b1d33
Removing intermediate container 032fca4d458c
Step 6 : WORKDIR /usr/src/app
 ---> Running in e0cb351b327e
 ---> 687994085d80
Removing intermediate container e0cb351b327e
Step 7 : CMD npm start
 ---> Running in cef59920f651
 ---> 83c1d5c98398
Removing intermediate container cef59920f651
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 7a8e6de1cfa4
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (4478 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> ca70529bff8d
Removing intermediate container 7a8e6de1cfa4
Successfully built ca70529bff8d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test26`

Contents of dockerfile `/root/docker-node/.~tmp.test26/Dockerfile`:

```
FROM nodesource/wheezy:0.12.10
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.10-test1` from `/root/docker-node/.~tmp.test26`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.10
 ---> ca70529bff8d
Step 2 : ENV NODE_ENV test
 ---> Running in 95f656179f4d
 ---> 3a3f26fabab1
Removing intermediate container 95f656179f4d
Step 3 : RUN node -v
 ---> Running in fd2ea885f22a
v0.12.10
 ---> 898dd1e99962
Removing intermediate container fd2ea885f22a
Step 4 : RUN node -p "process.versions"
 ---> Running in 99100755deda
{ http_parser: '2.3',
  node: '0.12.10',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1r' }
 ---> 0cffdd1f73be
Removing intermediate container 99100755deda
Step 5 : RUN npm --version
 ---> Running in 887c57bb02d5
2.14.9
 ---> 33e506dda400
Removing intermediate container 887c57bb02d5
Successfully built 33e506dda400

```

# Tested image `nodesource/jessie:0.10.34`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 75665063569a
 ---> e3cc809e8448
Removing intermediate container 75665063569a
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.34-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in fe678a299351
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.34-1nodesource1~jessie1) ...
Setting up nodejs (0.10.34-1nodesource1~jessie1) ...
 ---> 908db900934e
Removing intermediate container fe678a299351
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 6d38a18773ae
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, oauth-sign@0.5.0, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.34 | linux | x64
gyp http GET http://nodejs.org/dist/v0.10.34/node-v0.10.34.tar.gz
gyp http 200 http://nodejs.org/dist/v0.10.34/node-v0.10.34.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.34/SHASUMS256.txt
gyp http 200 http://nodejs.org/dist/v0.10.34/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
[0m[91mgyp info [0m[91mspawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.34/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.34',
gyp info[0m[91m spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp [0m[91minfo spawn args   'build',
gyp info[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
[0m[91mgyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.34
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> d3c01aa50e8e
Removing intermediate container 6d38a18773ae
Step 5 : ENV NODE_ENV production
 ---> Running in ed78c0627880
 ---> c3ab7f744b9a
Removing intermediate container ed78c0627880
Step 6 : WORKDIR /usr/src/app
 ---> Running in 4ff8424b12e0
 ---> a358f3268691
Removing intermediate container 4ff8424b12e0
Step 7 : CMD npm start
 ---> Running in cbaa7380b954
 ---> 283ef67efe25
Removing intermediate container cbaa7380b954
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 3411d7b5043b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 4s (2140 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 5807ef06aade
Removing intermediate container 3411d7b5043b
Successfully built 5807ef06aade

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test62`

Contents of dockerfile `/root/docker-node/.~tmp.test62/Dockerfile`:

```
FROM nodesource/jessie:0.10.34
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.34-test1` from `/root/docker-node/.~tmp.test62`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.34
 ---> 5807ef06aade
Step 2 : ENV NODE_ENV test
 ---> Running in e4e63b64240f
 ---> 935376363db9
Removing intermediate container e4e63b64240f
Step 3 : RUN node -v
 ---> Running in 35c99c5fa44e
v0.10.34
 ---> a29e882f1b41
Removing intermediate container 35c99c5fa44e
Step 4 : RUN node -p "process.versions"
 ---> Running in ffacba931260
{ http_parser: '1.0',
  node: '0.10.34',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1j' }
 ---> 79d3b6a07783
Removing intermediate container ffacba931260
Step 5 : RUN npm --version
 ---> Running in 1faf7ff3e37a
1.4.28
 ---> 6e2651f57bde
Removing intermediate container 1faf7ff3e37a
Successfully built 6e2651f57bde

```

# Tested image `nodesource/jessie:iojs-2.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 31c489a9d52a
 ---> 960c25580220
Removing intermediate container 31c489a9d52a
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.1.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in f3e6ff97461c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.1.0-1nodesource1~jessie1) ...
Setting up iojs (2.1.0-1nodesource1~jessie1) ...
 ---> 23fa9f65fd27
Removing intermediate container f3e6ff97461c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 5323b04180db
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@2.1.0 | linux | x64
gyp http GET https://iojs.org/dist/v2.1.0/iojs-v2.1.0.tar.gz
gyp http 200 https://iojs.org/dist/v2.1.0/iojs-v2.1.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.1.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v2.1.0/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo spawn python
[0m[91mgyp [0m[91minfo spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp [0m[91minfo spawn args[0m[91m   'binding.gyp',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   '-f',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   'make',
gyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
[0m[91mgyp info[0m[91m [0m[91mspawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.1.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info[0m[91m spawn args   '-Dvisibility=default',
[0m[91mgyp[0m[91m info spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/2.1.0',
[0m[91mgyp info spawn args   '-Druntime=iojs',
[0m[91mgyp info spawn args[0m[91m   '-Dmodule_root_dir=/',
[0m[91mgyp info spawn args   '--depth=.',
[0m[91mgyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
[0m[91mgyp[0m[91m info[0m[91m spawn args   'build',
gyp[0m[91m info[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp ERR! stack[0m[91m Error: `gyp` failed with exit code: 1
gyp[0m[91m ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR![0m[91m stack     at ChildProcess.emit (events.js:172:7)
gyp[0m[91m [0m[91mERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.1.0
gyp ERR![0m[91m pangyp -v v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> d9428e1e8ae8
Removing intermediate container 5323b04180db
Step 5 : ENV NODE_ENV production
 ---> Running in 55d079594a41
 ---> 046adfb1013f
Removing intermediate container 55d079594a41
Step 6 : WORKDIR /usr/src/app
 ---> Running in ea06db1ec437
 ---> 50f80eabd3f8
Removing intermediate container ea06db1ec437
Step 7 : CMD npm start
 ---> Running in d53e81804529
 ---> dde74b6d7af7
Removing intermediate container d53e81804529
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6af0ceccae9c
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (4435 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 9b6b985968f2
Removing intermediate container 6af0ceccae9c
Successfully built 9b6b985968f2

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test99`

Contents of dockerfile `/root/docker-node/.~tmp.test99/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.1.0-test1` from `/root/docker-node/.~tmp.test99`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.1.0
 ---> 9b6b985968f2
Step 2 : ENV NODE_ENV test
 ---> Running in cbbe941d6fa7
 ---> 76560548c71a
Removing intermediate container cbbe941d6fa7
Step 3 : RUN node -v
 ---> Running in 2ddbd789a60d
v2.1.0
 ---> 454b5df563a2
Removing intermediate container 2ddbd789a60d
Step 4 : RUN node -p "process.versions"
 ---> Running in d4613c3f8e6b
{ http_parser: '2.5.0',
  node: '2.1.0',
  v8: '4.2.77.20',
  uv: '1.5.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> 25381d86cb49
Removing intermediate container d4613c3f8e6b
Step 5 : RUN npm --version
 ---> Running in 81a835411f81
2.10.1
 ---> 94223828b840
Removing intermediate container 81a835411f81
Successfully built 94223828b840

```

# Tested image `nodesource/wheezy:0.12.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 33b31270a77d
 ---> f1f160da6398
Removing intermediate container 33b31270a77d
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.2-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in df644684e843
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.2-1nodesource1~wheezy1) ...
 ---> 48f353cd8bcb
Removing intermediate container df644684e843
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1110d42bf279
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp[0m[91m [0m[91minfo using node@0.12.2 | linux | x64
[0m[91mgyp http [0m[91mGET http://nodejs.org/dist/v0.12.2/node-v0.12.2.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m 200 http://nodejs.org/dist/v0.12.2/node-v0.12.2.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp [0m[91mGET[0m[91m http://nodejs.org/dist/v0.12.2/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.2/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.2',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 037d72ae9bcf
Removing intermediate container 1110d42bf279
Step 5 : ENV NODE_ENV production
 ---> Running in 5d47a0a865ff
 ---> 20953fe39ad2
Removing intermediate container 5d47a0a865ff
Step 6 : WORKDIR /usr/src/app
 ---> Running in 544f3aed5b96
 ---> 57f735348c77
Removing intermediate container 544f3aed5b96
Step 7 : CMD npm start
 ---> Running in 87a5d69ccc5d
 ---> 748717298818
Removing intermediate container 87a5d69ccc5d
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 76212fd25923
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Get:9 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Fetched 8511 kB in 1s (4277 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> a4cddcbd309b
Removing intermediate container 76212fd25923
Successfully built a4cddcbd309b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test27`

Contents of dockerfile `/root/docker-node/.~tmp.test27/Dockerfile`:

```
FROM nodesource/wheezy:0.12.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.2-test1` from `/root/docker-node/.~tmp.test27`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.2
 ---> a4cddcbd309b
Step 2 : ENV NODE_ENV test
 ---> Running in 9c90c294d433
 ---> d624ae3c99b2
Removing intermediate container 9c90c294d433
Step 3 : RUN node -v
 ---> Running in 6914bcf863c4
v0.12.2
 ---> b411179451b1
Removing intermediate container 6914bcf863c4
Step 4 : RUN node -p "process.versions"
 ---> Running in 73b2acfad040
{ http_parser: '2.3',
  node: '0.12.2',
  v8: '3.28.73',
  uv: '1.4.2-node1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> 0e2cf76b4acb
Removing intermediate container 73b2acfad040
Step 5 : RUN npm --version
 ---> Running in 4cbba4bfdf00
2.7.4
 ---> 1e6da4101ac4
Removing intermediate container 4cbba4bfdf00
Successfully built 1e6da4101ac4

```

# Tested image `nodesource/jessie:4.1.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 20b9982b0839
 ---> 9534e1029f14
Removing intermediate container 20b9982b0839
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.1.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in e00b77ea5bab
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.1.2-1nodesource1~jessie1) ...
Setting up nodejs (4.1.2-1nodesource1~jessie1) ...
 ---> 9774421d7acc
Removing intermediate container e00b77ea5bab
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 464c5bc962da
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.1.2 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.1.2/node-v4.1.2.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.1.2/node-v4.1.2.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.1.2/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.1.2/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.1.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.1.2',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp [0m[91mERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR![0m[91m cwd /
gyp ERR! node -v v4.1.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 8e02d6c5566b
Removing intermediate container 464c5bc962da
Step 5 : ENV NODE_ENV production
 ---> Running in 307d0561093e
 ---> ae8e14e13565
Removing intermediate container 307d0561093e
Step 6 : WORKDIR /usr/src/app
 ---> Running in ae6a65c8b4aa
 ---> 51d76f3d8906
Removing intermediate container ae6a65c8b4aa
Step 7 : CMD npm start
 ---> Running in c277fbd2dbd4
 ---> f4ab0f141a56
Removing intermediate container c277fbd2dbd4
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e84f2220f199
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5427 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 9772536d1319
Removing intermediate container e84f2220f199
Successfully built 9772536d1319

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test49`

Contents of dockerfile `/root/docker-node/.~tmp.test49/Dockerfile`:

```
FROM nodesource/jessie:4.1.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.1.2-test1` from `/root/docker-node/.~tmp.test49`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.1.2
 ---> 9772536d1319
Step 2 : ENV NODE_ENV test
 ---> Running in 1717c97e14dd
 ---> b72b742f016a
Removing intermediate container 1717c97e14dd
Step 3 : RUN node -v
 ---> Running in ade682aa14b4
v4.1.2
 ---> db9d7975fa1b
Removing intermediate container ade682aa14b4
Step 4 : RUN node -p "process.versions"
 ---> Running in c47715ed068c
{ http_parser: '2.5.0',
  node: '4.1.2',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 101a388e8d9e
Removing intermediate container c47715ed068c
Step 5 : RUN npm --version
 ---> Running in 5c0689f23f1d
2.14.4
 ---> 79e27d2edb95
Removing intermediate container 5c0689f23f1d
Successfully built 79e27d2edb95

```

# Tested image `nodesource/jessie:0.12.7`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in cedec30163d3
 ---> 73cd960576e5
Removing intermediate container cedec30163d3
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.7-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 47319f101121
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                         [0m[91m        Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.7-1nodesource1~jessie1) ...
Setting up nodejs (0.12.7-1nodesource1~jessie1) ...
 ---> 5240361fdb2c
Removing intermediate container 47319f101121
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in f3118ee087f5
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.7 | linux | x64
[0m[91mgyp[0m[91m http [0m[91mGET[0m[91m http://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.7/SHASUMS256.txt
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.7/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
[0m[91mgyp [0m[91minfo spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info[0m[91m spawn args[0m[91m   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp[0m[91m info [0m[91mspawn args   '-I',
[0m[91mgyp info[0m[91m spawn args   '/build/config.gypi',
gyp[0m[91m info spawn args   '-I',
gyp[0m[91m [0m[91minfo spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info spawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m info[0m[91m spawn args[0m[91m   '/root/.node-gyp/0.12.7/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
[0m[91mgyp [0m[91minfo [0m[91mspawn args[0m[91m   '-Dvisibility=default',
[0m[91mgyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.7',
gyp info spawn args[0m[91m   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
[0m[91mgyp [0m[91minfo spawn args[0m[91m   '--no-parallel',
[0m[91mgyp info spawn args   '--generator-output',
gyp info[0m[91m [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp[0m[91m ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.7
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> accd52399cf2
Removing intermediate container f3118ee087f5
Step 5 : ENV NODE_ENV production
 ---> Running in 1fb796c61c71
 ---> b80dc3a82510
Removing intermediate container 1fb796c61c71
Step 6 : WORKDIR /usr/src/app
 ---> Running in 4379f53c6a62
 ---> ce2b7e05d96b
Removing intermediate container 4379f53c6a62
Step 7 : CMD npm start
 ---> Running in b9b484e6f46e
 ---> 5345f81e4c60
Removing intermediate container b9b484e6f46e
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d49580078661
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5520 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f728d3f4e664
Removing intermediate container d49580078661
Successfully built f728d3f4e664

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test77`

Contents of dockerfile `/root/docker-node/.~tmp.test77/Dockerfile`:

```
FROM nodesource/jessie:0.12.7
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.7-test1` from `/root/docker-node/.~tmp.test77`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.7
 ---> f728d3f4e664
Step 2 : ENV NODE_ENV test
 ---> Running in 778157f47199
 ---> 3832163eb443
Removing intermediate container 778157f47199
Step 3 : RUN node -v
 ---> Running in 971d67af5445
v0.12.7
 ---> ae0b1b1d3838
Removing intermediate container 971d67af5445
Step 4 : RUN node -p "process.versions"
 ---> Running in a5e6b17baad8
{ http_parser: '2.3',
  node: '0.12.7',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1p' }
 ---> 987bf6e807b8
Removing intermediate container a5e6b17baad8
Step 5 : RUN npm --version
 ---> Running in f7ac824029db
2.11.3
 ---> 0ce3e34af5b3
Removing intermediate container f7ac824029db
Successfully built 0ce3e34af5b3

```

# Tested image `nodesource/wheezy:5.4.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 65ab28613d29
 ---> 197412a12983
Removing intermediate container 65ab28613d29
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.4.1-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 85b2e6e6a6c6
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.4.1-1nodesource1~wheezy1) ...
 ---> 176275db9f29
Removing intermediate container 85b2e6e6a6c6
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c374e91d91eb
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using[0m[91m node@5.4.1 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.4.1/node-v5.4.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.4.1/node-v5.4.1.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.4.1/SHASUMS256.txt
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v5.4.1/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info[0m[91m spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.4.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.4.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp [0m[91minfo[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.4.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 2a2e573dbfa0
Removing intermediate container c374e91d91eb
Step 5 : ENV NODE_ENV production
 ---> Running in f1db731f464a
 ---> 432451a62c7e
Removing intermediate container f1db731f464a
Step 6 : WORKDIR /usr/src/app
 ---> Running in 69d626456464
 ---> d016ccb68083
Removing intermediate container 69d626456464
Step 7 : CMD npm start
 ---> Running in 0a47c297d6e3
 ---> be07c6f840a9
Removing intermediate container 0a47c297d6e3
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 1184cea14625
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 6s (1369 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b318c0fac617
Removing intermediate container 1184cea14625
Successfully built b318c0fac617

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test10`

Contents of dockerfile `/root/docker-node/.~tmp.test10/Dockerfile`:

```
FROM nodesource/wheezy:5.4.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.4.1-test1` from `/root/docker-node/.~tmp.test10`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.4.1
 ---> b318c0fac617
Step 2 : ENV NODE_ENV test
 ---> Running in 5fd03f90694e
 ---> 497f330ba766
Removing intermediate container 5fd03f90694e
Step 3 : RUN node -v
 ---> Running in f09583353d5b
v5.4.1
 ---> d910b2b44434
Removing intermediate container f09583353d5b
Step 4 : RUN node -p "process.versions"
 ---> Running in 5f1442220f25
{ http_parser: '2.6.0',
  node: '5.4.1',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> b63848b02cd2
Removing intermediate container 5f1442220f25
Step 5 : RUN npm --version
 ---> Running in bc216701ecf9
3.3.12
 ---> 8a715b220de3
Removing intermediate container bc216701ecf9
Successfully built 8a715b220de3

```

# Tested image `nodesource/wheezy:4.2.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a40b64903822
 ---> 34df039d25a3
Removing intermediate container a40b64903822
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.4-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 0bd33d16eda7
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.2.4-1nodesource1~wheezy1) ...
 ---> 381a6352f50b
Removing intermediate container 0bd33d16eda7
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 74121f06e629
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, caseless@0.8.0, aws-sign2@0.5.0, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, mime-types@1.0.2, tough-cookie@2.2.1, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.2.4 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.4/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.4/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.4',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
[0m
[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 3a0e0342a6d5
Removing intermediate container 74121f06e629
Step 5 : ENV NODE_ENV production
 ---> Running in 85ca07c4527a
 ---> 35c8c2c704c7
Removing intermediate container 85ca07c4527a
Step 6 : WORKDIR /usr/src/app
 ---> Running in 9f2cc17c76e8
 ---> dc5b5cf9a4a6
Removing intermediate container 9f2cc17c76e8
Step 7 : CMD npm start
 ---> Running in 85c27259decb
 ---> 52706e6b464f
Removing intermediate container 85c27259decb
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 3ea7661eb1b6
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (3532 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 1038203eb41f
Removing intermediate container 3ea7661eb1b6
Successfully built 1038203eb41f

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test39`

Contents of dockerfile `/root/docker-node/.~tmp.test39/Dockerfile`:

```
FROM nodesource/wheezy:4.2.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.2.4-test1` from `/root/docker-node/.~tmp.test39`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.2.4
 ---> 1038203eb41f
Step 2 : ENV NODE_ENV test
 ---> Running in 310c56d528d4
 ---> 884fc146cd81
Removing intermediate container 310c56d528d4
Step 3 : RUN node -v
 ---> Running in 9a07cd613aef
v4.2.4
 ---> c4ed66288294
Removing intermediate container 9a07cd613aef
Step 4 : RUN node -p "process.versions"
 ---> Running in 12867a749a41
{ http_parser: '2.5.0',
  node: '4.2.4',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> a663610d83f5
Removing intermediate container 12867a749a41
Step 5 : RUN npm --version
 ---> Running in eca0f7699b75
2.14.12
 ---> 32bba3923104
Removing intermediate container eca0f7699b75
Successfully built 32bba3923104

```

# Tested image `nodesource/jessie:4.2.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a89e94bb2b99
 ---> 81b03435130d
Removing intermediate container a89e94bb2b99
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 810d5da2f033
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total[0m[91m   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.3-1nodesource1~jessie1) ...
Setting up nodejs (4.2.3-1nodesource1~jessie1) ...
 ---> 9677b2a281dc
Removing intermediate container 810d5da2f033
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c3c291bdf72c
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, caseless@0.8.0, aws-sign2@0.5.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.2.3 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.3/node-v4.2.3.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.3/node-v4.2.3.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m GET http://nodejs.org/dist/v4.2.3/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.2.3/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info [0m[91mspawn args   '-f',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'make',
gyp [0m[91minfo spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp[0m[91m [0m[91minfo spawn args   '-I',
gyp info spawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.3/common.gypi',
[0m[91mgyp[0m[91m info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp[0m[91m info[0m[91m spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.3',
gyp info spawn args   '-Druntime=node',
gyp[0m[91m info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info [0m[91mspawn args   '--depth=.',
[0m[91mgyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp[0m[91m [0m[91minfo spawn args[0m[91m   'build',
gyp info[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR![0m[91m configure error 
[0m[91mgyp [0m[91mERR! [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
[0m[91mgyp ERR![0m[91m stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR![0m[91m System[0m[91m Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.3
[0m[91mgyp [0m[91mERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 4b55eb9de2e3
Removing intermediate container c3c291bdf72c
Step 5 : ENV NODE_ENV production
 ---> Running in 6a516df70b80
 ---> 36b934ce32d8
Removing intermediate container 6a516df70b80
Step 6 : WORKDIR /usr/src/app
 ---> Running in a9dfdae1bee8
 ---> 037b6f52388c
Removing intermediate container a9dfdae1bee8
Step 7 : CMD npm start
 ---> Running in c384c214ae0a
 ---> 6fe3aff89642
Removing intermediate container c384c214ae0a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 728f619ef411
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 10s (922 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 780d9f00fa03
Removing intermediate container 728f619ef411
Successfully built 780d9f00fa03

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test84`

Contents of dockerfile `/root/docker-node/.~tmp.test84/Dockerfile`:

```
FROM nodesource/jessie:4.2.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.3-test1` from `/root/docker-node/.~tmp.test84`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.3
 ---> 780d9f00fa03
Step 2 : ENV NODE_ENV test
 ---> Running in 7053d061a537
 ---> 1fced1470df4
Removing intermediate container 7053d061a537
Step 3 : RUN node -v
 ---> Running in 7e984cc8badf
v4.2.3
 ---> 767ffd01d917
Removing intermediate container 7e984cc8badf
Step 4 : RUN node -p "process.versions"
 ---> Running in 013ca0c3dda7
{ http_parser: '2.5.0',
  node: '4.2.3',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> d7388cb29a1d
Error removing intermediate container 013ca0c3dda7: rmdriverfs: Driver aufs failed to remove root filesystem 013ca0c3dda7044a27d848bd13bf7519046b9106cfeaf009efc9ac8ded182874: rename /var/lib/docker/aufs/mnt/738edbaf677f02bb6c7fa0826d9d256019726a9a260d71c1ea747b2611fb785a /var/lib/docker/aufs/mnt/738edbaf677f02bb6c7fa0826d9d256019726a9a260d71c1ea747b2611fb785a-removing: device or resource busy
Step 5 : RUN npm --version
 ---> Running in 1dda43fc5e27
2.14.7
 ---> c83eb8603f46
Error removing intermediate container 013ca0c3dda7: nosuchcontainer: No such container: 013ca0c3dda7044a27d848bd13bf7519046b9106cfeaf009efc9ac8ded182874
Successfully built c83eb8603f46

```

# Tested image `nodesource/wheezy:0.10.39`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in cca0dc23910b
 ---> 0dbe5579a342
Removing intermediate container cca0dc23910b
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.39-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 95ea68ba4fd1
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.39-1nodesource1~wheezy1) ...
 ---> edec54a68415
Removing intermediate container 95ea68ba4fd1
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 6a41a25ba574
[91mnpm[0m[91m WARN [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.39 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.39/node-v0.10.39.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.39/node-v0.10.39.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.39/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.39/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.39/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.39',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.39
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 2369608924e4
Removing intermediate container 6a41a25ba574
Step 5 : ENV NODE_ENV production
 ---> Running in d4fee35fb654
 ---> d2de3f343852
Removing intermediate container d4fee35fb654
Step 6 : WORKDIR /usr/src/app
 ---> Running in 93d370888475
 ---> f03e5768d029
Removing intermediate container 93d370888475
Step 7 : CMD npm start
 ---> Running in 85d24643e298
 ---> f566d308cf10
Removing intermediate container 85d24643e298
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 1e5dd185da7d
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (4801 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> cb56aaf0efb2
Removing intermediate container 1e5dd185da7d
Successfully built cb56aaf0efb2

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test22`

Contents of dockerfile `/root/docker-node/.~tmp.test22/Dockerfile`:

```
FROM nodesource/wheezy:0.10.39
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.39-test1` from `/root/docker-node/.~tmp.test22`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.39
 ---> cb56aaf0efb2
Step 2 : ENV NODE_ENV test
 ---> Running in 104e91bbe1fb
 ---> cb08b59efe65
Removing intermediate container 104e91bbe1fb
Step 3 : RUN node -v
 ---> Running in acdc073a6470
v0.10.39
 ---> 385c0832597c
Removing intermediate container acdc073a6470
Step 4 : RUN node -p "process.versions"
 ---> Running in 75ed4973f699
{ http_parser: '1.0',
  node: '0.10.39',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1o' }
 ---> 69cd1ce8cb04
Removing intermediate container 75ed4973f699
Step 5 : RUN npm --version
 ---> Running in 32706eda7c44
1.4.28
 ---> 5cf4a71484a0
Removing intermediate container 32706eda7c44
Successfully built 5cf4a71484a0

```

# Tested image `nodesource/wheezy:5.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 0a1121633495
 ---> 1df382d6f6e0
Removing intermediate container 0a1121633495
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.1.0-2nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 38b67b71ceaa
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spe[0m[91mnt    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.1.0-2nodesource1~wheezy1) ...
 ---> 647635955df0
Removing intermediate container 38b67b71ceaa
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 63cebdab3364
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@5.1.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.1.0/node-v5.1.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.1.0/node-v5.1.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.1.0/SHASUMS256.txt
[0m[91mgyp http 200[0m[91m http://nodejs.org/dist/v5.1.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
[0m[91mgyp info spawn args   '-I',
gyp info [0m[91mspawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.1.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.1.0',
gyp info spawn args   '-Druntime=node',
gyp info[0m[91m spawn args[0m[91m   '-Dmodule_root_dir=/',
[0m[91mgyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR![0m[91m [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR![0m[91m [0m[91mstack[0m[91m     at ChildProcess.emit (events.js:172:7)
[0m[91mgyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR![0m[91m node -v v5.1.0
[0m[91mgyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 959fc924006b
Removing intermediate container 63cebdab3364
Step 5 : ENV NODE_ENV production
 ---> Running in 53c4d3ba0c46
 ---> 37c9a0cf989d
Removing intermediate container 53c4d3ba0c46
Step 6 : WORKDIR /usr/src/app
 ---> Running in 70eb08b01418
 ---> 71ea1e5e3abf
Removing intermediate container 70eb08b01418
Step 7 : CMD npm start
 ---> Running in 19cf0e878b86
 ---> f09cd8fec812
Removing intermediate container 19cf0e878b86
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e47099559a27
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (5003 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 7fd703b7ece5
Removing intermediate container e47099559a27
Successfully built 7fd703b7ece5

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test42`

Contents of dockerfile `/root/docker-node/.~tmp.test42/Dockerfile`:

```
FROM nodesource/wheezy:5.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.1.0-test1` from `/root/docker-node/.~tmp.test42`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.1.0
 ---> 7fd703b7ece5
Step 2 : ENV NODE_ENV test
 ---> Running in ec7988f26d92
 ---> 586ace9e223e
Removing intermediate container ec7988f26d92
Step 3 : RUN node -v
 ---> Running in f3316337df97
v5.1.0
 ---> 73fad76d9847
Removing intermediate container f3316337df97
Step 4 : RUN node -p "process.versions"
 ---> Running in 2c42b902b473
{ http_parser: '2.6.0',
  node: '5.1.0',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2d' }
 ---> d02704f6546c
Removing intermediate container 2c42b902b473
Step 5 : RUN npm --version
 ---> Running in ce1e53f2cea9
3.3.12
 ---> aef427330f40
Removing intermediate container ce1e53f2cea9
Successfully built aef427330f40

```

# Tested image `nodesource/jessie:4.2.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 15a769b47d88
 ---> 01326e44e063
Removing intermediate container 15a769b47d88
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 5db2a5270616
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.0-1nodesource1~jessie1) ...
Setting up nodejs (4.2.0-1nodesource1~jessie1) ...
 ---> 0e99b851d52a
Removing intermediate container 5db2a5270616
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 2669bd020f6e
[91mnpm[0m[91m [0m[91mWARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, node-uuid@1.4.7, qs@2.3.3, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
[0m[91mgyp info using node@4.2.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.0/node-v4.2.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.0/node-v4.2.0.tar.gz
[0m[91mgyp[0m[91m http GET[0m[91m http://nodejs.org/dist/v4.2.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200[0m[91m http://nodejs.org/dist/v4.2.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp [0m[91minfo [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 6ed9bb6f73e0
Removing intermediate container 2669bd020f6e
Step 5 : ENV NODE_ENV production
 ---> Running in 4e2bf5c841c9
 ---> 60011c25681d
Removing intermediate container 4e2bf5c841c9
Step 6 : WORKDIR /usr/src/app
 ---> Running in c7392fe4374f
 ---> 4977dfe5d5f6
Removing intermediate container c7392fe4374f
Step 7 : CMD npm start
 ---> Running in d9c591307748
 ---> 557721943f36
Removing intermediate container d9c591307748
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d0ed1b89eed5
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 5s (1619 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 5f538db3c10b
Removing intermediate container d0ed1b89eed5
Successfully built 5f538db3c10b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test81`

Contents of dockerfile `/root/docker-node/.~tmp.test81/Dockerfile`:

```
FROM nodesource/jessie:4.2.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.0-test1` from `/root/docker-node/.~tmp.test81`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.0
 ---> 5f538db3c10b
Step 2 : ENV NODE_ENV test
 ---> Running in 1a24fe8113be
 ---> 9d4cd4e3d21f
Removing intermediate container 1a24fe8113be
Step 3 : RUN node -v
 ---> Running in b0f033fba0c2
v4.2.0
 ---> f790d541b73f
Removing intermediate container b0f033fba0c2
Step 4 : RUN node -p "process.versions"
 ---> Running in 1eb20d138d20
{ http_parser: '2.5.0',
  node: '4.2.0',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 19ec593b381a
Removing intermediate container 1eb20d138d20
Step 5 : RUN npm --version
 ---> Running in 731d8e1d3e3f
2.14.7
 ---> fa90e89da25f
Removing intermediate container 731d8e1d3e3f
Successfully built fa90e89da25f

```

# Tested image `nodesource/wheezy:0.12.9`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 72579787a550
 ---> f73ca635845c
Removing intermediate container 72579787a550
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.9-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in df2a01a1501c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.9-1nodesource1~wheezy1) ...
 ---> e30dad7aa36c
Removing intermediate container df2a01a1501c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c80631f008d0
[91mnpm [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@0.12.9 | linux | x64
[0m[91mgyp http[0m[91m GET http://nodejs.org/dist/v0.12.9/node-v0.12.9.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.9/node-v0.12.9.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.9/SHASUMS256.txt
[0m[91mgyp http 200[0m[91m http://nodejs.org/dist/v0.12.9/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp [0m[91minfo spawn args[0m[91m   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp [0m[91minfo [0m[91mspawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.9/common.gypi',
gyp[0m[91m info[0m[91m spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.9',
gyp info[0m[91m [0m[91mspawn args[0m[91m   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
[0m[91mgyp[0m[91m info spawn args   '--no-parallel',
gyp info spawn args[0m[91m   '--generator-output',
[0m[91mgyp info[0m[91m [0m[91mspawn args[0m[91m   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp [0m[91mERR! [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp [0m[91mERR! [0m[91mstack     at ChildProcess.emit (events.js:110:17)
[0m[91mgyp[0m[91m ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1075:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v[0m[91m v0.12.9
[0m[91mgyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 859761384cdf
Removing intermediate container c80631f008d0
Step 5 : ENV NODE_ENV production
 ---> Running in 58d18cf6041b
 ---> 781aa143fe15
Removing intermediate container 58d18cf6041b
Step 6 : WORKDIR /usr/src/app
 ---> Running in ab3f1dd5c57b
 ---> 3c75502bc48a
Removing intermediate container ab3f1dd5c57b
Step 7 : CMD npm start
 ---> Running in d527eddafd46
 ---> b9e40a1ce0c3
Removing intermediate container d527eddafd46
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 15fc861cce61
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 5s (1628 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 2333b5c1a507
Removing intermediate container 15fc861cce61
Successfully built 2333b5c1a507

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test3`

Contents of dockerfile `/root/docker-node/.~tmp.test3/Dockerfile`:

```
FROM nodesource/wheezy:0.12.9
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.9-test1` from `/root/docker-node/.~tmp.test3`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.9
 ---> 2333b5c1a507
Step 2 : ENV NODE_ENV test
 ---> Running in d6544290a519
 ---> 721c095e4ba6
Removing intermediate container d6544290a519
Step 3 : RUN node -v
 ---> Running in 39747f0a6b9f
v0.12.9
 ---> cc2db2dd5252
Removing intermediate container 39747f0a6b9f
Step 4 : RUN node -p "process.versions"
 ---> Running in c92c0ca8fbde
{ http_parser: '2.3',
  node: '0.12.9',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1q' }
 ---> 47d60292eabd
Removing intermediate container c92c0ca8fbde
Step 5 : RUN npm --version
 ---> Running in c53f0a85788d
2.14.9
 ---> 105f2644c2d7
Removing intermediate container c53f0a85788d
Successfully built 105f2644c2d7

```

# Tested image `nodesource/jessie:5.6.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 91c1c02cd495
 ---> 878583c3fb6a
Removing intermediate container 91c1c02cd495
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.6.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 48230e8d5d5a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.6.0-1nodesource1~jessie1) ...
Setting up nodejs (5.6.0-1nodesource1~jessie1) ...
 ---> 8c3c23014047
Removing intermediate container 48230e8d5d5a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 689f83435cc6
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@5.6.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.6.0/node-v5.6.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.6.0/node-v5.6.0.tar.gz
[0m[91mgyp[0m[91m http GET[0m[91m http://nodejs.org/dist/v5.6.0/SHASUMS256.txt
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v5.6.0/SHASUMS256.txt
[0m[91mgyp [0m[91minfo spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.6.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.6.0',
gyp info spawn args   '-Druntime=node',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args[0m[91m   '--generator-output',
[0m[91mgyp[0m[91m [0m[91minfo [0m[91mspawn args   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:100:13)
gyp ERR! stack     at ChildProcess.emit (events.js:185:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp [0m[91mERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.6.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 8b734f25bf20
Removing intermediate container 689f83435cc6
Step 5 : ENV NODE_ENV production
 ---> Running in 55aa8f8cda75
 ---> 72d24a241172
Removing intermediate container 55aa8f8cda75
Step 6 : WORKDIR /usr/src/app
 ---> Running in d626e91917c9
 ---> 7684091512e5
Removing intermediate container d626e91917c9
Step 7 : CMD npm start
 ---> Running in 15408f2ab8ed
 ---> 69f30e0586f2
Removing intermediate container 15408f2ab8ed
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 53d7e8a651d7
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 6s (1380 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 520c561db2f9
Removing intermediate container 53d7e8a651d7
Successfully built 520c561db2f9

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test57`

Contents of dockerfile `/root/docker-node/.~tmp.test57/Dockerfile`:

```
FROM nodesource/jessie:5.6.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.6.0-test1` from `/root/docker-node/.~tmp.test57`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.6.0
 ---> 520c561db2f9
Step 2 : ENV NODE_ENV test
 ---> Running in bd2aee225392
 ---> 046844f0d12a
Removing intermediate container bd2aee225392
Step 3 : RUN node -v
 ---> Running in f0508799fe7d
v5.6.0
 ---> 28cad8f0f159
Removing intermediate container f0508799fe7d
Step 4 : RUN node -p "process.versions"
 ---> Running in 00b1d3ce65f7
{ http_parser: '2.6.1',
  node: '5.6.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2f' }
 ---> 250b76061ec4
Removing intermediate container 00b1d3ce65f7
Step 5 : RUN npm --version
 ---> Running in f5f4d26f811c
3.6.0
 ---> abeeeef726c4
Removing intermediate container f5f4d26f811c
Successfully built abeeeef726c4

```

# Tested image `nodesource/wheezy:5.1.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2528782b8254
 ---> 5fc734180d23
Removing intermediate container 2528782b8254
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.1.1-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in bf79772d7d6b
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (5.1.1-1nodesource1~wheezy1) ...
 ---> 4699ace60e76
Removing intermediate container bf79772d7d6b
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 00fcf47a3005
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
gyp info using node@5.1.1 | linux | x64
[0m[91mgyp[0m[91m http GET[0m[91m http://nodejs.org/dist/v5.1.1/node-v5.1.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.1.1/node-v5.1.1.tar.gz
[0m[91mgyp[0m[91m http[0m[91m GET http://nodejs.org/dist/v5.1.1/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.1.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info[0m[91m spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp[0m[91m info[0m[91m [0m[91mspawn args   '-f',
gyp info spawn args   'make',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info [0m[91mspawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info spawn args   '-I',
gyp[0m[91m info [0m[91mspawn args   '/root/.node-gyp/5.1.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp[0m[91m info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.1.1',
gyp info spawn args   '-Druntime=node',
gyp info[0m[91m [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp [0m[91minfo spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR! configure error 
[0m[91mgyp [0m[91mERR![0m[91m stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
[0m[91mgyp[0m[91m [0m[91mERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp [0m[91mERR! [0m[91mSystem Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v5.1.1
[0m[91mgyp ERR! [0m[91mpangyp -v v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> bc42b825c18a
Removing intermediate container 00fcf47a3005
Step 5 : ENV NODE_ENV production
 ---> Running in 2253a1c88c56
 ---> c126e1d32e37
Removing intermediate container 2253a1c88c56
Step 6 : WORKDIR /usr/src/app
 ---> Running in 80c688d83f9c
 ---> 2486a87cdf10
Removing intermediate container 80c688d83f9c
Step 7 : CMD npm start
 ---> Running in dc1cb4de5d21
 ---> 9bcf7f5708ee
Removing intermediate container dc1cb4de5d21
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d29b58215b81
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 4s (1980 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 305b7ef4e32a
Removing intermediate container d29b58215b81
Successfully built 305b7ef4e32a

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test7`

Contents of dockerfile `/root/docker-node/.~tmp.test7/Dockerfile`:

```
FROM nodesource/wheezy:5.1.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:5.1.1-test1` from `/root/docker-node/.~tmp.test7`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:5.1.1
 ---> 305b7ef4e32a
Step 2 : ENV NODE_ENV test
 ---> Running in f4ded794b12c
 ---> bda00ae0662b
Removing intermediate container f4ded794b12c
Step 3 : RUN node -v
 ---> Running in dda8f0a4959d
v5.1.1
 ---> 220bb9604665
Removing intermediate container dda8f0a4959d
Step 4 : RUN node -p "process.versions"
 ---> Running in fbf599742349
{ http_parser: '2.6.0',
  node: '5.1.1',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> aff5b2ea5f88
Removing intermediate container fbf599742349
Step 5 : RUN npm --version
 ---> Running in b20c4deaab27
3.3.12
 ---> 625a30f2ccf3
Removing intermediate container b20c4deaab27
Successfully built 625a30f2ccf3

```

# Tested image `nodesource/jessie:4.2.6`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 94b875a32830
 ---> fbc0ece9762f
Removing intermediate container 94b875a32830
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.6-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in da5b2ad42097
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.6-1nodesource1~jessie1) ...
Setting up nodejs (4.2.6-1nodesource1~jessie1) ...
 ---> 3e00fbac68e2
Removing intermediate container da5b2ad42097
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c9c8f69276b0
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, caseless@0.8.0, aws-sign2@0.5.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.2.6 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.6/node-v4.2.6.tar.gz
[0m[91mgyp[0m[91m http 200[0m[91m http://nodejs.org/dist/v4.2.6/node-v4.2.6.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.6/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.6/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp[0m[91m info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp [0m[91minfo spawn args   '-I',
gyp[0m[91m info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info [0m[91mspawn args[0m[91m   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.6/common.gypi',
gyp[0m[91m info[0m[91m spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp[0m[91m [0m[91minfo[0m[91m spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/4.2.6',
[0m[91mgyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp [0m[91minfo spawn args   '--depth=.',
gyp[0m[91m [0m[91minfo spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp[0m[91m [0m[91minfo spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp [0m[91mERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
[0m[91mgyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
[0m[91mgyp ERR! node -v v4.2.6
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 46a0df145388
Removing intermediate container c9c8f69276b0
Step 5 : ENV NODE_ENV production
 ---> Running in 367a1bf09296
 ---> a61ed7bb3c19
Removing intermediate container 367a1bf09296
Step 6 : WORKDIR /usr/src/app
 ---> Running in 47386fbf7656
 ---> 3552d4f5c7ab
Removing intermediate container 47386fbf7656
Step 7 : CMD npm start
 ---> Running in 54d0e9f4f92e
 ---> 5247cc93eb0d
Removing intermediate container 54d0e9f4f92e
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 0c750b5f927b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Ign http://httpredir.debian.org jessie InRelease
Get:5 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 13s (710 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 3056c1ab532e
Removing intermediate container 0c750b5f927b
Successfully built 3056c1ab532e

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test50`

Contents of dockerfile `/root/docker-node/.~tmp.test50/Dockerfile`:

```
FROM nodesource/jessie:4.2.6
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.6-test1` from `/root/docker-node/.~tmp.test50`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.6
 ---> 3056c1ab532e
Step 2 : ENV NODE_ENV test
 ---> Running in 54f859f976f3
 ---> a6321403c99a
Removing intermediate container 54f859f976f3
Step 3 : RUN node -v
 ---> Running in 7ad134c93f24
v4.2.6
 ---> 2d63b9907794
Removing intermediate container 7ad134c93f24
Step 4 : RUN node -p "process.versions"
 ---> Running in f20bdfa591dc
{ http_parser: '2.5.0',
  node: '4.2.6',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> 73942de8bc63
Removing intermediate container f20bdfa591dc
Step 5 : RUN npm --version
 ---> Running in a550cd237316
2.14.12
 ---> 0953ce41544d
Removing intermediate container a550cd237316
Successfully built 0953ce41544d

```

# Tested image `nodesource/jessie:0.10.42`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 9c75bcbfe635
 ---> 4d3e987d1a4c
Removing intermediate container 9c75bcbfe635
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.42-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 72c943514c91
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.42-1nodesource1~jessie1) ...
Setting up nodejs (0.10.42-1nodesource1~jessie1) ...
 ---> 0a02a8f73241
Removing intermediate container 72c943514c91
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 86c71ae1b4ba
[91mnpm WARN deprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
npm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated[0m[91m 
npm WARN deprecated To upgrade to the latest stable version, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
[0m[91mnpm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN[0m[91m [0m[91mdeprecated semver behavior.
[0m[91mnpm [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mnpm[0m[91m WARN [0m[91mdeprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
npm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm [0m[91mWARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN deprecated To upgrade to the latest stable version, run:
npm WARN deprecated 
[0m[91mnpm WARN[0m[91m deprecated   npm -g install npm@latest
npm[0m[91m WARN[0m[91m deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
[0m[91mnpm [0m[91mWARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated[0m[91m If you're running the version of npm bundled with
[0m[91mnpm WARN[0m[91m deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
[0m[91mnpm WARN deprecated[0m[91m will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN deprecated semver behavior.
[0m[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.42 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.42/node-v0.10.42.tar.gz
gyp http 200 http://nodejs.org/dist/v0.10.42/node-v0.10.42.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp [0m[91mGET[0m[91m http://nodejs.org/dist/v0.10.42/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v0.10.42/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info [0m[91mspawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp [0m[91minfo spawn args   'binding.gyp',
gyp[0m[91m info spawn args   '-f',
[0m[91mgyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
[0m[91mgyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.42/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.42',
gyp info[0m[91m spawn args   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp[0m[91m [0m[91minfo [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.42
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 1ab0454747e0
Removing intermediate container 86c71ae1b4ba
Step 5 : ENV NODE_ENV production
 ---> Running in 1f7920eac027
 ---> fc00996958cd
Removing intermediate container 1f7920eac027
Step 6 : WORKDIR /usr/src/app
 ---> Running in ba7650553449
 ---> e2a97a5c13ec
Removing intermediate container ba7650553449
Step 7 : CMD npm start
 ---> Running in 56485c96fd86
 ---> e0c196dba9a7
Removing intermediate container 56485c96fd86
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 4233bdadecc7
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (4566 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 5ec3a99ffaa9
Removing intermediate container 4233bdadecc7
Successfully built 5ec3a99ffaa9

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test46`

Contents of dockerfile `/root/docker-node/.~tmp.test46/Dockerfile`:

```
FROM nodesource/jessie:0.10.42
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.42-test1` from `/root/docker-node/.~tmp.test46`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.42
 ---> 5ec3a99ffaa9
Step 2 : ENV NODE_ENV test
 ---> Running in 8a4558e47d66
 ---> 076c0f472ee9
Removing intermediate container 8a4558e47d66
Step 3 : RUN node -v
 ---> Running in ec485d88a1ea
v0.10.42
 ---> a061d0d15dd2
Removing intermediate container ec485d88a1ea
Step 4 : RUN node -p "process.versions"
 ---> Running in 00b42cbaef8c
{ http_parser: '1.1',
  node: '0.10.42',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1r' }
 ---> 782706a9f1b9
Removing intermediate container 00b42cbaef8c
Step 5 : RUN npm --version
 ---> Running in bf3baec42740
1.4.29
 ---> 18278a273bbb
Removing intermediate container bf3baec42740
Successfully built 18278a273bbb

```

# Tested image `nodesource/wheezy:0.10.42`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in acad2baaf669
 ---> a1da611f8df6
Removing intermediate container acad2baaf669
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.42-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 2db5eeaf21b3
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.42-1nodesource1~wheezy1) ...
 ---> 2fe10b1e4062
Removing intermediate container 2db5eeaf21b3
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0fa613b8da71
[91mnpm WARN deprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
npm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN deprecated To upgrade to the latest stable version, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN deprecated semver behavior.
[0m[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mnpm[0m[91m WARN deprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
npm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN deprecated To upgrade to the latest stable version, run:
npm [0m[91mWARN deprecated 
npm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
npm WARN [0m[91mdeprecated (Depending on how Node.js was installed on your system, you
[0m[91mnpm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN deprecated semver behavior.
[0m[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@0.10.42 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.42/node-v0.10.42.tar.gz
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.10.42/node-v0.10.42.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.42/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.42/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.42/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.42',
gyp info[0m[91m spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.42
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 75fd2e0e57b4
Removing intermediate container 0fa613b8da71
Step 5 : ENV NODE_ENV production
 ---> Running in 4d78885e2870
 ---> 97ed04e27eea
Removing intermediate container 4d78885e2870
Step 6 : WORKDIR /usr/src/app
 ---> Running in baf47deafc9c
 ---> f1a7c65dbfa9
Removing intermediate container baf47deafc9c
Step 7 : CMD npm start
 ---> Running in fa5b885b51f8
 ---> c8d7a438185a
Removing intermediate container fa5b885b51f8
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in fb385ee4d03e
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:7 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:8 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Get:9 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Fetched 8511 kB in 5s (1631 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 38581fa0521b
Removing intermediate container fb385ee4d03e
Successfully built 38581fa0521b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test2`

Contents of dockerfile `/root/docker-node/.~tmp.test2/Dockerfile`:

```
FROM nodesource/wheezy:0.10.42
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.42-test1` from `/root/docker-node/.~tmp.test2`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.42
 ---> 38581fa0521b
Step 2 : ENV NODE_ENV test
 ---> Running in fe14281b3a78
 ---> e2f3d2e5ba60
Removing intermediate container fe14281b3a78
Step 3 : RUN node -v
 ---> Running in d9282caa8ab7
v0.10.42
 ---> 0cb6fb8d7378
Removing intermediate container d9282caa8ab7
Step 4 : RUN node -p "process.versions"
 ---> Running in 4912099f8343
{ http_parser: '1.1',
  node: '0.10.42',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1r' }
 ---> 31761f859230
Removing intermediate container 4912099f8343
Step 5 : RUN npm --version
 ---> Running in 52cf132db3b7
1.4.29
 ---> 740ddb6c9c70
Removing intermediate container 52cf132db3b7
Successfully built 740ddb6c9c70

```

# Tested image `nodesource/jessie:0.12.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 106b96edf22f
 ---> e43b4637002f
Removing intermediate container 106b96edf22f
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in adef8e3f4366
[91m  % Total    % Received % Xferd  Average Speed   Time    Time   [0m[91m  Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.4-1nodesource1~jessie1) ...
Setting up nodejs (0.12.4-1nodesource1~jessie1) ...
 ---> a095a0d3005d
Removing intermediate container adef8e3f4366
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0b3bd44bca52
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with[0m[91m ok
[0m[91mgyp [0m[91minfo [0m[91musing[0m[91m pangyp@2.3.3
gyp info using node@0.12.4 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.4/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.4/SHASUMS256.txt
[0m[91mgyp [0m[91minfo[0m[91m spawn python
[0m[91mgyp[0m[91m info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.4',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! [0m[91mconfigure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
[0m[91mgyp ERR![0m[91m System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp[0m[91m [0m[91mERR! cwd /
gyp ERR! node -v v0.12.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> ed907229c075
Removing intermediate container 0b3bd44bca52
Step 5 : ENV NODE_ENV production
 ---> Running in 12f29649480c
 ---> d5920960b356
Removing intermediate container 12f29649480c
Step 6 : WORKDIR /usr/src/app
 ---> Running in 2abf5a94ee80
 ---> 4c9d5e3bfcd0
Removing intermediate container 2abf5a94ee80
Step 7 : CMD npm start
 ---> Running in c77d8179ceee
 ---> be48e658313b
Removing intermediate container c77d8179ceee
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 72fb7144d044
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (3200 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 3b0f9d717f9a
Removing intermediate container 72fb7144d044
Successfully built 3b0f9d717f9a

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test74`

Contents of dockerfile `/root/docker-node/.~tmp.test74/Dockerfile`:

```
FROM nodesource/jessie:0.12.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.4-test1` from `/root/docker-node/.~tmp.test74`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.4
 ---> 3b0f9d717f9a
Step 2 : ENV NODE_ENV test
 ---> Running in 510fb0ce9bd6
 ---> 261c4638d192
Removing intermediate container 510fb0ce9bd6
Step 3 : RUN node -v
 ---> Running in 0d1afe7684d7
v0.12.4
 ---> 01d0172149e5
Removing intermediate container 0d1afe7684d7
Step 4 : RUN node -p "process.versions"
 ---> Running in ca1d74f8740d
{ http_parser: '2.3',
  node: '0.12.4',
  v8: '3.28.71.19',
  uv: '1.5.0',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> e6935344ca1e
Removing intermediate container ca1d74f8740d
Step 5 : RUN npm --version
 ---> Running in 4bbdaac97b67
2.10.1
 ---> 4ea271e6433d
Removing intermediate container 4bbdaac97b67
Successfully built 4ea271e6433d

```

# Tested image `nodesource/wheezy:4.1.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 98ac1807034b
 ---> 2590a307a138
Removing intermediate container 98ac1807034b
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.1.2-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 10cc939b602a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left [0m[91m Sp[0m[91meed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.1.2-1nodesource1~wheezy1) ...
 ---> 22ef6317d9d4
Removing intermediate container 10cc939b602a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in f3a4991912ac
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated[0m[91m graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with[0m[91m ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
gyp info using node@4.1.2 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.1.2/node-v4.1.2.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.1.2/node-v4.1.2.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.1.2/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.1.2/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp [0m[91minfo spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp [0m[91minfo spawn args[0m[91m   '-I',
gyp info [0m[91mspawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.1.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args[0m[91m   '-Dvisibility=default',
gyp [0m[91minfo spawn args   '-Dnode_root_dir=/root/.node-gyp/4.1.2',
[0m[91mgyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info [0m[91mspawn args   '--no-parallel',
[0m[91mgyp info[0m[91m spawn args[0m[91m   '--generator-output',
gyp[0m[91m [0m[91minfo [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp[0m[91m info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR![0m[91m configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp[0m[91m ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp[0m[91m [0m[91mERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR![0m[91m System[0m[91m Linux 3.13.0-79-generic
gyp ERR! command[0m[91m "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp[0m[91m ERR! cwd /
[0m[91mgyp [0m[91mERR![0m[91m [0m[91mnode -v[0m[91m v4.1.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> c904bd1400cb
Removing intermediate container f3a4991912ac
Step 5 : ENV NODE_ENV production
 ---> Running in d586fbdcfdcb
 ---> f9f8f32c795b
Removing intermediate container d586fbdcfdcb
Step 6 : WORKDIR /usr/src/app
 ---> Running in 301e51434684
 ---> 7f8ffb3d49ff
Removing intermediate container 301e51434684
Step 7 : CMD npm start
 ---> Running in 19c5c08fc4b3
 ---> b43cafb844cd
Removing intermediate container 19c5c08fc4b3
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in ffe6280d10d8
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 1s (4474 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 5f4532e0bbd1
Removing intermediate container ffe6280d10d8
Successfully built 5f4532e0bbd1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test4`

Contents of dockerfile `/root/docker-node/.~tmp.test4/Dockerfile`:

```
FROM nodesource/wheezy:4.1.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.1.2-test1` from `/root/docker-node/.~tmp.test4`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.1.2
 ---> 5f4532e0bbd1
Step 2 : ENV NODE_ENV test
 ---> Running in 47d6b1fb2908
 ---> 6244d7ad00e8
Removing intermediate container 47d6b1fb2908
Step 3 : RUN node -v
 ---> Running in 7cbff2a15763
v4.1.2
 ---> 61ff5b75faed
Removing intermediate container 7cbff2a15763
Step 4 : RUN node -p "process.versions"
 ---> Running in 517e32d73d99
{ http_parser: '2.5.0',
  node: '4.1.2',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 0807269b8147
Removing intermediate container 517e32d73d99
Step 5 : RUN npm --version
 ---> Running in fd5e952f92aa
2.14.4
 ---> e4e7b913fe3d
Removing intermediate container fd5e952f92aa
Successfully built e4e7b913fe3d

```

# Tested image `nodesource/jessie:0.10.37`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 1cc2ef608798
 ---> c4f8f3b33b99
Removing intermediate container 1cc2ef608798
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.37-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 2c1451edb4b0
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.37-1nodesource1~jessie1) ...
Setting up nodejs (0.10.37-1nodesource1~jessie1) ...
 ---> f0790f83a766
Removing intermediate container 2c1451edb4b0
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 3c0889a9a156
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, tunnel-agent@0.4.2, oauth-sign@0.5.0, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.37 | linux | x64
[0m[91mgyp[0m[91m http[0m[91m GET http://nodejs.org/dist/v0.10.37/node-v0.10.37.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v0.10.37/node-v0.10.37.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.37/SHASUMS256.txt
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v0.10.37/SHASUMS256.txt
[0m[91mgyp info[0m[91m spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info[0m[91m spawn args   'make',
gyp info spawn args[0m[91m   '-I',
gyp [0m[91minfo [0m[91mspawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info [0m[91mspawn args   '/root/.node-gyp/0.10.37/common.gypi',
gyp [0m[91minfo [0m[91mspawn args[0m[91m   '-Dlibrary=shared_library',
[0m[91mgyp [0m[91minfo spawn args   '-Dvisibility=default',
gyp [0m[91minfo spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.37',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR![0m[91m configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp[0m[91m ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.37
gyp ERR! pangyp -v[0m[91m v2.3.3
gyp ERR![0m[91m not ok 
[0m
 ---> 49ba4c806e56
Removing intermediate container 3c0889a9a156
Step 5 : ENV NODE_ENV production
 ---> Running in f122d1822cf4
 ---> 268bea6d7cec
Removing intermediate container f122d1822cf4
Step 6 : WORKDIR /usr/src/app
 ---> Running in f9ceb5fa3043
 ---> 59874f90da78
Removing intermediate container f9ceb5fa3043
Step 7 : CMD npm start
 ---> Running in 331a393e3137
 ---> 26544b501ab7
Removing intermediate container 331a393e3137
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 0fd323ec18f2
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 6s (1498 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 21480d10b6b6
Removing intermediate container 0fd323ec18f2
Successfully built 21480d10b6b6

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test65`

Contents of dockerfile `/root/docker-node/.~tmp.test65/Dockerfile`:

```
FROM nodesource/jessie:0.10.37
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.37-test1` from `/root/docker-node/.~tmp.test65`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.37
 ---> 21480d10b6b6
Step 2 : ENV NODE_ENV test
 ---> Running in 8521d4691221
 ---> afbe29effed2
Removing intermediate container 8521d4691221
Step 3 : RUN node -v
 ---> Running in 404950ae08a8
v0.10.37
 ---> 6c56dfa8a73b
Removing intermediate container 404950ae08a8
Step 4 : RUN node -p "process.versions"
 ---> Running in 66b95231ad6d
{ http_parser: '1.0',
  node: '0.10.37',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1l' }
 ---> eb020bdb4456
Removing intermediate container 66b95231ad6d
Step 5 : RUN npm --version
 ---> Running in 4583c99b9e22
1.4.28
 ---> 06ed13963d1a
Removing intermediate container 4583c99b9e22
Successfully built 06ed13963d1a

```

# Tested image `nodesource/wheezy:4.2.6`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2c8d4317490e
 ---> 1b3ae21de3a6
Removing intermediate container 2c8d4317490e
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.6-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 1a1acb73b5e4
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.2.6-1nodesource1~wheezy1) ...
 ---> 4b2479062d5c
Removing intermediate container 1a1acb73b5e4
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in a72b4ba1d137
[91mnpm [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, mime-types@1.0.2, tough-cookie@2.2.1, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.2.6 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.6/node-v4.2.6.tar.gz
gyp http 200 http://nodejs.org/dist/v4.2.6/node-v4.2.6.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.6/SHASUMS256.txt
[0m[91mgyp http 200[0m[91m http://nodejs.org/dist/v4.2.6/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.6/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.6',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
[0m[91mgyp info spawn args   'build',
gyp [0m[91minfo spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.6
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> d79d91f89a8a
Removing intermediate container a72b4ba1d137
Step 5 : ENV NODE_ENV production
 ---> Running in b0e803e987ea
 ---> a1566daccd19
Removing intermediate container b0e803e987ea
Step 6 : WORKDIR /usr/src/app
 ---> Running in 82ee69a16eeb
 ---> 4980937e7efd
Removing intermediate container 82ee69a16eeb
Step 7 : CMD npm start
 ---> Running in 37c4e2d97904
 ---> 560b612cc7b3
Removing intermediate container 37c4e2d97904
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in bce7f5a80431
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:4 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:5 http://httpredir.debian.org wheezy Release [191 kB]
Get:6 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 3s (2413 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 5ab5259f96e3
Removing intermediate container bce7f5a80431
Successfully built 5ab5259f96e3

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test5`

Contents of dockerfile `/root/docker-node/.~tmp.test5/Dockerfile`:

```
FROM nodesource/wheezy:4.2.6
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.2.6-test1` from `/root/docker-node/.~tmp.test5`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.2.6
 ---> 5ab5259f96e3
Step 2 : ENV NODE_ENV test
 ---> Running in 67a9a1422299
 ---> 67a0d3b7c1b5
Removing intermediate container 67a9a1422299
Step 3 : RUN node -v
 ---> Running in e624b1689b5f
v4.2.6
 ---> 95d8c9b493a5
Removing intermediate container e624b1689b5f
Step 4 : RUN node -p "process.versions"
 ---> Running in ed9bd340ef6e
{ http_parser: '2.5.0',
  node: '4.2.6',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> caa85347e20f
Removing intermediate container ed9bd340ef6e
Step 5 : RUN npm --version
 ---> Running in e456ee9de0a8
2.14.12
 ---> cf54458ecd61
Removing intermediate container e456ee9de0a8
Successfully built cf54458ecd61

```

# Tested image `nodesource/jessie:5.2.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 1238fdb0848d
 ---> 9fca4057337a
Removing intermediate container 1238fdb0848d
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.2.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 1e788e2769d0
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.2.0-1nodesource1~jessie1) ...
Setting up nodejs (5.2.0-1nodesource1~jessie1) ...
 ---> 02d1225213ef
Removing intermediate container 1e788e2769d0
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 4922c07bc558
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp[0m[91m [0m[91minfo using pangyp@2.3.3
[0m[91mgyp info using node@5.2.0 | linux | x64
[0m[91mgyp[0m[91m http [0m[91mGET http://nodejs.org/dist/v5.2.0/node-v5.2.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.2.0/node-v5.2.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v5.2.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.2.0/SHASUMS256.txt
[0m[91mgyp info[0m[91m spawn[0m[91m python
[0m[91mgyp [0m[91minfo[0m[91m spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info [0m[91mspawn args   '-I',
[0m[91mgyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.2.0/common.gypi',
[0m[91mgyp[0m[91m info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/5.2.0',
[0m[91mgyp info spawn args   '-Druntime=node',
gyp info[0m[91m spawn args[0m[91m   '-Dmodule_root_dir=/',
[0m[91mgyp[0m[91m info spawn args[0m[91m   '--depth=.',
gyp info[0m[91m spawn args   '--no-parallel',
gyp[0m[91m info[0m[91m spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp ERR![0m[91m [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:88:13)
[0m[91mgyp [0m[91mERR![0m[91m stack     at ChildProcess.emit (events.js:173:7)
[0m[91mgyp[0m[91m ERR![0m[91m stack[0m[91m     at Process.ChildProcess._handle.onexit (internal/child_process.js:201:12)
[0m[91mgyp ERR![0m[91m System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp [0m[91mERR![0m[91m [0m[91mcwd[0m[91m /
[0m[91mgyp ERR! node -v v5.2.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> fce8bd5dc696
Removing intermediate container 4922c07bc558
Step 5 : ENV NODE_ENV production
 ---> Running in 273c06b272ca
 ---> cc038f12357a
Removing intermediate container 273c06b272ca
Step 6 : WORKDIR /usr/src/app
 ---> Running in d98fe728fe0d
 ---> fd6b88445aa4
Removing intermediate container d98fe728fe0d
Step 7 : CMD npm start
 ---> Running in 0cff10ea8cfa
 ---> b9c663837c1e
Removing intermediate container 0cff10ea8cfa
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 1edc1cc9783d
Ign http://httpredir.debian.org jessie InRelease
Get:1 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:2 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:3 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:6 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Get:7 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Fetched 9651 kB in 4s (2313 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0e999b142ac7
Removing intermediate container 1edc1cc9783d
Successfully built 0e999b142ac7

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test53`

Contents of dockerfile `/root/docker-node/.~tmp.test53/Dockerfile`:

```
FROM nodesource/jessie:5.2.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.2.0-test1` from `/root/docker-node/.~tmp.test53`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.2.0
 ---> 0e999b142ac7
Step 2 : ENV NODE_ENV test
 ---> Running in 579f366922ea
 ---> 060221408ddc
Removing intermediate container 579f366922ea
Step 3 : RUN node -v
 ---> Running in 9878ec0a0f01
v5.2.0
 ---> 59a9e09e022f
Removing intermediate container 9878ec0a0f01
Step 4 : RUN node -p "process.versions"
 ---> Running in dedd78caedb5
{ http_parser: '2.6.0',
  node: '5.2.0',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 5efb432ed480
Removing intermediate container dedd78caedb5
Step 5 : RUN npm --version
 ---> Running in 32e914a097b5
3.3.12
 ---> 6ddd100d1f04
Removing intermediate container 32e914a097b5
Successfully built 6ddd100d1f04

```

# Tested image `nodesource/jessie:4.2.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 7328d537c92f
 ---> 2d702754a4b8
Removing intermediate container 7328d537c92f
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.1-2nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in be1364143b99
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.1-2nodesource1~jessie1) ...
Setting up nodejs (4.2.1-2nodesource1~jessie1) ...
 ---> 9c1834dc52be
Removing intermediate container be1364143b99
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 51fdc84b9b10
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.2.1 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v4.2.1/node-v4.2.1.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v4.2.1/node-v4.2.1.tar.gz
[0m[91mgyp[0m[91m http GET[0m[91m http://nodejs.org/dist/v4.2.1/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200[0m[91m http://nodejs.org/dist/v4.2.1/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.1
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> ae4ae9a81182
Removing intermediate container 51fdc84b9b10
Step 5 : ENV NODE_ENV production
 ---> Running in 6367a89b78f5
 ---> 6bc9ac000bd7
Removing intermediate container 6367a89b78f5
Step 6 : WORKDIR /usr/src/app
 ---> Running in 10b1cbd223d4
 ---> a38ca4e2f3fd
Removing intermediate container 10b1cbd223d4
Step 7 : CMD npm start
 ---> Running in 4bc29997fbc6
 ---> 35c8963ae7a5
Removing intermediate container 4bc29997fbc6
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 7afd96a458c7
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2686 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 2f4907f52aa5
Removing intermediate container 7afd96a458c7
Successfully built 2f4907f52aa5

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test82`

Contents of dockerfile `/root/docker-node/.~tmp.test82/Dockerfile`:

```
FROM nodesource/jessie:4.2.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.1-test1` from `/root/docker-node/.~tmp.test82`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.1
 ---> 2f4907f52aa5
Step 2 : ENV NODE_ENV test
 ---> Running in 9e28ccec3fcf
 ---> be2b62e185d3
Removing intermediate container 9e28ccec3fcf
Step 3 : RUN node -v
 ---> Running in 40823c943296
v4.2.1
 ---> f83149251157
Removing intermediate container 40823c943296
Step 4 : RUN node -p "process.versions"
 ---> Running in 2d03d1389d0e
{ http_parser: '2.5.0',
  node: '4.2.1',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> bb1990cd3bcb
Removing intermediate container 2d03d1389d0e
Step 5 : RUN npm --version
 ---> Running in 1e05d0d0114b
2.14.7
 ---> 8565e6ab13d5
Removing intermediate container 1e05d0d0114b
Successfully built 8565e6ab13d5

```

# Tested image `nodesource/wheezy:4.2.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 592d4d7302e9
 ---> c1bc498602c7
Removing intermediate container 592d4d7302e9
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.2-2nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 75b095afa20d
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     T[0m[91mime  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (4.2.2-2nodesource1~wheezy1) ...
 ---> dc6e9ab22f66
Removing intermediate container 75b095afa20d
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in f325b9952c66
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.2.2 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.2/node-v4.2.2.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.2/node-v4.2.2.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.2/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.2/SHASUMS256.txt
[0m[91mgyp[0m[91m info[0m[91m spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.2',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.2
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> 505afe2b147e
Removing intermediate container f325b9952c66
Step 5 : ENV NODE_ENV production
 ---> Running in e2538fb54457
 ---> 027f24a0888b
Removing intermediate container e2538fb54457
Step 6 : WORKDIR /usr/src/app
 ---> Running in ed5c1f04b89a
 ---> 52dceb936ddb
Removing intermediate container ed5c1f04b89a
Step 7 : CMD npm start
 ---> Running in a67873699633
 ---> 846f33de1ae4
Removing intermediate container a67873699633
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 77ef77aacdf5
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 2s (2877 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 826e10691077
Removing intermediate container 77ef77aacdf5
Successfully built 826e10691077

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test37`

Contents of dockerfile `/root/docker-node/.~tmp.test37/Dockerfile`:

```
FROM nodesource/wheezy:4.2.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:4.2.2-test1` from `/root/docker-node/.~tmp.test37`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:4.2.2
 ---> 826e10691077
Step 2 : ENV NODE_ENV test
 ---> Running in 72cb18f89555
 ---> 86fc0c806acb
Removing intermediate container 72cb18f89555
Step 3 : RUN node -v
 ---> Running in 41fae11ce033
v4.2.2
 ---> 456355d9ba4f
Removing intermediate container 41fae11ce033
Step 4 : RUN node -p "process.versions"
 ---> Running in 5da89b2953e4
{ http_parser: '2.5.0',
  node: '4.2.2',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '4.8.1.1',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 2ac5fb4501b6
Removing intermediate container 5da89b2953e4
Step 5 : RUN npm --version
 ---> Running in 8022c63d4d05
2.14.7
 ---> 969a1660b576
Removing intermediate container 8022c63d4d05
Successfully built 969a1660b576

```

# Tested image `nodesource/wheezy:0.10.36`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 51ec76318b20
 ---> 61a33dafe5d3
Removing intermediate container 51ec76318b20
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.36-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 5bc24da4fb79
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.10.36-1nodesource1~wheezy1) ...
 ---> 869edc94e58c
Removing intermediate container 5bc24da4fb79
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in bdd91f6c153d
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp info [0m[91mit worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.36 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.36/node-v0.10.36.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.36/node-v0.10.36.tar.gz
[0m[91mgyp[0m[91m http [0m[91mGET http://nodejs.org/dist/v0.10.36/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.36/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info [0m[91mspawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
[0m[91mgyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.36/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info [0m[91mspawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.36',
gyp info[0m[91m spawn args   '-Druntime=node',
[0m[91mgyp info [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp[0m[91m info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
gyp [0m[91minfo [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v0.10.36
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 027b44cf9231
Removing intermediate container bdd91f6c153d
Step 5 : ENV NODE_ENV production
 ---> Running in 7d2e7ee20ce7
 ---> c7fc72e460e9
Removing intermediate container 7d2e7ee20ce7
Step 6 : WORKDIR /usr/src/app
 ---> Running in 160ffb3ff483
 ---> f0d39b482daf
Removing intermediate container 160ffb3ff483
Step 7 : CMD npm start
 ---> Running in a2e5145737d1
 ---> e2417f65f122
Removing intermediate container a2e5145737d1
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f04e946c0640
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 3s (2371 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 850478945f76
Removing intermediate container f04e946c0640
Successfully built 850478945f76

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test19`

Contents of dockerfile `/root/docker-node/.~tmp.test19/Dockerfile`:

```
FROM nodesource/wheezy:0.10.36
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.10.36-test1` from `/root/docker-node/.~tmp.test19`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.10.36
 ---> 850478945f76
Step 2 : ENV NODE_ENV test
 ---> Running in ef6f25ebe002
 ---> 7f8e63787516
Removing intermediate container ef6f25ebe002
Step 3 : RUN node -v
 ---> Running in 5e5cc17b1564
v0.10.36
 ---> 251a9681f0fa
Removing intermediate container 5e5cc17b1564
Step 4 : RUN node -p "process.versions"
 ---> Running in 067348f6f3c2
{ http_parser: '1.0',
  node: '0.10.36',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1l' }
 ---> 609eac9b30d1
Removing intermediate container 067348f6f3c2
Step 5 : RUN npm --version
 ---> Running in 49d27d3c6964
1.4.28
 ---> 167c1f17da8a
Removing intermediate container 49d27d3c6964
Successfully built 167c1f17da8a

```

# Tested image `nodesource/jessie:iojs-1.4.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in cb975c4cc1b3
 ---> 23422425acab
Removing intermediate container cb975c4cc1b3
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.4.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 47499bcfd639
[91m  % Total    [0m[91m% Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.4.3-1nodesource1~jessie1) ...
Setting up iojs (1.4.3-1nodesource1~jessie1) ...
 ---> 20a1da0a3b24
Removing intermediate container 47499bcfd639
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in ac0882672bd8
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@1.4.3 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET https://iojs.org/dist/v1.4.3/iojs-v1.4.3.tar.gz
[0m[91mgyp http [0m[91m200 https://iojs.org/dist/v1.4.3/iojs-v1.4.3.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET https://iojs.org/dist/v1.4.3/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200[0m[91m https://iojs.org/dist/v1.4.3/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
[0m[91mgyp info spawn args[0m[91m   'make',
gyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.4.3/common.gypi',
gyp info [0m[91mspawn args   '-Dlibrary=shared_library',
gyp[0m[91m info spawn args   '-Dvisibility=default',
[0m[91mgyp info [0m[91mspawn args   '-Dnode_root_dir=/root/.node-gyp/1.4.3',
gyp[0m[91m info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args[0m[91m   '--generator-output',
gyp info spawn args[0m[91m   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack[0m[91m     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp [0m[91mERR! command "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v1.4.3
gyp ERR! pangyp -v v2.3.3
gyp ERR![0m[91m not ok[0m[91m 
[0m
 ---> eb9ec7b746a4
Removing intermediate container ac0882672bd8
Step 5 : ENV NODE_ENV production
 ---> Running in e2d2de32c63d
 ---> fd26fe3b131b
Removing intermediate container e2d2de32c63d
Step 6 : WORKDIR /usr/src/app
 ---> Running in 08a4d8778b8f
 ---> 6035cff47556
Removing intermediate container 08a4d8778b8f
Step 7 : CMD npm start
 ---> Running in 2c35415bbd9a
 ---> 9333a23eaa53
Removing intermediate container 2c35415bbd9a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 2f11443d582f
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 6s (1408 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 881cbaae2894
Removing intermediate container 2f11443d582f
Successfully built 881cbaae2894

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test94`

Contents of dockerfile `/root/docker-node/.~tmp.test94/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.4.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.4.3-test1` from `/root/docker-node/.~tmp.test94`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.4.3
 ---> 881cbaae2894
Step 2 : ENV NODE_ENV test
 ---> Running in 9ae4b53262b8
 ---> 0a6b77153735
Removing intermediate container 9ae4b53262b8
Step 3 : RUN node -v
 ---> Running in 22aeecd7f50f
v1.4.3
 ---> 73b0a8f80323
Removing intermediate container 22aeecd7f50f
Step 4 : RUN node -p "process.versions"
 ---> Running in 9826b8ca13c7
{ http_parser: '2.3.0',
  node: '1.4.3',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> ff57c5921177
Removing intermediate container 9826b8ca13c7
Step 5 : RUN npm --version
 ---> Running in 95b76f0627c4
2.6.1
 ---> 975c61e557d2
Removing intermediate container 95b76f0627c4
Successfully built 975c61e557d2

```

# Tested image `nodesource/wheezy:0.12.5`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/wheezy-base
 ---> 6670176875a2
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in dc9a9fff70f2
 ---> 586e55ab7877
Removing intermediate container dc9a9fff70f2
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.5-1nodesource1~wheezy1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ad88ec23dcc1
[91m  % Total    % Received % Xferd  Average Speed   Time    [0m[91mTime     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14461 files and directories currently installed.)
Unpacking nodejs (from node.deb) ...
Setting up nodejs (0.12.5-1nodesource1~wheezy1) ...
 ---> f5def985245b
Removing intermediate container ad88ec23dcc1
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 43906aeb1e63
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── semver@4.3.6
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp info using pangyp@2.3.3
gyp info [0m[91musing node@0.12.5 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.5/node-v0.12.5.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.5/node-v0.12.5.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.5/SHASUMS256.txt
[0m[91mgyp http [0m[91m200 http://nodejs.org/dist/v0.12.5/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.5/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.5',
gyp info spawn args   '-Druntime=node',
gyp[0m[91m info [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp[0m[91m info[0m[91m spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.5
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 50a3246829be
Removing intermediate container 43906aeb1e63
Step 5 : ENV NODE_ENV production
 ---> Running in 621db3f92da2
 ---> 1679412ac88b
Removing intermediate container 621db3f92da2
Step 6 : WORKDIR /usr/src/app
 ---> Running in d66c985cf6e9
 ---> 9a3fc234d769
Removing intermediate container d66c985cf6e9
Step 7 : CMD npm start
 ---> Running in f2c8451d590e
 ---> 21a692da8b6c
Removing intermediate container f2c8451d590e
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f9720d8eda4b
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [102 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [426 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [143 kB]
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7637 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [5788 B]
Fetched 8511 kB in 18s (459 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> dca71a66afcc
Removing intermediate container f9720d8eda4b
Successfully built dca71a66afcc

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test30`

Contents of dockerfile `/root/docker-node/.~tmp.test30/Dockerfile`:

```
FROM nodesource/wheezy:0.12.5
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/wheezy:0.12.5-test1` from `/root/docker-node/.~tmp.test30`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/wheezy:0.12.5
 ---> dca71a66afcc
Step 2 : ENV NODE_ENV test
 ---> Running in 7950e1274993
 ---> 38d3ceb4e80c
Removing intermediate container 7950e1274993
Step 3 : RUN node -v
 ---> Running in 6d6bb3668cf8
v0.12.5
 ---> be6b9edf4f77
Removing intermediate container 6d6bb3668cf8
Step 4 : RUN node -p "process.versions"
 ---> Running in 0b70331af06a
{ http_parser: '2.3',
  node: '0.12.5',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1o' }
 ---> 79d8e65e9c55
Removing intermediate container 0b70331af06a
Step 5 : RUN npm --version
 ---> Running in 0cea4791f8f1
2.11.2
 ---> 0efbf1d15491
Removing intermediate container 0cea4791f8f1
Successfully built 0efbf1d15491

```

# Tested image `nodesource/jessie:4.2.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 552572d19b7d
 ---> 9a1d45920bbe
Removing intermediate container 552572d19b7d
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in b517a78ccddb
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 D[0m[91mload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.4-1nodesource1~jessie1) ...
Setting up nodejs (4.2.4-1nodesource1~jessie1) ...
 ---> 2432f13753ac
Removing intermediate container b517a78ccddb
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 82ee605b7c87
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
gyp info using node@4.2.4 | linux | x64
[0m[91mgyp http [0m[91mGET http://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.4/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp[0m[91m 200 http://nodejs.org/dist/v4.2.4/SHASUMS256.txt
[0m[91mgyp[0m[91m info [0m[91mspawn python
[0m[91mgyp[0m[91m [0m[91minfo spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp [0m[91minfo[0m[91m [0m[91mspawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
[0m[91mgyp[0m[91m [0m[91minfo [0m[91mspawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info[0m[91m spawn args[0m[91m   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.4',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
[0m[91mgyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp info[0m[91m [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR![0m[91m [0m[91mconfigure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack[0m[91m     at emitTwo (events.js:87:13)
gyp ERR! stack[0m[91m     at ChildProcess.emit (events.js:172:7)
[0m[91mgyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp [0m[91mERR! [0m[91mSystem[0m[91m Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR![0m[91m cwd[0m[91m /
gyp ERR! node -v v4.2.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7ec909faf047
Removing intermediate container 82ee605b7c87
Step 5 : ENV NODE_ENV production
 ---> Running in f825893d05a3
 ---> 20a48079ac1d
Removing intermediate container f825893d05a3
Step 6 : WORKDIR /usr/src/app
 ---> Running in f05c4f2604e8
 ---> eb2853b2a18e
Removing intermediate container f05c4f2604e8
Step 7 : CMD npm start
 ---> Running in 1bddbfc8d01e
 ---> 2a260ef96d17
Removing intermediate container 1bddbfc8d01e
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f7a1032f21f9
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3952 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> be6b1948cc09
Removing intermediate container f7a1032f21f9
Successfully built be6b1948cc09

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test85`

Contents of dockerfile `/root/docker-node/.~tmp.test85/Dockerfile`:

```
FROM nodesource/jessie:4.2.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.4-test1` from `/root/docker-node/.~tmp.test85`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.4
 ---> be6b1948cc09
Step 2 : ENV NODE_ENV test
 ---> Running in 68f4d541d248
 ---> 4a528daef1f9
Removing intermediate container 68f4d541d248
Step 3 : RUN node -v
 ---> Running in 21eea17913af
v4.2.4
 ---> 69899755a30f
Removing intermediate container 21eea17913af
Step 4 : RUN node -p "process.versions"
 ---> Running in 733aa94266c0
{ http_parser: '2.5.0',
  node: '4.2.4',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> 9793366437fc
Removing intermediate container 733aa94266c0
Step 5 : RUN npm --version
 ---> Running in ea8feca98146
2.14.12
 ---> ceda6ca667ab
Removing intermediate container ea8feca98146
Successfully built ceda6ca667ab

```

# Tested image `nodesource/jessie:iojs-3.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 1427d3f17cea
 ---> 03d0016dc4af
Removing intermediate container 1427d3f17cea
Step 3 : RUN curl https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/iojs_3.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in f70ba8df4ba8
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (3.3.0-1nodesource1~jessie1) ...
Setting up iojs (3.3.0-1nodesource1~jessie1) ...
 ---> 6c1e94e7a4ab
Removing intermediate container f70ba8df4ba8
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in a68f7d08d6b3
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using[0m[91m pangyp@2.3.3
[0m[91mgyp info using node@3.3.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m GET https://iojs.org/dist/v3.3.0/iojs-v3.3.0.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v3.3.0/iojs-v3.3.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v3.3.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v3.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info[0m[91m spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info [0m[91mspawn args   '-I',
gyp info spawn args   '/root/.node-gyp/3.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp [0m[91minfo [0m[91mspawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/3.3.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! [0m[91mconfigure error 
[0m[91mgyp ERR! stack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp[0m[91m ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd[0m[91m /
[0m[91mgyp[0m[91m ERR! node -v v3.3.0
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> f5c31331a44b
Removing intermediate container a68f7d08d6b3
Step 5 : ENV NODE_ENV production
 ---> Running in 5789637bad38
 ---> b462314b5ff9
Removing intermediate container 5789637bad38
Step 6 : WORKDIR /usr/src/app
 ---> Running in 2f059d28807c
 ---> 6214f9439b43
Removing intermediate container 2f059d28807c
Step 7 : CMD npm start
 ---> Running in 7936d9191063
 ---> 7fa946a93e9f
Removing intermediate container 7936d9191063
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 7c9a7a19483b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 8s (1126 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 3cc4d87114c7
Removing intermediate container 7c9a7a19483b
Successfully built 3cc4d87114c7

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test92`

Contents of dockerfile `/root/docker-node/.~tmp.test92/Dockerfile`:

```
FROM nodesource/jessie:iojs-3.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-3.3.0-test1` from `/root/docker-node/.~tmp.test92`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-3.3.0
 ---> 3cc4d87114c7
Step 2 : ENV NODE_ENV test
 ---> Running in 97c0eb7517de
 ---> ebc23c474157
Removing intermediate container 97c0eb7517de
Step 3 : RUN node -v
 ---> Running in 3b7b8a8459a0
v3.3.0
 ---> 2e901cb430fc
Removing intermediate container 3b7b8a8459a0
Step 4 : RUN node -p "process.versions"
 ---> Running in 0871dba6078d
{ http_parser: '2.5.0',
  node: '3.3.0',
  v8: '4.4.63.30',
  uv: '1.7.3',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '45',
  openssl: '1.0.2d' }
 ---> 870d8aa89d45
Removing intermediate container 0871dba6078d
Step 5 : RUN npm --version
 ---> Running in aef08ea401b7
2.13.3
 ---> 3752d48fd9da
Removing intermediate container aef08ea401b7
Successfully built 3752d48fd9da

```

# Tested image `nodesource/jessie:iojs-2.2.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 79debd5e6082
 ---> c3e3d31fbb78
Removing intermediate container 79debd5e6082
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.2.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 7643a1b9c831
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Tim[0m[91me  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.2.1-1nodesource1~jessie1) ...
Setting up iojs (2.2.1-1nodesource1~jessie1) ...
 ---> 2af00e732fbb
Removing intermediate container 7643a1b9c831
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 91b93a207139
[91mnpm[0m[91m WARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m WARN deprecated[0m[91m graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
[0m[91mgyp info[0m[91m using node@2.2.1 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v2.2.1/iojs-v2.2.1.tar.gz
[0m[91mgyp http 200[0m[91m https://iojs.org/dist/v2.2.1/iojs-v2.2.1.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.2.1/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200 https://iojs.org/dist/v2.2.1/SHASUMS256.txt
[0m[91mgyp[0m[91m info [0m[91mspawn python
[0m[91mgyp[0m[91m info[0m[91m spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info[0m[91m spawn args   '/build/config.gypi',
[0m[91mgyp info spawn args   '-I',
[0m[91mgyp[0m[91m info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.2.1/common.gypi',
gyp info [0m[91mspawn args   '-Dlibrary=shared_library',
gyp[0m[91m [0m[91minfo[0m[91m spawn args[0m[91m   '-Dvisibility=default',
gyp info[0m[91m spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/2.2.1',
gyp info spawn args   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
[0m[91mgyp [0m[91minfo spawn args   '--depth=.',
[0m[91mgyp[0m[91m info [0m[91mspawn args   '--no-parallel',
gyp info spawn args[0m[91m   '--generator-output',
gyp info[0m[91m [0m[91mspawn args[0m[91m   'build',
gyp [0m[91minfo spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR![0m[91m stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
[0m[91mgyp ERR! [0m[91mstack     at Process.ChildProcess._handle.onexit (internal/child_process.js:199:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.2.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 68ff2cba6b7d
Removing intermediate container 91b93a207139
Step 5 : ENV NODE_ENV production
 ---> Running in 81e71da9d840
 ---> 667f96b86fc0
Removing intermediate container 81e71da9d840
Step 6 : WORKDIR /usr/src/app
 ---> Running in 11d1b66110b5
 ---> 82d53b673648
Removing intermediate container 11d1b66110b5
Step 7 : CMD npm start
 ---> Running in 7fcb20c0ca85
 ---> 8fc99fc0c550
Removing intermediate container 7fcb20c0ca85
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6382ff1a0ffb
Ign http://httpredir.debian.org jessie InRelease
Get:1 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:2 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5334 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 51c00bad0dcf
Removing intermediate container 6382ff1a0ffb
Successfully built 51c00bad0dcf

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test100`

Contents of dockerfile `/root/docker-node/.~tmp.test100/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.2.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.2.1-test1` from `/root/docker-node/.~tmp.test100`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.2.1
 ---> 51c00bad0dcf
Step 2 : ENV NODE_ENV test
 ---> Running in 20f10bfbb18c
 ---> 973d8a4febde
Removing intermediate container 20f10bfbb18c
Step 3 : RUN node -v
 ---> Running in 15c3465f78b5
v2.2.1
 ---> f63309bf017f
Removing intermediate container 15c3465f78b5
Step 4 : RUN node -p "process.versions"
 ---> Running in cc77d0ed0a44
{ http_parser: '2.5.0',
  node: '2.2.1',
  v8: '4.2.77.20',
  uv: '1.5.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> cdc10e2f7bb4
Removing intermediate container cc77d0ed0a44
Step 5 : RUN npm --version
 ---> Running in efdbfbca5b32
2.11.0
 ---> cedf608f6f5c
Removing intermediate container efdbfbca5b32
Successfully built cedf608f6f5c

```

# Tested image `nodesource/sid:4.2.5`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/sid-base
 ---> ef8990438980
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 3692da98438f
 ---> 85f9c36eb106
Removing intermediate container 3692da98438f
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.5-1nodesource1~sid1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in cffc586f6a38
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 16183 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.5-1nodesource1~sid1) ...
Setting up nodejs (4.2.5-1nodesource1~sid1) ...
 ---> b7f6015d679b
Removing intermediate container cffc586f6a38
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1368e8705c13
[91mnpm[0m[91m WARN [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
gyp [0m[91minfo[0m[91m using node@4.2.5 | linux | x64
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v4.2.5/node-v4.2.5.tar.gz
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v4.2.5/node-v4.2.5.tar.gz
[0m[91mgyp[0m[91m http[0m[91m [0m[91mGET http://nodejs.org/dist/v4.2.5/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.5/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.5/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.5',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.5
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 4c404cdec1a5
Error removing intermediate container 1368e8705c13: rmdriverfs: Driver aufs failed to remove root filesystem 1368e8705c13c85ff905631f0fb78a44700c66261bc587464165ba0bf94f8c1c: rename /var/lib/docker/aufs/mnt/404449cfca586e9de32982f55c1f21e8db12fc0fc95f0b8a6994e3047c877288 /var/lib/docker/aufs/mnt/404449cfca586e9de32982f55c1f21e8db12fc0fc95f0b8a6994e3047c877288-removing: device or resource busy
Step 5 : ENV NODE_ENV production
 ---> Running in afb64205904c
 ---> 74893fe3113e
Removing intermediate container afb64205904c
Error removing intermediate container 1368e8705c13: nosuchcontainer: No such container: 1368e8705c13c85ff905631f0fb78a44700c66261bc587464165ba0bf94f8c1c
Step 6 : WORKDIR /usr/src/app
 ---> Running in eeb14720f029
 ---> 6339f123c80b
Error removing intermediate container 1368e8705c13: nosuchcontainer: No such container: 1368e8705c13c85ff905631f0fb78a44700c66261bc587464165ba0bf94f8c1c
Step 7 : CMD npm start
 ---> Running in 559591635d66
 ---> dba8c687294f
Error removing intermediate container 1368e8705c13: nosuchcontainer: No such container: 1368e8705c13c85ff905631f0fb78a44700c66261bc587464165ba0bf94f8c1c
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 8fb9dd17b91c
Get:1 http://mirrors.cat.pdx.edu/debian sid InRelease [287 kB]
Get:2 http://mirrors.kernel.org/debian sid/main amd64 Packages [10.8 MB]
Fetched 11.1 MB in 2s (4950 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
Calculating upgrade...
The following packages have been kept back:
  nodejs
The following packages will be upgraded:
  dmsetup hostname iproute2 libc-bin libdebconfclient0 libdevmapper1.02.1
  liblz4-1 libncurses5 libncursesw5 libtinfo5 multiarch-support ncurses-base
  ncurses-bin
13 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
Need to get 2921 kB of archives.
After this operation, 11.3 kB of additional disk space will be used.
Get:1 http://mirrors.cat.pdx.edu/debian sid/main amd64 hostname amd64 3.17 [14.2 kB]
Get:2 http://mirrors.cat.pdx.edu/debian sid/main amd64 ncurses-bin amd64 6.0+20160213-1 [354 kB]
Get:3 http://mirrors.cat.pdx.edu/debian sid/main amd64 libc-bin amd64 2.21-9 [761 kB]
Get:4 http://mirrors.cat.pdx.edu/debian sid/main amd64 ncurses-base all 6.0+20160213-1 [233 kB]
Get:5 http://mirrors.cat.pdx.edu/debian sid/main amd64 libtinfo5 amd64 6.0+20160213-1 [293 kB]
Get:6 http://mirrors.cat.pdx.edu/debian sid/main amd64 libncurses5 amd64 6.0+20160213-1 [94.3 kB]
Get:7 http://mirrors.cat.pdx.edu/debian sid/main amd64 libncursesw5 amd64 6.0+20160213-1 [115 kB]
Get:8 http://mirrors.cat.pdx.edu/debian sid/main amd64 multiarch-support amd64 2.21-9 [187 kB]
Get:9 http://mirrors.cat.pdx.edu/debian sid/main amd64 dmsetup amd64 2:1.02.116-1 [93.2 kB]
Get:10 http://mirrors.cat.pdx.edu/debian sid/main amd64 libdevmapper1.02.1 amd64 2:1.02.116-1 [179 kB]
Get:11 http://mirrors.cat.pdx.edu/debian sid/main amd64 libdebconfclient0 amd64 0.206 [47.3 kB]
Get:12 http://mirrors.cat.pdx.edu/debian sid/main amd64 liblz4-1 amd64 0.0~r131-2 [32.5 kB]
Get:13 http://mirrors.cat.pdx.edu/debian sid/main amd64 iproute2 amd64 4.3.0-1+b1 [516 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 2921 kB in 0s (5496 kB/s)
(Reading database ... 
Preparing to unpack .../hostname_3.17_amd64.deb ...
Unpacking hostname (3.17) over (3.16) ...
Setting up hostname (3.17) ...
(Reading database ... 
Preparing to unpack .../ncurses-bin_6.0+20160213-1_amd64.deb ...
Unpacking ncurses-bin (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-bin (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libc-bin_2.21-9_amd64.deb ...
Unpacking libc-bin (2.21-9) over (2.21-8) ...
Setting up libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../ncurses-base_6.0+20160213-1_all.deb ...
Unpacking ncurses-base (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-base (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libtinfo5_6.0+20160213-1_amd64.deb ...
Unpacking libtinfo5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libtinfo5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncurses5_6.0+20160213-1_amd64.deb ...
Unpacking libncurses5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncurses5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncursesw5_6.0+20160213-1_amd64.deb ...
Unpacking libncursesw5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncursesw5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../multiarch-support_2.21-9_amd64.deb ...
Unpacking multiarch-support (2.21-9) over (2.21-8) ...
Setting up multiarch-support (2.21-9) ...
(Reading database ... 
Preparing to unpack .../dmsetup_2%3a1.02.116-1_amd64.deb ...
Unpacking dmsetup (2:1.02.116-1) over (2:1.02.115-2) ...
Setting up dmsetup (2:1.02.116-1) ...
(Reading database ... 
Preparing to unpack .../libdevmapper1.02.1_2%3a1.02.116-1_amd64.deb ...
Unpacking libdevmapper1.02.1:amd64 (2:1.02.116-1) over (2:1.02.115-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdevmapper1.02.1:amd64 (2:1.02.116-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libdebconfclient0_0.206_amd64.deb ...
Unpacking libdebconfclient0:amd64 (0.206) over (0.205) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdebconfclient0:amd64 (0.206) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../liblz4-1_0.0~r131-2_amd64.deb ...
Unpacking liblz4-1:amd64 (0.0~r131-2) over (0.0~r131-1) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up liblz4-1:amd64 (0.0~r131-2) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../iproute2_4.3.0-1+b1_amd64.deb ...
Unpacking iproute2 (4.3.0-1+b1) over (4.3.0-1) ...
Setting up iproute2 (4.3.0-1+b1) ...
[91mW: --force-yes is deprecated, use one of the options starting with --allow instead.
[0m ---> 58c23223652a
Error removing intermediate container 1368e8705c13: nosuchcontainer: No such container: 1368e8705c13c85ff905631f0fb78a44700c66261bc587464165ba0bf94f8c1c
Successfully built 58c23223652a

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test162`

Contents of dockerfile `/root/docker-node/.~tmp.test162/Dockerfile`:

```
FROM nodesource/sid:4.2.5
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/sid:4.2.5-test1` from `/root/docker-node/.~tmp.test162`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/sid:4.2.5
 ---> 58c23223652a
Step 2 : ENV NODE_ENV test
 ---> Running in 8b050ec509b0
 ---> d4da38ae709e
Removing intermediate container 8b050ec509b0
Step 3 : RUN node -v
 ---> Running in 05d59e8ea816
v4.2.5
 ---> 05fd46997d6d
Removing intermediate container 05d59e8ea816
Step 4 : RUN node -p "process.versions"
 ---> Running in ae971b4b8573
{ http_parser: '2.5.0',
  node: '4.2.5',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> a7583992ce4a
Removing intermediate container ae971b4b8573
Step 5 : RUN npm --version
 ---> Running in d66b82466ca8
2.14.12
 ---> 9fa4822ce398
Error removing intermediate container d66b82466ca8: rmdriverfs: Driver aufs failed to remove root filesystem d66b82466ca8793721f14fa02edc090a9213dab0ab20e661f340e1dcd3e4fe5c: rename /var/lib/docker/aufs/mnt/fbdc2949996dee98a735511a6934c19e93f389ab61d941deb1fc849479738545 /var/lib/docker/aufs/mnt/fbdc2949996dee98a735511a6934c19e93f389ab61d941deb1fc849479738545-removing: device or resource busy
Successfully built 9fa4822ce398

```

# Tested image `nodesource/jessie:iojs-2.3.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 25fc7aaa46f3
 ---> ff8ae1309074
Removing intermediate container 25fc7aaa46f3
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 2cef928d12f9
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.4-1nodesource1~jessie1) ...
Setting up iojs (2.3.4-1nodesource1~jessie1) ...
 ---> b8b7039f7f56
Removing intermediate container 2cef928d12f9
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 35b1a34af044
[91mnpm[0m[91m [0m[91mWARN [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
gyp info using node@2.3.4 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v2.3.4/iojs-v2.3.4.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.3.4/iojs-v2.3.4.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.3.4/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200 https://iojs.org/dist/v2.3.4/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.4',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! [0m[91mstack Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m ERR![0m[91m stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
[0m[91mgyp[0m[91m ERR![0m[91m stack[0m[91m     at ChildProcess.emit (events.js:172:7)
[0m[91mgyp ERR! stack[0m[91m     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp [0m[91mERR! System[0m[91m Linux 3.13.0-79-generic
gyp[0m[91m [0m[91mERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
[0m[91mgyp[0m[91m ERR! node -v[0m[91m v2.3.4
[0m[91mgyp ERR![0m[91m [0m[91mpangyp -v v2.3.3
gyp ERR! not ok[0m[91m 
[0m
 ---> 5038dad0e547
Removing intermediate container 35b1a34af044
Step 5 : ENV NODE_ENV production
 ---> Running in 4604b14cf579
 ---> 0abb4670c861
Removing intermediate container 4604b14cf579
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8dd0cf9f3fe6
 ---> 4ea157a35041
Removing intermediate container 8dd0cf9f3fe6
Step 7 : CMD npm start
 ---> Running in 14a621ca8f79
 ---> 21f0433d0b76
Removing intermediate container 14a621ca8f79
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in fd6e341d33e6
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (2895 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 8c0620046b6d
Removing intermediate container fd6e341d33e6
Successfully built 8c0620046b6d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test101`

Contents of dockerfile `/root/docker-node/.~tmp.test101/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.4-test1` from `/root/docker-node/.~tmp.test101`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.4
 ---> 8c0620046b6d
Step 2 : ENV NODE_ENV test
 ---> Running in 0f9644c5aa3a
 ---> 20541b0ba7e1
Removing intermediate container 0f9644c5aa3a
Step 3 : RUN node -v
 ---> Running in b132481346fe
v2.3.4
 ---> 5c5baf3814c7
Removing intermediate container b132481346fe
Step 4 : RUN node -p "process.versions"
 ---> Running in 8f20517fbbdc
{ http_parser: '2.5.0',
  node: '2.3.4',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2d' }
 ---> 61da7dd38ac1
Removing intermediate container 8f20517fbbdc
Step 5 : RUN npm --version
 ---> Running in 2375305a1a1a
2.12.1
 ---> 3cff7c374605
Removing intermediate container 2375305a1a1a
Successfully built 3cff7c374605

```

# Tested image `nodesource/jessie:iojs-1.4.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 9663b0dc07c7
 ---> 636582673a74
Removing intermediate container 9663b0dc07c7
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.4.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in af9531686ef5
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
        [0m[91m                         Dload  Upload   Total   Spent    Left  Speed

(Reading database ... 14690 files and directories currently installed.)
[91m-:--:-- --:--:-- --:--:-- 7085k
[0mPreparing to unpack node.deb ...
Unpacking iojs (1.4.1-1nodesource1~jessie1) ...
Setting up iojs (1.4.1-1nodesource1~jessie1) ...
 ---> 05af21a30476
Removing intermediate container af9531686ef5
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c414126c8268
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@1.4.1 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.4.1/iojs-v1.4.1.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.4.1/iojs-v1.4.1.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET https://iojs.org/dist/v1.4.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.4.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp [0m[91minfo spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.4.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.4.1',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info[0m[91m spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.4.1
gyp ERR! [0m[91mpangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 1c16df57463a
Removing intermediate container c414126c8268
Step 5 : ENV NODE_ENV production
 ---> Running in c122167b7f92
 ---> 003706171b14
Removing intermediate container c122167b7f92
Step 6 : WORKDIR /usr/src/app
 ---> Running in e7f072b3862f
 ---> c85ba694234f
Removing intermediate container e7f072b3862f
Step 7 : CMD npm start
 ---> Running in ad2559113b69
 ---> d816f3009652
Removing intermediate container ad2559113b69
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 077a863715ae
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (3211 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 10d019a73403
Removing intermediate container 077a863715ae
Successfully built 10d019a73403

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test106`

Contents of dockerfile `/root/docker-node/.~tmp.test106/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.4.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.4.1-test1` from `/root/docker-node/.~tmp.test106`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.4.1
 ---> 10d019a73403
Step 2 : ENV NODE_ENV test
 ---> Running in 6e4014831bd2
 ---> acf2524f30c0
Removing intermediate container 6e4014831bd2
Step 3 : RUN node -v
 ---> Running in f2a43f2b171c
v1.4.1
 ---> a6a4d485e0be
Removing intermediate container f2a43f2b171c
Step 4 : RUN node -p "process.versions"
 ---> Running in 3f808c71d6fc
{ http_parser: '2.3.0',
  node: '1.4.1',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> 75b505b79aea
Removing intermediate container 3f808c71d6fc
Step 5 : RUN npm --version
 ---> Running in 23daeaabeb1d
2.6.0
 ---> 71d59fe44211
Removing intermediate container 23daeaabeb1d
Successfully built 71d59fe44211

```

# Tested image `nodesource/jessie:iojs-3.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in eb2341c4c57d
 ---> 9c53f27eb698
Removing intermediate container eb2341c4c57d
Step 3 : RUN curl https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/iojs_3.1.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ee7fc51dc8b9
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (3.1.0-1nodesource1~jessie1) ...
Setting up iojs (3.1.0-1nodesource1~jessie1) ...
 ---> da713739cc40
Removing intermediate container ee7fc51dc8b9
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in fdc06d9ec949
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@3.1.0 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v3.1.0/iojs-v3.1.0.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v3.1.0/iojs-v3.1.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v3.1.0/SHASUMS256.txt
[0m[91mgyp http [0m[91m200 https://iojs.org/dist/v3.1.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp[0m[91m info spawn args   'binding.gyp',
gyp info spawn args   '-f',
[0m[91mgyp info spawn args[0m[91m   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info spawn args   '-I',
[0m[91mgyp info spawn args   '/root/.node-gyp/3.1.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/3.1.0',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=iojs',
[0m[91mgyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   '--no-parallel',
[0m[91mgyp info [0m[91mspawn args   '--generator-output',
gyp [0m[91minfo spawn args   'build',
gyp info[0m[91m spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR! configure error 
[0m[91mgyp[0m[91m ERR![0m[91m stack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m [0m[91mERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:172:7)
[0m[91mgyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp [0m[91mERR! [0m[91mSystem Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v3.1.0
[0m[91mgyp [0m[91mERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> b3b22fa2edd0
Removing intermediate container fdc06d9ec949
Step 5 : ENV NODE_ENV production
 ---> Running in c36f27db64c5
 ---> 788716c37438
Removing intermediate container c36f27db64c5
Step 6 : WORKDIR /usr/src/app
 ---> Running in fb799a3907f2
 ---> 218582ac3c43
Removing intermediate container fb799a3907f2
Step 7 : CMD npm start
 ---> Running in 011ece56c379
 ---> 9e8ce68f86ee
Removing intermediate container 011ece56c379
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 09e43a016c16
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (3180 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 00dc4fdfaf46
Removing intermediate container 09e43a016c16
Successfully built 00dc4fdfaf46

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test104`

Contents of dockerfile `/root/docker-node/.~tmp.test104/Dockerfile`:

```
FROM nodesource/jessie:iojs-3.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-3.1.0-test1` from `/root/docker-node/.~tmp.test104`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-3.1.0
 ---> 00dc4fdfaf46
Step 2 : ENV NODE_ENV test
 ---> Running in 02cb8b0ad42a
 ---> ea764f9d74b9
Removing intermediate container 02cb8b0ad42a
Step 3 : RUN node -v
 ---> Running in 9fc1d8da27cd
v3.1.0
 ---> 67c2f1025897
Removing intermediate container 9fc1d8da27cd
Step 4 : RUN node -p "process.versions"
 ---> Running in f691ed9f27f8
{ http_parser: '2.5.0',
  node: '3.1.0',
  v8: '4.4.63.26',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '45',
  openssl: '1.0.2d' }
 ---> 01118c7ae0e8
Removing intermediate container f691ed9f27f8
Step 5 : RUN npm --version
 ---> Running in 28c80b3f050f
2.13.3
 ---> aede07db4a1a
Removing intermediate container 28c80b3f050f
Successfully built aede07db4a1a

```

# Tested image `nodesource/jessie:iojs-1.4.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 18b631adb3a1
 ---> 792b5ef43afd
Removing intermediate container 18b631adb3a1
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.4.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 8c06be0046e0
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.4.2-1nodesource1~jessie1) ...
Setting up iojs (1.4.2-1nodesource1~jessie1) ...
 ---> c6bf5bf0ea1a
Removing intermediate container 8c06be0046e0
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in d0fd153a639f
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, hawk@1.1.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m info[0m[91m using pangyp@2.3.3
gyp info using node@1.4.2 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.4.2/iojs-v1.4.2.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.4.2/iojs-v1.4.2.tar.gz
[0m[91mgyp [0m[91mhttp GET https://iojs.org/dist/v1.4.2/SHASUMS256.txt
[0m[91mgyp http[0m[91m [0m[91m200 https://iojs.org/dist/v1.4.2/SHASUMS256.txt
[0m[91mgyp [0m[91minfo [0m[91mspawn python
[0m[91mgyp[0m[91m info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args[0m[91m   'make',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.4.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.4.2',
gyp [0m[91minfo spawn args   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args[0m[91m   '--generator-output',
gyp[0m[91m info[0m[91m spawn args[0m[91m   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp [0m[91mERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR![0m[91m [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp [0m[91mERR! cwd /
[0m[91mgyp ERR! node -v v1.4.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 0ad1935477d6
Removing intermediate container d0fd153a639f
Step 5 : ENV NODE_ENV production
 ---> Running in 7077d3b694cd
 ---> bc11c8d807bc
Removing intermediate container 7077d3b694cd
Step 6 : WORKDIR /usr/src/app
 ---> Running in 99b55d5aa87d
 ---> 755f8c474933
Removing intermediate container 99b55d5aa87d
Step 7 : CMD npm start
 ---> Running in 7b5148b9d2fb
 ---> 6ed496271b69
Removing intermediate container 7b5148b9d2fb
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in af566a746a3b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5544 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 82d3730fbcc8
Removing intermediate container af566a746a3b
Successfully built 82d3730fbcc8

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test107`

Contents of dockerfile `/root/docker-node/.~tmp.test107/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.4.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.4.2-test1` from `/root/docker-node/.~tmp.test107`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.4.2
 ---> 82d3730fbcc8
Step 2 : ENV NODE_ENV test
 ---> Running in ca28a5dc4388
 ---> 736951e549b7
Removing intermediate container ca28a5dc4388
Step 3 : RUN node -v
 ---> Running in f26882749c4f
v1.4.2
 ---> 3888a4517322
Removing intermediate container f26882749c4f
Step 4 : RUN node -p "process.versions"
 ---> Running in 1276c2a5f146
{ http_parser: '2.3.0',
  node: '1.4.2',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> 8d0f31b61299
Removing intermediate container 1276c2a5f146
Step 5 : RUN npm --version
 ---> Running in 151dab9168d4
2.6.1
 ---> cd63db98d97c
Removing intermediate container 151dab9168d4
Successfully built cd63db98d97c

```

# Tested image `nodesource/jessie:iojs-3.2.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in f9232a728c64
 ---> 7bac616410b3
Removing intermediate container f9232a728c64
Step 3 : RUN curl https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/iojs_3.2.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in bef6d3ad951a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (3.2.0-1nodesource1~jessie1) ...
[91m
[0mSetting up iojs (3.2.0-1nodesource1~jessie1) ...
 ---> 39b30f3d80d7
Removing intermediate container bef6d3ad951a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 93a9aff7ec36
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@3.2.0 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v3.2.0/iojs-v3.2.0.tar.gz
[0m[91mgyp [0m[91mhttp 200 https://iojs.org/dist/v3.2.0/iojs-v3.2.0.tar.gz
[0m[91mgyp [0m[91mhttp GET https://iojs.org/dist/v3.2.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v3.2.0/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
[0m[91mgyp info[0m[91m [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp[0m[91m info spawn args[0m[91m   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args[0m[91m   '-I',
gyp[0m[91m [0m[91minfo[0m[91m spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/3.2.0/common.gypi',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   '-Dlibrary=shared_library',
gyp info [0m[91mspawn args   '-Dvisibility=default',
[0m[91mgyp[0m[91m info [0m[91mspawn args   '-Dnode_root_dir=/root/.node-gyp/3.2.0',
[0m[91mgyp info [0m[91mspawn args[0m[91m   '-Druntime=iojs',
[0m[91mgyp [0m[91minfo spawn args   '-Dmodule_root_dir=/',
gyp [0m[91minfo[0m[91m [0m[91mspawn args   '--depth=.',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
[0m[91mgyp [0m[91minfo[0m[91m spawn args   'build',
gyp[0m[91m info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! [0m[91mconfigure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp[0m[91m ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp[0m[91m ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v3.2.0
gyp ERR![0m[91m pangyp -v v2.3.3
gyp [0m[91mERR! not ok 
[0m
 ---> 849bff6ce253
Removing intermediate container 93a9aff7ec36
Step 5 : ENV NODE_ENV production
 ---> Running in e09f8e2dcfbf
 ---> b98ed8351d1f
Removing intermediate container e09f8e2dcfbf
Step 6 : WORKDIR /usr/src/app
 ---> Running in 34711c3e8711
 ---> 87ef00c181f6
Removing intermediate container 34711c3e8711
Step 7 : CMD npm start
 ---> Running in f10c84fbcc3d
 ---> 54ef0007ea3b
Removing intermediate container f10c84fbcc3d
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in ac263b26163b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3751 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 65ccaa9e019b
Removing intermediate container ac263b26163b
Successfully built 65ccaa9e019b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test105`

Contents of dockerfile `/root/docker-node/.~tmp.test105/Dockerfile`:

```
FROM nodesource/jessie:iojs-3.2.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-3.2.0-test1` from `/root/docker-node/.~tmp.test105`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-3.2.0
 ---> 65ccaa9e019b
Step 2 : ENV NODE_ENV test
 ---> Running in ae6fffacb990
 ---> de1fda4f245a
Removing intermediate container ae6fffacb990
Step 3 : RUN node -v
 ---> Running in 128667c2ec5f
v3.2.0
 ---> 13b0a8a9c895
Removing intermediate container 128667c2ec5f
Step 4 : RUN node -p "process.versions"
 ---> Running in e92b56357246
{ http_parser: '2.5.0',
  node: '3.2.0',
  v8: '4.4.63.26',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '45',
  openssl: '1.0.2d' }
 ---> 2f7bcbb36347
Removing intermediate container e92b56357246
Step 5 : RUN npm --version
 ---> Running in 1306766c50bc
2.13.3
 ---> f06894c36dbe
Removing intermediate container 1306766c50bc
Successfully built f06894c36dbe

```

# Tested image `nodesource/jessie:iojs-2.4.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ff80a64639bf
 ---> 1361eec8b7f8
Removing intermediate container ff80a64639bf
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.4.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in cef34edf42cb
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.4.0-1nodesource1~jessie1) ...
Setting up iojs (2.4.0-1nodesource1~jessie1) ...
 ---> 98626a783781
Removing intermediate container cef34edf42cb
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 91afe0805860
[91mnpm[0m[91m [0m[91mWARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@2.4.0 | linux | x64
[0m[91mgyp [0m[91mhttp GET https://iojs.org/dist/v2.4.0/iojs-v2.4.0.tar.gz
[0m[91mgyp [0m[91mhttp 200 https://iojs.org/dist/v2.4.0/iojs-v2.4.0.tar.gz
[0m[91mgyp [0m[91mhttp GET[0m[91m https://iojs.org/dist/v2.4.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v2.4.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info[0m[91m spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args[0m[91m   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info[0m[91m spawn args   '/root/.node-gyp/2.4.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.4.0',
gyp info[0m[91m spawn args   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
[0m[91mgyp info spawn args   '--depth=.',
gyp info[0m[91m spawn args   '--no-parallel',
gyp [0m[91minfo spawn args[0m[91m   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp [0m[91mERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.4.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> a633e7b2c133
Removing intermediate container 91afe0805860
Step 5 : ENV NODE_ENV production
 ---> Running in bd7ef4755723
 ---> c2ed63c1bc5c
Removing intermediate container bd7ef4755723
Step 6 : WORKDIR /usr/src/app
 ---> Running in a6251837add1
 ---> 5c05e7d1b02a
Removing intermediate container a6251837add1
Step 7 : CMD npm start
 ---> Running in 560512e993e0
 ---> 0566396c9102
Removing intermediate container 560512e993e0
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 2ffa8072debd
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3245 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 22cd5ce4123b
Removing intermediate container 2ffa8072debd
Successfully built 22cd5ce4123b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test102`

Contents of dockerfile `/root/docker-node/.~tmp.test102/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.4.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.4.0-test1` from `/root/docker-node/.~tmp.test102`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.4.0
 ---> 22cd5ce4123b
Step 2 : ENV NODE_ENV test
 ---> Running in 269ba5355968
 ---> 98cfc8ffd020
Removing intermediate container 269ba5355968
Step 3 : RUN node -v
 ---> Running in aeaf234e6e31
v2.4.0
 ---> c4d53ca0dbd8
Removing intermediate container aeaf234e6e31
Step 4 : RUN node -p "process.versions"
 ---> Running in a82914f35430
{ http_parser: '2.5.0',
  node: '2.4.0',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2d' }
 ---> b4d76aaa4229
Removing intermediate container a82914f35430
Step 5 : RUN npm --version
 ---> Running in b0ec6843f892
2.13.0
 ---> d6ff977dfe2c
Removing intermediate container b0ec6843f892
Successfully built d6ff977dfe2c

```

# Tested image `nodesource/sid:5.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/sid-base
 ---> ef8990438980
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 82fbae9f2689
 ---> aaf7a6e29c22
Removing intermediate container 82fbae9f2689
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.3.0-1nodesource1~sid1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ec1bca1d668a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 16183 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.3.0-1nodesource1~sid1) ...
Setting up nodejs (5.3.0-1nodesource1~sid1) ...
 ---> 31df72cf6ec2
Removing intermediate container ec1bca1d668a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0efe7d868237
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@5.3.0 | linux | x64
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.3.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.3.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.3.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> f65ec1601722
Removing intermediate container 0efe7d868237
Step 5 : ENV NODE_ENV production
 ---> Running in f8aa5f44c7eb
 ---> dc4e0377c405
Removing intermediate container f8aa5f44c7eb
Step 6 : WORKDIR /usr/src/app
 ---> Running in 28d56c40b825
 ---> e86a592360e7
Removing intermediate container 28d56c40b825
Step 7 : CMD npm start
 ---> Running in 3a9dd06de2b8
 ---> b71c860e9b30
Removing intermediate container 3a9dd06de2b8
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 89d68c40f56b
Get:1 http://mirrors.cat.pdx.edu/debian sid InRelease [287 kB]
Get:2 http://mirrors.kernel.org/debian sid/main amd64 Packages [10.8 MB]
Fetched 11.1 MB in 1s (5612 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
Calculating upgrade...
The following packages will be upgraded:
  dmsetup hostname iproute2 libc-bin libdebconfclient0 libdevmapper1.02.1
  liblz4-1 libncurses5 libncursesw5 libtinfo5 multiarch-support ncurses-base
  ncurses-bin
13 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 2921 kB of archives.
After this operation, 11.3 kB of additional disk space will be used.
Get:1 http://mirrors.kernel.org/debian sid/main amd64 hostname amd64 3.17 [14.2 kB]
Get:2 http://mirrors.kernel.org/debian sid/main amd64 ncurses-bin amd64 6.0+20160213-1 [354 kB]
Get:4 http://mirrors.cat.pdx.edu/debian sid/main amd64 ncurses-base all 6.0+20160213-1 [233 kB]
Get:3 http://mirror.picosecond.org/debian sid/main amd64 libc-bin amd64 2.21-9 [761 kB]
Get:5 http://mirrors.kernel.org/debian sid/main amd64 libtinfo5 amd64 6.0+20160213-1 [293 kB]
Get:8 http://mirrors.kernel.org/debian sid/main amd64 multiarch-support amd64 2.21-9 [187 kB]
Get:9 http://mirrors.kernel.org/debian sid/main amd64 dmsetup amd64 2:1.02.116-1 [93.2 kB]
Get:10 http://mirrors.kernel.org/debian sid/main amd64 libdevmapper1.02.1 amd64 2:1.02.116-1 [179 kB]
Get:6 http://mirrors.cat.pdx.edu/debian sid/main amd64 libncurses5 amd64 6.0+20160213-1 [94.3 kB]
Get:7 http://mirrors.cat.pdx.edu/debian sid/main amd64 libncursesw5 amd64 6.0+20160213-1 [115 kB]
Get:13 http://mirrors.kernel.org/debian sid/main amd64 iproute2 amd64 4.3.0-1+b1 [516 kB]
Get:11 http://mirror.picosecond.org/debian sid/main amd64 libdebconfclient0 amd64 0.206 [47.3 kB]
Get:12 http://mirror.picosecond.org/debian sid/main amd64 liblz4-1 amd64 0.0~r131-2 [32.5 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 2921 kB in 0s (2960 kB/s)
(Reading database ... 
Preparing to unpack .../hostname_3.17_amd64.deb ...
Unpacking hostname (3.17) over (3.16) ...
Setting up hostname (3.17) ...
(Reading database ... 
Preparing to unpack .../ncurses-bin_6.0+20160213-1_amd64.deb ...
Unpacking ncurses-bin (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-bin (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libc-bin_2.21-9_amd64.deb ...
Unpacking libc-bin (2.21-9) over (2.21-8) ...
Setting up libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../ncurses-base_6.0+20160213-1_all.deb ...
Unpacking ncurses-base (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-base (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libtinfo5_6.0+20160213-1_amd64.deb ...
Unpacking libtinfo5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libtinfo5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncurses5_6.0+20160213-1_amd64.deb ...
Unpacking libncurses5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncurses5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncursesw5_6.0+20160213-1_amd64.deb ...
Unpacking libncursesw5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncursesw5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../multiarch-support_2.21-9_amd64.deb ...
Unpacking multiarch-support (2.21-9) over (2.21-8) ...
Setting up multiarch-support (2.21-9) ...
(Reading database ... 
Preparing to unpack .../dmsetup_2%3a1.02.116-1_amd64.deb ...
Unpacking dmsetup (2:1.02.116-1) over (2:1.02.115-2) ...
Setting up dmsetup (2:1.02.116-1) ...
(Reading database ... 
Preparing to unpack .../libdevmapper1.02.1_2%3a1.02.116-1_amd64.deb ...
Unpacking libdevmapper1.02.1:amd64 (2:1.02.116-1) over (2:1.02.115-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdevmapper1.02.1:amd64 (2:1.02.116-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libdebconfclient0_0.206_amd64.deb ...
Unpacking libdebconfclient0:amd64 (0.206) over (0.205) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdebconfclient0:amd64 (0.206) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../liblz4-1_0.0~r131-2_amd64.deb ...
Unpacking liblz4-1:amd64 (0.0~r131-2) over (0.0~r131-1) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up liblz4-1:amd64 (0.0~r131-2) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../iproute2_4.3.0-1+b1_amd64.deb ...
Unpacking iproute2 (4.3.0-1+b1) over (4.3.0-1) ...
Setting up iproute2 (4.3.0-1+b1) ...
[91mW: --force-yes is deprecated, use one of the options starting with --allow instead.
[0m ---> 377b25fed909
Removing intermediate container 89d68c40f56b
Successfully built 377b25fed909

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test130`

Contents of dockerfile `/root/docker-node/.~tmp.test130/Dockerfile`:

```
FROM nodesource/sid:5.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/sid:5.3.0-test1` from `/root/docker-node/.~tmp.test130`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/sid:5.3.0
 ---> 377b25fed909
Step 2 : ENV NODE_ENV test
 ---> Running in fbb50040c13d
 ---> 2c1747bcbbc9
Removing intermediate container fbb50040c13d
Step 3 : RUN node -v
 ---> Running in 42bc7cd2e329
v5.3.0
 ---> 019b8a1e002a
Removing intermediate container 42bc7cd2e329
Step 4 : RUN node -p "process.versions"
 ---> Running in 1c03f68d4cc3
{ http_parser: '2.6.0',
  node: '5.3.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 6aaf0bf59a0d
Removing intermediate container 1c03f68d4cc3
Step 5 : RUN npm --version
 ---> Running in be80e88470ab
3.3.12
 ---> ad3a22a71042
Removing intermediate container be80e88470ab
Successfully built ad3a22a71042

```

# Tested image `nodesource/sid:0.12.6`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/sid-base
 ---> ef8990438980
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 38434783ed1b
 ---> c0a9b5178afe
Removing intermediate container 38434783ed1b
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.6-1nodesource1~sid1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 9d37ce53ab28
[91m  % Total    % Received % Xferd  Average Speed   Time[0m[91m    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 16183 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.6-1nodesource1~sid1) ...
Setting up nodejs (0.12.6-1nodesource1~sid1) ...
 ---> 54231db0a2dd
Removing intermediate container 9d37ce53ab28
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 54d97005c0ae
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.12.6 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.6/node-v0.12.6.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.6/node-v0.12.6.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET[0m[91m http://nodejs.org/dist/v0.12.6/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.6/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp [0m[91minfo spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.6/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.6',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR![0m[91m [0m[91mstack     at ChildProcess.emit (events.js:110:17)
[0m[91mgyp [0m[91mERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
[0m[91mgyp [0m[91mERR! System[0m[91m Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.6
gyp [0m[91mERR! [0m[91mpangyp -v[0m[91m v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> 583d8b7030f1
Removing intermediate container 54d97005c0ae
Step 5 : ENV NODE_ENV production
 ---> Running in 3ee12e22c849
 ---> 5cb97009d0f9
Removing intermediate container 3ee12e22c849
Step 6 : WORKDIR /usr/src/app
 ---> Running in 3015d90521b7
 ---> 9e3248d8111b
Removing intermediate container 3015d90521b7
Step 7 : CMD npm start
 ---> Running in b5be10fd9bf5
 ---> ea718690c1a3
Removing intermediate container b5be10fd9bf5
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f1078aa38be1
Get:1 http://mirrors.cat.pdx.edu/debian sid InRelease [287 kB]
Get:2 http://mirrors.cat.pdx.edu/debian sid/main amd64 Packages [10.8 MB]
Fetched 11.1 MB in 2s (4912 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
Calculating upgrade...
The following packages have been kept back:
  nodejs
The following packages will be upgraded:
  dmsetup hostname iproute2 libc-bin libdebconfclient0 libdevmapper1.02.1
  liblz4-1 libncurses5 libncursesw5 libtinfo5 multiarch-support ncurses-base
  ncurses-bin
13 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
Need to get 2921 kB of archives.
After this operation, 11.3 kB of additional disk space will be used.
Get:1 http://mirrors.cat.pdx.edu/debian sid/main amd64 hostname amd64 3.17 [14.2 kB]
Get:2 http://mirrors.cat.pdx.edu/debian sid/main amd64 ncurses-bin amd64 6.0+20160213-1 [354 kB]
Get:3 http://mirrors.cat.pdx.edu/debian sid/main amd64 libc-bin amd64 2.21-9 [761 kB]
Get:4 http://mirrors.cat.pdx.edu/debian sid/main amd64 ncurses-base all 6.0+20160213-1 [233 kB]
Get:5 http://mirrors.cat.pdx.edu/debian sid/main amd64 libtinfo5 amd64 6.0+20160213-1 [293 kB]
Get:6 http://mirrors.cat.pdx.edu/debian sid/main amd64 libncurses5 amd64 6.0+20160213-1 [94.3 kB]
Get:7 http://mirrors.cat.pdx.edu/debian sid/main amd64 libncursesw5 amd64 6.0+20160213-1 [115 kB]
Get:8 http://mirrors.cat.pdx.edu/debian sid/main amd64 multiarch-support amd64 2.21-9 [187 kB]
Get:9 http://mirrors.cat.pdx.edu/debian sid/main amd64 dmsetup amd64 2:1.02.116-1 [93.2 kB]
Get:10 http://mirrors.cat.pdx.edu/debian sid/main amd64 libdevmapper1.02.1 amd64 2:1.02.116-1 [179 kB]
Get:11 http://mirrors.cat.pdx.edu/debian sid/main amd64 libdebconfclient0 amd64 0.206 [47.3 kB]
Get:12 http://mirrors.cat.pdx.edu/debian sid/main amd64 liblz4-1 amd64 0.0~r131-2 [32.5 kB]
Get:13 http://mirrors.cat.pdx.edu/debian sid/main amd64 iproute2 amd64 4.3.0-1+b1 [516 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 2921 kB in 0s (5620 kB/s)
(Reading database ... 
Preparing to unpack .../hostname_3.17_amd64.deb ...
Unpacking hostname (3.17) over (3.16) ...
Setting up hostname (3.17) ...
(Reading database ... 
Preparing to unpack .../ncurses-bin_6.0+20160213-1_amd64.deb ...
Unpacking ncurses-bin (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-bin (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libc-bin_2.21-9_amd64.deb ...
Unpacking libc-bin (2.21-9) over (2.21-8) ...
Setting up libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../ncurses-base_6.0+20160213-1_all.deb ...
Unpacking ncurses-base (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-base (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libtinfo5_6.0+20160213-1_amd64.deb ...
Unpacking libtinfo5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libtinfo5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncurses5_6.0+20160213-1_amd64.deb ...
Unpacking libncurses5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncurses5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncursesw5_6.0+20160213-1_amd64.deb ...
Unpacking libncursesw5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncursesw5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../multiarch-support_2.21-9_amd64.deb ...
Unpacking multiarch-support (2.21-9) over (2.21-8) ...
Setting up multiarch-support (2.21-9) ...
(Reading database ... 
Preparing to unpack .../dmsetup_2%3a1.02.116-1_amd64.deb ...
Unpacking dmsetup (2:1.02.116-1) over (2:1.02.115-2) ...
Setting up dmsetup (2:1.02.116-1) ...
(Reading database ... 
Preparing to unpack .../libdevmapper1.02.1_2%3a1.02.116-1_amd64.deb ...
Unpacking libdevmapper1.02.1:amd64 (2:1.02.116-1) over (2:1.02.115-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdevmapper1.02.1:amd64 (2:1.02.116-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libdebconfclient0_0.206_amd64.deb ...
Unpacking libdebconfclient0:amd64 (0.206) over (0.205) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdebconfclient0:amd64 (0.206) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../liblz4-1_0.0~r131-2_amd64.deb ...
Unpacking liblz4-1:amd64 (0.0~r131-2) over (0.0~r131-1) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up liblz4-1:amd64 (0.0~r131-2) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../iproute2_4.3.0-1+b1_amd64.deb ...
Unpacking iproute2 (4.3.0-1+b1) over (4.3.0-1) ...
Setting up iproute2 (4.3.0-1+b1) ...
[91mW: --force-yes is deprecated, use one of the options starting with --allow instead.
[0m ---> 24d5374e0f06
Removing intermediate container f1078aa38be1
Successfully built 24d5374e0f06

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test152`

Contents of dockerfile `/root/docker-node/.~tmp.test152/Dockerfile`:

```
FROM nodesource/sid:0.12.6
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/sid:0.12.6-test1` from `/root/docker-node/.~tmp.test152`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/sid:0.12.6
 ---> 24d5374e0f06
Step 2 : ENV NODE_ENV test
 ---> Running in 9b352d9e984c
 ---> b2ccf954cc65
Removing intermediate container 9b352d9e984c
Step 3 : RUN node -v
 ---> Running in e240b684ce31
v0.12.6
 ---> 1127f9299441
Removing intermediate container e240b684ce31
Step 4 : RUN node -p "process.versions"
 ---> Running in 76ebecf289a5
{ http_parser: '2.3',
  node: '0.12.6',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1o' }
 ---> f62a9fa67f62
Removing intermediate container 76ebecf289a5
Step 5 : RUN npm --version
 ---> Running in 5725a4f600fa
2.11.2
 ---> 3d9d42efa254
Removing intermediate container 5725a4f600fa
Successfully built 3d9d42efa254

```

# Tested image `nodesource/sid:4.3.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/sid-base
 ---> ef8990438980
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in f472846cecc7
 ---> 56ef423e6d10
Removing intermediate container f472846cecc7
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.3.1-1nodesource1~sid1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d919badd693e
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 16183 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.3.1-1nodesource1~sid1) ...
Setting up nodejs (4.3.1-1nodesource1~sid1) ...
 ---> 88b58186993e
Removing intermediate container d919badd693e
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 20e9f901d112
[91mnpm [0m[91mWARN [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, caseless@0.8.0, aws-sign2@0.5.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.3.1 | linux | x64
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v4.3.1/node-v4.3.1.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v4.3.1/node-v4.3.1.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.3.1/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200[0m[91m http://nodejs.org/dist/v4.3.1/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp[0m[91m [0m[91minfo spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args[0m[91m   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.3.1/common.gypi',
gyp info[0m[91m spawn args[0m[91m   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.3.1',
gyp info spawn args   '-Druntime=node',
gyp [0m[91minfo[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
[0m[91mgyp info[0m[91m [0m[91mspawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
[0m[91mgyp [0m[91minfo[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp [0m[91mERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.3.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7832040d0547
Removing intermediate container 20e9f901d112
Step 5 : ENV NODE_ENV production
 ---> Running in d6fcd75c6ef7
 ---> 77d59adfa070
Removing intermediate container d6fcd75c6ef7
Step 6 : WORKDIR /usr/src/app
 ---> Running in e94e44496d28
 ---> a82e8a3926ce
Removing intermediate container e94e44496d28
Step 7 : CMD npm start
 ---> Running in 9fc5952deaa8
 ---> 8a9e91a9e7ad
Removing intermediate container 9fc5952deaa8
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 8689493746a1
Get:1 http://mirrors.kernel.org/debian sid InRelease [287 kB]
Get:2 http://mirrors.kernel.org/debian sid/main amd64 Packages [10.8 MB]
Fetched 11.1 MB in 2s (5426 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
Calculating upgrade...
The following packages will be upgraded:
  dmsetup hostname iproute2 libc-bin libdebconfclient0 libdevmapper1.02.1
  liblz4-1 libncurses5 libncursesw5 libtinfo5 multiarch-support ncurses-base
  ncurses-bin
13 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 2921 kB of archives.
After this operation, 11.3 kB of additional disk space will be used.
Get:1 http://mirrors.kernel.org/debian sid/main amd64 hostname amd64 3.17 [14.2 kB]
Get:3 http://mirrors.kernel.org/debian sid/main amd64 libc-bin amd64 2.21-9 [761 kB]
Get:2 http://mirrors.cat.pdx.edu/debian sid/main amd64 ncurses-bin amd64 6.0+20160213-1 [354 kB]
Get:6 http://mirrors.kernel.org/debian sid/main amd64 libncurses5 amd64 6.0+20160213-1 [94.3 kB]
Get:7 http://mirrors.kernel.org/debian sid/main amd64 libncursesw5 amd64 6.0+20160213-1 [115 kB]
Get:8 http://mirrors.kernel.org/debian sid/main amd64 multiarch-support amd64 2.21-9 [187 kB]
Get:5 http://mirrors.cat.pdx.edu/debian sid/main amd64 libtinfo5 amd64 6.0+20160213-1 [293 kB]
Get:9 http://mirrors.cat.pdx.edu/debian sid/main amd64 dmsetup amd64 2:1.02.116-1 [93.2 kB]
Get:11 http://mirrors.kernel.org/debian sid/main amd64 libdebconfclient0 amd64 0.206 [47.3 kB]
Get:4 http://mirror.picosecond.org/debian sid/main amd64 ncurses-base all 6.0+20160213-1 [233 kB]
Get:12 http://mirrors.kernel.org/debian sid/main amd64 liblz4-1 amd64 0.0~r131-2 [32.5 kB]
Get:13 http://mirrors.kernel.org/debian sid/main amd64 iproute2 amd64 4.3.0-1+b1 [516 kB]
Get:10 http://mirror.picosecond.org/debian sid/main amd64 libdevmapper1.02.1 amd64 2:1.02.116-1 [179 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 2921 kB in 1s (2283 kB/s)
(Reading database ... 
Preparing to unpack .../hostname_3.17_amd64.deb ...
Unpacking hostname (3.17) over (3.16) ...
Setting up hostname (3.17) ...
(Reading database ... 
Preparing to unpack .../ncurses-bin_6.0+20160213-1_amd64.deb ...
Unpacking ncurses-bin (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-bin (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libc-bin_2.21-9_amd64.deb ...
Unpacking libc-bin (2.21-9) over (2.21-8) ...
Setting up libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../ncurses-base_6.0+20160213-1_all.deb ...
Unpacking ncurses-base (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-base (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libtinfo5_6.0+20160213-1_amd64.deb ...
Unpacking libtinfo5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libtinfo5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncurses5_6.0+20160213-1_amd64.deb ...
Unpacking libncurses5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncurses5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncursesw5_6.0+20160213-1_amd64.deb ...
Unpacking libncursesw5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncursesw5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../multiarch-support_2.21-9_amd64.deb ...
Unpacking multiarch-support (2.21-9) over (2.21-8) ...
Setting up multiarch-support (2.21-9) ...
(Reading database ... 
Preparing to unpack .../dmsetup_2%3a1.02.116-1_amd64.deb ...
Unpacking dmsetup (2:1.02.116-1) over (2:1.02.115-2) ...
Setting up dmsetup (2:1.02.116-1) ...
(Reading database ... 
Preparing to unpack .../libdevmapper1.02.1_2%3a1.02.116-1_amd64.deb ...
Unpacking libdevmapper1.02.1:amd64 (2:1.02.116-1) over (2:1.02.115-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdevmapper1.02.1:amd64 (2:1.02.116-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libdebconfclient0_0.206_amd64.deb ...
Unpacking libdebconfclient0:amd64 (0.206) over (0.205) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdebconfclient0:amd64 (0.206) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../liblz4-1_0.0~r131-2_amd64.deb ...
Unpacking liblz4-1:amd64 (0.0~r131-2) over (0.0~r131-1) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up liblz4-1:amd64 (0.0~r131-2) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../iproute2_4.3.0-1+b1_amd64.deb ...
Unpacking iproute2 (4.3.0-1+b1) over (4.3.0-1) ...
Setting up iproute2 (4.3.0-1+b1) ...
[91mW: --force-yes is deprecated, use one of the options starting with --allow instead.
[0m ---> 14a524a49726
Removing intermediate container 8689493746a1
Successfully built 14a524a49726

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test120`

Contents of dockerfile `/root/docker-node/.~tmp.test120/Dockerfile`:

```
FROM nodesource/sid:4.3.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/sid:4.3.1-test1` from `/root/docker-node/.~tmp.test120`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/sid:4.3.1
 ---> 14a524a49726
Step 2 : ENV NODE_ENV test
 ---> Running in aa6c86a400de
 ---> 5638d06f557f
Removing intermediate container aa6c86a400de
Step 3 : RUN node -v
 ---> Running in d0cbe0fbfbb8
v4.3.1
 ---> 03663cd475db
Removing intermediate container d0cbe0fbfbb8
Step 4 : RUN node -p "process.versions"
 ---> Running in 986fefcb6d19
{ http_parser: '2.5.2',
  node: '4.3.1',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2f' }
 ---> fba12a701764
Removing intermediate container 986fefcb6d19
Step 5 : RUN npm --version
 ---> Running in 49dde52ea54d
2.14.12
 ---> 8b9885be14c0
Removing intermediate container 49dde52ea54d
Successfully built 8b9885be14c0

```

# Tested image `nodesource/jessie:iojs-1.6.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 68b440e4190c
 ---> 5b30fb0fab86
Removing intermediate container 68b440e4190c
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.6.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6a95b278542e
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.6.2-1nodesource1~jessie1) ...
Setting up iojs (1.6.2-1nodesource1~jessie1) ...
 ---> 3afa2deb527d
Removing intermediate container 6a95b278542e
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 03422de49274
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, hawk@1.1.1, bl@0.9.5, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo[0m[91m it worked if it ends with[0m[91m ok
[0m[91mgyp info [0m[91musing pangyp@2.3.3
[0m[91mgyp info using node@1.6.2 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.6.2/iojs-v1.6.2.tar.gz
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200 https://iojs.org/dist/v1.6.2/iojs-v1.6.2.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.6.2/SHASUMS256.txt
[0m[91mgyp http 200[0m[91m https://iojs.org/dist/v1.6.2/SHASUMS256.txt
[0m[91mgyp info[0m[91m [0m[91mspawn python
[0m[91mgyp info [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info [0m[91mspawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args[0m[91m   '-I',
[0m[91mgyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.6.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
[0m[91mgyp [0m[91minfo spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.6.2',
gyp info spawn args[0m[91m   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
[0m[91mgyp info[0m[91m [0m[91mspawn args[0m[91m   '--depth=.',
[0m[91mgyp [0m[91minfo spawn args   '--no-parallel',
[0m[91mgyp info spawn args   '--generator-output',
[0m[91mgyp[0m[91m info spawn args[0m[91m   'build',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! [0m[91mconfigure error 
[0m[91mgyp ERR![0m[91m stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack[0m[91m     at ChildProcess.emit (events.js:169:7)
gyp[0m[91m ERR! stack[0m[91m     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp [0m[91mERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR![0m[91m [0m[91mnode -v v1.6.2
gyp ERR! pangyp -v v2.3.3
gyp [0m[91mERR![0m[91m not ok[0m[91m 
[0m
 ---> 42dde8cdc2da
Removing intermediate container 03422de49274
Step 5 : ENV NODE_ENV production
 ---> Running in acde30eb6d0b
 ---> e78325cc35b7
Removing intermediate container acde30eb6d0b
Step 6 : WORKDIR /usr/src/app
 ---> Running in f2dce65fa5a9
 ---> 1a4c5180aab4
Removing intermediate container f2dce65fa5a9
Step 7 : CMD npm start
 ---> Running in 3efdde510813
 ---> d10ca0e6465a
Removing intermediate container 3efdde510813
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 8a201b76e72b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3287 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> bacd0e366453
Removing intermediate container 8a201b76e72b
Successfully built bacd0e366453

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test110`

Contents of dockerfile `/root/docker-node/.~tmp.test110/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.6.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.6.2-test1` from `/root/docker-node/.~tmp.test110`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.6.2
 ---> bacd0e366453
Step 2 : ENV NODE_ENV test
 ---> Running in 632e5ccb7fed
 ---> f836e7e9b063
Removing intermediate container 632e5ccb7fed
Step 3 : RUN node -v
 ---> Running in a4b851329361
v1.6.2
 ---> 5ef560cc7926
Removing intermediate container a4b851329361
Step 4 : RUN node -p "process.versions"
 ---> Running in 77d289b91a41
{ http_parser: '2.3.0',
  node: '1.6.2',
  v8: '4.1.0.25',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> a2030282d03d
Removing intermediate container 77d289b91a41
Step 5 : RUN npm --version
 ---> Running in 2675e84bc690
2.7.1
 ---> 69744ba99dfa
Removing intermediate container 2675e84bc690
Successfully built 69744ba99dfa

```

# Tested image `nodesource/jessie:iojs-1.6.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 0134185d5dea
 ---> 63f5ef747f6a
Removing intermediate container 0134185d5dea
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.6.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in b71ba1f8b12e
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.6.3-1nodesource1~jessie1) ...
Setting up iojs (1.6.3-1nodesource1~jessie1) ...
 ---> 277b94227db9
Removing intermediate container b71ba1f8b12e
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 545e126ac1f1
[91mnpm WARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with[0m[91m ok
[0m[91mgyp info [0m[91musing pangyp@2.3.3
[0m[91mgyp info using node@1.6.3 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.6.3/iojs-v1.6.3.tar.gz
[0m[91mgyp[0m[91m http [0m[91m200 https://iojs.org/dist/v1.6.3/iojs-v1.6.3.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.6.3/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp [0m[91m200[0m[91m https://iojs.org/dist/v1.6.3/SHASUMS256.txt
[0m[91mgyp [0m[91minfo [0m[91mspawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
[0m[91mgyp info spawn args   '-f',
[0m[91mgyp info[0m[91m spawn args   'make',
gyp info spawn args   '-I',
gyp [0m[91minfo spawn args[0m[91m   '/build/config.gypi',
[0m[91mgyp info spawn args   '-I',
gyp info [0m[91mspawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.6.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info [0m[91mspawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/1.6.3',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=iojs',
gyp [0m[91minfo spawn args   '-Dmodule_root_dir=/',
gyp info [0m[91mspawn args   '--depth=.',
[0m[91mgyp info spawn args   '--no-parallel',
gyp [0m[91minfo spawn args[0m[91m   '--generator-output',
gyp [0m[91minfo spawn args[0m[91m   'build',
[0m[91mgyp info[0m[91m spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp ERR![0m[91m stack[0m[91m Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR![0m[91m [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
[0m[91mgyp ERR! System[0m[91m Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.6.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 3d8029220878
Removing intermediate container 545e126ac1f1
Step 5 : ENV NODE_ENV production
 ---> Running in 9b87bf8a9249
 ---> 5db2c2fe4f52
Removing intermediate container 9b87bf8a9249
Step 6 : WORKDIR /usr/src/app
 ---> Running in dde7d75c37da
 ---> 5b1eb15f2523
Removing intermediate container dde7d75c37da
Step 7 : CMD npm start
 ---> Running in f418f488ec2d
 ---> 6bb2b88a1f4d
Removing intermediate container f418f488ec2d
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in afd8e05d78ce
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3866 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> e85fd079cff0
Removing intermediate container afd8e05d78ce
Successfully built e85fd079cff0

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test111`

Contents of dockerfile `/root/docker-node/.~tmp.test111/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.6.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.6.3-test1` from `/root/docker-node/.~tmp.test111`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.6.3
 ---> e85fd079cff0
Step 2 : ENV NODE_ENV test
 ---> Running in 4616b8edf9a8
 ---> 2481543ee0ee
Removing intermediate container 4616b8edf9a8
Step 3 : RUN node -v
 ---> Running in 41de088a7b2a
v1.6.3
 ---> a3449181bc1e
Removing intermediate container 41de088a7b2a
Step 4 : RUN node -p "process.versions"
 ---> Running in d42249f85add
{ http_parser: '2.3.0',
  node: '1.6.3',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 54b264d4c991
Removing intermediate container d42249f85add
Step 5 : RUN npm --version
 ---> Running in 1f23320a15f2
2.7.4
 ---> ac5df5bf124f
Removing intermediate container 1f23320a15f2
Successfully built ac5df5bf124f

```

# Tested image `nodesource/sid:0.10.36`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/sid-base
 ---> ef8990438980
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 1caa57850c15
 ---> ee445366396c
Removing intermediate container 1caa57850c15
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.36-1nodesource1~sid1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in cd384fabbac6
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 16183 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.36-1nodesource1~sid1) ...
Setting up nodejs (0.10.36-1nodesource1~sid1) ...
 ---> 0b04aa77a2d0
Removing intermediate container cd384fabbac6
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 2f087f189928
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm[0m[91m [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (graceful-fs@4.1.3, inherits@2.0.1)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1, bl@0.9.5)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp [0m[91minfo [0m[91musing pangyp@2.3.3
gyp info using node@0.10.36 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.36/node-v0.10.36.tar.gz
[0m[91mgyp http[0m[91m 200[0m[91m http://nodejs.org/dist/v0.10.36/node-v0.10.36.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.36/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.36/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info [0m[91mspawn args   'binding.gyp',
gyp[0m[91m info spawn args   '-f',
[0m[91mgyp [0m[91minfo [0m[91mspawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp info [0m[91mspawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp [0m[91minfo [0m[91mspawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.36/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.36',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
[0m[91mgyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.36
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 3484fdc1aa85
Removing intermediate container 2f087f189928
Step 5 : ENV NODE_ENV production
 ---> Running in 959e314eb881
 ---> 0b05e3e4c39c
Removing intermediate container 959e314eb881
Step 6 : WORKDIR /usr/src/app
 ---> Running in 465aff4a8b60
 ---> 3844f89e841a
Removing intermediate container 465aff4a8b60
Step 7 : CMD npm start
 ---> Running in 7819975a9a78
 ---> b1ce08af358e
Removing intermediate container 7819975a9a78
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 9d10c44c42e9
Get:1 http://mirrors.cat.pdx.edu/debian sid InRelease [287 kB]
Get:2 http://mirrors.cat.pdx.edu/debian sid/main amd64 Packages [10.8 MB]
Fetched 11.1 MB in 1s (5563 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
Calculating upgrade...
The following packages have been kept back:
  nodejs
The following packages will be upgraded:
  dmsetup hostname iproute2 libc-bin libdebconfclient0 libdevmapper1.02.1
  liblz4-1 libncurses5 libncursesw5 libtinfo5 multiarch-support ncurses-base
  ncurses-bin
13 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
Need to get 2921 kB of archives.
After this operation, 11.3 kB of additional disk space will be used.
Get:1 http://mirrors.namecheap.com/debian sid/main amd64 hostname amd64 3.17 [14.2 kB]
Get:2 http://mirrors.namecheap.com/debian sid/main amd64 ncurses-bin amd64 6.0+20160213-1 [354 kB]
Get:3 http://mirrors.namecheap.com/debian sid/main amd64 libc-bin amd64 2.21-9 [761 kB]
Get:4 http://mirrors.namecheap.com/debian sid/main amd64 ncurses-base all 6.0+20160213-1 [233 kB]
Get:5 http://mirrors.namecheap.com/debian sid/main amd64 libtinfo5 amd64 6.0+20160213-1 [293 kB]
Get:6 http://mirrors.namecheap.com/debian sid/main amd64 libncurses5 amd64 6.0+20160213-1 [94.3 kB]
Get:7 http://mirrors.namecheap.com/debian sid/main amd64 libncursesw5 amd64 6.0+20160213-1 [115 kB]
Get:8 http://mirrors.namecheap.com/debian sid/main amd64 multiarch-support amd64 2.21-9 [187 kB]
Get:9 http://mirrors.namecheap.com/debian sid/main amd64 dmsetup amd64 2:1.02.116-1 [93.2 kB]
Get:10 http://mirrors.namecheap.com/debian sid/main amd64 libdevmapper1.02.1 amd64 2:1.02.116-1 [179 kB]
Get:11 http://mirrors.namecheap.com/debian sid/main amd64 libdebconfclient0 amd64 0.206 [47.3 kB]
Get:12 http://mirrors.namecheap.com/debian sid/main amd64 liblz4-1 amd64 0.0~r131-2 [32.5 kB]
Get:13 http://mirrors.namecheap.com/debian sid/main amd64 iproute2 amd64 4.3.0-1+b1 [516 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 2921 kB in 1s (2719 kB/s)
(Reading database ... 
Preparing to unpack .../hostname_3.17_amd64.deb ...
Unpacking hostname (3.17) over (3.16) ...
Setting up hostname (3.17) ...
(Reading database ... 
Preparing to unpack .../ncurses-bin_6.0+20160213-1_amd64.deb ...
Unpacking ncurses-bin (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-bin (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libc-bin_2.21-9_amd64.deb ...
Unpacking libc-bin (2.21-9) over (2.21-8) ...
Setting up libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../ncurses-base_6.0+20160213-1_all.deb ...
Unpacking ncurses-base (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-base (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libtinfo5_6.0+20160213-1_amd64.deb ...
Unpacking libtinfo5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libtinfo5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncurses5_6.0+20160213-1_amd64.deb ...
Unpacking libncurses5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncurses5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncursesw5_6.0+20160213-1_amd64.deb ...
Unpacking libncursesw5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncursesw5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../multiarch-support_2.21-9_amd64.deb ...
Unpacking multiarch-support (2.21-9) over (2.21-8) ...
Setting up multiarch-support (2.21-9) ...
(Reading database ... 
Preparing to unpack .../dmsetup_2%3a1.02.116-1_amd64.deb ...
Unpacking dmsetup (2:1.02.116-1) over (2:1.02.115-2) ...
Setting up dmsetup (2:1.02.116-1) ...
(Reading database ... 
Preparing to unpack .../libdevmapper1.02.1_2%3a1.02.116-1_amd64.deb ...
Unpacking libdevmapper1.02.1:amd64 (2:1.02.116-1) over (2:1.02.115-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdevmapper1.02.1:amd64 (2:1.02.116-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libdebconfclient0_0.206_amd64.deb ...
Unpacking libdebconfclient0:amd64 (0.206) over (0.205) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdebconfclient0:amd64 (0.206) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../liblz4-1_0.0~r131-2_amd64.deb ...
Unpacking liblz4-1:amd64 (0.0~r131-2) over (0.0~r131-1) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up liblz4-1:amd64 (0.0~r131-2) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../iproute2_4.3.0-1+b1_amd64.deb ...
Unpacking iproute2 (4.3.0-1+b1) over (4.3.0-1) ...
Setting up iproute2 (4.3.0-1+b1) ...
[91mW: --force-yes is deprecated, use one of the options starting with --allow instead.
[0m ---> 59a6463e90bb
Removing intermediate container 9d10c44c42e9
Successfully built 59a6463e90bb

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test140`

Contents of dockerfile `/root/docker-node/.~tmp.test140/Dockerfile`:

```
FROM nodesource/sid:0.10.36
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/sid:0.10.36-test1` from `/root/docker-node/.~tmp.test140`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/sid:0.10.36
 ---> 59a6463e90bb
Step 2 : ENV NODE_ENV test
 ---> Running in b17c8132d20a
 ---> 8deb73e5e73b
Removing intermediate container b17c8132d20a
Step 3 : RUN node -v
 ---> Running in e84c75db9a41
v0.10.36
 ---> daa10a9aeb56
Removing intermediate container e84c75db9a41
Step 4 : RUN node -p "process.versions"
 ---> Running in 976cc96e07ef
{ http_parser: '1.0',
  node: '0.10.36',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1l' }
 ---> f17d76f339bb
Removing intermediate container 976cc96e07ef
Step 5 : RUN npm --version
 ---> Running in 9f4244430cfa
1.4.28
 ---> 347642e07e1a
Removing intermediate container 9f4244430cfa
Successfully built 347642e07e1a

```

# Tested image `nodesource/jessie:iojs-1.8.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 30b1ca0d9379
 ---> eba9e6f5712e
Removing intermediate container 30b1ca0d9379
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.8.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in e761b1431be5
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.8.1-1nodesource1~jessie1) ...
Setting up iojs (1.8.1-1nodesource1~jessie1) ...
 ---> 717f85f55226
Removing intermediate container e761b1431be5
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 8e069869d90a
[91mnpm[0m[91m WARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@1.8.1 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET https://iojs.org/dist/v1.8.1/iojs-v1.8.1.tar.gz
[0m[91mgyp [0m[91mhttp [0m[91m200[0m[91m https://iojs.org/dist/v1.8.1/iojs-v1.8.1.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.8.1/SHASUMS256.txt
[0m[91mgyp[0m[91m http [0m[91m200 https://iojs.org/dist/v1.8.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.8.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.8.1',
gyp info[0m[91m spawn args   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info [0m[91mspawn args   '--depth=.',
gyp [0m[91minfo spawn args   '--no-parallel',
gyp [0m[91minfo spawn args   '--generator-output',
gyp info[0m[91m [0m[91mspawn args   'build',
gyp [0m[91minfo [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! [0m[91mconfigure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at emitTwo (events.js:87:13)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! [0m[91mnode -v[0m[91m v1.8.1
[0m[91mgyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> f498fd7edcea
Removing intermediate container 8e069869d90a
Step 5 : ENV NODE_ENV production
 ---> Running in 14f8cc4175f3
 ---> dda2b386e57a
Removing intermediate container 14f8cc4175f3
Step 6 : WORKDIR /usr/src/app
 ---> Running in b4d4e75f6d7a
 ---> 5c45d3b73bed
Removing intermediate container b4d4e75f6d7a
Step 7 : CMD npm start
 ---> Running in a79a020bb4d8
 ---> 908c1e75ef88
Removing intermediate container a79a020bb4d8
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 9c85d6ece228
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5674 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 03b1f8d19cfd
Removing intermediate container 9c85d6ece228
Successfully built 03b1f8d19cfd

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test112`

Contents of dockerfile `/root/docker-node/.~tmp.test112/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.8.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.8.1-test1` from `/root/docker-node/.~tmp.test112`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.8.1
 ---> 03b1f8d19cfd
Step 2 : ENV NODE_ENV test
 ---> Running in e3da8266f786
 ---> 909e83959ac4
Removing intermediate container e3da8266f786
Step 3 : RUN node -v
 ---> Running in 82f4aab0ca12
v1.8.1
 ---> 0dd80977209c
Removing intermediate container 82f4aab0ca12
Step 4 : RUN node -p "process.versions"
 ---> Running in acf2d73ecf58
{ http_parser: '2.3.0',
  node: '1.8.1',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.2a' }
 ---> 3a088118f78b
Removing intermediate container acf2d73ecf58
Step 5 : RUN npm --version
 ---> Running in 78831cb4f904
2.8.3
 ---> 632b6bd56d68
Removing intermediate container 78831cb4f904
Successfully built 632b6bd56d68

```

# Tested image `nodesource/jessie:iojs-1.8.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 34da910b3d61
 ---> 381e3031e94d
Removing intermediate container 34da910b3d61
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.8.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 9d0c8bd64670
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.8.3-1nodesource1~jessie1) ...
Setting up iojs (1.8.3-1nodesource1~jessie1) ...
 ---> 4b4008a21d66
Removing intermediate container 9d0c8bd64670
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in d1f76289d1d5
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@1.8.3 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.8.3/iojs-v1.8.3.tar.gz
[0m[91mgyp[0m[91m http [0m[91m200[0m[91m https://iojs.org/dist/v1.8.3/iojs-v1.8.3.tar.gz
[0m[91mgyp [0m[91mhttp GET https://iojs.org/dist/v1.8.3/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.8.3/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.8.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.8.3',
gyp info [0m[91mspawn args[0m[91m   '-Druntime=iojs',
gyp[0m[91m info[0m[91m spawn args[0m[91m   '-Dmodule_root_dir=/',
gyp[0m[91m [0m[91minfo spawn args   '--depth=.',
gyp info[0m[91m spawn args[0m[91m   '--no-parallel',
gyp info[0m[91m spawn args[0m[91m   '--generator-output',
gyp[0m[91m info spawn args   'build',
gyp info[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! [0m[91mconfigure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR![0m[91m stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp[0m[91m ERR![0m[91m System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.8.3
[0m[91mgyp ERR! pangyp -v[0m[91m v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> 69f37f41975f
Removing intermediate container d1f76289d1d5
Step 5 : ENV NODE_ENV production
 ---> Running in 3a03f97a9c54
 ---> 1b7827632793
Removing intermediate container 3a03f97a9c54
Step 6 : WORKDIR /usr/src/app
 ---> Running in af0746c3d949
 ---> e1d704d55607
Removing intermediate container af0746c3d949
Step 7 : CMD npm start
 ---> Running in 6040330c97fa
 ---> aa9b5d4faed1
Removing intermediate container 6040330c97fa
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in a04eda71b0fa
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3311 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f191d4d96ac4
Removing intermediate container a04eda71b0fa
Successfully built f191d4d96ac4

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test113`

Contents of dockerfile `/root/docker-node/.~tmp.test113/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.8.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.8.3-test1` from `/root/docker-node/.~tmp.test113`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.8.3
 ---> f191d4d96ac4
Step 2 : ENV NODE_ENV test
 ---> Running in cca3bdc55d27
 ---> 968c248206d3
Removing intermediate container cca3bdc55d27
Step 3 : RUN node -v
 ---> Running in d011839b1a3a
v1.8.3
 ---> 6dbe7a724ded
Removing intermediate container d011839b1a3a
Step 4 : RUN node -p "process.versions"
 ---> Running in 91db3b6e4c00
{ http_parser: '2.5.0',
  node: '1.8.3',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.2c' }
 ---> b22844bd2488
Removing intermediate container 91db3b6e4c00
Step 5 : RUN npm --version
 ---> Running in ab66979ad77d
2.9.0
 ---> 2c279ed7d7bb
Removing intermediate container ab66979ad77d
Successfully built 2c279ed7d7bb

```

# Tested image `nodesource/jessie:iojs-3.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 36e32c3963c9
 ---> d6c764e4344a
Removing intermediate container 36e32c3963c9
Step 3 : RUN curl https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/iojs_3.0.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 495f2e272da0
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (3.0.0-1nodesource1~jessie1) ...
Setting up iojs (3.0.0-1nodesource1~jessie1) ...
 ---> 841f240a093b
Removing intermediate container 495f2e272da0
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0fdec8fc6842
[91mnpm[0m[91m WARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp [0m[91minfo[0m[91m using pangyp@2.3.3
gyp info using node@3.0.0 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v3.0.0/iojs-v3.0.0.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v3.0.0/iojs-v3.0.0.tar.gz
[0m[91mgyp [0m[91mhttp GET https://iojs.org/dist/v3.0.0/SHASUMS256.txt
[0m[91mgyp http 200[0m[91m https://iojs.org/dist/v3.0.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/3.0.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/3.0.0',
gyp info spawn args   '-Druntime=iojs',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info [0m[91mspawn args   '--depth=.',
[0m[91mgyp[0m[91m info[0m[91m spawn args   '--no-parallel',
gyp[0m[91m info spawn args[0m[91m   '--generator-output',
gyp info[0m[91m spawn args   'build',
gyp [0m[91minfo[0m[91m [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp[0m[91m ERR![0m[91m stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command[0m[91m "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v3.0.0
[0m[91mgyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 2724e34cadcf
Removing intermediate container 0fdec8fc6842
Step 5 : ENV NODE_ENV production
 ---> Running in 9f559ece4fa0
 ---> 98ba1931b06b
Removing intermediate container 9f559ece4fa0
Step 6 : WORKDIR /usr/src/app
 ---> Running in 31deb712f82f
 ---> ff008bcb55bd
Removing intermediate container 31deb712f82f
Step 7 : CMD npm start
 ---> Running in 1ef632f6134e
 ---> 58404f97a40d
Removing intermediate container 1ef632f6134e
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 1dbb3ace4bcd
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (4703 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> cfc279b2f8e9
Removing intermediate container 1dbb3ace4bcd
Successfully built cfc279b2f8e9

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test103`

Contents of dockerfile `/root/docker-node/.~tmp.test103/Dockerfile`:

```
FROM nodesource/jessie:iojs-3.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-3.0.0-test1` from `/root/docker-node/.~tmp.test103`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-3.0.0
 ---> cfc279b2f8e9
Step 2 : ENV NODE_ENV test
 ---> Running in 21cb2e47ae06
 ---> 5ce0464f93ca
Removing intermediate container 21cb2e47ae06
Step 3 : RUN node -v
 ---> Running in 1e288508adda
v3.0.0
 ---> d24950724f28
Removing intermediate container 1e288508adda
Step 4 : RUN node -p "process.versions"
 ---> Running in 4c67a80cf085
{ http_parser: '2.5.0',
  node: '3.0.0',
  v8: '4.4.63.26',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '45',
  openssl: '1.0.2d' }
 ---> a7b1321aeee6
Removing intermediate container 4c67a80cf085
Step 5 : RUN npm --version
 ---> Running in bafb4fa81abb
2.13.3
 ---> 467f21bbf551
Removing intermediate container bafb4fa81abb
Successfully built 467f21bbf551

```

# Tested image `nodesource/jessie:iojs-2.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 429f7e508605
 ---> 58da27337625
Removing intermediate container 429f7e508605
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.0.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ef0ab9fea1f2
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.0.0-1nodesource1~jessie1) ...
Setting up iojs (2.0.0-1nodesource1~jessie1) ...
 ---> 2c5f3a7f9657
Removing intermediate container ef0ab9fea1f2
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 2ec9d8a763a8
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN [0m[91mdeprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@2.0.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET https://iojs.org/dist/v2.0.0/iojs-v2.0.0.tar.gz
[0m[91mgyp http [0m[91m200 https://iojs.org/dist/v2.0.0/iojs-v2.0.0.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.0.0/SHASUMS256.txt
[0m[91mgyp http[0m[91m 200 https://iojs.org/dist/v2.0.0/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo [0m[91mspawn[0m[91m python
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args[0m[91m   '-f',
[0m[91mgyp [0m[91minfo spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/build/config.gypi',
gyp [0m[91minfo spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.0.0/common.gypi',
[0m[91mgyp [0m[91minfo spawn args   '-Dlibrary=shared_library',
gyp info [0m[91mspawn args   '-Dvisibility=default',
gyp [0m[91minfo spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/2.0.0',
gyp[0m[91m info[0m[91m spawn args[0m[91m   '-Druntime=iojs',
[0m[91mgyp info[0m[91m [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
[0m[91mgyp [0m[91minfo spawn args[0m[91m   '--no-parallel',
gyp info spawn args   '--generator-output',
[0m[91mgyp[0m[91m [0m[91minfo spawn args[0m[91m   'build',
[0m[91mgyp info[0m[91m spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR! [0m[91mconfigure error[0m[91m 
[0m[91mgyp ERR! stack[0m[91m Error: `gyp` failed with exit code: 1
gyp[0m[91m ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
[0m[91mgyp [0m[91mERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
[0m[91mgyp[0m[91m [0m[91mERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.0.0
[0m[91mgyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 2644deef3b8a
Removing intermediate container 2ec9d8a763a8
Step 5 : ENV NODE_ENV production
 ---> Running in 9fa137239ee6
 ---> 4ae826cadd63
Removing intermediate container 9fa137239ee6
Step 6 : WORKDIR /usr/src/app
 ---> Running in 60e7856f99d4
 ---> 2a236ad311c4
Removing intermediate container 60e7856f99d4
Step 7 : CMD npm start
 ---> Running in 130238ea2982
 ---> 82b8abc55edb
Removing intermediate container 130238ea2982
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 859cf42c9e73
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 1s (5047 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 35326092849b
Removing intermediate container 859cf42c9e73
Successfully built 35326092849b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test114`

Contents of dockerfile `/root/docker-node/.~tmp.test114/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.0.0-test1` from `/root/docker-node/.~tmp.test114`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.0.0
 ---> 35326092849b
Step 2 : ENV NODE_ENV test
 ---> Running in 7c50c5f58941
 ---> b129a7238bf9
Removing intermediate container 7c50c5f58941
Step 3 : RUN node -v
 ---> Running in 361620cc2f42
v2.0.0
 ---> c12344db6dc8
Removing intermediate container 361620cc2f42
Step 4 : RUN node -p "process.versions"
 ---> Running in f4c143393684
{ http_parser: '2.5.0',
  node: '2.0.0',
  v8: '4.2.77.18',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> a87d3dcc9bf7
Removing intermediate container f4c143393684
Step 5 : RUN npm --version
 ---> Running in 650c62c998c4
2.9.0
 ---> 6851f71d475b
Removing intermediate container 650c62c998c4
Successfully built 6851f71d475b

```

# Tested image `nodesource/jessie:iojs-2.3.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a2b893e6bb71
 ---> 3546814c2e88
Removing intermediate container a2b893e6bb71
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in e8dab7df7a32
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
[0m[91m
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.1-1nodesource1~jessie1) ...
Setting up iojs (2.3.1-1nodesource1~jessie1) ...
 ---> e36d7b66477d
Removing intermediate container e8dab7df7a32
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 847695f9b213
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
[0m[91mgyp [0m[91minfo using node@2.3.1 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.3.1/iojs-v2.3.1.tar.gz
[0m[91mgyp http [0m[91m200 https://iojs.org/dist/v2.3.1/iojs-v2.3.1.tar.gz
[0m[91mgyp[0m[91m http GET[0m[91m https://iojs.org/dist/v2.3.1/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp[0m[91m [0m[91m200 https://iojs.org/dist/v2.3.1/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.1',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
[0m[91mgyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! [0m[91mcwd /
gyp ERR! node -v v2.3.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 9bf9a4df99b8
Removing intermediate container 847695f9b213
Step 5 : ENV NODE_ENV production
 ---> Running in 3f2266e5abf6
 ---> 90bc5741de76
Removing intermediate container 3f2266e5abf6
Step 6 : WORKDIR /usr/src/app
 ---> Running in eec21b04f84b
 ---> 31a5489265ae
Removing intermediate container eec21b04f84b
Step 7 : CMD npm start
 ---> Running in 3170f846c9c4
 ---> 3fcbca39da78
Removing intermediate container 3170f846c9c4
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f8bc6054d5de
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3290 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 13d0e5d2e3d1
Removing intermediate container f8bc6054d5de
Successfully built 13d0e5d2e3d1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test117`

Contents of dockerfile `/root/docker-node/.~tmp.test117/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.1-test1` from `/root/docker-node/.~tmp.test117`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.1
 ---> 13d0e5d2e3d1
Step 2 : ENV NODE_ENV test
 ---> Running in 00a39c29a505
 ---> 517cec0a9674
Removing intermediate container 00a39c29a505
Step 3 : RUN node -v
 ---> Running in 35d383bd9a00
v2.3.1
 ---> a15ea075aecf
Removing intermediate container 35d383bd9a00
Step 4 : RUN node -p "process.versions"
 ---> Running in 9be28a1c0fed
{ http_parser: '2.5.0',
  node: '2.3.1',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2c' }
 ---> a95f963fe177
Removing intermediate container 9be28a1c0fed
Step 5 : RUN npm --version
 ---> Running in e9966f1c93e0
2.11.3
 ---> c4a57309bd93
Removing intermediate container e9966f1c93e0
Successfully built c4a57309bd93

```

# Tested image `nodesource/jessie:iojs-2.0.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 132f463242ee
 ---> b565394beb21
Removing intermediate container 132f463242ee
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.0.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 26cf8d2e7e1a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.0.1-1nodesource1~jessie1) ...
Setting up iojs (2.0.1-1nodesource1~jessie1) ...
 ---> 322ea59d1ff1
Removing intermediate container 26cf8d2e7e1a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 799920fb16ca
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with ok
[0m[91mgyp[0m[91m info[0m[91m using pangyp@2.3.3
[0m[91mgyp info using node@2.0.1 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m GET[0m[91m https://iojs.org/dist/v2.0.1/iojs-v2.0.1.tar.gz
[0m[91mgyp http[0m[91m 200 https://iojs.org/dist/v2.0.1/iojs-v2.0.1.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.0.1/SHASUMS256.txt
[0m[91mgyp http[0m[91m 200 https://iojs.org/dist/v2.0.1/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info[0m[91m spawn args   '/root/.node-gyp/2.0.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.0.1',
gyp info[0m[91m spawn args   '-Druntime=iojs',
[0m[91mgyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp [0m[91minfo [0m[91mspawn args   '--generator-output',
gyp[0m[91m info spawn args   'build',
gyp [0m[91minfo[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp[0m[91m ERR! stack[0m[91m     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.0.1
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp ERR! [0m[91mnot ok 
[0m
 ---> 4df05f4908e2
Removing intermediate container 799920fb16ca
Step 5 : ENV NODE_ENV production
 ---> Running in db44ff1b429e
 ---> f3bc0968ccc6
Removing intermediate container db44ff1b429e
Step 6 : WORKDIR /usr/src/app
 ---> Running in c57eb0211cef
 ---> d63d9fb7120e
Removing intermediate container c57eb0211cef
Step 7 : CMD npm start
 ---> Running in f7a70d111402
 ---> 3db30031311b
Removing intermediate container f7a70d111402
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 0a31af4921c9
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (3144 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 7cb11d8567ea
Removing intermediate container 0a31af4921c9
Successfully built 7cb11d8567ea

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test115`

Contents of dockerfile `/root/docker-node/.~tmp.test115/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.0.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.0.1-test1` from `/root/docker-node/.~tmp.test115`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.0.1
 ---> 7cb11d8567ea
Step 2 : ENV NODE_ENV test
 ---> Running in 41aab5abed02
 ---> 8fd276a9f7e3
Removing intermediate container 41aab5abed02
Step 3 : RUN node -v
 ---> Running in f074cba8332b
v2.0.1
 ---> c52348829cd8
Removing intermediate container f074cba8332b
Step 4 : RUN node -p "process.versions"
 ---> Running in 07d4284d16c6
{ http_parser: '2.5.0',
  node: '2.0.1',
  v8: '4.2.77.20',
  uv: '1.5.0',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> e0a568ead55d
Removing intermediate container 07d4284d16c6
Step 5 : RUN npm --version
 ---> Running in 8a1bb547e1ea
2.9.0
 ---> e2c4f3029056
Removing intermediate container 8a1bb547e1ea
Successfully built e2c4f3029056

```

# Tested image `nodesource/jessie:iojs-2.3.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in bafc9ec5d2fb
 ---> 38545d312744
Removing intermediate container bafc9ec5d2fb
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 399ef40d2959
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.2-1nodesource1~jessie1) ...
Setting up iojs (2.3.2-1nodesource1~jessie1) ...
 ---> 1efc7e7e32ed
Removing intermediate container 399ef40d2959
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 5fdcea9da628
[91mnpm[0m[91m [0m[91mWARN [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp [0m[91minfo using pangyp@2.3.3
[0m[91mgyp info using node@2.3.2 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.3.2/iojs-v2.3.2.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.3.2/iojs-v2.3.2.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET https://iojs.org/dist/v2.3.2/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp [0m[91m200 https://iojs.org/dist/v2.3.2/SHASUMS256.txt
[0m[91mgyp [0m[91minfo spawn python
[0m[91mgyp info [0m[91mspawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.2/common.gypi',
gyp[0m[91m info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.2',
gyp info spawn args   '-Druntime=iojs',
gyp info[0m[91m [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp[0m[91m [0m[91minfo[0m[91m spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp [0m[91minfo [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp [0m[91minfo[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.3.2
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp [0m[91mERR! not ok 
[0m
 ---> ae618590d39f
Removing intermediate container 5fdcea9da628
Step 5 : ENV NODE_ENV production
 ---> Running in 05e3a7f833b5
 ---> f05a81c251cd
Removing intermediate container 05e3a7f833b5
Step 6 : WORKDIR /usr/src/app
 ---> Running in 0c3757d698ba
 ---> 3a3d06a0ce24
Removing intermediate container 0c3757d698ba
Step 7 : CMD npm start
 ---> Running in 99155a9c8815
 ---> 9dacdb62481a
Removing intermediate container 99155a9c8815
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e334daf30942
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 3s (3179 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 95879f20350d
Removing intermediate container e334daf30942
Successfully built 95879f20350d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test118`

Contents of dockerfile `/root/docker-node/.~tmp.test118/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.2-test1` from `/root/docker-node/.~tmp.test118`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.2
 ---> 95879f20350d
Step 2 : ENV NODE_ENV test
 ---> Running in 9cb4af6bf5f8
 ---> 5d1b329d9e6a
Removing intermediate container 9cb4af6bf5f8
Step 3 : RUN node -v
 ---> Running in da468a488138
v2.3.2
 ---> 33292e427672
Removing intermediate container da468a488138
Step 4 : RUN node -p "process.versions"
 ---> Running in d003195578be
{ http_parser: '2.5.0',
  node: '2.3.2',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2c' }
 ---> 1df8fd9c4339
Removing intermediate container d003195578be
Step 5 : RUN npm --version
 ---> Running in e6b9719bcff2
2.11.3
 ---> 079d5049986e
Removing intermediate container e6b9719bcff2
Successfully built 079d5049986e

```

# Tested image `nodesource/jessie:iojs-2.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in e82677d1ff32
 ---> 1fc830798f75
Removing intermediate container e82677d1ff32
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 9e447c2b65b4
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.0-1nodesource1~jessie1) ...
Setting up iojs (2.3.0-1nodesource1~jessie1) ...
 ---> 812c3618fbfd
Removing intermediate container 9e447c2b65b4
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c4e30f47acdd
[91mnpm[0m[91m WARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp [0m[91minfo [0m[91musing pangyp@2.3.3
gyp info using[0m[91m node@2.3.0 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v2.3.0/iojs-v2.3.0.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.3.0/iojs-v2.3.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.3.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v2.3.0/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args[0m[91m   'binding.gyp',
[0m[91mgyp info spawn args   '-f',
gyp info spawn args   'make',
gyp [0m[91minfo [0m[91mspawn args[0m[91m   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
[0m[91mgyp[0m[91m info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.0',
gyp [0m[91minfo[0m[91m spawn args[0m[91m   '-Druntime=iojs',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
[0m[91mgyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp[0m[91m info spawn args   '--generator-output',
gyp[0m[91m info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR![0m[91m stack[0m[91m Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! [0m[91mstack[0m[91m     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! [0m[91mSystem Linux 3.13.0-79-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
[0m[91mgyp ERR! node -v v2.3.0
gyp [0m[91mERR! pangyp -v[0m[91m v2.3.3
[0m[91mgyp ERR! [0m[91mnot ok 
[0m
 ---> c7d7f726724c
Removing intermediate container c4e30f47acdd
Step 5 : ENV NODE_ENV production
 ---> Running in 239ae8171a7b
 ---> 4d2e8cf467c7
Removing intermediate container 239ae8171a7b
Step 6 : WORKDIR /usr/src/app
 ---> Running in dc430de5a627
 ---> c5c9732c02c4
Removing intermediate container dc430de5a627
Step 7 : CMD npm start
 ---> Running in e7dd8178ffd2
 ---> 9dc10c34dffc
Removing intermediate container e7dd8178ffd2
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 27ff6ad63e31
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3289 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> cd0f1ad2efd2
Removing intermediate container 27ff6ad63e31
Successfully built cd0f1ad2efd2

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test116`

Contents of dockerfile `/root/docker-node/.~tmp.test116/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.0-test1` from `/root/docker-node/.~tmp.test116`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.0
 ---> cd0f1ad2efd2
Step 2 : ENV NODE_ENV test
 ---> Running in 570b6cd8115d
 ---> 77cf91d64994
Removing intermediate container 570b6cd8115d
Step 3 : RUN node -v
 ---> Running in 587db3ed0a6e
v2.3.0
 ---> 39b2dc32f013
Removing intermediate container 587db3ed0a6e
Step 4 : RUN node -p "process.versions"
 ---> Running in cacb0cb5b739
{ http_parser: '2.5.0',
  node: '2.3.0',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2c' }
 ---> e5a6c4f35ab2
Removing intermediate container cacb0cb5b739
Step 5 : RUN npm --version
 ---> Running in 1a7f08a2b79e
2.11.1
 ---> e854ab07c3b8
Removing intermediate container 1a7f08a2b79e
Successfully built e854ab07c3b8

```

# Tested image `nodesource/jessie:iojs-1.6.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> 388c7a524b5f
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 8fceaf119e07
 ---> abaa30a3bac6
Removing intermediate container 8fceaf119e07
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.6.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 4294b96af6bc
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.6.1-1nodesource1~jessie1) ...
Setting up iojs (1.6.1-1nodesource1~jessie1) ...
 ---> 5f8df591ae9e
Removing intermediate container 4294b96af6bc
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in adcc35fb36e3
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── nopt@3.0.6 (abbrev@1.0.7)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, bl@0.9.5, http-signature@0.10.1, hawk@1.1.1, form-data@0.2.0)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@1.6.1 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET https://iojs.org/dist/v1.6.1/iojs-v1.6.1.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.6.1/iojs-v1.6.1.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.6.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.6.1/SHASUMS256.txt
[0m[91mgyp info[0m[91m spawn python
[0m[91mgyp info[0m[91m spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args[0m[91m   '-f',
[0m[91mgyp info[0m[91m spawn args[0m[91m   'make',
[0m[91mgyp info spawn args   '-I',
gyp[0m[91m [0m[91minfo spawn args   '/build/config.gypi',
gyp info [0m[91mspawn args   '-I',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.6.1/common.gypi',
gyp info[0m[91m spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
[0m[91mgyp [0m[91minfo[0m[91m spawn args   '-Dnode_root_dir=/root/.node-gyp/1.6.1',
[0m[91mgyp[0m[91m info[0m[91m spawn args   '-Druntime=iojs',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
[0m[91mgyp[0m[91m [0m[91minfo [0m[91mspawn args[0m[91m   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp[0m[91m [0m[91minfo spawn args[0m[91m   'build',
[0m[91mgyp[0m[91m [0m[91minfo [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error[0m[91m 
[0m[91mgyp [0m[91mERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp[0m[91m ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.6.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> bbef2adf8ec1
Removing intermediate container adcc35fb36e3
Step 5 : ENV NODE_ENV production
 ---> Running in 2a4dfee39a4f
 ---> 96ea2cd3d40c
Removing intermediate container 2a4dfee39a4f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 710c4e2e2f1d
 ---> bc32878e5ecf
Removing intermediate container 710c4e2e2f1d
Step 7 : CMD npm start
 ---> Running in 792d01717e6a
 ---> 5c7775320222
Removing intermediate container 792d01717e6a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 3aa1d11e9d8e
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [263 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9651 kB in 2s (3235 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 3b39bdbdd884
Removing intermediate container 3aa1d11e9d8e
Successfully built 3b39bdbdd884

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test109`

Contents of dockerfile `/root/docker-node/.~tmp.test109/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.6.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.6.1-test1` from `/root/docker-node/.~tmp.test109`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.6.1
 ---> 3b39bdbdd884
Step 2 : ENV NODE_ENV test
 ---> Running in 7db4e2e26a42
 ---> 47a4ecf1acf6
Removing intermediate container 7db4e2e26a42
Step 3 : RUN node -v
 ---> Running in 2e4c9e6992b5
v1.6.1
 ---> 2edbb4292da6
Removing intermediate container 2e4c9e6992b5
Step 4 : RUN node -p "process.versions"
 ---> Running in b5e4ce6a9fc0
{ http_parser: '2.3.0',
  node: '1.6.1',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 384b4c1e3a42
Removing intermediate container b5e4ce6a9fc0
Step 5 : RUN npm --version
 ---> Running in c697962caf37
2.7.1
 ---> 88b1c5bd8e22
Removing intermediate container c697962caf37
Successfully built 88b1c5bd8e22

```

# Tested image `nodesource/sid:0.10.42`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/sid-base
 ---> ef8990438980
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 7060a13e6dc9
 ---> ea3587e87993
Removing intermediate container 7060a13e6dc9
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.42-1nodesource1~sid1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in cfcb7137e9b8
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Up[0m[91mload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 16183 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.42-1nodesource1~sid1) ...
Setting up nodejs (0.10.42-1nodesource1~sid1) ...
 ---> 1b682d7c882d
Removing intermediate container cfcb7137e9b8
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 2c250f5918d4
[91mnpm[0m[91m WARN [0m[91mdeprecated[0m[91m This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
[0m[91mnpm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm [0m[91mWARN deprecated 
[0m[91mnpm WARN deprecated To upgrade to the latest stable version, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest
[0m[91mnpm[0m[91m WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
[0m[91mnpm WARN deprecated 
[0m[91mnpm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm[0m[91m [0m[91mWARN [0m[91mdeprecated backwards-incompatible changes made to `npm run-script` and
npm WARN[0m[91m deprecated semver behavior.
[0m[91mnpm[0m[91m [0m[91mWARN[0m[91m deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (block-stream@0.0.8, inherits@2.0.1)
├── minimatch@2.0.10 (brace-expansion@1.1.3)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, tough-cookie@2.2.1, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, hawk@1.1.1, form-data@0.2.0)
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated This version of npm lacks support for important features,
npm WARN [0m[91mdeprecated[0m[91m such as scoped packages, offered by the primary npm
[0m[91mnpm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
[0m[91mnpm WARN deprecated[0m[91m latest stable version. To upgrade to npm@2, run:
npm[0m[91m [0m[91mWARN [0m[91mdeprecated[0m[91m 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN [0m[91mdeprecated 
npm [0m[91mWARN deprecated To upgrade to the latest stable version, run:
npm WARN[0m[91m deprecated 
[0m[91mnpm [0m[91mWARN deprecated   npm -g install npm@latest
[0m[91mnpm[0m[91m WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN[0m[91m deprecated 
[0m[91mnpm WARN deprecated If you're running the version of npm bundled with
npm WARN [0m[91mdeprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm [0m[91mWARN[0m[91m deprecated will be bundled with a version of npm@2, which has some small
npm WARN [0m[91mdeprecated backwards-incompatible changes made to `npm run-script` and
[0m[91mnpm WARN deprecated semver behavior.
[0m[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info [0m[91musing pangyp@2.3.3
[0m[91mgyp info using node@0.10.42 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.42/node-v0.10.42.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.42/node-v0.10.42.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.42/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.42/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args[0m[91m   'binding.gyp',
[0m[91mgyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info [0m[91mspawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.42/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.42',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp [0m[91mERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
[0m[91mgyp ERR! System Linux 3.13.0-79-generic
[0m[91mgyp ERR! [0m[91mcommand "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v0.10.42
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp [0m[91mERR![0m[91m [0m[91mnot ok 
[0m
 ---> 2177c52c2965
Removing intermediate container 2c250f5918d4
Step 5 : ENV NODE_ENV production
 ---> Running in c5d2f55835f8
 ---> a28f3620c252
Removing intermediate container c5d2f55835f8
Step 6 : WORKDIR /usr/src/app
 ---> Running in 4a04dfce151c
 ---> 50f5f58afd3e
Removing intermediate container 4a04dfce151c
Step 7 : CMD npm start
 ---> Running in 3dd181057b24
 ---> 7e010abe9dba
Removing intermediate container 3dd181057b24
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 404ef1c64a8c
Get:1 http://mirrors.cat.pdx.edu/debian sid InRelease [287 kB]
Get:2 http://mirrors.cat.pdx.edu/debian sid/main amd64 Packages [10.8 MB]
Fetched 11.1 MB in 2s (3978 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
Calculating upgrade...
The following packages have been kept back:
  nodejs
The following packages will be upgraded:
  dmsetup hostname iproute2 libc-bin libdebconfclient0 libdevmapper1.02.1
  liblz4-1 libncurses5 libncursesw5 libtinfo5 multiarch-support ncurses-base
  ncurses-bin
13 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
Need to get 2921 kB of archives.
After this operation, 11.3 kB of additional disk space will be used.
Get:1 http://mirrors.kernel.org/debian sid/main amd64 hostname amd64 3.17 [14.2 kB]
Get:3 http://mirrors.kernel.org/debian sid/main amd64 libc-bin amd64 2.21-9 [761 kB]
Get:2 http://mirrors.cat.pdx.edu/debian sid/main amd64 ncurses-bin amd64 6.0+20160213-1 [354 kB]
Get:10 http://mirror.picosecond.org/debian sid/main amd64 libdevmapper1.02.1 amd64 2:1.02.116-1 [179 kB]
Get:4 http://mirrors.kernel.org/debian sid/main amd64 ncurses-base all 6.0+20160213-1 [233 kB]
Get:7 http://mirrors.kernel.org/debian sid/main amd64 libncursesw5 amd64 6.0+20160213-1 [115 kB]
Get:5 http://mirrors.cat.pdx.edu/debian sid/main amd64 libtinfo5 amd64 6.0+20160213-1 [293 kB]
Get:6 http://mirrors.cat.pdx.edu/debian sid/main amd64 libncurses5 amd64 6.0+20160213-1 [94.3 kB]
Get:8 http://mirrors.cat.pdx.edu/debian sid/main amd64 multiarch-support amd64 2.21-9 [187 kB]
Get:9 http://mirrors.cat.pdx.edu/debian sid/main amd64 dmsetup amd64 2:1.02.116-1 [93.2 kB]
Get:11 http://mirrors.cat.pdx.edu/debian sid/main amd64 libdebconfclient0 amd64 0.206 [47.3 kB]
Get:12 http://mirrors.kernel.org/debian sid/main amd64 liblz4-1 amd64 0.0~r131-2 [32.5 kB]
Get:13 http://mirrors.cat.pdx.edu/debian sid/main amd64 iproute2 amd64 4.3.0-1+b1 [516 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 2921 kB in 0s (3421 kB/s)
(Reading database ... 
Preparing to unpack .../hostname_3.17_amd64.deb ...
Unpacking hostname (3.17) over (3.16) ...
Setting up hostname (3.17) ...
(Reading database ... 
Preparing to unpack .../ncurses-bin_6.0+20160213-1_amd64.deb ...
Unpacking ncurses-bin (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-bin (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libc-bin_2.21-9_amd64.deb ...
Unpacking libc-bin (2.21-9) over (2.21-8) ...
Setting up libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../ncurses-base_6.0+20160213-1_all.deb ...
Unpacking ncurses-base (6.0+20160213-1) over (6.0+20151024-2) ...
Setting up ncurses-base (6.0+20160213-1) ...
(Reading database ... 
Preparing to unpack .../libtinfo5_6.0+20160213-1_amd64.deb ...
Unpacking libtinfo5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libtinfo5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncurses5_6.0+20160213-1_amd64.deb ...
Unpacking libncurses5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncurses5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libncursesw5_6.0+20160213-1_amd64.deb ...
Unpacking libncursesw5:amd64 (6.0+20160213-1) over (6.0+20151024-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libncursesw5:amd64 (6.0+20160213-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../multiarch-support_2.21-9_amd64.deb ...
Unpacking multiarch-support (2.21-9) over (2.21-8) ...
Setting up multiarch-support (2.21-9) ...
(Reading database ... 
Preparing to unpack .../dmsetup_2%3a1.02.116-1_amd64.deb ...
Unpacking dmsetup (2:1.02.116-1) over (2:1.02.115-2) ...
Setting up dmsetup (2:1.02.116-1) ...
(Reading database ... 
Preparing to unpack .../libdevmapper1.02.1_2%3a1.02.116-1_amd64.deb ...
Unpacking libdevmapper1.02.1:amd64 (2:1.02.116-1) over (2:1.02.115-2) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdevmapper1.02.1:amd64 (2:1.02.116-1) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../libdebconfclient0_0.206_amd64.deb ...
Unpacking libdebconfclient0:amd64 (0.206) over (0.205) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up libdebconfclient0:amd64 (0.206) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../liblz4-1_0.0~r131-2_amd64.deb ...
Unpacking liblz4-1:amd64 (0.0~r131-2) over (0.0~r131-1) ...
Processing triggers for libc-bin (2.21-9) ...
Setting up liblz4-1:amd64 (0.0~r131-2) ...
Processing triggers for libc-bin (2.21-9) ...
(Reading database ... 
Preparing to unpack .../iproute2_4.3.0-1+b1_amd64.deb ...
Unpacking iproute2 (4.3.0-1+b1) over (4.3.0-1) ...
Setting up iproute2 (4.3.0-1+b1) ...
[91mW: --force-yes is deprecated, use one of the options starting with --allow instead.
[0m ---> a6e4d6da56b3
Removing intermediate container 404ef1c64a8c
Successfully built a6e4d6da56b3

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test122`

Contents of dockerfile `/root/docker-node/.~tmp.test122/Dockerfile`:

```
FROM nodesource/sid:0.10.42
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/sid:0.10.42-test1` from `/root/docker-node/.~tmp.test122`

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/sid:0.10.42
 ---> a6e4d6da56b3
Step 2 : ENV NODE_ENV test
 ---> Running in 655c50843793
 ---> 0d29cf719341
Removing intermediate container 655c50843793
Step 3 : RUN node -v
 ---> Running in 08ebcb96b942
v0.10.42
 ---> f8b0e933ec2c
Removing intermediate container 08ebcb96b942
Step 4 : RUN node -p "process.versions"
 ---> Running in baca538ff97d
{ http_parser: '1.1',
  node: '0.10.42',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1r' }
 ---> 9510814b98ca
Removing intermediate container baca538ff97d
Step 5 : RUN npm --version
 ---> Running in b3edaf104b9d
1.4.29
 ---> bc1131669794
Removing intermediate container b3edaf104b9d
Successfully built bc1131669794

```

# Tested image `nodesource/sid:5.7.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/sid-base
 ---> ef8990438980
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in faba9d242603
 ---> d732250e9e23
Removing intermediate container faba9d242603
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.7.0-1nodesource1~sid1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in e749c3407cf0
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

[0mSelecting previously unselected package nodejs.
(Reading database ... 16183 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.7.0-1nodesource1~sid1) ...
Setting up nodejs (5.7.0-1nodesource1~sid1) ...
 ---> 7f6f11583f64
Removing intermediate container e749c3407cf0
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 5f8a7746d06e
[91mnpm [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m[91mnpm [0m[91mWARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.3 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.3 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@5.7.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.7.0/node-v5.7.0.tar.gz
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v5.7.0/node-v5.7.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.7.0/SHASUMS256.txt
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v5.7.0/SHASUMS256.txt
[0m[91mgyp info [0m[91mspawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp[0m[91m info [0m[91mspawn args   '-f',
[0m[91mgyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/build/config.gypi',
[0m[91mgyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp [0m[91minfo [0m[91mspawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.7.0/common.gypi',
[0m[91mgyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.7.0',
gyp info spawn args   '-Druntime=node',
[0m[91mgyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
[0m[91mgyp info[0m[91m spawn args   '--no-parallel',
[0m[91mgyp info [0m[91mspawn args[0m[91m   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp [0m[91minfo[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
gyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:100:13)
gyp ERR! stack     at ChildProcess.emit (events.js:185:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-79-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.7.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 795e653ceb6f
Removing intermediate container 5f8a7746d06e
Step 5 : ENV NODE_ENV production
 ---> Running in efc9c3bd9258
 ---> 3ac5b9f37630
Removing intermediate container efc9c3bd9258
Step 6 : WORKDIR /usr/src/app
 ---> Running in ace322ca10b1
 ---> 8107acbac19f
Removing intermediate container ace322ca10b1
Step 7 : CMD npm start
 ---> Running in 4808c93c795c
 ---> 380820118d2f
Removing intermediate container 4808c93c795c
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in a99934a527c5
Get:1 http://mirrors.namecheap.com/debian sid InRelease [287 kB]
Get:2 http://mirrors.namecheap.com/debian sid/main amd64 Packages [10.8 MB]
Fetched 11.1 MB in 3s (3446 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
Calculating upgrade...
The following packages will be upgraded:
  dmsetup hostname iproute2 libc-bin libdebconfclient0 libdevmapper1.02.1
  liblz4-1 libncurses5 libncursesw5 libtinfo5 multiarch-support ncurses-base
  ncurses-bin
13 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 2921 kB of archives.
After this operation, 11.3 kB of additional disk space will be used.
Get:1 http://mirrors.cat.pdx.edu/debian sid/main amd64 hostname amd64 3.17 [14.2 kB]


