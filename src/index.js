import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import './index.css';

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
                <Router />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);