import React from 'react';

class UserTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    render() {
        return (
            <div className="col-8 ml-auto">
                <table className="table table-striped" style={{textAlign: "center"}}>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Индекс</th>
                            <th scope="col">Аватар</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.usersList.map(({avatarUrl, id, name}) => {
                            return (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{id}</td>   
                                    <td>{!avatarUrl ? 
                                        (<div className="input-group mb-3" style={{width: '300px', textAlign: 'start', margin: '0 auto'}}>
                                            <div className="custom-file">
                                                <input 
                                                    type="file" 
                                                    name='avatarUrl' 
                                                    className="custom-file-input" 
                                                    id="avatar-upload"
                                                    onChange={(e) => this.props.selectAvatar(e.target.files[0], id)}
                                                />
                                                <label className="custom-file-label" htmlFor="avatar-upload">выберите файл</label>
                                            </div>
                                        </div>) :
                                        (<div style={{
                                            width: '70px', 
                                            height: '50px', 
                                            background: `url(${avatarUrl}) 50% 50% no-repeat`, 
                                            backgroundSize: 'cover', 
                                            margin: '0 auto'
                                        }}> 
                                        </div>)

                                    }</td>   
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
        )
    }
}

export default UserTable;