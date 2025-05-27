
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import NavBar from './components/navbar'
import Productos from './pages/products'
import Home from './pages/home'
import Login from './pages/login'
import Footer from './components/footer'

function App() {
  
  
  
  return (
    <>
      
      <Header />
      <Router>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        
      </Router>
      <Footer />
    </>
    
  )
}

export default App
