import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background1 from './assets/football1.jpg';
import background2 from './assets/football2.jpg';
import background3 from './assets/football1.jpg';
import background4 from './assets/football2.jpg';
import background5 from './assets/football1.jpg';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "50%",
        zIndex: 1, 
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "50%",
        zIndex: 1, 
      }}
      onClick={onClick}
    />
  );
};

const CardCarousel = () => {
  const settings = {
    dots: true, 
    infinite: false,
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  
  const cards = [
    {
      title: "Unity",
      description: "Cycling brings people together.",
      background: background1, 
    },
    {
      title: "Team Spirit",
      description: "Camaraderie in every ride.",
      background: background2,
    },
    {
      title: "Inclusivity",
      description: "Breaking barriers with cycling.",
      background: background3,
    },
    {
      title: "Beyond the Road",
      description: "Inspiring social change.",
      background: background4,
    },
    {
      title: "Field of Dreams",
      description: "Greatness starts here.",
      background: background5,
    },
  ];

  return (
    <div style={{ width: '100vw', height: '600px', overflow: 'hidden' }}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: '100vw',
              height: '600px',
              background: `url(${card.background})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white', 
            }}
          >
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{card.title}</h3>
                    <img src={background5} style={{height:'335px' ,width:'1330px'}}></img>
              <p style={{ fontSize: '1.5rem' }}>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;