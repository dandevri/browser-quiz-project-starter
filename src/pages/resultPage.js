import { quizData, givenAnswers } from '../data.js';
import { createAnswersContainer, createTotalScoreElement } from '../views/resultPageView.js';

export const showResultPage = (userInterfaceElement, totalScore) => {
    const scoreElement = createTotalScoreElement(quizData, totalScore);
    userInterfaceElement.appendChild(scoreElement);
    userInterfaceElement.classList.remove("centered");
    userInterfaceElement.classList.add("grid");

    const answersContainer = createAnswersContainer(quizData, givenAnswers)
    userInterfaceElement.appendChild(answersContainer);
}