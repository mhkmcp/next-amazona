import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next-Amazona</title>
        <AppBar position="static">
          <Toolbar>
            <Typography>amazona</Typography>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </Head>
    </div>
  );
};

export default Layout;
