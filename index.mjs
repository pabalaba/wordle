/**
 * Implementare WORDLE. [https://www.nytimes.com/games/wordle/index.html]
 *   Ogni tentativo deve avere 4 lettere valide.
 *
 *   Il colore della lettera deve cambiare secondo le seguenti regole:
 *
 *   VERDE: la lettera è contenuta nella soluzione nella posizione giusta
 *   GIALLO: la lettera è contenuta nella soluzione ma NON nella posizione giusta
 *   GRIGIO: la lettera non è contenuta nella soluzione
 *
 * */

import chalk from 'chalk';
import readline from 'readline';

// https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let attempt = 1 // contatore dei tentativi
let maxGameAttempt = 6; // abbiamo 6 tentativi per risolvere una parola
let wordGameLength = 4; // la parola deve esser lunga al max 4

// Soluzione statica a fine didattico.
const solution = 'CODE';

// funzione di verifica
const wordChecker = function (word, solution) {

    let result = {
        data: "",
        success: false
    }

    for (let index in word) {
        if(word[index]===solution[index])
            result.data += chalk.green(word[index]);
        else if(solution.includes(word[index]))
            result.data += chalk.yellow(word[index]);
        else
            result.data += chalk.gray(word[index]);
    }

    if(word === solution)
        result.success = true;

    return result;
}

// funzione di Gioco
const game = function (attempt, max) {
    console.log('\n', `Tentativo ${attempt} di ${max}`);
    // https://nodejs.org/api/readline.html#rlquestionquery-options-callback
    rl.question(chalk.blue(`Inserisci una parola di ${wordGameLength} caratteri: `), function (answer) {

        // usiamo una safe word per uscire dal ciclo
        if (answer === 'exit') {
            return rl.close();
        }

        if(answer.length == wordGameLength){
            ++attempt;

            let result = wordChecker(answer.toUpperCase(),solution.toUpperCase());
            console.log('\n',result.data,'\n');

            if(result.success){
                console.log('\n',chalk.green(" >> HAI VINTO << "),'\n')
                return rl.close();
            }
            
            if(attempt>maxGameAttempt){
                console.log('\n', chalk.red(`Spiacente hai terminato i ${max} tentativi. La soluzione era ${solution}`),'\n');
                return rl.close();
            }
        }else{
            console.log('\n', chalk.red(`Devi inserire ${wordGameLength} caratteri.`),'\n');
        }
        game(attempt, maxGameAttempt);
    });
}

game(attempt, maxGameAttempt);





