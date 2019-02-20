/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Tab/index.scss';

import tabBar from '../components/Tab/tabBar.html';
import navBar from '../components/Tab/navBar.html'

storiesOf('Tab 导航', module)
  .add('TabBar 底部导航', () => tabBar, {
    codes: tabBar,
  })
  .add('NavBar 顶部导航', () => navBar, {
    codes: navBar,
  })
;

