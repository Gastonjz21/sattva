import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="bggrey" id="nosotros">
      <div className="container">

        <div className="row title">
          <h1 className="no-subtitle">¿Quienes Somos?</h1>
        </div>

        <div className="row title-description">
          <div className="p-description">
            <p>
              <span>Sattva</span> es una empresa familiar, 100% dedicada a la
              comercialización de productos orgánicos, naturales, sin
              conservantes, agroecologicos y sin TACC.
              <span> En Sattva creemos en lo que comemos,</span> por eso buscamos
              siempre los mejores productos para tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
