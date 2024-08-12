import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App
