#!/bin/bash
set -e
read -p "Enter release version: " VERSION

read -p "Releasing $VERSION - are you sure? (y/N) " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."
  npm test
  npm run build

  npm version $VERSION --message "chore(release) $VERSION"

  # publish
  git push github refs/tags/v$VERSION
  git push github master
  npm publish
fi
