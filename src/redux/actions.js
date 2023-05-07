export const ADD_SAVED_NOTICIA = "ADD_SAVED_NOTICIA";
export const REMOVE_SAVED_NOTICIA = "REMOVE_SAVED_NOTICIA";

export const addSavedNoticia = (noticia) => {
  return {
    type: ADD_SAVED_NOTICIA,
    payload: noticia,
  };
};

export const removeSavedNoticia = (id) => {
  return {
    type: REMOVE_SAVED_NOTICIA,
    payload: id,
  };
};