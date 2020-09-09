import React from 'react';
import './DoorPass.css';
import { useSelector, useDispatch } from 'react-redux';
import Buttons from '../../components/Buttons/Buttons';

const DoorPass = () => {

    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const mainPassword = '1337';
    const accessText = 'Access Granted';
    const deniedText = 'Access Denied';

    let alertModal = null;

    const passValue = useSelector(state => state.passValue);
    const passResult = useSelector(state => state.passResult);
    const dispatch = useDispatch();

    const modifyValue = (value) => dispatch({ type: 'ADD', value });
    const deleteLastValue = () => dispatch({ type: 'DELETE' });

    const enter = () => {
        if (mainPassword === passValue) {
            dispatch({ type: 'CHECK', value: accessText });
        } else {
            dispatch({ type: 'CHECK', value: deniedText });
        }

        setTimeout(() => {
            dispatch({ type: 'CLEAR' });
        }, 1000);
    };

    switch (passResult) {
        case accessText:
            alertModal = (<div className='right-pass pass-block'>
                {passResult}
            </div>);
            break;
        case deniedText:
            alertModal = (<div className='wrong-pass pass-block'>
                {passResult}
            </div>);
            break;
        default:
            alertModal = null;
            break;
    };


    return (
        <div className='door-pass-box'>
            <div className='door-pass'>
                <input className='inp' value={passValue} readOnly type='password' />
                {alertModal}
                <Buttons numArr={numArr} addValue={modifyValue} deleteLastValue={deleteLastValue} enter={enter}/>
            </div>
        </div>
    );
};

export default DoorPass;