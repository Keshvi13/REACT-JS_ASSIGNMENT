import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from './Layout';
import Output from './Output';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Printers from './Printers';
import PrintersById_Delete from './PrintersById_Delete';
import PrintersCreate from './PrintersCreate';
import PrintersUpdate from './PrintersUpdate';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Output />}></Route>
    <Route path="/footer" element={<Output />}></Route>
    <Route path="/printers" element={<Printers />}></Route>
    <Route path="/Printers/:id" element={<PrintersById_Delete />}></Route>
    <Route path="/Printer/create" element={<PrintersCreate />}></Route>
    <Route path="/Printers/update/:id" element={<PrintersUpdate/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
);
