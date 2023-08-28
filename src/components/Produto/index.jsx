import { memo, useContext } from 'react'
import { IconButton } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { Container } from './styles'
import { CarrinhoContext } from 'common/context/Carrinho'

const Produto = ({ nome, foto, id, valor, unidade }) => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)
    
    const adicionarProduto = (novoProduto) => {
        const possuiProduto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id)

        if(!possuiProduto) {
            novoProduto.quantidade = 1
            setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
            return
        }

        setCarrinho(carrinhoAnterior => (
            carrinhoAnterior.map(itemCarrinho => {
                if(itemCarrinho.id === novoProduto.id) {
                    itemCarrinho.quantidade += 1
                }
                return itemCarrinho
            })
        ))
    }
    
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
                <IconButton onClick={() => adicionarProduto({ nome, foto, id, valor })}>
                    <Add />
                </IconButton>
            </div>
        </Container>
    )
}

export default memo(Produto)
