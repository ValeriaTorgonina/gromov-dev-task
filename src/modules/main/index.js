import React from 'react';
import UserForm from './components/form';
import UserTable from './components/table';
import {UserService} from './components/user-service';
import './style.css';

class UserWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: false
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
            const { users } = this.state;
            const i = users.findIndex(user => user.id === id);
            users.splice(i, 1, {...users[i], isLoading: true});
            this.setState({users});

            let fb = new FormData();
            fb.append('file', file);
            fb.append('userId', id);
            const update = await UserService.addAvatar(fb, id);

            users.splice(i, 1, update)
            this.setState({users})
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
                        selectAvatar={(file, id) => this.addAvatar(file, id)}
                        isLoading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}

export default UserWidget

