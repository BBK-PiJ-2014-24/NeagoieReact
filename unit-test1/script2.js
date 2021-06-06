const fetch = require('node-fetch');

function getPeoplePromise(fetch){
    return fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data => {
        return {
            count: data.count,
            results: data.results,
        }
    })
}


async function getPeopleAsync(fetch){
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json();
    return  {
            count: data.count,
            results: data.results,
           };
}

// getPeopleAsync(fetch);

module.exports = {getPeopleAsync, getPeoplePromise};