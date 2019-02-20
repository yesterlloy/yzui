/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Loading/index.scss';

import loadingMore from '../components/Loading/index.html';

storiesOf('Loading 加载更多', module)
  .add('default', () => loadingMore, {
    codes: loadingMore,
  })
;

