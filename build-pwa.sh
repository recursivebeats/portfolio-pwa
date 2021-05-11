cd pwa-ui
npm install
quasar build -m pwa
cd ../
rm -rf ./pwa-server/public/*
cp -r ./pwa-ui/dist/pwa ./pwa-server/public
