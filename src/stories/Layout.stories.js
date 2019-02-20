/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Layout/index.scss';

import flexHtml from '../components/Layout/flex.html'
import gridHtml from '../components/Layout/grid.html'

storiesOf('Layout 布局', module)
  .add('flex', () => flexHtml, {
    codes: flexHtml,
  })
  .add('grid', () => gridHtml, {
    codes: gridHtml,
  });

