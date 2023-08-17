import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Learning from '../pages/Learning'
import Diagnostic from '../pages/Diagnostic'
import Analytics from '../pages/Analytics'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Header from '../components/Header'
import LoginNew from '../pages/LoginNew'
import FootLinks from '../components/FootLinks'
import Userdetail from '../pages/Userdetail'
// import FootLinks from '../components/FootLinks'

function router() {
  return (
    <> 
        {/* <Header/> */}
        <Routes> 
        <Route path='/'  element={<Home/>}  />
        <Route index element={<Home/>}  />
        <Route path='/learning'  element={<Learning/>}  />
        <Route path='/diagnostic'  element={<Diagnostic/>}  />
        <Route path='/analytics'  element={<Analytics/>}  />
        <Route path='/login' element={<LoginNew/>} />
         <Route path='/userdetail' element={<Userdetail/>} />
        <Route path='*'  element={<NotFound/>}  />
      
        </Routes>
         {/* <FootLinks/> */}
</>
  
  )
}

export default router;