## Run rails app:
cd rails
bundle install
rake killrails
# Just in case ruby is still running...
pkill ruby*
bundle exec rake assets:precompile
rails server -e production -p 80 -d

## Run meteor app:
#cd meteor
#killall meteor
#killall node
#meteor run --production --port 80 &
