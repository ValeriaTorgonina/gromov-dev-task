import {HttpService} from './http-sevice'

class _UserService {
    api = 'https://test.gromov.dev'

    async getUsers() {
        return await HttpService.get(`${this.api}/rest/users`)
    }

    async createUser(name) {
        const userData = JSON.stringify({name});
        return await HttpService.post(`${this.api}/rest/user`, userData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    async addAvatar() {

    }
}

export const UserService = new _UserService()
window.UserService = UserService;
