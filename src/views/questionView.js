'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SHOW_CORRECT_ANSWER_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const getQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}"></ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}" class="btn">
      Next question
    </button>

    <button id="${SHOW_CORRECT_ANSWER_BUTTON_ID}" class="btn">Show the answer</button>
  `;

  return element;
};
