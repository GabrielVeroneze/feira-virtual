import { useNavigate } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Nav } from "./styles"
import { useCarrinhoContext } from "common/context/Carrinho";

const NavBar = () => {
    const { quantidadeProdutos } = useCarrinhoContext()
    const navigate = useNavigate()

    const redirecionar = () => {
        navigate('/carrinho')
    }

    return (
        <Nav>
            <Logo />
            <IconButton
                disabled={quantidadeProdutos === 0}
                onClick={redirecionar}
            >
                <Badge 
                    color="primary"
                    badgeContent={quantidadeProdutos}
                >
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Nav>
    )
}

export default NavBar
