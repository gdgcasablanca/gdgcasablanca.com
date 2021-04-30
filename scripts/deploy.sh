#!/bin/bash

yarn
yarn build

if [ "$TRAVIS_BRANCH" = "develop" ]; then
  echo 'Deploying to the develop branch ...'
  firebase use develop
elif [ "$TRAVIS_BRANCH" = "main" ]; then
  echo 'Deploying to the main branch ...'
  firebase use default
fi

firebase deploy --token $FIREBASE_TOKEN
