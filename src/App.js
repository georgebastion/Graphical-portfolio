import React from 'react';
import './App.css';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Theme';
import { darkTheme } from './components/Theme';
import {Route, Routes} from 'react-router-dom'

//Componets
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import ProjectsPage from './components/ProjectsPage'
import Contact from './components/Contact'
import PowerButton from './subComponents/PowerBtn';
import LogoComponent from './subComponents/LogoComponent';
import SocialIcons from './subComponents/SocialIcons';


function App() {
  return <>

  <GlobalStyle />
  <LogoComponent />
  <PowerButton />
  <SocialIcons />
  
  <ThemeProvider theme={lightTheme}>
    <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/skills' element={<Skills/>}/>
          <Route exact path='/projects' element={<ProjectsPage/>}/>
          <Route exact path='/contact' element={<Contact/>} />
        
    </Routes>
 
  
  
  </ThemeProvider>
  </>
}

export default App;
