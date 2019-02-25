/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Popover/index.scss';

import style1 from '../components/Popover/index.html';

storiesOf('Popover 操作列表', module)
  .add('default', () => style1, {
    codes: style1,
  })
;

