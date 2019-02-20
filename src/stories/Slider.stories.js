/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Slider/index.scss';

import sliderHtml from '../components/Slider/index.html';

storiesOf('Slider 滑块', module)
  .add('default', () => sliderHtml, {
    codes: sliderHtml,
  })
;

