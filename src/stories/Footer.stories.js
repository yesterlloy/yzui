/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Footer/index.scss';

import nolinkHtml from '../components/Footer/nolink.html';
import linkHtml from '../components/Footer/link.html';
import multiLinkHtml from '../components/Footer/multilink.html';
import fixedHtml from '../components/Footer/fixed.html';

storiesOf('Footer 页脚', module)
  .add('无链接', () => nolinkHtml, {
    codes: nolinkHtml,
  })
  .add('底部链接', () => linkHtml, {
    codes: linkHtml,
  })
  .add('多个链接', () => multiLinkHtml, {
    codes: multiLinkHtml,
  })
  .add('固定底部', () => fixedHtml, {
    codes: fixedHtml,
  })
;

