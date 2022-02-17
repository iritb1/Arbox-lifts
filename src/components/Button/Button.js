import React, { useState } from 'react';
import { connect } from 'react-redux';
import { lift } from '../../actions/';
import Button from '@mui/material/Button';
import './button.scss';

const Buttons = ({ value, lift, name , QueueCalls}) => {

  const [btnState , setBtnState] = useState('call');

  function changeStatus(event){
    if(btnState === "call"){
      setBtnState('wating');
      QueueCalls.enqueue(value);
      lift(event);
    }
  }

  return (
    <div className="button-container">

          
        {btnState === 'call'?
        <Button variant="contained" color="success" onClick={(e) => changeStatus(e)} name={name} >{btnState}</Button>
           :
        <Button variant="contained" color="error" onClick={(e) => changeStatus(e)} name={name}>{btnState}</Button>
        }
          
    </div>
  )
}

export default connect(null, { lift })(Buttons);
