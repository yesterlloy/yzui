/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Chat/index.scss';
import '../components/Icons/index.scss';

import chatHtml from '../components/Chat/index.html';

storiesOf('Chat 聊天', module)
  .add('default', () => chatHtml, {
    codes: chatHtml,
  })
;
