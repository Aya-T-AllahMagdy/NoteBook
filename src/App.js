import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import {Routes ,Route} from "react-router-dom"
import Home from './page/home';
import Login from './page/login/login';
import SignUp from './page/signUp/signUp';
import { UserAuthContextProvider } from './context/userContext';


function App() {
  
  const [search ,setSearch]=useState('')
  const [darkMode , setDarkMode] =useState(false)
 
  return (
    <Container  className={` App ${darkMode && 'dark-mode '}`}>
      {/* <UserAuthContextProvider> */}
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      {/* </UserAuthContextProvider> */}
    </Container>
  );
}

export default App;
