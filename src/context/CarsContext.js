// src/context/CarsContext.js

import React, { createContext, useState } from 'react';

const CarsContext = createContext();

function Provider ({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  function moveCar(car, side) {
    setCars({
      ...cars,
      [car]: side,
    })  
  };

  const context = { cars, moveCar};
  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export { CarsContext, Provider};