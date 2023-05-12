import React from 'react'
import noticias from '../../components/Noticias/noticias';

import { StyledButton, StyledButton2 } from '../../components/common/Button';
import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia ,addSavedNoticia} from "../../redux/actions";
import Divider from '../../components/common/Divider';
import { SectionContainer } from '../../components/common/SectionStyled';
import { Title,Content, TitleNews } from '../../components/common/PagesStyles';
const Politica = () => {
  
  const savedNoticias = useSelector((state) => state.savedNoticias);
  const dispatch = useDispatch();

  const PoliticNoticias = noticias.filter((noticia) =>
    noticia.category.includes("Politica")
  );

  const handleSaveNoticia = (noticia) => {
    dispatch(addSavedNoticia(noticia));
    
  };

  const handleRemoveNoticia = (noticia) => {
    dispatch(removeSavedNoticia(noticia.id));
  };

  return (
    <SectionContainer>
    <Title>Actualidad política</Title>
      {PoliticNoticias.map((noticia) => (
        <div key={noticia.id}>
          <TitleNews>{noticia.title}</TitleNews>
          <Content>{noticia.content}</Content>
          {savedNoticias.some((savedNoticia) => savedNoticia.id === noticia.id) ? (
            <StyledButton2 onClick={() => handleRemoveNoticia(noticia)}>
              Eliminar de favoritos
            </StyledButton2>
          ) : (
            <StyledButton onClick={() => handleSaveNoticia(noticia)}>
              Guardar noticia en favoritos
            </StyledButton>
          )}
          <Divider/>
        </div>
      ))}
    </SectionContainer>
  );
};

export default Politica;
