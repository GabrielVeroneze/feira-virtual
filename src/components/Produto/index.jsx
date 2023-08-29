import { memo, useContext } from 'react'
import { IconButton } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { Container } from './styles'
import { CarrinhoContext } from 'common/context/Carrinho'

const Produto = ({ nome, foto, id, valor, unidade }) => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)
    
    const adicionarProduto = (novoProduto) => {
        // Verifica se um novo produto com o mesmo ID já está no carrinho de compras. Se já estiver será definida como true, se não, será definida como false
        const possuiProduto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id)

        // Essa parte é executada se o produto ainda não estiver no carrinho
        if(!possuiProduto) {
            novoProduto.quantidade = 1
            setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]) // Cria um novo array que inclui todos os itens existentes no carrinho mais o novo produto
            return
        }

        // Essa parte é executada se o produto já existe o carrinho
        setCarrinho(carrinhoAnterior => (
            carrinhoAnterior.map(itemCarrinho => {
                // Se isso for verdadeiro, significa que o produto que está sendo iterado é o mesmo que estamos tentando atualizar
                if(itemCarrinho.id === novoProduto.id) {
                    itemCarrinho.quantidade += 1 // A quantidade desse produto é incrementada em 1
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
