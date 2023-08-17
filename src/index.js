import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material';
import Login from './Pages/Login';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2A9F85'
        },
        secondary: {
            main: '#FF7070'
        },
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Login />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);