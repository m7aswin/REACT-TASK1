import React from "react";
import List from "./components/List";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Services from "./components/Services";
import CareerStudies from "./components/CareerStudies";
import Gallery from "./components/Gallery";
import Career from "./components/Career";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <List />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />}/>
        <Route path="" element={<Services />}/>
        <Route path="/" element={<CareerStudies />}/>
        <Route path="/" element={<Gallery />}/>
        <Route path="/" element={<Career />}/>
        <Route path="/" element={<ContactUs />}/>
        {/* <Route path="*" element={<Error/>}/> */}
      </Routes> 
      <Footer />
    </>
  );
}

export default App;
