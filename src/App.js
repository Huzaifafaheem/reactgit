
import './App.css';
import About from './component/About';
import Contact from './component/contact';
import Link from './component/link';
import { Routes, Route, } from "react-router-dom"

function App() {
  return (
    <>
    <Link/>
    
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
