import React from 'react';
import styled from 'styled-components';
import RoundBar from '../subComponents/RoundBar';
import SkillBar from '../subComponents/SkillBar';
import SkillBarr from '../subComponents/SkillsBar2';
import Background from './Background'
import BigTitlte from '../subComponents/BigTitle';

const MainContainer =styled.div`
width: 100vw;
height:100vh;
overflow:hidden;
position:relative;

@media (max-width:500px){
  
height: 150vh;
}

`
const Main = styled.div`
border: 2px solid ${props => props.theme.body};
color: ${props=>props.theme.body};
background-color: transparent;
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.3;
cursor: pointer;

font-family: 'Roboto', sans-serif;
display: flex;
flex-direction: column;
justify-content: space-between;
justify-content:flex-start;

&:hover{
    color: ${props => props.theme.body};
    background: rgba(8, 8, 8, 0.459);
}
@media (max-width:500px){
    width: 60vw;
height: 45vh;
}
  
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
fill:${props => props.theme.body};
margin-top:0;
margin-bottom:0;
z-index:9;

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`
const Description = styled.div`
color: ${props => props.theme.body};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: .5rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`
const Container=styled.div`
margin: 6rem 1rem 3rem 1rem;
display: flex;
gap: 2rem;
justify-content: space-around;
@media (max-width:500px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
}
`


const Skills = () => {
    return (
        <MainContainer>
             <Background/>
             <Container>
                <Main>
                    <Title>
                        Web
                    </Title>
                    <Description>
                    HTML, CSS and JavaScript are just as powerful in the right hands.
                    </Description>
                   
                    <SkillBar />
                    <Description>
                    <strong>More</strong>
                    <p>
                    Redux, Sass, Bootstrap
                    </p>
                    </Description>
                   

                </Main>
                <Main>
                    <Title>
                        Languages
                    </Title>
                    <Description>
                        Its not about what I know, but what I can do with it.
                    
                    </Description>
                    
                    <SkillBarr />
                    <Description>
                    <strong>More</strong>
                    <p>
                    Tailwind, Firebase etc.
                    </p>
                    </Description>

         

                </Main>
                <BigTitlte text="SKILLS" top='10%' right="30%" style={{color:'white'}} />

                </Container>

   
            
            

        </MainContainer>
    );
};

export default Skills;