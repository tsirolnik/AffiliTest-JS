const {APINetworking, ENDPOINTS} = require('./networking');

class API {
    constructor(key) {
        this.networking = new APINetworking(key);
    }

    login(email, password) {
        return this.networking.post(ENDPOINTS.LOGIN, {
            email,
            password
        })
    }

    logout() {
        return this.networking.post(ENDPOINTS.LOGOUT)
    }

    test(url, country, device) {
        return this.networking.post(ENDPOINTS.TEST, {
            url,
            country,
            device
        })
    }

    compareToPreview(url, previewURL, country, device) {
        return this.networking.post(ENDPOINTS.COMPARE, {
            url,
            previewURL,
            country,
            device
        })
    }

    callsLeft() {
        return this.networking.get(ENDPOINTS.CALLS_LEFT)
    }
}

module.exports = API;