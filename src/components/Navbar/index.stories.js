import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../App';

import { Navbar } from '.';

const stories = storiesOf('Navbar', module);

stories.add('Navbar', () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
});
