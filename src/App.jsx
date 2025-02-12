import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from "./components/Navbar"
import Banner from './components/Banner'
import Home from "./components/Home"
import Footer from './components/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <Banner />
        <Routes>
        <Route path='/' element={<Home />}  ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App;
