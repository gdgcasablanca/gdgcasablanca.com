#!/bin/bash

echo 'DEPLOYING IN: '

pwd
ls -ail

if [ "$TRAVIS_BRANCH" = "develop" ]; then
  echo 'develop'
  firebase use develop
elif [ "$TRAVIS_BRANCH" = "master" ]; then
  echo 'master'
  firebase use default
fi

firebase deploy --token $FIREBASE_TOKEN
