/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Upload/index.scss';

import uploadHtml from '../components/Upload/index.html';

storiesOf('Upload 上传', module)
  .add('default', () => uploadHtml, {
    codes: uploadHtml,
  })
;

