// // src/context/Provider.js

// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import CarsContext from './CarsContext';


// function Provider ({ children }) {
//   const [cars, setCars] = useState({
//     red: false,
//     blue: false,
//     yellow: false,
//   });

//   function moveCar(car, side) {
//     const newObj = {...cars};

//   };

//   render() {
//     const context = {
//       ...this.state,
//       moveCar: this.moveCar,
//     };

//     const { children } = this.props;

//     return (
//       <CarsContext.Provider value={context}>
//         {children}
//       </CarsContext.Provider>
//     );
//   }
// };

// // class Provider extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       cars: {
// //         red: false,
// //         blue: false,
// //         yellow: false,
// //       },
// //     }
// //     this.moveCar = this.moveCar.bind(this);
// //   }

// //   moveCar(car, side) {
// //     this.setState({
// //       cars: {
// //         ...this.state.cars,
// //         [car]: side,
// //       },
// //     });
// //   };

// //   render() {
// //     const context = {
// //       ...this.state,
// //       moveCar: this.moveCar,
// //     };

// //     const { children } = this.props;

// //     return (
// //       <CarsContext.Provider value={context}>
// //         {children}
// //       </CarsContext.Provider>
// //     );
// //   }
// // };

// Provider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Provider;
