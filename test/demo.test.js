const fs = require('node:fs/promises');
const path = require('node:path');
fs.appendFile(path.resolve(__dirname, './text.txt'), 'xxxxxxxx');
