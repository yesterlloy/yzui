/* global document */
import { storiesOf } from '@storybook/html';
import '../components/ActionSheet/index.scss';

import layout_1 from '../components/ActionSheet/style1.html';
import layout_2 from '../components/ActionSheet/style2.html';

storiesOf('ActionSheet 操作列表', module)
  .add('style1', () => {
    let container = document.createElement('div')
    container.innerHTML = layout_1

    let btn = container.querySelector('#showIOSActionSheet')
    let cancelBtn = container.querySelector('#iosActionsheetCancel')
    let iosMask = container.querySelector('#iosMask')
    let iosActionSheet = container.querySelector('#iosActionsheet')

    function showas() {
      iosMask.style.display = 'block'
      iosActionSheet.classList.add('yz-actionsheet_toggle')
    }
    function hideas() {
      iosMask.style.display = 'none'
      iosActionSheet.classList.remove('yz-actionsheet_toggle')
    }
    btn.addEventListener('click', showas)
    cancelBtn.addEventListener('click', hideas)
    container.querySelector('.yz-actionsheet__menu').addEventListener('click', hideas)

    return container
  }, {
    codes: layout_1,
  })
  .add('style2', () => {
    let container = document.createElement('div')
    container.innerHTML = layout_2

    return container
  }, {
    codes: layout_2,
  })
;

