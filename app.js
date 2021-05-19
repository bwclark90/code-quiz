let current = 0
var questionBox = document.getElementById('question')
var questionText = document.getElementById('questionNum')
let score = 0

let questions = [
  {
    question: 'Which tag is an HTML extention that can enclose Javascript?',
    choices: ['<div>', '<body>', '<script>', '<javascript>'],
    answer: '<script>'
  },
  {
    question: 'What attribute should always be attached to an image? ',
    choices: ['true', 'alt', 'pic', 'original'],
    answer: 'alt'
  },
  {
    question: 'Which tag is an HTML extention that can enclose JavaScript?',
    choices: ['<div>', '<body>', '<script>', '<javascript>'],
    answer: '<script>'
  },
  {
    question: 'What is the correct JavaScript syntax to log something in the console?',
    choices: ['console.log()', 'log()', 'log.console()', 'console()'],
    answer: 'console.log()'
  },
  {
    question: 'How do you test for a specific condition in JavaScript?',
    choices: ['check', 'const', 'let', 'if'],
    answer: 'if'
  },
]

document.getElementById('startQuiz').addEventListener('click', () => {
  console.log("click works")
  questionBox.classList.remove("hide")

  questionText.innerText = questions[current].question

  for (let i = 0; i < 4; i++) {
    document.getElementById(`answers${i}`).innerText = questions[current].choices[i]
  }

  


  current = current += 1





  // var listItem = document.createElement("li")
  // listItem.innerText = "this is a list item"
  // // qElem.listItem)
  // qElem.innerText = `fish tacos`
  // questionBox.appendChild(qElem)

})

// user is greeted with a start quiz button
// user clicks start quiz button
  // use event listeners to handle the click
// user greeted by quiz questions
  // use for loop
  // generate html elements for each question
//if question wrong minus points
  //minus points from current score
  // use if statement to compare answer to correct answer
// if correct add points
  // use if statement to compare answer to correct answer
  // add to the current score
// store high scores in local storage 
  // localStorage.(google later) 