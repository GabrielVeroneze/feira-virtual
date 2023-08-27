import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { UsuarioProvider } from "common/context/Usuario"
import Carrinho from "Pages/Carrinho"
import Feira from "Pages/Feira"
import Login from "Pages/Login"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    element={
                        <UsuarioProvider>
                            <Outlet />
                        </UsuarioProvider>
                    }
                >
                    <Route path="/" element={<Login />} />
                    <Route path="/feira" element={<Feira />} />
                </Route>
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router