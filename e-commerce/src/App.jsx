
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

function App() {

  const [ isAuth, setIsAuth ] = useState(null)

  if (localStorage.admin == true) { setIsAuth(true)}


  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />

            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/user" element={<User />} />
            {isAuth ? <Route path="/admin" element={<Admin />} /> : null }


          </Routes>
        </div>
        <Footer />
      </Router>

    </>

  )
}

export default App
