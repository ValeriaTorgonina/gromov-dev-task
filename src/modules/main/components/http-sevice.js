
class _HttpService {
    request (url, options) {     
        return fetch(url, options)
        .then(response => {
            return response.ok ? response.json() : response.status
        })
    }

    get (url, options) {
        return this.request(url, this._assignMethod('GET', options))
    }

    post (url, body, options) {
        return this.request(url, this._assignMethod(
            'POST', 
            this._assignBodyToOptions(body, options)
        ))
    }

    put (url, body, options) {
        return this.request(url, this._assignMethod(
            'PUT', 
            this._assignBodyToOptions(body, options)
        ))
    }
    
    _assignMethod (method, options) {
        const _options = options || {};
        return Object.assign(_options, {method})
        
    }

    _assignBodyToOptions (body, options) {
        const _options = options || {};
        if(body) {
            _options.body = body
        }

        return _options
    }
}

export const HttpService = new _HttpService()
