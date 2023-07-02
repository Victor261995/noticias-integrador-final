import React from "react";
import Routes from "./Routes/Routes";
import NewsCategories from "./components/categories/newsCategories";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Modal from "react-modal";
function App() {
  const appRoot = document.getElementById("root");
  Modal.setAppElement(appRoot);


  return (
    <div className="app"> 
    <Navbar/>
    <div className="content">
    <NewsCategories/>
    <Routes/>
    </div>
    <Footer/>
    </div>
    
  );
};
export default App;