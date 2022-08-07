import './contact.css'

function Contact() {
  return (
    <div className="contact" id="contacto">
      <div class="formulario">
        <div class="iconomail">
          <i class="far fa-envelope"></i>
        </div>

        <div class="parrafoform">
          <p>Solicita nuestra lista de precios</p>
        </div>

        <form action="#">
          <label for="Nombre"></label>
          <input type="text" placeholder="Nombre" />

          <label for="Email"></label>
          <input type="text" placeholder="Email" />

          <label for="Telefono"></label>
          <input type="text" placeholder="Telefono de contacto" />

          <label for="Localidad"></label>
          <input type="text" placeholder="Localidad" />

          <select
            name="Cual es tu negocio"
            id="#"
            title="Selecciona una opcion"
          >
            <option selected disabled="Cualestunegocio">
              ¿Cual es tu negocio?
            </option>
            <option value="Tiendagourmet">Tienda gourmet</option>
            <option value="Dietetica">Dietetica</option>
            <option value="Supermercado">Supermercado</option>
            <option value="Almacen">Almacen</option>
            <option value="Iniciandominegocio">Iniciando mi negocio</option>
            <option value="Otro">Otro</option>
          </select>

          <label for="Consulta"></label>
          <textarea
            id="Consulta"
            placeholder="Consulta"
            class="cajatexto"
          ></textarea>

          <br />

          <div class="buttom">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
