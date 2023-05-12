import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia } from "../../redux/actions";
import { Savedcontainer } from "./SavedStyled";
import { Content, Title, TitleNews } from "../../components/common/PagesStyles";
import { StyledButton2 } from "../../components/common/Button";

const SavedNews = () => {
  const savedNoticias = useSelector((state) => state.savedNoticias) || [];
  const dispatch = useDispatch();

  const handleRemoveNoticia = (id) => {
    dispatch(removeSavedNoticia(id));
  };

  return (
    <Savedcontainer>
    <div>
      <Title>Noticias guardadas</Title>
      {savedNoticias.length > 0 ? (
        savedNoticias.map((noticia) => (
          <div key={noticia.id}>
            <TitleNews>{noticia.title}</TitleNews>
            <Content>{noticia.content}</Content>
            <StyledButton2 onClick={() => handleRemoveNoticia(noticia.id)}>
              Borrar noticia
            </StyledButton2>
          </div>
        ))
      ) : (
        <Content>No hay noticias guardadas.</Content>
      )}
      
    </div>
    </Savedcontainer>
  );
};

export default SavedNews;