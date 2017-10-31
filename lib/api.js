const networking = require('./networking');

class API {
    constructor(key) {
        this.networking = APINetworking(key);
    }

    login(email, password) {
        return this.networking.post(networking.ENDPOINTS.LOGIN, {
            email,
            password
        })
    }

    logout() {
        return this.networking.post(networking.ENDPOINTS.LOGOUT)
    }

    test(url, country, device) {
        return this.networking.post(networking.ENDPOINTS.TEST, {
            url,
            country,
            device
        })
    }

    compareToPreview(url, previewURL, country, device) {
        return this.networking.post(networking.ENDPOINTS.COMPARE, {
            url,
            previewURL,
            country,
            device
        })
    }

    callsLeft() {
        return this.networking.get(networking.ENDPOINTS.CALLS_LEFT)
    }
}