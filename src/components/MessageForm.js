import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import "./MessageForm.css";

function Messageform() {

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
    <div className='message-output'> </div>
      <Form onSubmit={handleSubmit}>
      
       <Row>
         <Col md={11}>
           <Form.Group>
             <Form.Control type="text" placeholder="Your message">

             </Form.Control>
           </Form.Group>
         </Col>
         <Col md={1}>
           <Button variant="primary" type="submit" style={{width:"100%" , backgroundcolor:"orange"}}>
             <i className='fas fa-paper-plane'></i>
           </Button>
         </Col>
       </Row>
      </Form>  
    
    </>
  )
}

export default Messageform