import React from 'react';

class UserForm extends React.Component {
    render() {
        return(
            <div class="col-4">
                <div className='card p-5'>
                    <input type="text" className="form-control mb-3" placeholder="Введите имя" ariaLabel="Recipient's username" ariaDescribedby="button-addon2"/>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="avatar-upload"/>
                            <label className="custom-file-label" for="avatar-upload">Выберите файл</label>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary mx-auto" style={{display: 'block'}}>Отправить</button>
                </div>
            </div>
        )
    }
}

export default UserForm;