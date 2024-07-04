import Favoritos from "pages/Favoritos";

import Player from "pages/player";
import NotFound from "pages/notFound";
import PaginaBase from "pages/PaginaBase";
const { default: Inicio } = require("./pages/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;