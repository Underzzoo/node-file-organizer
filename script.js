const fs = require('fs');
const util = require('util');
const path = require('path');

var diretorio = './pasta-de-destino-dos-arquivos';
var months = {
	0: 'Janeiro',
	1: 'Fevereiro',
	2: 'Marco',
	3: 'Abril',
	4: 'Maio',
	5: 'Junho',
	6: 'Julho',
	7: 'Agosto',
	8: 'Setembro',
	9: 'Outubro',
	10: 'Novembro',
	11: 'Dezembro'
  };
  
files = fs.readdirSync(diretorio);
for(i = 0; i < files.length; i++){
	var name  = files[i];
	var file  = fs.statSync(diretorio + '/' + files[i]);
	var day   = new Date(util.inspect(file.mtime)).getDate();
	var month = new Date(util.inspect(file.mtime)).getMonth();
	var year  = new Date(util.inspect(file.mtime)).getFullYear();

	dirYear   = diretorio + '/' + year;
	dirMonth  = diretorio + '/' + year + '/' + months[month];

	if (!fs.existsSync(dirYear)){
	fs.mkdirSync(dirYear);
	}

	if(!fs.existsSync(dirMonth)){
	fs.mkdirSync(dirMonth)
	}

	var oldPath = diretorio + '/' + name;
	var newPath = diretorio + '/' + year + '/' + months[month] + '/' + name;

	fs.renameSync(oldPath, newPath); 
}
