// Use the module name instead of lib
const { API, DEVICES } = require('./lib');

// Optionally use a key
let api = new API('');


// Or login
api.login('<email>', '<password>')
    .then((response) => {
        console.log(response);
        api.test('http://example.com', 'us', DEVICES.ANDROID)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('Error occurred', error);
            });

        api.compareToPreview('http://example.com', 'http;//exmaple.com', 'us', DEVICES.ANDROID)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('Error occurred', error);
            });

   });

