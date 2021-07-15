import React from 'react';
import Slideshow from './components/Slideshow';
// import {SingelSlideeçr, Slide, TextoSlide} from './components/SingelSlider';
import SingelSlider from './components/SingelSlider';
import './style.css';
import styled from 'styled-components';

const App = () => {
  return( 
    <main>
      <Titulo>Slider creado con React desde 0</Titulo>
      <Slideshow/>
      <Titulo>Slider creado con React desde 0</Titulo>
      <SingelSlider 
        controls={false}
        autoplay={false}
        speed="500"
        interval="5000"
      />
    </main>
  );
}

const Titulo = styled.h1`
  font-size: 32px;
  font-weigth: 700;
  margin-bottom: 24px;
  margin-top: 34px;
`;
export default App;
