import React from 'react';

import '../style/Home.css';
import LeftTablero from '../componentes/leftTablero';
import Navbar from '../componentes/navbar';
import Tablero from '../componentes/tablero';




function Home() {
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

export default Home;
