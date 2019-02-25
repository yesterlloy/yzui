/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Panel/index.scss';
import '../style/base/reset.scss';

import panelMedia from '../components/Panel/media.html';
import panelText from '../components/Panel/text.html';
import panelTextExtra from '../components/Panel/textExtra.html';
import panelMicroMedia from '../components/Panel/microMedia.html';

storiesOf('Panel 面板', module)
  .add('图片组合列表', () => panelMedia, {
    codes: panelMedia,
  })
  .add('文字组合列表', () => panelText, {
    codes: panelText,
  })
  .add('小图文组合列表', () => panelMicroMedia, {
    codes: panelMicroMedia,
  })
  .add('文字列表附来源', () => panelTextExtra, {
    codes: panelTextExtra,
  })
;

