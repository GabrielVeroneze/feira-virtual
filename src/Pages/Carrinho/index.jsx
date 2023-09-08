import { useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, InputLabel, MenuItem, Select, Snackbar } from '@mui/material'
import { Container, PagamentoContainer, TotalContainer, Voltar } from './styles'
import Produto from 'components/Produto'
import { useCarrinhoContext } from 'common/context/Carrinho'
import { usePagamentoContext } from 'common/context/Pagamento'
import { UsuarioContext } from 'common/context/Usuario'

const Carrinho = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const { carrinho, valorTotal } = useCarrinhoContext()
    const { tiposPagamento, formaPagamento, mudarFormaPagamento } = usePagamentoContext()
    const { saldo } = useContext(UsuarioContext)
    const saldoTotal = useMemo(() => saldo - valorTotal, [saldo, valorTotal])

    const navigate = useNavigate()
    
    const redirecionar = () => {
        navigate(-1)
    }

    return (
        <Container>
            <Voltar onClick={redirecionar} />
            <h2>Carrinho</h2>
            {carrinho.map(produto => (
                <Produto key={produto.id} {...produto} />
            ))}
            <PagamentoContainer variant="standard">
                <InputLabel>Forma de Pagamento</InputLabel>
                <Select
                    value={formaPagamento.id}
                    onChange={event => mudarFormaPagamento(event.target.value)}
                >
                    {tiposPagamento.map(pagamento => (
                        <MenuItem key={pagamento.id} value={pagamento.id}>
                            {pagamento.nome}
                        </MenuItem>
                    ))}
                </Select>
            </PagamentoContainer>
            <TotalContainer>
                <div>
                    <h2>Total no Carrinho: </h2>
                    <span>R$ {valorTotal.toFixed(2)}</span>
                </div>
                <div>
                    <h2> Saldo: </h2>
                    <span> R$ {Number(saldo).toFixed(2)}</span>
                </div>
                <div>
                    <h2> Saldo Total: </h2>
                    <span> R$ {saldoTotal.toFixed(2)}</span>
                </div>
            </TotalContainer>
            <Button
                onClick={() => {
                    setOpenSnackbar(true)
                }}
                disabled={saldoTotal < 0}
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
