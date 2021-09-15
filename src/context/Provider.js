// src/context/Provider.js

import React, { createContext, useState } from 'react';

const Context = createContext();

function CarsProvider ({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signal, setSignal] = useState({
    color: 'red',
  })

  function moveCar(car, side) {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  function changeSignal(signalColor) {
    setSignal({
      color: signalColor,
    });
  };

  const context = {
    cars,
    moveCar,
    signal,
    changeSignal,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );

};

export { Context, CarsProvider as Provider};
