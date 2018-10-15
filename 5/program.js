const fs = require('fs');
const path = require('path')
const dir = process.argv[2];
const fileType = process.argv[3]

fs.readdir(dir, function (err, files) {
	if (err) return console.error(err);
	files.forEach(file => {
		if (path.extname(file) === '.' + fileType)
			console.log(file)
	})
})