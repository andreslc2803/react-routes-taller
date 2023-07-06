import React from "react";

const Proveedores = () => {
  return (
    <div>
      <h2>Proveedores</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proveedor 1</td>
            <td>Dirección 1</td>
            <td>Teléfono 1</td>
          </tr>
          <tr>
            <td>Proveedor 2</td>
            <td>Dirección 2</td>
            <td>Teléfono 2</td>
          </tr>
          {/* Agrega más filas de proveedores aquí */}
        </tbody>
      </table>
    </div>
  );
};

export default Proveedores;
