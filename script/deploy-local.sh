#!/bin/bash

##########################################################################
# deploy-local.sh
#
# Usage:
#   ./script/deploy-local.sh [version]
#
##########################################################################

set -e

echo "Packaging and deploying local repo contents."
echo "Make sure to npm run build first!"
echo "================================="

aws ecr get-login-password | docker login --username AWS --password-stdin 101624687637.dkr.ecr.us-west-2.amazonaws.com

echo "Building local docker image"
docker build --tag 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:local .

echo "Pushing local docker image"
docker push 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:local

echo "Updating previous and latest"
docker pull 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:latest
docker tag 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:latest 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:previous
docker tag 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:local 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:latest

echo "Pushing latest and previous"
docker push 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:latest
docker push 101624687637.dkr.ecr.us-west-2.amazonaws.com/cs188:previous

echo "Updating app-web"
./script/deploy-ecs.sh cs188-app-web "local"

# echo "Updating app-background"
# ./script/deploy-ecs.sh cs188-app-background "local"

echo "Updating lambda"
aws lambda update-function-code \
  --no-cli-pager \
  --region us-west-2 \
  --function-name cs188 \
  --zip-file fileb://./server/bundle.zip

echo "DONE"
