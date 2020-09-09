import React from 'react';
import './Buttons.css';

const Buttons = props => {
    return (
        <div className='btns-box'>
            {props.numArr.map(num => {
                return <button key={num} onClick={() => props.addValue(num)}>{num}</button>
            })}
            <button onClick={props.deleteLastValue}>Delete</button>
            <button onClick={() => props.addValue(0)}>0</button>
            <button onClick={props.enter}>E</button>
        </div>
    );
};

export default Buttons;