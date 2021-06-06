const googleDB = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.come',
];

function googleSearch(search, db){

    const results = db.filter(site => site.includes(search));
    return results.length > 2 ? results.slice(0,2) : results; 

}

// console.log(googleSearch('cats'));

module.exports = googleSearch;