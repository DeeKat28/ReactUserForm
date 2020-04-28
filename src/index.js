import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';

const App = () => {
    return (
        <div>
            <MainApp />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));