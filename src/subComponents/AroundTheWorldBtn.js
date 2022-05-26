import React from 'react';
import './AroundTheWorld.css'
import { NavLink } from 'react-router-dom';
const AroundTheWorldBtn = (props) => {
    return (
        <NavLink className='world' to={props.to}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.text}
        </NavLink>
    );
};

export default AroundTheWorldBtn;