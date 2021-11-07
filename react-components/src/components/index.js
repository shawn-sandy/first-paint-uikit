/**
 * Setup
 * install packages: npm i --save-dev babel-cli babel-preset-env babel-preset-react babel-preset-stage-2
 * create babel.config.js in package root
 * copy and past this index.js file into you components folder
 * add the following command to package.json
 * "compile": "cross-env NODE_ENV=production npx babel src/components --out-dir dist --copy-files --watch"
 * create the component and import into index.js see example below
 * run the command in package.json `npm run compile`
 */

// @ts-check
import Button from './Buttons/Button'

export { Button }
