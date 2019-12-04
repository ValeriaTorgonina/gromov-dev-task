import {HttpService} from './http-sevice'

class _UserService {
    api = 'https://test.gromov.dev'

    getUsers() {
        return HttpService.get(`${this.api}/rest/users`)
    }

    createUser(name) {
        const userData = JSON.stringify({name});
        return HttpService.post(`${this.api}/rest/user`, userData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    addAvatar(body, userId) {
        return HttpService.put(`${this.api}/rest/user/avatar/${userId}`, body)
    }
}

export const UserService = new _UserService()
window.UserService = UserService;
