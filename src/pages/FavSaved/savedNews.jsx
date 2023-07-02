import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia } from "../../redux/actions";
import { Savedcontainer } from "./SavedStyled";
import { Content, Title, TitleNews } from "../../components/common/PagesStyles";
import { StyledButton2 } from "../../components/common/Button";
import Modal from "react-modal"
const SavedNews = () => {
  const savedNoticias = useSelector((state) => state.news.savedNoticias) || [];
  const dispatch = useDispatch();
 const [modalOpen, setModalOpen]=useState(false);
 const [selectedNoticia,setSelectedNoticia]=useState(null);



  const handleRemoveNoticia = (id) => {
    dispatch(removeSavedNoticia(id));
    const DeleteSaved=savedNoticias.filter((noticia)=>noticia.id!==id);
    localStorage.setItem("savedNoticias",JSON.stringify(DeleteSaved));
  };
 
  const openModal = (noticia) => {
    setSelectedNoticia(noticia);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNoticia(null);
    setModalOpen(false);
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