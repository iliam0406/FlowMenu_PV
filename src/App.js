import React from 'react';
import './App.css';
import LeftTablero from './componentes/leftTablero';

import Navbar from './componentes/navbar';
import Tablero from './componentes/tablero';
import Leftablero from './componentes/leftTablero';




function App() {
  return (
    <>
    <Navbar />
    <div className='UserTablero'>
    <LeftTablero />
    <Tablero />
    </div>
    </>
  );
}

export default App;
