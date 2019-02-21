/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Navigation/index.scss';

import tabBar from '../components/Navigation/tabBar.html';
import navBar from '../components/Navigation/navBar.html'
import tabs from '../components/Navigation/tabs.html'

storiesOf('Navigation 导航', module)
  .add('TabBar 标签栏', () => tabBar, { codes: tabBar })
  .add('NavBar 导航栏', () => navBar, { codes: navBar })
  .add('Tabs 标签页', () => tabs, { codes: tabs })
;

