export const shuffleArray = ( array: Array<string> ) => {
    const toShuffle = array.slice();
    let currentIndex = toShuffle.length;
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [toShuffle[currentIndex], toShuffle[randomIndex]] = [
        toShuffle[randomIndex], toShuffle[currentIndex]];
    }
  
    return toShuffle;
}  

const getRandomBoolean: () => boolean = () => {
    return !! Math.floor( Math.random() * 2 );
}

export const getRandomItemFromArray = ( source: Array<any> ) => {
    const randomIndex = Math.floor( Math.random() * source.length );
    return source[ randomIndex ];
}

export const getNRandomItemsFromArray = ( n: number, source: Array<string> ) => {
    return Array(n).fill(undefined).map(x => getRandomItemFromArray(source));
}

export const randomizeCapitalisation = ( array: Array<string> ) => {
    return array.map( x => {
        return getRandomBoolean() ? x.toLowerCase() : x.toUpperCase();
    } )
}

export const digitiseLetter = ( letter: string ) => {

    const map: Record<string, string> = {
        a: '4',
        e: '3',
        i: '1',
        o: '0'
    };

    const key = letter.toLowerCase();
    const canBeDigitised = map.hasOwnProperty( key );

    return canBeDigitised ? map[key] : letter;
}

export const randomizeLettersToDigits = ( array: Array<string> ) => {
    return array.map( x => getRandomBoolean() ? digitiseLetter(x) : x );
}

export const generatePassword = ( length: number, symbolsCount: number, digitsCount: number ) => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const digits = '0123456789'.split('');
    const symbols = '~`! @#$%^&*()_-+={[}]|:;"\'<,>.?/'.split('');
    const lettersCount = Math.max( length - symbolsCount - digitsCount, 0 );

    const mySpecialCharacters = getNRandomItemsFromArray( symbolsCount, symbols );
    const myDigits = getNRandomItemsFromArray( digitsCount, digits );
    const myLetters = getNRandomItemsFromArray( lettersCount, alphabet );

    const myCharacters = mySpecialCharacters.concat( myDigits, myLetters );
    const shuffledCharacters = shuffleArray( myCharacters );
    const capitalisedPassword = randomizeCapitalisation( shuffledCharacters );
    const digitisedPassword = randomizeLettersToDigits( capitalisedPassword );

    return digitisedPassword.join('');
}

export const generateMultiplePasswords = ( count: number, length: number, symbolsCount: number, digitsCount: number ) => {
    return Array( count ).fill( undefined ).map( () => generatePassword( length, symbolsCount, digitsCount ) );
}
