import { BrowserRouter, Route, Routes } from "react-router-dom"
import Carrinho from "Pages/Carrinho"
import Feira from "Pages/Feira"
import Login from "Pages/Login"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/feira" element={<Feira />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router