#!/bin/sh

curl -sS 127.0.0.1:${PORT:-8080}/health || exit 1

