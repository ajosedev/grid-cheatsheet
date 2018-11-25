import React from "react";
import { ThemeProvider } from 'styled-components';

import Header from '../components/header';
import Main from './main';
import IE from './IE';

import '../index.css';

const theme = {
  one: '#5D001E',
  two: '#E3E2DF',
  three: '#E3AFBC',
  four: '#9A1750',
  five: '#EE4C7C',
};

// TODO - routing
// TODO - use React.Fragment
const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      {/* <Main /> */}
      <IE />
    </div>
  </ThemeProvider>
)

export default App;
