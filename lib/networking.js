const request = require('request');

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
            if (formData) this.headers['form'] = formData;
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
        this.request('get', url);
    }

    post(url, formData) {
        this.request('post', url, formData);
    }
}

APINetworking.ENDPOINTS = {
    __MAIN: 'https://affilitest.com/',
    LOGIN: this.__MAIN + 'user/login',
    LOGOUT: this.__MAIN + 'user/logout',
    TEST: this.__MAIN + 'api/v1/test',
    COMPARE: this.__MAIN + 'api/v1/compareToPreview',
    APPINFO: this.__MAIN + 'api/v1/appInfo',
    CALLS_LEFT: this.__MAIN + 'api/v1/callsLeft',
}

module.exports = APINetworking;