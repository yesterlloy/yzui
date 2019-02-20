/* global document */
import { storiesOf } from '@storybook/html';
import '../components/SearchBar/index.scss';

import searchBar from '../components/SearchBar/index.html';
import searchResult from '../components/SearchBar/result.html';

storiesOf('SearchBar 搜索框', module)
  .add('default', () => searchBar, {
    codes: searchBar,
  })
  .add('result', () => searchResult, {
    codes: searchResult,
  })
;

