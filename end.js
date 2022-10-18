const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = document.querySelector('#mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highsScores')) || []

const MAX_HIGH_SCORES = 10

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    savedScoreBtn.disabled = !username.value
})

saveScoreBtn = e =>{
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores'.JSON.stringify(highScores))
    window.location.assign('/')
}