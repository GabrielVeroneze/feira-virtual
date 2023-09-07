import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, InputLabel, Snackbar } from '@mui/material'
import { Container, PagamentoContainer, TotalContainer, Voltar } from './styles'
import { useCarrinhoContext } from 'common/context/Carrinho'
import Produto from 'components/Produto'
import { PagamentoContext } from 'common/context/Pagamento'

const Carrinho = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const { carrinho } = useCarrinhoContext()
    const { formaPagamento } = useContext(PagamentoContext)
    const navigate = useNavigate()
    
    const redirecionar = () => {
        navigate(-1)
    }

    console.log(formaPagamento);
    
    return (
        <Container>
            <Voltar onClick={redirecionar} />
            <h2>Carrinho</h2>
            {carrinho.map(produto => (
                <Produto key={produto.id} {...produto} />
            ))}
            <PagamentoContainer>
                <InputLabel> Forma de Pagamento </InputLabel>
            </PagamentoContainer>
            <TotalContainer>
                <div>
                    <h2>Total no Carrinho: </h2>
                    <span>R$ </span>
                </div>
                <div>
                    <h2> Saldo: </h2>
                    <span> R$ </span>
                </div>
                <div>
                    <h2> Saldo Total: </h2>
                    <span> R$ </span>
                </div>
            </TotalContainer>
            <Button
                onClick={() => {
                    setOpenSnackbar(true)
                }}
                color="primary"
                variant="contained"
            >
                Comprar
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity="success"
                >
                    Compra feita com sucesso!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default Carrinho
