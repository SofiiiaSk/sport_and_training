#!/usr/bin/env bash

set -o errexit

bundle install

bin/rails solid_cache:install
bin/rails db:migrate

bin/rails assets:precompile
bin/rails assets:clean