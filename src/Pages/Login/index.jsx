import { Button, Input, InputAdornment, InputLabel } from '@mui/material'
import { Container, Titulo, InputContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { UsuarioContext } from 'common/context/Usuario'
import { useContext } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext)

    const redirecionar = () => {
        navigate('/feira')
    }

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
            <Button
                variant="contained"
                color="primary"
                onClick={redirecionar}
                disabled={nome.length < 4}
            >
                Avançar
            </Button>
        </Container>
    )
}

export default Login
