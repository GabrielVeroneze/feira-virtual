import { createContext, useContext, useEffect, useState } from "react";

export const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0)

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho,
                setCarrinho,
                quantidadeProdutos,
                setQuantidadeProdutos
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos } = useContext(CarrinhoContext)

    const alterarQuantidade = (id, quantidade) => {
        // Retorna um novo array representando o carrinho atualizado
        return carrinho.map(itemCarrinho => {
            // Verifica se o ID corresponde a um produto no carrinho e modifica a quantidade desse produto no carrinho
            if(itemCarrinho.id === id) {
                itemCarrinho.quantidade += quantidade
            }
            return itemCarrinho
        })
    }

    const adicionarProduto = (novoProduto) => {
        // Verifica se um novo produto com o mesmo ID já está no carrinho de compras. Se já estiver será definida como true, se não, será definida como false
        const possuiProduto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id)

        // Essa parte é executada se o produto ainda não estiver no carrinho
        if(!possuiProduto) {
            novoProduto.quantidade = 1
            setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
            return
        }

        // Essa parte é executada se o produto já existe no carrinho
        setCarrinho(alterarQuantidade(novoProduto.id, 1))
    }

    const removerProduto = (id) => {
        // Retorna o produto no carrinho que possui o mesmo ID que foi passado como argumento
        const produto = carrinho.find(itemCarrinho => itemCarrinho.id === id)
        
        const ultimaQuantidade = produto.quantidade === 1
        
        // Remove o produto do carrinho quando ele for o último item desse tipo no carrinho
        if(ultimaQuantidade) {
            setCarrinho(carrinhoAnterior => (
                carrinhoAnterior.filter(itemCarrinho => itemCarrinho.id !== produto.id)
            ))
            return
        }
        
        // Chama uma função para reduzir a quantidade desse produto em uma unidade
        setCarrinho(alterarQuantidade(produto.id, -1))
    }

    useEffect(() => {
        const quantidadeTotal = carrinho.reduce((acumulador, produto) => (
            acumulador + produto.quantidade
        ), 0)

        setQuantidadeProdutos(quantidadeTotal)
    }, [carrinho, setQuantidadeProdutos])


    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        quantidadeProdutos,
        setQuantidadeProdutos
    }
}