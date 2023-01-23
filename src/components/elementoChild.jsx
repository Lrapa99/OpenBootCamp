import React, { useRef } from "react";

const ElementoChild = ({
  //Recibimos las props que nos envia el contenedor padre
  propsStyle,
  onContainer,
  offContainer,
  doubleClickOnContainer,
  text,
}) => {
  const textContainerRef = useRef("");

  return (
    <div
      //Agregamos los metodos que ejecutaran las funciones que recibimos del padre y asignamos los estilos que se encuentran en el estado
      onMouseOver={onContainer}
      onMouseOut={offContainer}
      onDoubleClick={doubleClickOnContainer}
      style={{
        ...propsStyle,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      ref={textContainerRef}
    >
      {text}
    </div>
  );
};

export default ElementoChild;
