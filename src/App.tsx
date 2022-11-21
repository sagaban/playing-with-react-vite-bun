/* eslint-disable react/no-unknown-property */
import { GlobalPortal } from './GlobalPortal';
import { Router } from 'pages/Routes';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'styles/theme';

export default function App() {
  // import env variables
  console.log(import.meta.env.VITE_TEST);
  return (
    <BrowserRouter basename="/playing-with-react-vite-bun">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalPortal.Provider>
          <Layout>
            <Router />
          </Layout>
        </GlobalPortal.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return <Container sx={{ mt: 2 }}>{children}</Container>;
}
