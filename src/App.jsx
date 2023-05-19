import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Location from './pages/Location'
import Contact from './pages/Contact'
import About from './pages/About'
// import NotFound from './pages/NotFound'

function App() {
    // const [count, setCount] = useState(0)

    return ( 
    <div >
        <BrowserRouter >
        <Header />
        <Routes >
        <Route path = "/" element = { < Home /> }/>  
        <Route path = "/about" element = { < About /> }/>  
        <Route path = "/location" element = { <Location />}/>  
        <Route path = "/contact" element = { <Contact />}/> 
        {/* <Route path="*" element={<NotFound />}/>  */}
        </Routes> 
        <Footer />
        </BrowserRouter>

    </div>
    );
}
export default App;