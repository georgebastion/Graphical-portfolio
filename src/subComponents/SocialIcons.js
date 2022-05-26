import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, WhatsApp } from '../components/AllSvgs'
import {darkTheme} from '../components/Theme'
import { motion } from 'framer-motion'


const YouTube =styled.div``

const Icons = styled.div`
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const Line = styled(motion.div)`
position:relative;
left:.6rem;
width: 2px;
height: 4rem;
background-color: black;
`  

const SocialIcons = (props) => {
    return (
        <Icons>
            
            
            <motion.div initial={{transform:'scale(0)'}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1.5,delay:1.2}}>
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://instagram.com/georgiebastion"}}>
                    <WhatsApp width={25} height={25}  />
                </NavLink>
            </motion.div>
            
            <motion.div initial={{transform:'scale(0)'}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1.5,delay:1}}>
                <NavLink target="_blank"   to={{pathname:"https://github.com/georgebastion"}}>
                    <Github width={25} height={25} fill='white' />
                </NavLink>
            </motion.div>
            <motion.div initial={{transform:'scale(0)'}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1.5,delay:1.4}}>
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://web.facebook.com/georgiebastion/"}}>
                    <Facebook width={25} height={25} />
                </NavLink>
            </motion.div>
            
            <motion.div initial={{transform:'scale(0)'}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1.5,delay:1.6}}>
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://github.com/georgebastion"}}>
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  } />
                </NavLink>
            </motion.div>
            <Line 
            initial={{height:0}}
            animate={{height: '4rem'}}
            transition={{type:'spring', duration:1, delay:0.8}}/>
            

        </Icons>
    );
};

export default SocialIcons;