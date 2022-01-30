'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/
export const givenAnswers = [];

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
        d: 'const, array, let',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        'Which of the following is true about variable naming conventions in JavaScript?',
      answers: {
        a:
          'JavaScript variable names must begin with a letter or the underscore character.',
        b: 'JavaScript variable names are case sensitive.',
        c: 'Both of the above.',
        d: 'None of the above',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'dummies.com',
          href:
            'https://www.dummies.com/article/technology/programming-web-design/javascript/naming-javascript-variables-142522',
        },
        {
          text: 'w3School',
          href: 'https://www.w3schools.com/js/js_conventions.asp',
        },
      ],
    },
    {
      text:
        'Which of the following is the correct syntax to print a page using JavaScript?',
      answers: {
        a: 'window.print()',
        b: 'browser.print()',
        c: 'navigator.print()',
        d: 'document.print()',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'tutorialspoint.com',
          href:
            'https://www.tutorialspoint.com/How-to-print-a-page-using-JavaScript#:~:text=To%20print%20a%20page%20in,printer%20to%20select%20for%20printing.',
        },
        {
          text: 'w3School',
          href: 'https://www.w3schools.com/jsref/met_win_print.asp',
        },
      ],
    },
    {
      text:
        'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
      answers: {
        a: 'getIndex()',
        b: 'location()',
        c: 'indexOf()',
        d: 'None of the above()',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
        },
        {
          text: 'w3School',
          href: 'https://www.w3schools.com/jsref/jsref_indexof.asp',
        },
      ],
    },
    {
      text:
        'Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?',
      answers: {
        a: 'toExponential()',
        b: 'toFixed()',
        c: 'toPrecision()',
        d: 'toLocaleString()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed',
        },
        {
          text: 'w3School',
          href: 'https://www.w3schools.com/jsref/jsref_tofixed.asp',
        },
      ],
    },
    {
      text:
        'Which of the following function of String object is used to match a regular expression against a string?',
      answers: {
        a: 'concat()',
        b: 'match()',
        c: 'search()',
        d: 'replace()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match',
        },
        {
          text: 'w3School',
          href: 'https://www.w3schools.com/jsref/jsref_match.asp',
        },
      ],
    },
    {
      text:
        'Which of the following function of String object returns a string representing the specified object?',
      answers: {
        a: 'toLocaleUpperCase()',
        b: 'toUpperCase()',
        c: 'toString()',
        d: 'substring()',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString',
        },
        {
          text: 'w3School',
          href: 'https://www.w3schools.com/jsref/jsref_tostring_string.asp',
        },
      ],
    },
    {
      text:
        'Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?',
      answers: {
        a: 'pop()',
        b: 'push()',
        c: 'join()',
        d: 'map()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
        },
        {
          text: 'w3School',
          href: 'https://www.w3schools.com/jsref/jsref_push.asp',
        },
      ],
    },
    {
      text: 'Inside which HTML element do we put the JavaScript?',
      answers: {
        a: 'scripting',
        b: 'javascript',
        c: 'js',
        d: 'script',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'tutorialspoint.com',
          href:
            'https://www.tutorialspoint.com/Is-JavaScript-a-case-sensitive-language#:~:text=JavaScript%20is%20a%20case%2Dsensitive,a%20consistent%20capitalization%20of%20letters.',
        },
        {
          text: 'OREILLY',
          href:
            'https://www.oreilly.com/library/view/javascript-the-definitive/0596000480/ch02s02.html',
        },
      ],
    },
  ],
};
