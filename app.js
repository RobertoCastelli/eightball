// VARIABLES
let question = document.getElementById('input-question')
let displayType = document.getElementById('display-type')
let displayAnswer = document.getElementById('display-answer')
let displayQuestion = document.getElementById('display-question')
let btnSubmit = document.getElementById('btnSubmit')
let image = document.getElementById('display-ball')
let audio = document.getElementById('audio')

// INIT STATE
let answer = ''
let type = ''
displayType.style.opacity = 0
displayQuestion.style.opacity = 0
image.src = 'img/ballfront.png'

// CORE 
btnSubmit.addEventListener('click', () => {
    if (question.value == '') {
        displayQuestion.innerText = "place your riddle"
        displayType.innerText = 'don\'t waste my time'
        displayAnswer.innerText = 'fool'
        image.classList.add('appear')
        image.src = 'img/ballback.png'
        displayType.style.opacity = 1
        displayQuestion.style.opacity = 1
    } else {
        image.src = 'img/ballfront.png'
        image.classList.add('shake')
        image.classList.remove('appear')
        displayQuestion.classList.add('appear')
        displayType.classList.add('appear')
        question.style.opacity = 0
        displayType.style.opacity = 1
        displayQuestion.style.opacity = 1
        let quest = question.value
        question.value = ''
        displayType.innerText = "I'm thinking..." 
        displayQuestion.innerText = quest
        audio.play()
        setTimeout(() => {     
            image.classList.remove('shake')
            image.classList.add('appear')
            displayQuestion.classList.remove('appear')
            displayType.classList.remove('appear')
            image.src = 'img/ballback.png'
            question.style.opacity = 1
            displayType.innerText = type
            displayAnswer.innerText = answer
        }, 2500);
        getData(quest)
    }   
})

// GET API DATA
async function getData(request) {
    try {
        let uri = encodeURIComponent(request);
        let resp = await fetch("https://8ball.delegator.com/magic/JSON/" + uri)
        let json = await resp.json()
        answer = json.magic.answer
        type = json.magic.type
        console.log(json.magic.answer)
    } catch (err) {
        console.log(err, "Some error occurred")
    }
}
