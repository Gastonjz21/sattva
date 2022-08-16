import Brands from "../../brands.json";
import "./brands.css";

function Brand() {
  return (

    <article>

    <div className="brands" id="marcas">
      <div class="title">
        <h2 class="no-subtitle">¿Conoces todas nuestras marcas?</h2>
      </div>
      <div className="itemsbrands">
        {Brands && Brands.map((brand) => {
            return <img src={brand.img} alt="" className="itemsbrandsuniti" />;
          })}
      </div>
    </div>

    </article>
  );
}

export default Brand;
