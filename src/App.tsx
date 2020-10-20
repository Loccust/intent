import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';


function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle/>
      <Routes/>
   </ThemeProvider>
  );
}

export default App;
