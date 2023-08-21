import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Carrinho from "Pages/Carrinho"
import Feira from "Pages/Feira"
import Login from "Pages/Login"

const Router = () => {
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Login
                            nome={nome}
                            setNome={setNome}
                            saldo={saldo}
                            setSaldo={setSaldo}
                        />
                    }
                />
                <Route path="/feira" element={<Feira />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router