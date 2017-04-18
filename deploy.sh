# Only deploy to Firebase if on master branch.
echo "On $TRAVIS_BRANCH branch."
if [[ $TRAVIS_BRANCH == $TRAVIS_BRANCH ]]; then
  echo "On $TRAVIS_BRANCH branch... Deploying to Firebase!"
  firebase deploy --project alpha-team-84c76 --token=${FIREBASE_API_TOKEN}
  exit 0;
fi
