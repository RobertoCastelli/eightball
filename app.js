let question = document.getElementById('question')
let response = document.getElementById('response')
let btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', () => {
    let quest = question.value
    question.value = ''
    getData(quest)
})

async function getData(request) {
    try{
        let uri = encodeURIComponent(request);
        let resp = await fetch("https://8ball.delegator.com/magic/JSON/" + uri)
        let json = await resp.json()
        response.innerText = json.magic.answer
        console.log(json.magic.answer)
    } catch (err) {
        console.log(err, "Some error occurred")
    }
}

