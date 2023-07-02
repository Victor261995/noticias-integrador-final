import React from 'react';
import {Routes as ReactDomRutes, Route } from 'react-router-dom';
import Politica from '../pages/Politica/Politica';
import Deportes from '../pages/Deportes/Deportes';
import Tecnologia from '../pages/Tecnologia/Tecnologia';
import Cultura from '../pages/Cultura/Cultura';
import SavedNews from '../pages/FavSaved/savedNews';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register'
import ContentNoticia from'../pages/ContentNoticia/ContentNoticia'
import Login from '../pages/Login/login';
const Routes = () => {
  return (
    <div>
    <ReactDomRutes>
       
  <Route exact path ="/" element={<Home/>}/>
 
 <Route path="/noticias/politica" element={<Politica/>} />
      <Route path="/noticias/deportes" element={<Deportes/>} />
      <Route path="/noticias/tecnologia" element={<Tecnologia/>} />
      <Route path="/noticias/cultura" element={<Cultura/>} />
      <Route path='/noticias/:id'element={<ContentNoticia/>}/>
      <Route path='/saved' element={<SavedNews/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
    </ReactDomRutes>
    
    </div>
      
  );
  
};
export default Routes;