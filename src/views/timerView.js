'use strict';

import { TIMER_ID } from '../constants.js';

/**
 * Create an RealTime Timer element
 * @returns {Element}
 */

export const createTimerElement = (remainingTime) => {
  let element;
  element = document.createElement('div');
  element.id = TIMER_ID;
  element.classList.add('timer');
  element.innerHTML = remainingTime--;
  return element;
};
