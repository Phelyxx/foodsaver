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
        <CarouselItem img="https://img.freepik.com/free-vector/fast-food-restaurant-interior-burger-pizza-donut-drink-tray-cafe-vector-cartoon-illustration-empty-fastfood-canteen-with-counter-menu-tables-chairs_107791-8885.jpg?w=2000" categoria = "Home Burgers" />
      </Carousel.Item>  
      <Carousel.Item>
        <CarouselItem img="https://img.freepik.com/free-vector/fast-food-restaurant-interior-burger-pizza-donut-drink-tray-cafe-vector-cartoon-illustration-empty-fastfood-canteen-with-counter-menu-tables-chairs_107791-8885.jpg?w=2000" categoria = "Capital Burgers" />
      </Carousel.Item>  
      <Carousel.Item>
        <CarouselItem img="https://img.freepik.com/free-vector/fast-food-restaurant-interior-burger-pizza-donut-drink-tray-cafe-vector-cartoon-illustration-empty-fastfood-canteen-with-counter-menu-tables-chairs_107791-8885.jpg?w=2000" categoria = "Home Pizza" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_comp;