import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './SimpleForm'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import Gallery from './components/Gallery'
import FranchiseDetails from './pages/FranchiseDetails'
import AllProducts from './pages/AllProducts'

function App() {
  const [count, setCount] = useState(0)

  const url="https://script.google.com/macros/s/AKfycby0juNrq1bzCWs4AXiyiIbmTWstRzygVin8WzF-4iPJcYqcO-gdP9-iHEnu4ek8oO2l/exec"
  const secUrl="https://script.google.com/macros/s/AKfycby0juNrq1bzCWs4AXiyiIbmTWstRzygVin8WzF-4iPJcYqcO-gdP9-iHEnu4ek8oO2l/exec"
  const deployId="AKfycby0juNrq1bzCWs4AXiyiIbmTWstRzygVin8WzF-4iPJcYqcO-gdP9-iHEnu4ek8oO2l"
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutUs' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/franchise' element={<FranchiseDetails/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
