import React from "react";

const Clientes = () => {
  return (
    <div>
      <h2>Clientes</h2>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Cliente 1</h3>
            <p className="card-text">Información del cliente 1.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Cliente 2</h3>
            <p className="card-text">Información del cliente 2.</p>
          </div>
        </div>
        {/* Agrega más tarjetas de clientes aquí */}
      </div>
    </div>
  );
};

export default Clientes;
