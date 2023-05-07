import React from 'react'
import noticias from '../../components/Noticias/noticias' ;
import{Title,Content} from '../../components/common/PagesStyles'
import Button from '../../components/common/Button';
import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia ,addSavedNoticia} from "../../redux/actions";
import Divider from '../../components/common/Divider';
import { SectionContainer } from '../../components/common/SectionStyled';


const Cultura = () => {
 
    const savedNoticias = useSelector((state) => state.savedNoticias);
    const dispatch = useDispatch();
  
    const cultureNoticias = noticias.filter((noticia) =>
      noticia.category.includes("Cultura")
    );
  
    const handleSaveNoticia = (noticia) => {
      dispatch(addSavedNoticia(noticia));
    };
  
    const handleRemoveNoticia = (noticia) => {
      dispatch(removeSavedNoticia(noticia));
    };
  

return (
    <SectionContainer>
      <Title>cultura</Title>
      {cultureNoticias.map((noticia) => (
        <div key={noticia.id}>
          <h3>{noticia.title}</h3>
          <Content>{noticia.content}</Content>
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


export default Cultura