import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {  Button, Form, FormGroup, Input } from 'reactstrap';

const schema = yup.object({
  firstName: yup.string().required(),
  email: yup.string().email().min(1),
  phone: yup.string().matches(/^\d{10}$/, 'Ingrese un número de celular válido').required(),
  msg:yup.string().required()
}).required();

export default function Contact() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  return (
    
    <section className='bgContact text-center'>
      <h2>CONTACT</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className='container-sm'>
        <FormGroup>
          <Input
            id="firstName"
            {...register("firstName")}
            placeholder="Ingrese su nombre"
            type="text"
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </FormGroup>
        <FormGroup>
          <Input
            id="email"
            {...register("email")}
            placeholder="Ingrese su email"
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </FormGroup>
        <FormGroup>
          <Input
            id="phone"
            {...register("phone")}
            placeholder="Ingrese su número de celular"
            type="tel"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </FormGroup>
        <FormGroup>
          <Input
            id="msg"
            {...register("msg")}
            placeholder="Ingrese su mensaje"
            type="textarea"
          />
          {errors.msg && <p>{errors.msg.message}</p>}
        </FormGroup>
        <Button type='submit'>
          Enviar
        </Button>
      </Form>
    </section>
  )
}
