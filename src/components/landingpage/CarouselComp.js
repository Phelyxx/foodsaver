import React, { useState } from 'react';
import './CarouselComp.css';
import Carousel from 'react-bootstrap/Carousel';
import categoria4 from '../../assets/hogar.png';


function CarouselItem(props) {   
    return (
      <div>
      <a href={props.link}>
      <img
        className="d-block w-100"
        src={props.img}
        alt="slide"
        style={{borderRadius:
          " 55px 55px 55px 55px", filter:"brightness(65%)" }}
      />
      </a>
      <Carousel.Caption style={{margin:"auto"}}>
        <h3 className='text_caption'>{props.categoria}</h3>
        <p style={{visibility:"hidden"}}>.</p>
        <p style={{visibility:"hidden"}}>.</p>
      </Carousel.Caption>
      </div>
    );
   }
   

function Carousel_comp() {  

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (

    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <CarouselItem img="https://redangus.ro/wp-content/uploads/2015/10/burgers-menu-top-bg1.jpg" categoria = "Angus SteakHouse" />
      </Carousel.Item>  
      <Carousel.Item>
        <CarouselItem img="https://www.restaurantelsporxos.com/img/slideshow/segunda.jpg" categoria = "Frenessí" />
      </Carousel.Item>  
      <Carousel.Item>
        <CarouselItem img="https://redbakery.cl/wp-content/uploads/2022/05/308-2.jpg" categoria = "La Focaccia" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_comp;