
export const createTotalScoreElement = (quizData, totalScore = 0) => {
    let isSuccess = false;
    if (totalScore < quizData.questions.length / 2) {
        isSuccess = false;
    }
    const scoreElement = document.createElement('h1');
    scoreElement.innerHTML = `Your SCORE is ${totalScore}. You are ${isSuccess ? 'Successful' : 'Failed'}`;
    return scoreElement;
}

export const createAnswersContainer = (quizData, givenAnswers) => {
    const resultContainerElement = document.createElement('div');
    quizData.questions.forEach((question, index) => {

        const answersContainerElement = document.createElement('div');
        answersContainerElement.style.borderBottom = '2px dashed red';
        answersContainerElement.style.width = '100%';
        answersContainerElement.style.padding = '30px';

        const questionTextElement = document.createElement('p');
        questionTextElement.innerHTML = `${index + 1}. ${question.text}`

        const questionCorrectAnswerElement = document.createElement('p');
        questionCorrectAnswerElement.innerHTML = `Correct answer : ${question.answers[question.correct]}`

        const questionGivenAnswerElement = document.createElement('p');
        questionGivenAnswerElement.innerHTML =
            `Your answer : ${question.answers[givenAnswers[index]] || "Unanswered"}`

        answersContainerElement.appendChild(questionTextElement);
        answersContainerElement.appendChild(questionCorrectAnswerElement);
        answersContainerElement.appendChild(questionGivenAnswerElement);

        resultContainerElement.appendChild(answersContainerElement);
    });
    return resultContainerElement;
}

