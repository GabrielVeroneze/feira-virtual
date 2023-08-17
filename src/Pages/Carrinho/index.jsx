import { useState } from 'react'
import { Alert, Button, InputLabel, Snackbar } from '@mui/material'
import { Container, PagamentoContainer, TotalContainer, Voltar } from './styles'

const Carrinho = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)

    return (
        <Container>
            <Voltar />
            <h2>Carrinho</h2>
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
