import React, { useState } from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';


const App = () => {
  const [theme, setTheme ] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes toggleTheme={toggleTheme}/>
   </ThemeProvider>
  );
}

export default App;
