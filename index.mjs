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

let attempt = 0 // contatore dei tentativi
let maxGameAttempt = 6; // abbiamo 6 tentativi per risolvere una parola
let wordGameLength = 4; // la parola deve esser lunga al max 4

// Soluzione statica a fine didattico.
const solution = 'CODE';

// funzione di verifica
const wordChecker = function (word, solution) {
    let success = [];
    let result = [];

    // ATTENZIONE ALLE PAROLE maiuscole/minuscole.

    // controllo lettera per lettera in parola
    for (let index in word) {
        // VERDE: la lettera è contenuta nella parola nella posizione giusta
        // GIALLO: la lettera è contenuta nella parola ma NON nella posizione giusta
        // GRIGIO: la lettera non è contenuta nella parola
    }

    // ritorno un risultato composto dalle lettere colorate e da un success booleano
    // per fare uscire dal gioco se l'utente indovina la parola
    return {
        'data': '',
        'success': true
    }
}

// funzione di Gioco
const game = function (attempt, max) {
    // https://nodejs.org/api/readline.html#rlquestionquery-options-callback
    rl.question(chalk.blue(`Inserisci una parola di ${wordGameLength} caratteri: `), function (answer) {

        // usiamo una safe word per uscire dal ciclo
        if (answer === 'exit') {
            return rl.close();
        }

        // controlla di aver inserito esattamente wordGameLength caratteri altrimenti dai un errore
        // if (condition) {
        //      console.log('\n', chalk.red(`Devi inserire ${wordGameLength} caratteri.`));
        // }


        console.log('\n', `Tentativo ${attempt} di ${max}`);
        ++attempt;


        // if (condition) {
        //     console.log(chalk.green(' >> HAI VINTO << '));
        //     return rl.close();
        // }

        // if (condition) {
        //     console.log('\n', chalk.red(`Spiacente hai terminato i ${counter} tentativi. La soluzione era ${solution}`), '\n');
        //     return rl.close();
        // }

        // Richiamo la funzione fino a esaurimento dei tentativi
        game(attempt, maxGameAttempt);
    });
}

game(attempt, maxGameAttempt);





