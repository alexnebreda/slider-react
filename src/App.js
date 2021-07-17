import React from 'react';
import Slideshow from './components/Slideshow';
// import {SingelSlideeçr, Slide, TextoSlide} from './components/SingelSlider';
import SingelSlider from './components/SingelSlider';
import './style.css';
import styled from 'styled-components';

const App = () => {
  return( 
    <main>
      <Titulo main>Sliders by React</Titulo>

      <Titulo>Multi image Slider</Titulo>
      <Slideshow
        controls={true}
        autoplay={false}
        speed="500"
        interval="5000"
        textColor="white"
        bgTextColor=""
      />
      <Titulo>Singel Slider</Titulo>
      <SingelSlider 
        controls={true}
        autoplay={false}
        speed="500"
        interval="5000"
        textColor="white"
        bgTextColor=""
      />
    </main>
  );
}

const Titulo = styled.h1`
  font-size: 32px;
  font-weigth: 700;
  margin-bottom: 24px;
  margin-top: 34px;
  ${props => props.main && 'font-size:36px; text-align:center;margin-bottom:60px;'}
`;
export default App;
