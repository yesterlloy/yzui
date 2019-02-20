/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Toast/index.scss';

import successHtml from '../components/Toast/success.html';
import loadingHtml from '../components/Toast/loading.html';

storiesOf('Toast 提示', module)
  .add('success', () => successHtml, {
    codes: successHtml,
  })
  .add('loading', () => loadingHtml, {
    codes: loadingHtml,
  })
;

