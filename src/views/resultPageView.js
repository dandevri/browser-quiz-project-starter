export const createTotalScoreElement = (quizData, totalScore = 0) => {
  let isSuccess = true;
  if (totalScore < quizData.questions.length / 2) {
    isSuccess = false;
  }
  const scoreElement = document.createElement('h1');
  scoreElement.classList.add('title');
  scoreElement.innerHTML = `Your SCORE is ${totalScore}. You ${
    isSuccess ? 'Passed' : 'Failed'
  }!`;
  return scoreElement;
};

export const createAnswersContainer = (quizData, givenAnswers) => {
  const resultContainerElement = document.createElement('div');
  let counter = 0;
  quizData.questions.forEach((question) => {
    const answersContainerElement = document.createElement('div');
    answersContainerElement.classList.add('item-result');

    const questionTextElement = document.createElement('p');
    questionTextElement.innerHTML = `${counter + 1}. ${question.text}`;

    const questionCorrectAnswerElement = document.createElement('p');
    questionCorrectAnswerElement.innerHTML = `Correct answer : ${
      question.answers[question.correct]
    }`;

    const questionGivenAnswerElement = document.createElement('p');
    questionGivenAnswerElement.innerHTML = `Your answer : ${
      givenAnswers[counter] || 'Unanswered'
    }`;

    const questionLinkElement = document.createElement('p');
    questionLinkElement.innerHTML = String.raw`<a href="${question.links[0].href}">Learn More</a>`;

    answersContainerElement.appendChild(questionTextElement);
    answersContainerElement.appendChild(questionCorrectAnswerElement);
    answersContainerElement.appendChild(questionGivenAnswerElement);
    answersContainerElement.appendChild(questionLinkElement);

    resultContainerElement.appendChild(answersContainerElement);
    counter++;
  });
  return resultContainerElement;
};
