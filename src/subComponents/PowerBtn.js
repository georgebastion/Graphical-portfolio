//Home Button

import React from 'react';
import styled from 'styled-components';
import { PowerBtn } from '../components/AllSvgs';
import {NavLink} from 'react-router-dom'

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: ${(props)=>props.theme.body};
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(245, 135, 245, 0.863);
  box-shadow: 0 0 8px 6px rgba(17, 35, 134, 0.2);
}
&>*:first-child{
    text-decoration: none;
    color: inherit;
}

`
const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <PowerBtn width={30} height={30} fill='currentColor' />
            </NavLink>
            
        </Power>
    );
};

export default PowerButton;