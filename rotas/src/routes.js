import React from "react";
import reactDom from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "./views/Main/";
import SobreEmpresa from "./views/SobreEmpresa/";
import Contato from "./views/Contato/";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/sobreempresa" exact element={<SobreEmpresa />} />
                <Route path="/contato" exact element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;