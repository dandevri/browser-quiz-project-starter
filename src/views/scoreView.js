'use strict';

/**
 * Create an RealTime Score Viewing element
 * @returns {Element}
 */
export const createScoreElement = (currentScore, totalQuestionNumber) => {
  const oldScoreElement = document.getElementById('currentScore')
  if (oldScoreElement) oldScoreElement.remove()
  const element = document.createElement('div');
  element.id = 'currentScore'
  element.classList.add("score");
  element.innerHTML = ` Current Score: 
    ${currentScore}/${totalQuestionNumber}
  `;
  return element;
};
