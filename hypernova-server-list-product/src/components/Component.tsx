import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Component = () => {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    if(names.length == 0){
      setNames([Date.now.toString()]);
    }
  });

  return <div>
    <div className="k-product-list">
      <h2 className="k-product-list__header">Products</h2>
      <Row xs={4} className="g-4">
        {names.map((rs: any, k: number) =>
          <Col key={k}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Product {k + 1}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
      <Button variant='primary' className='mt-3' onClick={() => setNames(prevNames => [...prevNames, Date.now.toString()])}>
        Adicionar produto
      </Button>
    </div >
  </div>
}

export default Component