import axios from "axios";
import { useState } from "react";
//import axios from "axios";
import "./contactform.css"

const ContactForm = () => {
  const [user, setUser] = useState({name:"", email:"", phone_number:"", subject:"", cmessage:""});
  const [success, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = function(event) {
    const property = event.target.name
    const value = event.target.value
    setUser ({ ...user, [property]: value})
  }

  const handleSubmit = function (event) {
    event.preventDefault()
    axios(
      {
        url:"https://sattbaback.herokuapp.com/api/insertContacto",
        method: "post",
        data: user
      }
    ).then(
      setSucces(true)
    ).catch(
      function(error){
        setError(true)
      }
    )
  }

  return (
    <div id="contact" className="contact" onSubmit={handleSubmit}>
    <div className="title">
      <h2 className="no-subtitle">Formulario de contacto</h2>
    </div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre completo"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone_number"
          placeholder="Escribe tu telefono"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Tipo de negocio"
          onChange={handleChange}
          required
        />

        <textarea
          type="text"
          name="cmessage"
          cols="50"
          rows="5"
          placeholder="Escribe tu mensaje"
          onChange={handleChange}
          required
        ></textarea>

        <input type="submit" value="Enviar" className="buttom"/>

        {success &&
          <div className="alert-succes">
            Tus daton han sido enviados correctamente.
        </div>
        }

        {error &&
          <div className="alert-error">
            Tuvimos un inconveniente procesando tus datos.
        </div>
        }

      </form>

    </div>
  );
};

export default ContactForm;
