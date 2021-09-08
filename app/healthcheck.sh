#!/bin/sh

curl -sS 127.0.0.1:${PORT}/health || exit 1

