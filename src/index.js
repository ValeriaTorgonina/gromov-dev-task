import React from 'react';
import ReactDOM from 'react-dom';
import {fonts} from './fonts/index';

class App extends React.Component {
    render () {
       return 'helloWorld'
    }
}

ReactDOM.render(
    <App style={fonts}></App>,
    document.getElementById('root')
);

