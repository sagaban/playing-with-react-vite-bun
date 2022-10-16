/* eslint-disable react/no-unknown-property */
import { GlobalPortal } from './GlobalPortal';
import { Router } from 'pages/Routes';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';

export default function App() {
  // import env variables
  console.log(import.meta.env.VITE_TEST);
  return (
    <BrowserRouter>
      <GlobalPortal.Provider>
        <Layout>
          <Router />
        </Layout>
      </GlobalPortal.Provider>
    </BrowserRouter>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
