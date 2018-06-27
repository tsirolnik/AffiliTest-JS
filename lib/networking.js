const request = require('request').defaults({ jar: true });

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

    get(url, queryData) {
        if (queryData && typeof queryData === 'object') {
            url = url + '?' + this.serialize(queryData);
        }
        return this.request('get', url);
    }

    post(url, formData) {
        return this.request('post', url, formData);
    }

    serialize(obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }
}

let siteEndpoint = 'https://affilitest.com/';
const ENDPOINTS = {
    LOGIN: siteEndpoint + 'user/login',
    LOGOUT: siteEndpoint + 'user/logout',
    TEST: siteEndpoint + 'api/v1/test',
    COMPARE: siteEndpoint + 'api/v1/compareToPreview',
    APPINFO: siteEndpoint + 'api/v1/appInfo',
    CALLS_LEFT: siteEndpoint + 'api/v1/callsLeft',
}

module.exports = {
    APINetworking,
    ENDPOINTS
};