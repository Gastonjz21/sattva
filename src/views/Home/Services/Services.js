import './services.css'

function Services(){
    return(
        <div className="container" id='services'>
                <article>
            
                        <div className="row title">
                            <h2 className="no-subtitle">Beneficios de trabajar con Sattva</h2>
                        </div>
            
                    <div id="allsitems" className="items">

                        <div className="item">
                            <i className="fas fa-box i-h"></i>
                            <p>Tus pedidos llegan  seguros a tu local.</p>
                        </div>

                        <div className="item">
                            <i className="far fa-id-badge i-h"></i>
                            <p>Te acesoramos  sobre que productos  sumar en tu local.</p>
                        </div>

                        <div className="item">
                            <i className="fas fa-people-carry i-h"></i>
                            <p>El mejor de los tratos  con el cliente.</p>
                        </div>

                        <div className="item">
                            <i className="fas fa-truck i-h"></i>
                            <p>Dias de reparto:  martes y viernes.</p>
                        </div>

                    </div>
                </article>
            </div>
    )
}

export default Services;