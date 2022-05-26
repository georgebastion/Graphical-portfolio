import React from 'react';
import Bastion from '../assets/Images/coollogo_com-71331224.png'
import styled from 'styled-components'

const MainContainer=styled.div`
position: fixed;
top: .1rem;
right:0;

display:flex;
z-index:3;
img{
    display:flex;
    height: 100px;
    width: 250px;

}
@media (max-width:550px){
    top:1rem;
    img{
        
        
    display:flex;
    height: 80px;
    width: 200px;

}
        


    }
    @media (max-width:450px){
        top:1rem;
    img{
        
        
    display:flex;
    height: 60px;
    width: 150px;

}
@media (max-width:340px){
        top:1.7rem;
    img{
        
        

    height: 50px;
    width: 125px;

}
@media (max-width:305px){
        top:1.7rem;
    img{
        
        

    height: 45px;
    width: 100px;

}

  
    }
`


const LogoComponent = () => {
    return (
        <MainContainer>
            <img src={Bastion} alt=''/>
        </MainContainer>
    );
};

export default LogoComponent;