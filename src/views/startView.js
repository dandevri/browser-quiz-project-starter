import { START_GAME_BUTTON_ID } from '../constants.js';

export const createStartElement = () => {
  const element = document.createElement('button');
  element.id = START_GAME_BUTTON_ID
  element.innerHTML = String.raw`
  START
  `;
  return element;
};
