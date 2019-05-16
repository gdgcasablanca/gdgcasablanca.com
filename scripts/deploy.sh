#!/bin/bash

echo 'DEPLOYING IN: '

firebase use develop

if [ "$TRAVIS_BRANCH" = "develop" ]; then
  echo 'develop'
  firebase use develop
elif [ "$TRAVIS_BRANCH" = "master" ]
  echo 'master'
  firebase use default
fi

firebase deploy --token $FIREBASE_TOKEN
