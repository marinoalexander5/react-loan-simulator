import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { Row, Col } from "react-bootstrap";

// Etiquetas de slider
const plazoMarks = [
  {
    value: 3,
    label: "3",
  },
  {
    value: 24,
    label: "24",
  },
];

const PlazoSlider = (props) => {

  const [plazo, setPlazo] = useState(3);
  const handlePlazoSliderChange = (event, newPlazo) => {
    setPlazo(newPlazo);
  };
  
  const handlePlazoInputChange = (event) => {
      setPlazo(event.target.value);
    };

  useEffect(() => {
    props.plazoChanged(plazo);
  }, [plazo])
    
  return (
    <Row className="align-items-center mt-5">
      <Col xs={6}>
        <h3 className='text-white'>PLAZO</h3>
      </Col>
      <Col className="align-self-right fw-600" xs={{ span:4, offset:2 }}>
        <input
          className="bg-danger recuadro fw-600 ml-3"
          type="number"
          value={plazo}
          min={3}
          max={24}
          onChange={handlePlazoInputChange}
        ></input>
      </Col>
      <Slider
        value={plazo}
        min={3}
        max={24}
        step={1}
        onChange={handlePlazoSliderChange}
        marks={plazoMarks}
      />
    </Row>
  );
};

export default PlazoSlider;
