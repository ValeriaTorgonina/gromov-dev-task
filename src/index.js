import React from 'react';
import ReactDOM from 'react-dom';
import {fonts} from './fonts/index';
import UserWidget from './modules/main';

class App extends React.Component {
    render () {
        return <UserWidget/>
    }
}

ReactDOM.render(
    <App style={fonts}></App>,
    document.getElementById('root')
);

