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
      //console.log(correctAnswer);
    correctAnswer.classList.add('correct');
  };

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SHOW_CORRECT_ANSWER_BUTTON_ID)
    .addEventListener('click', showCorrectAnswer);

  //   const selectAnswer = document.getElementById(ANSWERS_LIST_ID);
  //   selectAnswer.addEventListener('click', (e) => {
  //     const answer = e.target.id;
  //     if (answer === currentQuestion.correct) {
  //       e.target.style.backgroundColor = '#2fe82f';
  //     } else {
  //       e.target.style.backgroundColor = 'red';
  //       // document.getElementById(currentQuestion.correct).style.backgroundColor =
  //       //   '#2fe82f';
  //     }
  //     answersListElement.style.pointerEvents = 'none';
  // });
  function  selectAnswer (e){
     const answer = e.target.id;
    if (answer === currentQuestion.correct) {
      e.target.style.backgroundColor = '#2fe82f';
    } else {
      e.target.style.backgroundColor = 'red';
      // document.getElementById(currentQuestion.correct).style.backgroundColor =
        // '#2fe82f';
    }
    answersListElement.style.pointerEvents = 'none';

  }
  document
  .getElementById(ANSWERS_LIST_ID)
 //.getElementsByTagName("li")
 .addEventListener('click', selectAnswer)


 
};
const nextQuestion = () => {
  quizData.currentQuestionIndex++;

  router('question');
};
