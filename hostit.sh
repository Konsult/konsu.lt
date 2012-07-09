## Run rails app:
# cd rails
# bundle exec rake assets:precompile && killall rails; sudo rails server -e production -p 80 -d

## Run meteor app:
cd meteor
killall meteor
killall node
meteor run --production --port 80 &
