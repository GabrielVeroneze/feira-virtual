import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])

    return(
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
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

    return {
        carrinho,
        setCarrinho,
        adicionarProduto
    }
}