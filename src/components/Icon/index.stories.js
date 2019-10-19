import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../App';

import { Icon } from '.';

const stories = storiesOf('Logo', module);

stories.add('Logo', () => {
  return (
    <ThemeProvider theme={theme}>
      <Icon />
    </ThemeProvider>
  );
});
