import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default props => {
  const { data } = props;
  return data ? (
    <Carousel interval={2000}>
      {data.map(item => (
        <Carousel.Item style={{ paddingLeft: 15, paddingRight: 15 }}>
          <img
            className="d-block w-100"
            src={item.flag}
            alt="No Slide"
            style={{ width: 800, height: 500 }}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : null;
};
