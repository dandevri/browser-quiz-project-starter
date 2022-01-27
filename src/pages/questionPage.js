'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SHOW_CORRECT_ANSWER_BUTTON_ID } from '../constants.js';
import { TIMER_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createScoreElement } from '../views/scoreView.js';
import { createTimerElement } from '../views/timerView.js';
import { quizData, givenAnswers } from '../data.js';
import { router } from '../router.js';

let totalScore = 0;
let remainingTime = 100;

export const initQuestionPage = (userInterface) => {
  const currentScore = createScoreElement(
    totalScore,
    quizData.questions.length
  );
  userInterface.appendChild(currentScore);

  function timerDisplay() {
    const timer = createTimerElement(remainingTime);
    userInterface.appendChild(timer);
  }
  setInterval(timerDisplay, 1000);

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

  function selectAnswer(e) {
    const answer = e.target.id;
    givenAnswers[quizData.currentQuestionIndex] = answer;
    if (answer === currentQuestion.correct) {
      totalScore++;
      e.target.style.backgroundColor = '#2FE82F';
      answersListElement.style.pointerEvents = 'none';
    } else {
      e.target.style.backgroundColor = 'red';
      answersListElement.style.pointerEvents = 'none';
    }
    const currentScore = createScoreElement(
      totalScore,
      quizData.questions.length
    );
    userInterface.appendChild(currentScore);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SHOW_CORRECT_ANSWER_BUTTON_ID)
    .addEventListener('click', showCorrectAnswer);

  document
    .getElementById(ANSWERS_LIST_ID)
    .addEventListener('click', selectAnswer);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;

  if (quizData.currentQuestionIndex === quizData.questions.length) {
    router('result', totalScore);
  } else router('question');
};

export const clock = () => {
  const countDown = () => {
    remainingTime--;
    // if (timeLeft === 0) {
    //   gameOver();
    // }
  };
  setInterval(countDown, 1000);
};
