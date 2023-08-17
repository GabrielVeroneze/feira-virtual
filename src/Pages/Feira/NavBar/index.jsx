import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Nav } from "./styles"

const NavBar = () => {
    return (
        <Nav>
            <Logo />
            <IconButton>
                <Badge color="primary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Nav>
    )
}

export default NavBar
