import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../subComponents/Button';
import AroundTheWorldBtn from '../subComponents/AroundTheWorldBtn';
import { YinYang } from './AllSvgs';
import { keyframes } from 'styled-components';
import Background from './Background';
import Intro from './Intro';
const MainContainer=styled.div`
background-color:${props=>props.theme.body};
width:100vw;
height:100vh;
overflow:hidden;
position:relative;

h2,h3,h4,h5,h6{
    font-family: 'Roboto', sans-serif;
    font-weight:500;  
}

`
const rotate = keyframes`
from {
    transform:rotate(0);
}
to {
    transform:rotate(360deg);
}
`

const Center = styled.button`
position:absolute;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
left:${props=>props.click ? '92%' : '50%'};
top:${props=>props.click ? '85%' : '50%'};
transform:translate(-50%,-50%);
background-color:transparent;
border:none;
outline:none;
transition: all 3s ease;
z-index:3;
@media (max-width:500px){
    left:${props=>props.click ? '90%' : '50%'};
    top:${props=>props.click ? '55%' : '50%'};
    &>:first-child{
        width:${props=>props.click ? '40px' : '100px'};
        height:${props=>props.click ? '40px' : '100px'};

}
  
    }

&>:first-child{
    animation:${rotate} infinite 2s linear;
}

&>:last-child{
    display: ${props=>props.click ? 'none' : 'inline-block'};
    padding:1rem;
    color:white;
}


`
const Container = styled.div`
padding: 2rem;
`
const BottomBar=styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content:space-evenly;
z-index:1;
@media (max-width:500px){
    bottom:4rem;
}
`
const Btn= styled(motion.div)`
display:flex;
z-index:1;
text-decoration:none;
color:${props=>props.click ? props.theme.body : props.theme.text};

`
const Skills= styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:1;
`
const Contact = styled(motion.div)`
color:${props=>props.click ? props.theme.body : props.theme.text};
position: absolute;
left:1rem + 2vw;
text-decoration:none;
z-index: 3;
@media (max-width:500px){

        left: .4rem;

    }

`
const Work = styled.div`
color:${props=>props.click ? props.theme.body : props.theme.text};
position: absolute;
left:calc(2rem + 2vw);
top: 50%;
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration:none;
z-index: 3;

`
const Home = (props) => {
    const [click, setClick]=useState(false);
    const handleClick = () => setClick(!click);
    return (
        <MainContainer>
            <Background />
            <Container>      
                
            <Contact  
                    initial={{
                        y:-200,
                        transition:{type:'spring', duration:1.5,delay:1}
                    }}
                    animate={{
                        y:0,
                        transition:{type:'spring', duration:1.5,delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                        <AroundTheWorldBtn text='Contact Me' to='/contact' color='#f4a803'/>
            </Contact>
                <Center click={click}>
                    <YinYang onClick={()=>handleClick()} width={click ? 120:200} heigh={click?120:200} fill='white'/>
                    <span>Click me</span>
                </Center>
                <Work  
                    initial={{
                        y:-200,
                        transition:{type:'spring', duration:1.5,delay:1}
                    }}
                    animate={{
                        y:0,
                        transition:{type:'spring', duration:1.5,delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                        <AroundTheWorldBtn text='Projects' to='/projects' />
                </Work>
            <BottomBar>
                    <Btn 
                        initial={{
                            y:200,
                            transition:{type:'spring', duration:1.5,delay:1}
                        }}
                        animate={{
                            y:0,
                            transition:{type:'spring', duration:1.5,delay:0}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                            <Button text='About' to='/about'/>
                    </Btn>
                    <Btn 
                        initial={{
                            y:200,
                            transition:{type:'spring', duration:1.5,delay:1}
                        }}
                        animate={{
                            y:0,
                            transition:{type:'spring', duration:1.5,delay:0}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                            <Button text='Skills' to='/skills'/>
                    </Btn>
                   
                    
                </BottomBar>
            </Container>
            {click ? <Intro click={click} />: null}
        </MainContainer>
    );
};

export default Home;