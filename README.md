# finixbit.github.io


# Dev
```sh
cd site-dev

apt update
apt-get install libvips libvips-dev libvips-tools

npm install
npm run dev -- --port 4000 --host
```

# Build
```sh
cd site-dev
npm run build
mv dist/* ../site/
```