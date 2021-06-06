const fetch = require('node-fetch');
const swapi  = require('./script2');

describe('Test SW API', () => {
    it('Test Async', ()=> {
        expect.assertions(1);// verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.
        // use return to confirm test is done at end of fetch
        return swapi.getPeopleAsync(fetch).then( data => {
              expect(data.count).toEqual(82)   
            })
    })
    it('Test Async', ()=> {
        expect.assertions(2);// verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.
        return swapi.getPeoplePromise(fetch).then( data => {
                expect(data.count).toEqual(82)   
                expect(data.results.length).toBeGreaterThan(4)
            })
    })


    // 2 promises ... 1) res and 2) data
    it('Test Mock Fetch', () => {
        const mockFetch = jest.fn()
                              .mockReturnValue(Promise.resolve({
                                  json: () => Promise.resolve({
                                      count: 87,
                                      results: [1,2,3,4,5,6,7,8]
                                  })
                              }))
        expect.assertions(4)
        return swapi.getPeoplePromise(mockFetch).then( data => {
                expect(mockFetch.mock.calls.length).toBe(1);  
                expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/');
                expect(data.count).toEqual(87)   
                expect(data.results.length).toBeGreaterThan(4)
            })
    })
})