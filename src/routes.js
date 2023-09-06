import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { UsuarioProvider } from "common/context/Usuario"
import { CarrinhoProvider } from "common/context/Carrinho"
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
                    <Route
                        path="/feira"
                        element={
                            <CarrinhoProvider>
                                <Feira />
                            </CarrinhoProvider>
                        }
                    />
                </Route>
                <Route
                    path="/carrinho"
                    element={
                        <CarrinhoProvider>
                            <Carrinho />
                        </CarrinhoProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router