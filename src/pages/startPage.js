import { router } from '../router.js';
import { createStartElement } from '../views/startView.js';
import { START_GAME_BUTTON_ID } from '../constants.js';
import { clock } from './questionPage.js';

export const initStartPage = (userInterface) => {
  const startElement = createStartElement();
  userInterface.appendChild(startElement);

  const sound = document.querySelector('#ticking-sound');

  function startSound() {
    sound.play();
  }

  document
    .getElementById(START_GAME_BUTTON_ID)
    .addEventListener('click', startSound);

  document
    .getElementById(START_GAME_BUTTON_ID)
    .addEventListener('click', startGame);

  document
    .getElementById(START_GAME_BUTTON_ID)
    .addEventListener('click', clock);

  function startGame() {
    router('question');
  }
};
