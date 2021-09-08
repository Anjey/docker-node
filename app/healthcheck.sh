#!/bin/bash
health=$(curl -sS 127.0.0.1:${PORT}/health)
if [[$health]]; then 
 return 0
else
  return 1

