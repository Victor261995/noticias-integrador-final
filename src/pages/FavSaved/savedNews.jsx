import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia } from "../../redux/actions";
import { Savedcontainer } from "./SavedStyled";

const SavedNews = () => {
  const savedNoticias = useSelector((state) => state.savedNoticias) || [];
  const dispatch = useDispatch();

  const handleRemoveNoticia = (id) => {
    dispatch(removeSavedNoticia(id));
  };

  return (
    <Savedcontainer>
    <div>
      <h1>Noticias guardadas</h1>
      {savedNoticias.length > 0 ? (
        savedNoticias.map((noticia) => (
          <div key={noticia.id}>
            <h2>{noticia.title}</h2>
            <p>{noticia.content}</p>
            <button onClick={() => handleRemoveNoticia(noticia.id)}>
              Borrar noticia
            </button>
          </div>
        ))
      ) : (
        <p>No hay noticias guardadas.</p>
      )}
      
    </div>
    </Savedcontainer>
  );
};

export default SavedNews;