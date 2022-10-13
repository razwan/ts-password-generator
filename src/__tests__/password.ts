import { generateMultiplePasswords, generatePassword } from "../password";

// generatePassword
// - length of password is correct
// - number of special characters in generated is correct
// - number of digits in generated password is greater or equal than requested
test( 'throws error for negative parameters', () => {
    const useCases = [
        [ -1, 2, 2 ],
        [ 8, -1, 2 ],
        [ 8, 2, -1 ]
    ];

    useCases.forEach( ( [ length, symbolsCount, digitsCount ] ) => {
        expect( () => { generatePassword( length, symbolsCount, digitsCount ) } ).toThrow();
    } )
} )

test( 'throws error for 0 as length parameter', () => {
    expect( () => { generatePassword( 0, 0, 0 ) } ).toThrow();
} )

test( 'throws error for fractional parameters', () => {
    const useCases = [
        [ 1.5, 2, 2 ],
        [ 8, 1.5, 2 ],
        [ 8, 2, 1.5 ]
    ];

    useCases.forEach( ( [ length, symbolsCount, digitsCount ] ) => {
        expect( () => { generatePassword( length, symbolsCount, digitsCount ) } ).toThrow();
    } )
} )

test( 'throws error for 0 as length parameter', () => {
    expect( () => { generatePassword( 0, 0, 0 ) } ).toThrow();
} )

test( 'throws error for impossible configurations', () => {
    const useCases = [
        [ 4, 10, 0 ],
        [ 4, 0, 10 ],
        [ 4, 3, 3 ]
    ];

    useCases.forEach( ( [ length, symbolsCount, digitsCount ] ) => {
        expect( () => { generatePassword( length, symbolsCount, digitsCount ) } ).toThrow();
    } )
} )

test( 'length of password is correct', () => {
    const useCases = [
        [ 10, 3, 3, 10 ],
        [ 10, 0, 0, 10 ],
    ];

    useCases.forEach( useCase => { 
        const [ length, symbolsCount, digitsCount, expected ] = useCase;
        const password = generatePassword( length, symbolsCount, digitsCount );
        expect( password.length ).toBe( expected );
    } )
} )

// generateMultiplePasswords
// - correct number of passwords generated
test( 'number of generated passwords is correct', () => {
    const count = 3;
    const passwords = generateMultiplePasswords(count, 10, 3, 3);
    expect(Array.isArray(passwords)).toBe(true);
    expect(passwords.length).toBe(count);
} );
