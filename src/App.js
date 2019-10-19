import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar';

export const theme = {
  darkRed: '#7F0308',
  red: '#BF3035',
  lightRed: '#E6ACAE',
  darkGreen: '#00330D',
  green: '#198033',
  lightGreen: '#99CCA6',
  black: '#1A1A1A',
  darkGrey: '#404040',
  grey: '#808080',
  lightGrey: '#C2C2C2',
  white: '#FCFCFC',
  shadow: '0px 15px 30px #C2C2C2',
  shadowHover: '0px 30px 60px #C2C2C2',
  heading1: '80px',
  heading2: '60px',
  heading3: '30px',
  heading4: '24px',
  large: '1.5em',
  medium: '1.25em',
  regular: '1em',
  small: '0.75em',
  bold: 'bold',
  normal: 'normal',
  semiBold: 600,
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', Helvetica, sans-serif;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.red};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
