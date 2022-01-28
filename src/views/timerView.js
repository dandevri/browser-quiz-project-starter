'use strict';

import { TIMER_ID } from '../constants.js';

/**
 * Create an RealTime Timer element
 * @returns {Element}
 */

export const createTimerElement = (remainingTime) => {
  let element;
  const oldTimerElement = document.getElementById(TIMER_ID);
  if (oldTimerElement) oldTimerElement.remove();
  element = document.createElement('div');
  element.id = TIMER_ID;
  element.classList.add('timer');
  if (remainingTime === 0) {
    element.innerHTML = 'the time is up!';
  } else {
    element.innerHTML = remainingTime;
  }
 
  return element;
};
