
let score = 0
let current = 0
let time = 10
let timer 
const endGame = () => {
  document.getElementById('question').innerHTML = ''
  document.getElementById('result').textContent = `Score: ${score}`
  document.getElementById('scoreForm').className = ''
}
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

const renderQuestion = () => {
  document.getElementById('question').innerHTML = ''
  let qElem = document.createElement('div')
  qElem.innerHTML = `
  <h3>Question: ${questions[current].question}</h3>
  <ul class="list-group list-group-flush">
  <li class="list-group-item choice"
  data-value="${questions[current].choices[0]}">   ${questions[current].choices[0]} </li>
  <li class="list-group-item choice"
  data-value="${questions[current].choices[1]}">   ${questions[current].choices[1]} </li>
  <li class="list-group-item choice"
  data-value="${questions[current].choices[2]}">   ${questions[current].choices[2]} </li>
  <li class="list-group-item choice"
  data-value="${questions[current].choices[3]}">   ${questions[current].choices[3]} </li>
</ul>`


  document.getElementById('question').append(qElem)

}

document.getElementById('startQuiz').addEventListener('click', () => {
  document.getElementById('startQuiz').remove()
  timer = setInterval(() => {
    document.getElementById('time').textContent = `Time Remaining: ${time}`
    time--
    if (time < 0) {
      endGame()
      clearInterval(timer)
    }
  }, 1000)
  renderQuestion()
  
})

document.addEventListener('click', event => {
  if(event.target.classList.contains('choice')) {
    if(event.target.dataset.value === questions[current].answer) {
      score++
      time ++ 
     } 
     current ++
      
     if(current>= questions.length) {
       endGame()
       clearInterval(timer)
     } else {
        renderQuestion()
    
     }
}

})

document.getElementById('submitScore').addEventListener('click', event => {
  event.preventDefault()
  let initials = document.getElementById('initials').value
  let scores = JSON.parse(localStorage.getItem('scores')) || []
  scores.push({initials: initials,score: score})
  localStorage.setItem('scores', JSON.stringify(scores))
  
  scores.sort((a,e) => e.score - a.score)

  let tableElem = document.createElement('table')
  tableElem.className = 'table'
  tableElem.innerHTML = `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  `
  let tableBody = document.createElement('tbody')

  for(let i = 0; i < scores.length; i++){
    tableBody.innerHTML += `
    <tr>
    <td>${scores[i].initials}</td>
    <td>${scores[i].score}</td>
    </tr>
    `}
    tableElem.append(tableBody)
    document.getElementById('question').append(tableElem)
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