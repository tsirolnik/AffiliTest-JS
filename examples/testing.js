const { AffiliTestAPI, DEVICES } = require('../lib');


// If you have an API key then pass it to the constructor
let affilitest = new AffiliTestAPI();


// With Async/Await
(async () => {
    // This login call can be removed if an API key is being used
    let resp = await affilitest.login('<email>', '<password>');
    console.log(resp);
    resp = await affilitest.test('http://example.com', 'us', DEVICES.ANDROID);
    console.log(resp);
})();

// Using Promises
// This login call be removed if an API key is being used
affilitest.login('<email>', '<password>')
.then((resp) => {

    // Log the the login response to console
    console.log(resp);

    affilitest.test('http://example.com', 'us', DEVICES.ANDROID)
    .then((resp) => {
        console.log(resp);
    })
    .catch((error) => {
        console.log('Error occurred', error);
    });

    affilitest.compareToPreview('http://example.com', 'http;//exmaple.com', 'us', DEVICES.ANDROID)
    .then((resp) => {
        console.log(resp);
    })
    .catch((error) => {
        console.log('Error occurred', error);
    });
})
.catch((error) => {
    console.log('Failed logging in', error);
});
