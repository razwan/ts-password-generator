import readline from "readline";
import { generateMultiplePasswords } from './utils';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt: ( question: string ) => Promise<string> = ( question ) => {
    return new Promise( resolve => {
        rl.question( question, (answer: string) => {
            resolve( answer );
        });
    } );
}

const copyToClipboard = ( data: string ) => {
    const proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write( data ); 
    proc.stdin.end();
}

(async () => {
    const length = Number( await prompt( `What's the minimum length? ` ) );
    const specialChars = Number( await prompt( `How many special characters? ` ) );
    const numbers = Number( await prompt( `How many numbers? ` ) );
    const passwords = generateMultiplePasswords( 10, length, specialChars, numbers );    
    
    copyToClipboard( passwords[0] );
    
    console.log( passwords );
    console.log( `Password ${ passwords[0] } copied to clipboard!`)

    process.exit();
})()
