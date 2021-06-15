import React from "react";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { Row, Col } from "react-bootstrap";
import "../App.css";


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
        $<span> </span>
        <input
          className="bg-danger recuadro fw-600"
          type="number"
          value={props.monto}

          // onChange={handleMontoInputChange}
          onChange={(e) => props.onChange(e.target.value)}
        ></input>
      </Col>
      <Slider
        value={props.monto}
        min={5000}
        max={50000}
        // onChange={handleMontoSliderChange}
        onChange={(e) => props.onChange(e.target.value)}

        marks={montoMarks}
      />
    </Row>
  );
};

export default MontoSlider;
