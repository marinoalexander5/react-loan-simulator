import React from "react";
import Slider from "@material-ui/core/Slider";
import { Row, Col } from "react-bootstrap";
import "../App.css";

// Etiquetas de slider 
const montoMarks = [
  {
    value: 5000,
    label: "$5.000",
  },
  {
    value: 50000,
    label: "$50.000",
  },
];

const MontoSlider = (props) => {

  return (
    <Row className="align-items-center mt-5">
      <Col xs={6}>
        <h3 className='text-white'>MONTO TOTAL</h3>
      </Col>
      <Col className="align-self-right fw-600" xs={{ span:4, offset:2 }}>
        <div className="bg-danger recuadro fw-600 w-150">$
        <input
          className="bg-danger fw-600 ml-4"
          type="number"
          value={props.monto}
          min={5000}
          max={50000}
          onChange={(e) => props.handleMontoInputChange(e)}
        />
        </div>
      </Col>
      <Slider
        value={props.monto}
        min={5000}
        max={50000}
        onChange={(event, newMonto) => props.handleMontoSliderChange(event, newMonto)}
        marks={montoMarks}
      />
    </Row>
  );
};

export default MontoSlider;
