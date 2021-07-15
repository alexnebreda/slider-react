import React, {useRef} from 'react';
import styled from 'styled-components';
import img1 from './../img/1.png';
import img2 from './../img/2.png';
import img3 from './../img/3.png';
import img4 from './../img/4.png';
import img5 from './../img/5.png';
import img6 from './../img/6.png';
import img7 from './../img/7.png';


const Slideshow = () => {
    const slideshow = useRef(null);
    const next = () => {
        console.log(slideshow.current.children.length );
        // Check if the Slider has elements
        if(slideshow.current.children.length > 0) {
            // Get first element of the Slideshow
            const firstSlide = slideshow.current.children[0];
            // Set transition of slideshow
            slideshow.current.style.transition = `1000ms ease-out all`;
            // Get width of the each slide
            const sizeSlide = slideshow.current.children[0].offsetWidth;
            // Move the slideshow
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            const finishedTransitions = () => {
                // Restart the position of Slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                // Get the first slide and send it to the end
                slideshow.current.appendChild(firstSlide);
                // Remove watch EvenetListener
                slideshow.current.removeEventListener('transitionend', finishedTransitions);
            }
            // EventListener to watch when the transition was finished
            slideshow.current.addEventListener('transitionend', finishedTransitions);
        }
    }
    const before = () => {
        if(slideshow.current.children.length > 0) {
            // Get the last element of the Slider
            const lastSlide = slideshow.current.lastChild;
            // Move this element to the beginning
            slideshow.current.insertBefore(lastSlide, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            // Get width of the each slide
            const sizeSlide = slideshow.current.children[0].offsetWidth;
            // Move the slideshow
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
            setTimeout (()=> {
                // Set transition of slideshow
                slideshow.current.style.transition = `1000ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30)
        }
    }
    return ( 
        <MainContainer>
            <ContainerSlideshow ref={slideshow}>
                <Slide>
                    <a href="#">
                        <img src={img1} alt="ASAS"/>                
                    </a>
                    <TextoSlide>
                        10% Descuento
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img2} alt="ASAS"/>                
                    </a>
                    <TextoSlide>
                        10% Descuento
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img3} alt="ASAS"/>                
                    </a>
                    <TextoSlide>
                        10% Descuento
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img4} alt="ASAS"/>                
                    </a>
                    <TextoSlide>
                        10% Descuento
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img5} alt="ASAS"/>                
                    </a>
                    <TextoSlide>
                        10% Descuento
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img6} alt="ASAS"/>                
                    </a>
                    <TextoSlide>
                        10% Descuento
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img7} alt="ASAS"/>                
                    </a>
                    <TextoSlide>
                        10% Descuento
                    </TextoSlide>
                </Slide>
            </ContainerSlideshow>
            <Controls>
                <Arrows onClick={before}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                </Arrows>
                <Arrows right onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </Arrows>
            </Controls>
        </MainContainer>
    );
}


const MainContainer = styled.div`
    position: relative;
`;

const ContainerSlideshow = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    padding: 0px 42px;
`; 

const Slide = styled.div`
    min-width: 24%;
    padding-right: 40px;
    width:100%;
    margin: auto;
    transition: .3s ease all;
    z-index: 9;

    img {
        width: 100%;
        height: auto;
        vertical-align: middel;
    }
`;

const TextoSlide = styled.div`
`;
const Controls = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events; none;
`;
const Arrows = styled.div`
    pointer-events: all;
    cursor: pointer;´
    outline: none;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 36%;
    transition: .3s ease all;

    svg{
        margin: auto;
        pointer-events: all;
        background: #000;
        padding: 10px;
        cursor: pointer;
        fill: #fff;
        @media screen and (max-width: 700px){
            width:24px;
            height: 24px;
            padding: 5px;
        }
    }

    ${props => props.right ? 'right: 0' : 'left: 0'}
`;
export default Slideshow;
