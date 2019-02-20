/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Button/index.scss';

import buttonDefault from '../components/Button/default.html';
import buttonPrimary from '../components/Button/primary.html';
import buttonWarn from '../components/Button/warn.html';
import buttonGhost from '../components/Button/ghost.html';
import buttonInline from '../components/Button/inline.html';

storiesOf('Button 按钮', module)
  .add('default', () => buttonDefault, {
    codes: buttonDefault,
  })
  .add('primary', () => buttonPrimary, {
    codes: buttonPrimary,
  })
  .add('warn', () => buttonWarn, {
    codes: buttonWarn,
  })
  .add('ghost', () => buttonGhost, {
    codes: buttonGhost,
  })
  .add('inline', () => buttonInline, {
    codes: buttonInline,
  })
;

