const fs = require('fs');
const file = process.argv[2];

function findLines(callback) {
	fs.readFile(file, function doneReading(err, data) {
		string = data.toString();
		newLines = string.split(/\r\n|\r|\n/).length - 1;
		callback()
	});
}

function logLines() {
	console.log(newLines)
}

findLines(logLines)