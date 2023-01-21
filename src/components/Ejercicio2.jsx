//!Convirtiendo class component a functional component

//?Class Component

// import React, { Component } from 'react'
// import "../../styles/clock.scss";

// class Clock extends Component {
//    constructor(props) {
//       super(props);
//       // Estado privado del component
//       this.state = {
//          // Se genera una fecha como estado inicial del componente
//          fecha: new Date(),
//          edad: 0,
//          nombre: ‘Martín’,
//          apellidos: ‘San José’
//       };
//    }
//    componentDidMount(){
//       this.timerID = setInterval (
//          () => this.tick(), 1000
//       );
//    }
//    componentWillUnmount() {
//       clearInterval (this.timerID);
//    }
//    render() {
//       return (
//          <div>
//          <h2>
//          Hora Actual:
//          {this.state.fecha.toLocaleTimeString()}
//          </h2>
//          <h3>{this.state.nombre} {this.state.apellidos}</h3>
//          <h1>Edad: {this.state.edad}</h1>
//          </div>
//       )
//    }
//    tick(){
//       this.setState((prevState) => {
//          let edad = prevState.edad +1;
//          return {
//             ...prevState,
//             fecha: new Date(),
//             edad
//          }
//       });
//    }
// }
// export default Clock;

//? Functional Component

import React, { useEffect, useState } from "react";

const Ejercicio2 = () => {
  const initialState = {
    name: "Ray",
    lastname: "Mcmillan",
    age: 0,
    date: new Date(),
  };

  const [data, setData] = useState(initialState);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  function tick() {
    setData((data) => {
      let age = data.age + 1;

      return {
        ...data,
        date: new Date(),
        age,
      };
    });
  }

  return (
    <div>
      <h2> Hora Actual: {data.date.toLocaleTimeString()}</h2>
      <h3>
        {data.name} {data.lastname}
      </h3>
      <h1>Edad: {data.age}</h1>
    </div>
  );
};

export default Ejercicio2;
