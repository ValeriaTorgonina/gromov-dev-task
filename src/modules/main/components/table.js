import React from 'react';
import icon from '../../../images/card-bg.jpg';

class UserTable extends React.Component {

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
                        <tr>
                            <td>Mark</td>
                            <td>1</td>
                            <td>
                                <div 
                                    style={{
                                        width: '70px', 
                                        height: '50px', 
                                        background: `url(${icon}) 50% 50% no-repeat`, 
                                        backgroundSize: 'cover', 
                                        margin: '0 auto'
                                    }}>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>1</td>
                            <td>
                                <div className="input-group mb-3" style={{width: '300px', textAlign: 'start', margin: '0 auto'}}>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="avatar-upload"/>
                                        <label className="custom-file-label" for="avatar-upload">Выберите файл</label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>1</td>
                            <td>
                                <div className="input-group mb-3" style={{width: '300px', textAlign: 'start', margin: '0 auto'}}>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="avatar-upload"/>
                                        <label className="custom-file-label" for="avatar-upload">Выберите файл</label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
        )
    }
}

export default UserTable;