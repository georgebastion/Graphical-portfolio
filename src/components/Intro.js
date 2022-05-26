import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Me from '../assets/Images/vIdmlcvyUeBJMtf.png'
import { keyframes } from 'styled-components';

const float = keyframes`
0% { transform: translateX(-10px) }
50% { transform: translateX(15px) translateY(15px) }
100% { transform: translateX(-10px) }

`

const Box =styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 70vw;
height:55vh;
display: flex;
z-index:9;
@media (max-width:900px){
        top:35%;
        left: 50%;
        z-index:3;
        
        height:30vh;
        background: rgba(8, 8, 8, 0.459);

    }
    @media (max-width:200px){
        width:80%;
        left: 50%;
        z-index:3;
    }
`
 
const SubBox = styled.div`
position: relative;
display: flex;


`
const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
z-index:3;

display: flex;
flex-direction: column;
white-space: nowrap;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.4rem + 1.5vw);
    font-weight:200;
    font-family: 'Roboto', sans-serif;
    white-space:normal;

}

@media (max-width:900px){
        width:60%;
        left: 20%;
        z-index:3;

    }
    @media (max-width:500px){
        width:80%;
        left: 20%;
        z-index:3;
    }

    
`
const SubBox1 = styled.div`
bottom:0;


.pic{
    
    position: absolute;
    bottom: 0;
    left: 50%;
    
    width: 35%;
    height: auto;
    animation: ${float} 4s ease infinite;

    @media (max-width:800px){
        width:50%;
        left: 30%;
        z-index:0;
    }
    @media (max-width:500px){
        width:80%;
        left: 10%;
        z-index:0;
    }
    @media (max-width:350px){
        width:100%;
        left: 0;
        z-index:0;
    }
    
}


`
const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
` 


const Intro = () => {
    return (
        <>
        <Box
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Bastion</h3>
                    <h6>I design and Code elegant and enticing websites.</h6>
                </Text>
            </SubBox>
            

        </Box>
        <SubBox1>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:1 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox1>
        </>
        
    );
};

export default Intro;