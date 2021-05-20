
let score = 0
let current = 0
let time = 40
let timer
let questions = [
  {
    question: 'What attribute should always be attached to an image?',
    choices: ['true', 'alt', 'pic', 'original'],
    answer: 'alt'
  },
  {
    question: 'Which tag is a HTML extention that can enclose JavaScript?',
    choices: ['div', 'body', 'script', 'javascript'],
    answer: 'script'
  },
  {
    question: 'How do you start a for loop in JavaScript?',
    choices: ['because', 'for', 'if', 'else'],
    answer: 'for'
  },
  {
    question: 'What is the correct JavaScript syntax to log something in the console?',
    choices: ['console.log', 'log', 'log.consol', 'console'],
    answer: 'console.log'
  },
  {
    question: 'How do you test for a specific condition in JavaScript?',
    choices: ['check', 'const', 'let', 'if'],
    answer: 'if'
  },
]



document.getElementById('startQuiz').addEventListener('click', () => {
  let qElem = document.createElement('div')
  qElem.innerHTML = `
  <h3>Question: ${questions[current].question}</h3>
  <ul class="list-group list-group-flush">
  <li class="list-group-item choice"> ${questions[current].choices[0]} </li>
  <li class="list-group-item choice"> ${questions[current].choices[1]} </li>
  <li class="list-group-item choice"> ${questions[current].choices[2]} </li>
  <li class="list-group-item choice"> ${questions[current].choices[3]} </li>
</ul>`


document.getElementById('question').append(qElem)
  
})

    
   
      
 
      
      




  // let listItem = document.createElement("li")
  // listItem.innerText = "this is a list item"
  // // qElem.listItem)
  // qElem.innerText = `fish tacos`
  // questionBox.appendChild(qElem)



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