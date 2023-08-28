import { memo, useContext } from 'react'
import { IconButton } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { Container } from './styles'
import { CarrinhoContext } from 'common/context/Carrinho'

const Produto = ({ nome, foto, id, valor, unidade }) => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)
    // console.log(carrinho)

    return (
        <Container>
            <div>
                <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
                <p>
                    {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
                </p>
            </div>
            <div>
                <IconButton color="secondary">
                    <Remove />
                </IconButton>
                <IconButton>
                    <Add />
                </IconButton>
            </div>
        </Container>
    )
}

export default memo(Produto)
