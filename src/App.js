import React from "react";
import Navbar from "./components/navbar/Navbar";
import Routes from "./Routes/Routes";
import Newscategories from "./components/categories/newsCategories";
import { BrowserRouter} from "react-router-dom"
import DividerNav from "./components/navbar/DividerNav";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
   
    <Navbar/>
    <DividerNav/>
    <Newscategories/>  
    <Routes/>

   <Footer/>



    </BrowserRouter>
  );
};
export default App;