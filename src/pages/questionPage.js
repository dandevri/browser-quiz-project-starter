'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SHOW_CORRECT_ANSWER_BUTTON_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData, givenAnswers } from '../data.js';
import { router } from '../router.js';

let totalScore = 0;

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
    answersListElement.style.pointerEvents = 'none';
  };

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SHOW_CORRECT_ANSWER_BUTTON_ID)
    .addEventListener('click', showCorrectAnswer);

  document.getElementById(ANSWERS_LIST_ID).addEventListener('click', showAnswers());


  function showAnswers() {
    return (e) => {
      const answer = e.target.id;
      givenAnswers[quizData.currentQuestionIndex] = answer;
      if (answer === currentQuestion.correct) {
        totalScore++;
        e.target.style.backgroundColor = '#2fe82f';
      } else {
        e.target.style.backgroundColor = 'red';
        document.getElementById(currentQuestion.correct).style.backgroundColor =
          '#2fe82f';
      }
    };
  }
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  if (quizData.currentQuestionIndex === quizData.questions.length) {
    router('result', totalScore);
  }
  else router('question');
};
