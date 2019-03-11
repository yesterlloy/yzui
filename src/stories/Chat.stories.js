/* global document */
import { storiesOf } from '@storybook/html';
import '../components/Chat/index.scss';
import '../components/Icons/index.scss';

import chatHtml from '../components/Chat/index.html';

storiesOf('Chat 聊天', module)
  .add('default', () => {
    let container = document.createElement('div')
    container.innerHTML = chatHtml

    let btn = container.querySelector('#chatactions')
    let picker = container.querySelector('#chatactionsPicker')
    function toggleActions () {
      if (picker.classList.contains('show')) {
        picker.classList.add('hide')
        picker.classList.remove('show')
      } else if (picker.classList.contains('hide')) {
        picker.classList.add('show')
        picker.classList.remove('hide')
      }
    }
    btn.addEventListener('click', toggleActions)
    return container
  }, {
    codes: chatHtml,
  })
;
