const Nightmare = require('nightmare');


/*
    let url = "https://www.google.com/?q=web+scraping";
    let dataMap = {

        // Will get the html content of a selector
        "resultTitle": ".r a",

        // Will get the value from an attribute
        "resultURL": {
            "selector": ".r a",
            "attribute": "href"
        }

    };

    const webScraper = require('webscraper');

    webScraper(url, dataMap, function (error, response) {
        console.log(response);
    });
*/

function webScraper(url, dataMap, callback) {

    let browser = Nightmare();
    let finaLJSON = {};

    function doScraping() {

    }

}

module.exports = webScraper;



// nightmare
//     .goto('https://store.playstation.com/#!/en-us/games/sniper-elite-4-deluxe-edition/cid=UP4363-CUSA04220_00-SNIPERELITE4DDPO')
//     .wait('.buyPrice .price')
//     .evaluate(function () {
//         return document.querySelector('.buyPrice .price').innerHTML;
//     })
//     .end()
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.error('Search failed:', error);
//     });