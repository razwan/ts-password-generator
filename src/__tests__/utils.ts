import { digitiseLetter, getNRandomItemsFromArray, randomizeCapitalisation, shuffleArray } from "../utils";

const generateStringArray = ( length: number ) => {
    return Array.from(Array(length).keys()).map( x => `${ x }`);
}

// shuffleArray - implementation detail / algorithm 
// - every item is present in the shuffled array
// - shuffled array is not equal to original array
test( 'shuffle array keeps all items in array but in different order', () => {
    // arrange
    const length = 20;
    const subject = generateStringArray( length );

    // act
    const shuffled = shuffleArray(subject.slice());

    // assert
    const every = subject.every( x => shuffled.indexOf( x ) > -1 );
    expect(shuffled.length).toBe(length);
    expect(every).toBe(true);
    expect(subject).not.toEqual(shuffled);
} )

// randomBoolean - type inference works

// getNRandomItemsFromArray - implementation detail
// - length of returned array is correct
// - all items in returned array are from original array
// - assert some sort of randomness?
test( 'all items returned by getNRandomItemsFromArray are from subject array', () => {
    // arrange
    const array = generateStringArray( 20 );
    const length = 10;
    
    // act
    const items = getNRandomItemsFromArray( length, array );

    // assert
    const everyItemIsFromArray = items.every( x => array.indexOf( x ) > -1 );
    expect( everyItemIsFromArray ).toBe( true );
} );

test( 'number of items returned by getNRandomItemsFromArray is correct', () => {
    // arrange
    const array = generateStringArray( 20 );
    const length = 10;
    
    // act
    const items = getNRandomItemsFromArray( length, array );

    // assert
    expect( items.length ).toBe( length );
} );

// @todo
test( 'items returned by getNRandomItemsFromArray are in random order', () => {
    // arrange
    const array = generateStringArray( 20 );
    const length = 10;
    
    // act
    const items = getNRandomItemsFromArray( length, array );

    // assert
    expect( items ).not.toEqual( array.slice( 0, length ) );
} );

// randomizeCapitalisation
// - toUppercase equality
test( 'capitalisation does not change other aspects of the string', () => {
    // arrange
    const password = 'AaBbCbA';

    // act
    const capitalised = randomizeCapitalisation( password.split( '' ) ).join( '' );

    // assert
    expect( password.toUpperCase() ).toBe( capitalised.toUpperCase() );
} )

// was private. implementation detail?
test( 'only expected vowels are converted into digits', () => {
    // arrange
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const expected = '4bcd3fgh1jklmn0pqrstuvwxyz';

    // act
    const digitised = alphabet.split( '' ).map( digitiseLetter ).join( '' );

    // assert
    expect( digitised ).toBe( expected );
} )
