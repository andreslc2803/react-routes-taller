import React from "react";

const Servicios = () => {
  return (
    <div>
      <h2>Servicios</h2>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Servicio 1</h3>
            <p className="card-text">Descripción del servicio 1.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Servicio 2</h3>
            <p className="card-text">Descripción del servicio 2.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Servicio 3</h3>
            <p className="card-text">Descripción del servicio 3.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Servicio 4</h3>
            <p className="card-text">Descripción del servicio 4.</p>
          </div>
        </div>
        {/* Agrega más tarjetas de servicios aquí */}
      </div>
    </div>
  );
};

export default Servicios;
