let question = document.getElementById('input-question')
let displayQuestion = document.getElementById('display-question')
let btnSubmit = document.getElementById('btnSubmit')
let image = document.getElementById('display-ball')

image.src = 'img/ballfront.png'

btnSubmit.addEventListener('click', () => {
    let quest = question.value
    question.value = ''
    displayQuestion.innerText = quest
    getData(quest)
})

async function getData(request) {
    try {
        let uri = encodeURIComponent(request);
        let resp = await fetch("https://8ball.delegator.com/magic/JSON/" + uri)
        let json = await resp.json()
        console.log(json.magic.answer)
    } catch (err) {
        console.log(err, "Some error occurred")
    }
}
