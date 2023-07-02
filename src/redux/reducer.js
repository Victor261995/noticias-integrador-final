import { ADD_SAVED_NOTICIA, REMOVE_SAVED_NOTICIA } from "./actions";

const initialState = {
  savedNoticias: JSON.parse(localStorage.getItem("savedNoticias"))||[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SAVED_NOTICIA:
      const newSavedNoticias = [...state.savedNoticias, action.payload];
      localStorage.setItem("savedNoticias", JSON.stringify(newSavedNoticias));
      return {
        ...state,
        savedNoticias: newSavedNoticias,
      };

    case REMOVE_SAVED_NOTICIA:
      const updatedSavedNoticias = state.savedNoticias.filter(
        (noticia) => noticia.id !== action.payload
      );
      localStorage.setItem("savedNoticias", JSON.stringify(updatedSavedNoticias));
      return {
        ...state,
        savedNoticias: updatedSavedNoticias,
      };

    default:
      return state;
  }
};

export default reducer;