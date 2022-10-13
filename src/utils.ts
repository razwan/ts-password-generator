export const random = () => {
    return Math.random();
}

export const shuffleArray = ( array: Array<string> ) => {
    const toShuffle = array.slice();
    let currentIndex = toShuffle.length;
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [toShuffle[currentIndex], toShuffle[randomIndex]] = [
        toShuffle[randomIndex], toShuffle[currentIndex]];
    }
  
    return toShuffle;
}  

const getRandomBoolean: () => boolean = () => {
    return !! Math.floor( random() * 2 );
}

const getRandomItemFromArray = ( source: Array<any> ) => {
    const randomIndex = Math.floor( random() * source.length );
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

const isFractional = ( number: number ) => {
    return Math.floor( number ) !== number;
}
