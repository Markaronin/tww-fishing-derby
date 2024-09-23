#!/usr/bin/env bash
set -eu

aws s3 sync --delete ./build s3://markaronin-fishing-derby-helper