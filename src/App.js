import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import allRoutesProject from "./config/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutesProject.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
