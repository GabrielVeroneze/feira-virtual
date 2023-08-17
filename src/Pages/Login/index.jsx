import { Button, Input, InputAdornment, InputLabel } from '@mui/material'
import { Container, Titulo, InputContainer } from './styles'

const Login = () => {
    return (
        <Container>
            <Titulo>Insira o seu nome</Titulo>
            <InputContainer>
                <InputLabel>Nome</InputLabel>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Saldo</InputLabel>
                <Input
                    type="number"
                    startAdornment={
                        <InputAdornment position="start">R$</InputAdornment>
                    }
                />
            </InputContainer>
            <Button variant="contained" color="primary">
                Avançar
            </Button>
        </Container>
    )
}

export default Login
