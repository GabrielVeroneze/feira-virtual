import { memo } from 'react'
import { IconButton } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { Container } from './styles'
import { useCarrinhoContext } from 'common/context/Carrinho'

const Produto = ({ nome, foto, id, valor, unidade }) => {
    const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext()

    const produtoNoCarrinho = carrinho.find(itemCarrinho => itemCarrinho.id === id)

    return (
        <Container>
            <div>
                <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
                <p>
                    {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
                </p>
            </div>
            <div>
                <IconButton
                    color="secondary"
                    onClick={() => removerProduto(id)}
                    disabled={!produtoNoCarrinho}
                >
                    <Remove />
                </IconButton>
                {produtoNoCarrinho?.quantidade || 0}
                <IconButton
                    color='primary'
                    onClick={() => adicionarProduto({ nome, foto, id, valor })}
                >
                    <Add />
                </IconButton>
            </div>
        </Container>
    )
}

export default memo(Produto)
