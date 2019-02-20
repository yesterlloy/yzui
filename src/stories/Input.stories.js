/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Input/index.scss';

import formHtml from '../components/Input/form.html';
import radioHtml from '../components/Input/radio.html';
import checkboxHtml from '../components/Input/checkbox.html';
import switchHtml from '../components/Input/switch.html';

storiesOf('Input 输入框', module)
  .add('form', () => formHtml, {
    codes: formHtml,
  })
  .add('radio', () => radioHtml, {
    codes: radioHtml,
  })
  .add('checkbox', () => checkboxHtml, {
    codes: checkboxHtml,
  })
  .add('switch', () => switchHtml, {
    codes: switchHtml,
  })
;

