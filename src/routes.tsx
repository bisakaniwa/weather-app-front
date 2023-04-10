import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import Listar from "./pages/Listar";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/listar" element={<Listar />} />
            </Routes>
        </BrowserRouter>
    )
}