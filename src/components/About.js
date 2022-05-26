import React from 'react';
import styled from 'styled-components';
import Background from './Background';
import BigTitle from '../subComponents/BigTitle'
import Me from '../assets/Images/KKxRmZLsoaeaqft.png'
import { keyframes } from 'styled-components';

const MainContainer=styled.div`
position:relative;
width:100vw;
height:100vh;
overflow:hidden;
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Roboto', sans-serif;
 
  @media (max-width:800px){
        width:70vw;
        left:2rem;
        height:30vh;
        z-index:3;
        border:none;
        border-radius:30px;
        background: rgba(8, 8, 8, 0.459);
    }
    @media (max-width:450px){
        left:1rem;
        height:35vh;


    }
    

`
const float = keyframes`
0% { transform: translateX(-10px) }
50% { transform: translateX(15px) translateY(15px) }
100% { transform: translateX(-10px) }

`
const Mymy = styled.div`
bottom:0;




.pic{
    
    position: absolute;
    bottom: 0;
    right: 0;
    
    width: calc(35% + 5vw);
    height: auto;
    animation: ${float} 4s ease infinite;

    @media (max-width:800px){
        width:70%;


    }
    @media (max-width:450px){
        width:90%;


    }
    
}


`



const About = () => {
    return (
        <MainContainer>
            <Background />
            <Main>
                    I'm a full-stack developer located in Nairobi, Kenya. I love to design and develop creative eye-catching websites that entice your target audience.
                    <br /> <br/>
                    Currently, I'm an independent freelancer. 
                    <br/> <br/>
                    I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
                    
            </Main>
            <Mymy><img className='pic' src={Me} alt=''/></Mymy>
            
            
            <BigTitle text="ABOUT" top="10%" left="5%" />


        </MainContainer>
    );
};

export default About;