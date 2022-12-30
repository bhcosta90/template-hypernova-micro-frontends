import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

type AppProps = {
  title: string;
  items: ProductProps[]
};

type ProductProps = {
  title: string;
  image: string;
}

export const App = (props: AppProps) => {
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    if (products.length === 0) {
      setProducts(props.items);
      props.items.map(item => sendEvent(item))
    }
  });

  const addProduct = () => {
    const item = {
      title: Date.now().toString(),
      image: 'https://via.placeholder.com/150'
    };

    setProducts((prev: any): any => {
      sendEvent(item);
      return [...prev, item];
    });
  }

  const sendEvent = (item: ProductProps) => {
    console.log(item)
    const event = new CustomEvent('itemSelected', { detail: item });
    document.dispatchEvent(event)
  }

  return <Container fluid={true} className="k-product-list">
    <h2 className="k-product-list__header">{props.title}</h2>
    <Row xs={4} className="g-4">
      {products.map((rs: ProductProps, k: number) =>
        <Col key={k}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rs.image} />
            <Card.Body>
              <Card.Title>Product {rs.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>

    <Button variant='primary' className='mt-3' onClick={() => addProduct()}>
      Add product
    </Button>

  </Container>
}

export default App
