const { APINetworking, ENDPOINTS } = require('./networking');

class AffiliTestAPI {
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

    /**
     * 
     * @param {Object} params - Parameters for appInfo
     * @param {string} params.country - The app's country
     * @param {string} params.url - The app's app store URL
     * @param {string} params.identifier - The app's package/id
     */
    appInfo(params) {
        const { country, url, identifier } = params;
        if (!url && !identifier) {
            throw new Error('Missing url or package as an arugment to appInfo');
        }

        let data = {
            country
        }

        if (url) data['url'] = url;
        // AffiliTest uses package as the identifier
        if (identifier) data['package'] = identifier;

        return this.networking.get(ENDPOINTS.APPINFO, data);
    }

    callsLeft() {
        return this.networking.get(ENDPOINTS.CALLS_LEFT)
    }
}

module.exports = AffiliTestAPI;