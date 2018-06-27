const { AffiliTestAPI } = require('../lib');

// If you have an API key then pass it to the constructor
let affilitest = new AffiliTestAPI();


// If you don't have an API key then call AffilITestAPI.login -
// as per the example in testing.js

// Google's Play Store
affilitest.appInfo({
    country: 'us',
    identifier: 'com.whatsapp'
}).then((resp) => {
    console.log(resp);
});

// Apple's App Store
affilitest.appInfo({
    country: 'us',
    identifier: '1261357853'
}).then((resp) => {
    console.log(resp);
});