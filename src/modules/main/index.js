import React from 'react';
import UserForm from './components/form';
import UserTable from './components/table';

import {UserService} from './components/user-service';

class UserWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    addUser(user) {
        this.setState({users: [user, ...this.state.users]})
    }

    async getUsers () {
        try {
            let result = await UserService.getUsers();
            this.setState({users: result.reverse()})
        }catch(err) {
            console.err(err)
        }
    }

    async addAvatar(file, id) {
        try {
            let fb = new FormData();
            fb.append('file', file);
            fb.append('userId', id);
            const result = await UserService.addAvatar(fb, id);
            const newUsers = this.state.users;
            const deleteIndex = newUsers.findIndex(user => user.id === id)
            newUsers.splice(deleteIndex, 1, result)
            this.setState({users: newUsers})
        }catch(err) {
            console.log(err)
        }
    }

    componentDidMount () {
        this.getUsers()
    }

    render() {
        return (
            <div className="container mt-5 px-0">
                <div className="row">
                    <UserForm createUser={(user) => this.addUser(user)}/>
                    <UserTable 
                        usersList={this.state.users}
                        selectAvatar={(url, id) => this.addAvatar(url, id)}
                    />
                </div>
            </div>
        )
    }
}

export default UserWidget

