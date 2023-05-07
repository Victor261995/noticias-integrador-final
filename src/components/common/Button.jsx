import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      Guardar en favoritos
    </button>
  );
};

export default Button;