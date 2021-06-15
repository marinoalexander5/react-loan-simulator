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

  const [monto, setMonto] = useState(5000);
  const [plazo, setPlazo] = useState(3);
  const [cuotaFija, setCuotaFija] = useState(0)

  useEffect(() => {
    const cuota = monto * 1.9798 / plazo;
    // metodo toFixed redonde a 2 decimales
    setCuotaFija(cuota.toFixed(2));
  }, [monto, plazo])

  const handleMontoSliderChange = (event, newMonto) => {
    setMonto(newMonto);
  };
  
  const handleMontoInputChange = (event) => {
      setMonto(event.target.value);
    };

  return (
    <Container className="bg-dark">
      <Col xs={{ span: 6, offset: 3 }}>
        <div className="bg-danger mt-5 p-5 mx-auto border border-light rounded">
          <Row className="justify-content-center mb-4">
            <h1 className="fw-600">Simulá tu crédito</h1>
          </Row>
          <ThemeProvider theme={muiTheme}>
            <Monto monto={monto} onChange={(val) => console.log(val)}/>
          <Plazo />
          </ThemeProvider>
          <Row>
            <Col className="cuota-fija text-white fw-600 align-self-center">CUOTA FIJA POR MES</Col>
            <Col className="cuota">$ {cuotaFija}</Col>
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
