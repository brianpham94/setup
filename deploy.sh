# Only deploy to Firebase if on master branch.
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" == "master" ]]; then
  firebase deploy --project alpha-team-84c76 --token=${FIREBASE_API_TOKEN}
  exit 1;
fi
