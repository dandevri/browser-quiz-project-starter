'use strict';

import { initQuestionPage } from './pages/questionPage.js';
import { initStartPage } from './pages/startPage.js';
import { USER_INTERFACE_ID } from './constants.js';
import { showResultPage } from './pages/resultPage.js';

export const router = (page, totalScore) => {

  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  userInterfaceElement.innerHTML = '';

  switch (page) {
    case 'start':
      initStartPage(userInterfaceElement);
      break;
    case 'question':
      initQuestionPage(userInterfaceElement);
      break;
     case 'result':
      showResultPage(userInterfaceElement, totalScore);
  }
};