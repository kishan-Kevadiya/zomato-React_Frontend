import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./place.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        // fill: "black",
        borderRadius: "50%",
        fontSize: "10px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex:'1'
      }}
      onClick={onClick}
    >
      
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        backgroundColor: "gray",
        // color: "black",
        borderRadius: "50%",
        fontSize: "10px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex:'1'}}
      onClick={onClick}
    >
      
    </div>
  );
}

const PlacesColl = ({ item,value }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className='max-width'>
      <p className="value" key={0}>{value}</p>
      <Slider {...settings}>
        {item.map((i) => (
          <div className="container" key={i.key}>
            <img src={i.url} alt="collection" />
            {/* <p>{i.tittle}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PlacesColl;
