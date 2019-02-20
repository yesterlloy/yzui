import { configure, addParameters, addDecorator } from '@storybook/html';
import { showCode } from 'addon-html';

addDecorator(showCode);

addParameters({
  options: {
    name: 'yezi ui',
    url: '',
    goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: false,
    sortStoriesByKind: false,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
  },
});

function loadStories() {
  // automatically import all story js files that end with *.stories.js
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
