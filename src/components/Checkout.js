import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Checkout(props) {
        const [show, setShow] = useState(false);      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
       
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Checkout
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  {/* the following form group handles the email input section */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  {/* the following for group handles displaying the chosen numbers */}
                  <Form.Group
                    className="mb-3" >
                    <Form.Label>Chosen Numbers</Form.Label>
                    {/* <Form.Control placeholder="no numbers chosen" value={props.numbers} readOnly /> */}
                  </Form.Group>
                  <h4>{props.numbers.join(', ')}</h4>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => {
                  handleClose()
                  fetch('/create-checkout-session', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      items: [
                        { id: 1, quantity: 2 },
                        { id: 2, quantity: 2 }
                      ],
                    }),                  
                  }).then(res => {
                    if (res.ok) return res.json()
                    return res.json().then(json => Promise.reject(json))
                  }).then(({ url }) => {
                    window.location = url
                   }).catch(e => {
                     console.error(e.error)
                   })
                }}>
                  Checkout
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
