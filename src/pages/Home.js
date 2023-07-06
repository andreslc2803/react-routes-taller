import React from "react";
import { NavLink } from "react-router-dom";

import Servicios from "../components/Servicios";
import Productos from "../components/Productos";
import Proveedores from "../components/Proveedores";
import Clientes from "../components/Clientes";

export default function Home() {
  const imgServicios = require("../img/service.png");
  const imgCliente = require("../img/client.png");
  const imgProveedor = require("../img/provider.png");
  const imgProducto = require("../img/product.png");

  return (
    <div className="row d-flex">
      <div className="col-lg-3">
        <div className="card my-2">
          <h5 className="card-title">Servicios</h5>
          <img
            src={imgServicios}
            className="card-img-top"
            alt="Imagen Servicios"
            style={{ width: "100px", height: "auto" }}
          />
          <div className="card-body">
            <NavLink
              to="/servicios"
              element={<Servicios />}
              className="btn btn-primary"
            >
              Ir a Servicios
            </NavLink>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="card my-2">
          <h5 className="card-title">Productos</h5>
          <img
            src={imgProducto}
            className="card-img-top"
            alt="Imagen Productos"
            style={{ width: "100px", height: "auto" }}
          />
          <div className="card-body">
            <NavLink
              to="/productos"
              element={<Productos />}
              className="btn btn-primary"
            >
              Ir a Productos
            </NavLink>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="card my-2">
          <h5 className="card-title">Proveedores</h5>
          <img
            src={imgProveedor}
            className="card-img-top"
            alt="Imagen Proveedores"
            style={{ width: "100px", height: "auto" }}
          />
          <div className="card-body">
            <NavLink
              to="/proveedores"
              element={<Proveedores />}
              className="btn btn-primary"
            >
              Ir a Proveedores
            </NavLink>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="card my-2">
          <h5 className="card-title">Clientes</h5>
          <img
            src={imgCliente}
            className="card-img-top"
            alt="Imagen Clientes"
            style={{ width: "100px", height: "auto" }}
          />
          <div className="card-body">
            <NavLink
              to="/clientes"
              element={<Clientes />}
              className="btn btn-primary"
            >
              Ir a Clientes
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
