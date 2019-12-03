import React from 'react';
import {UserService} from './user-service'

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
    }

    async sendUser () {
        try {
            const result = await UserService.createUser(this.state.userName);
            this.props.createUser(result)
            this.setState({userName: ''})
        } catch(err) {
            console.err(err.status)
        }
    }

    render() {
        const {userName} = this.state;
        return(
            <div className="col-4">
                <div className='card p-5'>
                    <input 
                        type="text" 
                        className="form-control mb-3" 
                        placeholder="Введите имя" 
                        value={userName}
                        onChange={e => this.setState({userName: e.target.value})}
                    />
                    <button 
                        type="button" 
                        className="btn btn-secondary mx-auto" 
                        style={{display: 'block'}}
                        onClick={() => this.sendUser()}
                        
                    >
                        Отправить
                    </button>
                </div>
            </div>
        )
    }
}

export default UserForm;