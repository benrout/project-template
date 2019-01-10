import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./index.scss";

function T(props) {
    return <div className="test">{props.text}</div>;
}

function getElement(){
    var el = document.getElementById('test-item'); 
    if (!el){
        el = document.createElement('div');
        el.id = 'test-item'; 
        document.querySelector('body').appendChild(el); 
    }
    return el; 
}

ReactDOM.render(<T text="test 2" />, getElement());