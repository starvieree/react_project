import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Hasil, NavbarComponent, ListCategories } from './components/index';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className='mt-2'>
        <Row>
          <ListCategories />
          <Col>
            <h4>Daftar Product</h4>
            <hr />
          </Col>
          <Hasil />
        </Row>
      </div>
    </div>
  );
}

export default App;
