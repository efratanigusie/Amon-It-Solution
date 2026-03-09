import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Solutions from "./Pages/Solutions";
import SearchBar from "./Pages/Search";
import Testimony from "./Pages/Testimony";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/solutions" element={<Solutions/>}/>
          <Route path="/search" element={<SearchBar/>}/>
          <Route path="/testimony" element={<Testimony/>}/>
        </Routes>
      </Router>
  );
}

export default App;
