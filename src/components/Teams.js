import { Button, Card } from 'react-bootstrap';

import React from 'react'
import Workers from '../employees.json';

function Teams() {
  return (
    <div className="box">
       {
        Workers.map(worker => {
        return(
          <div>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
         </div>
        )
      })
      }
    </div>
  )
}

export default Teams

