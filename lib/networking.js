const request = require('request').defaults({jar: true});

class APINetworking {
    constructor(key = undefined) {
        this.key = key;
    }

    get headers() {
        if (!this.key) return {}
        return {
            'Authorization': 'AT-API ' + this.key
        };
    }

    request(method, url, formData) {
        return new Promise((resolve, reject) => {
            let options = {
                headers: this.headers
            };
            if (formData) options['form'] = formData;
            request[method](url, options, function (error, response, body) {
                if (error) return reject(error);
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(e);
                }

            });
        })
    }

    get(url, data) {
        return this.request('get', url);
    }

    post(url, formData) {
        return this.request('post', url, formData);
    }
}

let site_endpoint =  'https://affilitest.com/';
const ENDPOINTS = {
    LOGIN: site_endpoint + 'user/login',
    LOGOUT: site_endpoint + 'user/logout',
    TEST: site_endpoint + 'api/v1/test',
    COMPARE: site_endpoint + 'api/v1/compareToPreview',
    APPINFO: site_endpoint + 'api/v1/appInfo',
    CALLS_LEFT: site_endpoint + 'api/v1/callsLeft',
}

module.exports = {
    APINetworking,
    ENDPOINTS
};