import React from 'react'
import {  Button, Form, FormGroup, Input } from 'reactstrap';



export default function Contact() {
  return (
    
    <section className='bgContact container-fluid d-flex flex-column align-items-center justify-content-center'>
      <aside className='container d-flex flex-column align-items-center justify-content-center'>
        <h2>CONTACT</h2>
        <Form  className='container-fluid'>
          <FormGroup>
            <Input
              id="firstName"
              placeholder="Ingrese su nombre"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="email"
              placeholder="Ingrese su email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="phone"
              placeholder="Ingrese su número de celular"
              type="tel"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="msg"
              placeholder="Ingrese su mensaje"
              type="textarea"
            />
          </FormGroup>
          <Button type='submit'>
            Enviar
          </Button>
        </Form>
      </aside>
    </section>
  )
}
