'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SHOW_CORRECT_ANSWER_BUTTON_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { router } from '../router.js';

export const initQuestionPage = (userInterface) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = getQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  let answerNumber;
  const showCorrectAnswer = () => {
    switch (currentQuestion.correct) {
      case 'a':
        answerNumber = 1;
        break;
      case 'b':
        answerNumber = 2;
        break;
      case 'c':
        answerNumber = 3;
        break;
      case 'd':
        answerNumber = 4;
        break;
    }

    const correctAnswer = answersListElement.querySelector(
      `li:nth-child(${answerNumber})`
    );
    correctAnswer.classList.add('correct');
  };

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SHOW_CORRECT_ANSWER_BUTTON_ID)
    .addEventListener('click', showCorrectAnswer);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;

  router('question');
};
