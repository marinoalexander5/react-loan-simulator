import React, {useState, useEffect} from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Monto from "./components/Monto";
import Plazo from "./components/Plazo";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Estilos para Slider Material-ui
const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      root: {
        color: 'white',
      },
      active: {
        color: '#010101'
      },
      markLabel: {
        fontWeight: 600
      }
    }
  }
});


function App() {

  const [cuotaFija, setCuotaFija] = useState(0)

  const plazoChanged = (plazo) => {
    const cuota = monto * 1.9798 / plazo;
    setCuotaFija(cuota.toFixed(2));
  }

  const montoChanged = (monto) => {
    const cuota = monto * 1.9798 / plazo;
    setCuotaFija(cuota.toFixed(2));
  }


  return (
    <Container className="bg-dark">
      <Col xs={{ span: 8, offset: 2 }}>
        <div className="bg-danger mt-5 p-5 mx-auto border border-light rounded">
          <Row className="justify-content-center mb-4">
            <h1 className="fw-800">Simulá tu crédito</h1>
          </Row>
          <ThemeProvider theme={muiTheme}>
            <Monto montoChanged={montoChanged} />
            <Plazo plazoChanged={plazoChanged} />
          </ThemeProvider>
          <Row className="border border-ligth my-4">
            <Col className="cuota-fija text-white fw-600 align-self-center">CUOTA FIJA POR MES</Col>
            <Col className="cuota text-right">$ {cuotaFija}</Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Button variant="dark" 
                onClick={() => console.log('Obtene crédito')}
                >OBTENÉ CRÉDITO</Button>
            </Col>
            <Col xs={3}>
              <Button variant="dark" onClick={() => console.log('Ver detalles cuotas')}>VER DETALLES DE CUOTAS</Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Container>
  );
}

export default App;
