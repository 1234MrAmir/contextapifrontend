import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Index from './Components/Index';
import Navbar from './Components/Navbar';
import Notestate from './Context/Notestate';

function App() {
  return (
    <>
    <Notestate>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Index />} />
        </Routes>
      </BrowserRouter>
      </Notestate>
    </>
  );
}

export default App;
