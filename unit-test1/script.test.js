const googleSearch = require('./script');

const dbMock =[
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
    'dogpile.com'
];

describe('Test GoogleSearch', ()=> {
    it('Test no Item Found', () => {
        const result = googleSearch('dummy', dbMock);
        expect(result).toEqual([]);
    })

    it('Test Undefined and null input', () => {
        let result = googleSearch(undefined, dbMock);
        expect(result).toEqual([]);
        result = googleSearch(null, dbMock);
        expect(result).toEqual([]);
    })

    it('Test One Item Found', () => {
        const result = googleSearch('dis', dbMock);
        expect(result).toEqual(['disney.com']);
    })

    it('Test Max Two Items Found', () => {
        const expectedResult = ['dog.com', 'dogpictures.com'];
        const result = googleSearch('dog', dbMock);
        expect(result).toEqual(expect.arrayContaining(expectedResult));

    })

});