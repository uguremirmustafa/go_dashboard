#!/bin/bash

goose -dir ./sql/schema postgres postgres://postgres:postgres@db:5432/postgres up

if [ $? -eq 0 ]; then
  echo "Migration successful"
else
  echo "Migration failed"
  exit 1
fi