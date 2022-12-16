import React from 'react';
import Component from './Component';
import Container from 'react-bootstrap/Container';

const App = (props: any) => <Container fluid={true}>
  <Component {...props} />
</Container>

export default App