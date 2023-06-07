import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
    <section>
      <h2>CONTACT</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")}  placeholder='Ingrese su nombre' />
      <p>{errors.firstName?.message}</p>
      <input {...register("email")}  placeholder='Ingrese su email'/>
      <p>{errors.email?.message}</p>
      <input {...register("phone")}  placeholder='Numero de celular'/>
      <p>{errors.phone?.message}</p>
      <textarea {...register("msg")}  placeholder='Su mensaje'/>
      <p>{errors.msg?.message}</p>
      <input type="submit" />
    </form>
    </section>
  )
}
