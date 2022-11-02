import React, { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './fonts.css';
import { COLORS } from '@constants';

const GlobalStyles = createGlobalStyle`
   * {
     font-family: "Poppins", sans-serif;
   }

   p {
      line-height: 1.8;
   }

   body {
      min-height: 100vh;
      overflow-x: hidden;
      background: ${COLORS.background};
   }

`;

const App = ({ children }) => {
   return (
      <Fragment>
         {children}

         <GlobalStyles />
      </Fragment>
   );
};

export default App;
