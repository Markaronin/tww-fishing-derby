#!/usr/bin/env bash
set -eu

npm install
npm run build

aws s3 sync --delete ./build s3://markaronin-fishing-derby-helper