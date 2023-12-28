import React from "react";
import { Button, Form, Input } from "reactstrap";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

export default function Contact() {
  const [state, handleSubmit] = useForm("mvoepjpr");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  
    if (state.succeeded) {
      Swal.fire({
        icon: "success",
        title: "¡Gracias por tu mensaje!",
        text: "Nos pondremos en contacto contigo pronto.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error en el formulario",
        text: "Por favor, revisa los campos y vuelve a intentarlo.",
      });
    }
  };
  

  return (
    <section className="bgContact container-fluid d-flex flex-column align-items-center justify-content-center">
      <aside className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className="mb-5">CONTACT</h2>
        <Form className="container-fluid" onSubmit={handleFormSubmit} method="POST">
          <Input
            id="name"
            placeholder="Ingrese su nombre"
            type="text"
            name="name"
          />
          <Input
            id="email"
            placeholder="Ingrese su email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Input
            id="phone"
            placeholder="Ingrese su número de celular"
            type="tel"
            name="phone"
          />
          <Input
            id="message"
            placeholder="Ingrese su mensaje"
            type="textarea"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button type="submit" disabled={state.submitting}>
            Enviar
          </Button>
        </Form>
      </aside>
    </section>
  );
}
