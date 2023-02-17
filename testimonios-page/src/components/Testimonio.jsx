import React from "react";
import '../stylesheets/Testimonio.css'
function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            src={require(`../images/testimonio-${props.image}.png`)}
            alt="Foto Emma" />

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    <strong>{props.name}</strong> en {props.country}
                </p>
                <p className="cargo-testimonio">
                    {props.position} en <strong>{props.company}</strong>
                </p>
                <p className="texto-testimonio">"{props.testimony}"</p>
            </div>
        </div>
    );
}

export default Testimonio;