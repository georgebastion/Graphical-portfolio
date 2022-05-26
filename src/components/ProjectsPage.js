import React,  { useEffect, useRef } from 'react';
import Background from './Background'
import styled from 'styled-components'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion';
import {YinYang} from './AllSvgs';
import Card from '../subComponents/Card';
import {Work} from '../assets/data/WorkData'

const Box =styled.div`

width:100wh;
position:relative;
overflow:hidden;
height:500vh;
display: flex;
align-items: center;

`
const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`

const Container=styled.div``
const ProjectsPage = () => {
    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {
        let element = ref.current;
       
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
      
         
          return (yinyang.current.style.transform =
            'rotate(' + -window.pageYOffset + 'deg)')
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])
    return (
        <>
        <Box>
        <Background />
        
        <Main ref={ref}   initial='hidden' animate='show'  >
                    {
                        Work.map( d => 
                        <Card key={d.id} data={d} />
                        )
                    }
                </Main>
                <Rotate ref={yinyang}>
                    <YinYang width={80} height={80} fill='white' />
                </Rotate>
        <BigTitle text="WORK" top='10%' right="20%" style={{color:'white'}} />


        </Box>

        
        </>

    );
};

export default ProjectsPage;
