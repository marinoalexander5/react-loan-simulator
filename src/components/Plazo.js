import React from "react";
import Slider from "@material-ui/core/Slider";
import { Row, Col } from "react-bootstrap";
import "../App.css";

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
    
  return (
    <Row className="align-items-center mt-5">
      <Col xs={6}>
        <h3 className='text-white'>PLAZO</h3>
      </Col>
      <Col className="align-self-right fw-600" xs={{ span:4, offset:2 }}>
        <input
          className="bg-danger recuadro fw-600 w-150"
          type="number"
          value={props.plazo}
          min={3}
          max={24}
          onChange={(e) => {props.handlePlazoInputChange(e)}}
        ></input>
      </Col>
      <Slider
        value={props.plazo}
        min={3}
        max={24}
        step={1}
        onChange={(event, newPlazo) => {props.handlePlazoSliderChange(event, newPlazo)}}
        marks={plazoMarks}
      />
    </Row>
  );
};

export default PlazoSlider;
