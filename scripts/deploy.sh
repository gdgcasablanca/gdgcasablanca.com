#!/bin/bash

# yarn
# yarn build

if [ "$TRAVIS_BRANCH" = "develop" ]; then
  echo 'Deploying to the develop branch ...'
  firebase use develop
elif [ "$TRAVIS_BRANCH" = "master" ]; then
  echo 'Deploying to the master branch ...'
  firebase use default
fi

firebase deploy --token $FIREBASE_TOKEN
