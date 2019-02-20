/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Icons/index.scss';
import '../components/Layout/index.scss';
import '../components/Icons/iconfont-demo.scss';

import iconsHtml from '../components/Icons/icons.html';
import iconfontHtml from '../components/Icons/iconfont-symbol.html';
import * as iconfontJs from '../components/Icons/iconfont.js';

console.log('iconfontJs', iconfontJs)

storiesOf('Icons 图标', module)
  .add('default', () => iconsHtml, {
    codes: iconsHtml,
  })
  .add('iconfont', () => iconfontHtml, {
    codes: iconfontHtml,
    notes: '需要先进入iconfont.js并初始化icon样式'
  })
;

