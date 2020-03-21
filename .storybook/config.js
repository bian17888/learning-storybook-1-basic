import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'

import '../bootstrap-reboot.min.css';
import '../bootstrap.css';
import '../bootstrap-grid.css';
import '../main.css';

import crfTheme from './crfTheme'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// 
addParameters({
  options: {
    theme: crfTheme
  }
})

// config withInfo
addDecorator(withInfo({
  inline: false
}));

configure(loadStories, module);
