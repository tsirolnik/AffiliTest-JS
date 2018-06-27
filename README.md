# AffiliTest-JS
AffilITest's API implementation in JS for the Node environment.

Tested with Node 8.11.1


## Basic usage
For full usage please refer to the [examples](examples/) directory
```js
    const { AffiliTestAPI, DEVICES } = require('affilitest');

    let affilitest = new AffilITestAPI();

    affilitest.login('email', 'password');

    // Passing the offer's URL, country code and device type
    // A custom device string can be passed too
    affilitest.test('http://example.com', 'us', DEVICES.ANDROID);
```

## Methods
AffiliTestAPI Class
### Login
`AffiliTestAPI.login(email, password)`
### Logout
`AffiliTestAPI.logout`
### Test
`AffiliTestAPI.test(url, country, device)`
### Compare To Preview
`AffiliTestAPI.compareToPreview(url, previewURL, country, device)`
### App Info
`AffiliTestAPI.appInfo(params)`
 * params.country - The app's country
 * params.url - The app's app store URL (Play Store or Appstore URL)
 * params.identifier - The app's package or id (Android Package or Appstore id)
### Calls left
`AffiliTestAPI.callsLeft`