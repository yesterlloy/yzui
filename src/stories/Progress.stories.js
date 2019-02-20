/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Progress/index.scss';

import progressHtml from '../components/Progress/index.html';

storiesOf('Progress 进度条', module)
  .add('default', () => progressHtml, {
    codes: progressHtml,
  })
;

