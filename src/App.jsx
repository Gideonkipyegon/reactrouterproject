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

function App() {
    // const [count, setCount] = useState(0)

    return (
      <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/Home" element={<Home />} /> 
          <Route path="/About"element={<About />} /> 
          <Route path="/Location" element={<Location />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    
     </div>
    );
}
export default App;