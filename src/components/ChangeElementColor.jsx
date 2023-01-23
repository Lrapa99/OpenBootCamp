import React, { useState } from "react";
import ElementoChild from "./elementoChild";

const ChangeElementColor = () => {
  //Estado inicial para los estilos
  const defaultStyle = { background: "#000", width: "255px", height: "255px" };

  //Invocamos useState para manejar el estado
  const [initialStyle, setInitialStyle] = useState(defaultStyle);
  const [text, setText] = useState("");

  //Creamos funcion para generar aleatoriamente un color RGB
  function randomRGB() {
    let x = Math.floor(Math.random() * 255),
      y = Math.floor(Math.random() * 255),
      z = Math.floor(Math.random() * 255),
      RGBColor = `rgb(${x},${y},${z})`;
    return RGBColor;
  }

  //Creamos funcion para cambiar el color y actualizar el estado, cuando el mouse se encuentra dentro del contenedor
  function onContainer() {
    const tempStyle = {
      ...defaultStyle,
      background: `${randomRGB()}`,
    };
    setInitialStyle(tempStyle);
    setText("onMouseOver!!👇");
  }

  //Creamos funcion para recuperar el estado por defecto del contenedor al retirar el mouse del mismo
  function offContainer() {
    setInitialStyle(defaultStyle);
    setText("onMouseOut!!☝️");
  }

  //Creamos funcion para recuperar el estado por defecto del contenedor al hacer doble click sobre el mismo
  function doubleClickOnContainer() {
    setInitialStyle(defaultStyle);
    setText("onDoubleClick!!🤘");
  }

  return (
    <ElementoChild
      //Todas estas funciones se las pasamos como props al contenedor hijo, incluyendo el estado inicial, que contiene los estilos por defecto
      propsStyle={initialStyle}
      onContainer={onContainer}
      offContainer={offContainer}
      doubleClickOnContainer={doubleClickOnContainer}
      text={text}
    />
  );
};

export default ChangeElementColor;
