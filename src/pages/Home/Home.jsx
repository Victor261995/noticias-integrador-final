import React from 'react' 
import noticias from "../../components/Noticias/noticias";
import { SectionContainer } from "../../components/common/SectionStyled";
import Button from '../../components/common/Button';

import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia ,addSavedNoticia} from "../../redux/actions";
import Divider from '../../components/common/Divider';
const Home = () => {

  const savedNoticias = useSelector((state) => state.savedNoticias);
  const dispatch = useDispatch();

  const homeNoticias = noticias.filter((noticia) =>
    noticia.category.includes("home")
  );

  const handleSaveNoticia = (noticia) => {
    dispatch(addSavedNoticia(noticia));
  };

  const handleRemoveNoticia = (noticia) => {
    dispatch(removeSavedNoticia(noticia));
  };


  return (
    
    <SectionContainer>
      <h1>Noticias Pirinola - Últimas noticias</h1>

      <h2>Noticias destacadas</h2>
      {homeNoticias.map((noticia) => (
        <div  key={noticia.id}>
          <h3>{noticia.title}</h3>
          <p>{noticia.content}</p>
          {savedNoticias.some((savedNoticia) => savedNoticia.id === noticia.id) ? (
            <Button onClick={() => handleRemoveNoticia(noticia)}>
              Eliminar de favoritos
            </Button>
          ) : (
            <Button onClick={() => handleSaveNoticia(noticia)}>
              Guardar noticia en favoritos
            </Button>
            
          )}
         <Divider/>

        </div>
        
       
      ))}
     </SectionContainer>
  );
};

export default Home;