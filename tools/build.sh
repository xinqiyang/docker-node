#!/usr/bin/env bash

# Get Working Directory

set -e

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

LOGS="$DIR/../logs/$(date +'%Y_%m_%d_%H:%M')"
mkdir -p "$LOGS"

cd $DIR

# Start with a clean working directory
echo "Removing previously generated Dockerfiles..."
rm -rf $DIR/../{ubuntu,debian,centos,fedora,base}

echo "Generating dists file..."
$DIR/gen-dists.sh > $DIR/../dockerfiles/dists.js

echo "Generating inventory.yml..."
$DIR/gen_inventory.js

echo "Generating base Dockerfiles..."
$DIR/base.js > /dev/null

echo "Running Dante on base Dockerfiles..."
cd $DIR/../base
dante test -j 30 -r 2 > "$LOGS/base.md"
cd $DIR

echo "Generating Dockerfiles..."
$DIR/generate.js > /dev/null

echo "Generating README.md..."
$DIR/gen_readme.js > $DIR/../README.md

echo "Running Dante"
cd $DIR/../
dante test -j 100 -r 3 > "$LOGS/tests.md"
dante push -r 2 > "$LOGS/push.md"
git add ubuntu debian centos fedora base logs README.md inventory.yml
git commit -m "Pushing new versions"
git push origin master
cd $DIR
