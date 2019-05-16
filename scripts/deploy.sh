#!/bin/bash

yarn
yarn build

if [ "$TRAVIS_BRANCH" = "develop" ]; then
  echo 'develop'
  firebase use develop
elif [ "$TRAVIS_BRANCH" = "master" ]; then
  echo 'master'
  firebase use default
fi

pwd
ls -ail

firebase deploy --token $FIREBASE_TOKEN
