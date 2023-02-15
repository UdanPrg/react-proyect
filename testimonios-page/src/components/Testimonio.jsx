import React from "react";

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            src={require("../images/testimonio-emma.png")}
            alt="Foto Emma" />

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">Emma Bostian en Suecia</p>
                <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
                <p className="texto-testimonio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Id reiciendis, corrupti tempore, consequatur fugiat nostrum, 
                    dignissimos sapiente pariatur velit possimus culpa voluptates 
                    voluptatem optio distinctio in quas dolores porro quidem?
                </p>
            </div>
        </div>
    );
}

export default Testimonio;