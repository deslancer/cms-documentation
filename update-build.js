const configPath =
  './src/config.json';
import config from './src/config.json' assert { type: "json" };
import * as fs from 'fs';

let patch = config.version.patch;
patch = parseInt(patch) + 1;
config.version.patch = patch.toString().padStart(3, '0');
fs.writeFile(configPath, JSON.stringify(config), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been created');
});
