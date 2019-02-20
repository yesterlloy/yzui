/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Modal/index.scss';

import layout_1 from '../components/Modal/layout_1.html';
import layout_2 from '../components/Modal/layout_2.html';
import layout_3 from '../components/Modal/layout_3.html';
import layout_4 from '../components/Modal/layout_4.html';

storiesOf('Modal 弹出框', module)
  .add('layout_1', () => layout_1, {
    codes: layout_1,
  })
  .add('layout_2', () => layout_2, {
    codes: layout_2,
  })
  .add('layout_3', () => layout_3, {
    codes: layout_3,
  })
  .add('layout_4', () => layout_4, {
    codes: layout_4,
  })
;

