var fs = require('fs');

var myFile = 'newfile.txt';
var date = new Date();

//запись в файл (замена)
var myText1 = 'hi hello';

fs.writeFile(myFile, myText1, function(err) {
	if (err) throw Error;
	console.log('\nwrote text \'' + myText1 + '\' to file ' + myFile);
})

//запись в файл (добавление)
var myText2 = 'line2';

fs.appendFile(myFile, '\n' + myText2, function(err) {
	if (err) throw Error;
	console.log('\nupdated file ' + myFile + ' with text ' + myText2);
})

//чтение из файла
var readingFromMyFile = fs.readFile(myFile, 'utf-8', function(err, content) {
	if (err) throw Error;
	console.log('\ncontent of file ' + myFile + ':\n' + content);
})
