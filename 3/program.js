const fs = require('fs');

const file = process.argv[2];

const buf = fs.readFileSync(file);

const string = buf.toString();

const lines = string.split(/\r\n|\r|\n/).length - 1;

console.log(lines)