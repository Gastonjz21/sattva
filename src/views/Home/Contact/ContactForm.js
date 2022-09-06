import { useForm } from "../../../hooks/useForm";
import './contactform.css'
import Loader from "../../../components/Loader"
import Message from "../../../components/Message"

const initialForm = {
    name: "",
    email: "",
    number: "",
    subject: "",
    comments: "",
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;


    if(!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if(!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto";
    }

    if(!form.number.trim()) {
      errors.number = "El campo 'Telefono' es requerido";
  } 

    if(!form.subject.trim()) {
        errors.subject = "El campo 'Tipo de negocio' es requerido";
    }

    if(!form.comments.trim()) {
        errors.comments = "El campo 'Comentarios' es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "El campo 'Comentarios' no debe exeder los 255 caracteres";
    }



    return errors;
};

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div id="contact" className="contact">
    <div class="title">
      <h2 class="no-subtitle">Formulario de contacto</h2>
    </div>
      <form onSubmit={handleSubmit} target="_blank">
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre completo"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}

        <input
          type="tel"
          name="number"
          placeholder="Escribe tu telefono"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.number}
          required
        />
        {errors.number && <p style={styles}>{errors.number}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Tipo de negocio"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tu mensaje"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" className="buttom"/>
      </form>
      {loading && <Loader/>}
      {response && <Message msg="Los datos han sido enviados" bgColor="#198754"/>}
    </div>
  );
};

export default ContactForm;
