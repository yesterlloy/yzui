/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Mask/index.scss';

import maskHtml from '../components/Mask/index.html';

storiesOf('Mask 遮罩层', module)
  .add('default', () => maskHtml, {
    codes: maskHtml,
  })
;

