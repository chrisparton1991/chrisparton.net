# ChrisParton.net

## Requirements
* `npm i -g ghost-cli`
* `npm i -g yarn`

## Admin credentials
Since Ghost is running as a local instance, the credentials don't need to be secure.

* Admin URL: `http://localhost:2368/ghost`
* Username: `chrisparton1991@gmail.com`
* Password: `chrisparton1991`

## Development instructions

```bash
# Step 1: Ensure Gatsby and Ghost dependencies are up to date.
$ npm install
$ cd ghost/current && yarn

# Step 2: Start Ghost (http://localhost:2368).
$ npm run ghostStart

# Step 3: Edit content in Ghost.

# Step 4: Run Gatsby build.
$ npm run build

# Step 5: Verify the changes.
$ npm run serve
# Navigate to http://localhost:9000 and ensure the blog looks good.

# Step 6: Deploy updated blog to GitHub Pages.
$ npm run deploy

# Step 7: Stop Ghost.
$ npm run ghostStop
``` 

## Troubleshooting
If Ghost fails to start:
* Check that the `<repo>/ghost/current` symlink is working. If not, recreate the symlink and have it point to
  `<repo>/ghost/versions/<latest version>`.
* Ensure the paths in `<repo>/ghost/config.development.json` are correct.
