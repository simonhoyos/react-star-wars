import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../App';

import { Heading } from '.';

const stories = storiesOf('Heading', module);

stories.addDecorator(withKnobs);

stories.add('Heading', () => {
  const asValue = select(
    'Render As',
    {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
    },
    'h1',
    'Render'
  );

  const stylesValue = select(
    'Styles As',
    {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
    },
    'h1',
    'Render'
  );

  const colorValue = select(
    'Color',
    {
      darkRed: 'darkRed',
      red: 'red',
      lightRed: 'lightRed',
      darkGreen: 'darkGreen',
      green: 'green',
      lightGreen: 'lightGreen',
      black: 'black',
      darkGrey: 'darkGrey',
      grey: 'grey',
      lightGrey: 'lightGrey',
      white: 'white',
    },
    'black',
    'Render'
  );

  return (
    <ThemeProvider theme={theme}>
      <Heading
        as={asValue}
        styles={stylesValue}
        color={colorValue}
      >
        {text('text', 'Hello world!', 'Render')}
      </Heading>
    </ThemeProvider>
  );
});
