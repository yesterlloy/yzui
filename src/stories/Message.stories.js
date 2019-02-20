/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Message/index.scss';

import msgSuccess from '../components/Message/msg_success.html';
import msgWarn from '../components/Message/msg_warn.html';

storiesOf('Message 消息', module)
  .add('success', () => msgSuccess, {
    codes: msgSuccess,
  })
  .add('warn', () => msgWarn, {
    codes: msgWarn,
  });

