import React from 'react';
import noticias from '../../components/Noticias/noticias';
import Button from '../../components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { removeSavedNoticia ,addSavedNoticia} from "../../redux/actions";
import Divider from '../../components/common/Divider';
import { SectionContainer} from '../../components/common/SectionStyled';
import { Title,Content } from '../../components/common/PagesStyles';

const Tecnologia = () => {
  const savedNoticias = useSelector((state) => state.savedNoticias);
  const dispatch = useDispatch();

  const TechNoticias = noticias.filter((noticia) =>
    noticia.category.includes("Tecnologia")
  );

  const handleSaveNoticia = (noticia) => {
    dispatch(addSavedNoticia(noticia));
  };

  const handleRemoveNoticia = (noticia) => {
    dispatch(removeSavedNoticia(noticia));
  };


  return (
    <SectionContainer>
      <Title> Ultimas novedades Tech </Title>
      {TechNoticias.map((noticia) => (
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

export default Tecnologia;