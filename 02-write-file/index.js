const fs = require('fs'); 
const path = require('path');

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');


const file = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const rl = readline.createInterface({ input, output });

process.on('exit', () => {
    console.log('Программа прекращает работу');
});


const recursiveReadLine = () => {
    rl.question('Введите пожалуйста текст для записи в файл text.txt:\n', (answer) => {
        if (answer === 'exit') {
            return rl.close();
        }

        file.write(`${answer}\n`);
        recursiveReadLine();
    });
};

recursiveReadLine();