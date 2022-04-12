import chalk from 'chalk';
import readline from 'readline';

console.log(chalk.green('Test verde!'));
console.log(chalk.yellow('Test gialla!'));
console.log(chalk.gray('Test Grigia!'));

//https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Inserisci una parola ', (answer) => {
    console.log(`la parola inserita è: ${answer}`);
    rl.close();
});

// abbiamo 6 tentativi per risolvere una parola

// la parola deve essere lunga 4



