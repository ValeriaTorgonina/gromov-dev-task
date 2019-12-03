import React from 'react';
import UserForm from './components/form';
import UserTable from './components/table';

class UserWidget extends React.Component {

    render() {
        return (
            <div className="container mt-5 px-0">
                <div className="row">
                    <UserForm/>
                    <UserTable/>
                </div>
            </div>
        )
    }
}

export default UserWidget

