import { Button, Input, InputAdornment, InputLabel } from '@mui/material'
import { Container, Titulo, InputContainer } from './styles'

const Login = ({ nome, setNome, saldo, setSaldo }) => {
    return (
        <Container>
            <Titulo>Insira o seu nome</Titulo>
            <InputContainer>
                <InputLabel>Nome</InputLabel>
                <Input
                    type="text"
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <InputLabel>Saldo</InputLabel>
                <Input
                    type="number"
                    startAdornment={
                        <InputAdornment position="start">R$</InputAdornment>
                    }
                    value={saldo}
                    onChange={event => setSaldo(event.target.value)}
                />
            </InputContainer>
            <Button variant="contained" color="primary">
                Avançar
            </Button>
        </Container>
    )
}

export default Login
