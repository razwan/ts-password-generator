import { getNRandomItemsFromArray, shuffleArray, randomizeCapitalisation, randomizeLettersToDigits } from "./utils";

export const generatePassword = ( length: number, symbolsCount: number, digitsCount: number ) => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const digits = '0123456789'.split('');
    const symbols = '~`! @#$%^&*()_-+={[}]|:;"\'<,>.?/'.split('');

    if ( length < 1 || symbolsCount < 0 || digitsCount < 0 ) {
        throw new Error( 'Negative numbers are invalid parameters' )
    }
    
    if ( isFractional( length ) || isFractional( symbolsCount ) || isFractional( digitsCount ) ) {
        throw new Error( 'Fractional numbers are invalid parameters' )
    }

    if ( length < symbolsCount + digitsCount ) {
        throw new Error( 'Impossible configuration' )
    }

    const lettersCount = length - symbolsCount - digitsCount;
    const mySpecialCharacters = getNRandomItemsFromArray( symbolsCount, symbols );
    const myDigits = getNRandomItemsFromArray( digitsCount, digits );
    const myLetters = getNRandomItemsFromArray( lettersCount, alphabet );
    const myCharacters = mySpecialCharacters.concat( myDigits, myLetters );
    const shuffledCharacters = shuffleArray( myCharacters );
    const capitalisedPassword = randomizeCapitalisation( shuffledCharacters );
    const digitisedPassword = randomizeLettersToDigits( capitalisedPassword );
    const myPassword = digitisedPassword.join('');

    return myPassword;
}

export const generateMultiplePasswords = ( count: number, length: number, symbolsCount: number, digitsCount: number ) => {
    return Array( count ).fill( undefined ).map( () => generatePassword( length, symbolsCount, digitsCount ) );
}

const isFractional = ( number: number ) => {
    return Math.floor( number ) !== number;
}
