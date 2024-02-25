import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Brews from './pages/Brews'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />}/> 
        <Route path="/brews" element={<Brews/>}/> 
        <Route path="/sign-in" element={<SignIn/>}/> 
        <Route path="/sign-up" element={<SignUp />}/> 
      </Routes>
    
    </BrowserRouter>
  )
}
