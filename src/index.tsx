import * as React from 'react';
import * as ReactDOM from 'react-dom';

import "./main.scss";

function App(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
        </div>
    );
}

ReactDOM.render(<App heading="App" />, document.getElementById('app'));