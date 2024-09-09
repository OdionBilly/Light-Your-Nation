import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Donate } from "./components/Donate";


function App() {
 
  return (
  <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Donate" element={<Donate/>}/>
      </Routes>
    </>
  );
}

export default App
