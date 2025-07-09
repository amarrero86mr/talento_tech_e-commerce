
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/navbar'
import Productos from './pages/products'
import Home from './pages/home'
import Login from './pages/login'
import Footer from './components/footer'
import Carrito from './pages/cart'
import Contact from './pages/contact'
import Detail from './pages/detail'
import User from './pages/user'
import Admin from './pages/admin'
import { useState } from 'react'
import UserProvider, { useUserContext } from './components/context/user_admin_context'

function App() {

  const { isAuth} = useUserContext();  

  return (
    <>
      
      <Router>
        <div style={{ marginBottom: '8rem'}}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />

            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/user" element={<User />} />
            {/* {isAuth ? <Route path="/admin" element={<Admin />} /> : null } */}
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </div>
        <Footer />
      </Router>
      
    </>

  )
}

export default App
