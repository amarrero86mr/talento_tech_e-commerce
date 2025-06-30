
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/navbar'
import Productos from './pages/products'
import Home from './pages/home'
import Login from './pages/login'
import Footer from './components/footer'
import Carrito from './pages/cart'
import { Contact } from './pages/contact'

function App() {



  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            {/* <Route path="/productos/:id" element={<ProductoDetalle />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      <Footer />
      </Router>

    </>

  )
}

export default App
