'use strict';

import { quizData } from './data.js';
import { router } from './router.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  router('start');
};

window.addEventListener('load', loadApp);
