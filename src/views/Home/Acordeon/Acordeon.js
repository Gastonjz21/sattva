import React from "react";
import "./acordeon.css";

function Acordeon() {
  return (
    <div className="aco">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Dieta sin gluten
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              La dieta sin gluten consiste en eliminar de forma estricta de la
              alimentación todos los productos que contengan o se cocinen con
              trigo, centeno, cebada y avena, o cualquiera de sus variedades e
              híbridos, y productos derivados, evitando contaminaciones
              inadvertidas y todo tipo de transgresiones dietéticas.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Alimentos Organicos
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Comida orgánica o Alimento orgánico es un término que define los
              alimentos destinados al consumo que han sido producidos sin
              productos químicos y procesados sin aditivos.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Alimentos Veganos
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Los alimentos veganos son aquellos que no solo no son animales
              sino que, además, no proceden de ellos. Algunos ejemplos de
              alimentos no aptos para veganos son la leche, los yogures y quesos
              de vaca o cabra, los huevos, la miel, la mantequilla o la manteca,
              entre otros.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acordeon;
