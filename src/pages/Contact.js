import React from 'react';

export default function Contact() {
  return (
    <div className="container">
      <h2>Contact</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre(s)</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Apellido(s)</label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="documentType" className="form-label">Tipo de documento </label>
          <select className="form-select" id="documentType" defaultValue="">
            <option value="" disabled>Seleccionar</option>
            <option value="cc">Cédula de ciudadania</option>
            <option value="passport">Pasaporte</option>
            <option value="tarjeta-identidad">Tarjeta de identidad</option>
            <option value="cc-extranjeria">Cedula extranjería</option>
            <option value="passport">Pasaporte</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="documentNumber" className="form-label">Número de documento</label>
          <input type="text" className="form-control" id="documentNumber" />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Asunto</label>
          <textarea className="form-control" id="subject"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}
