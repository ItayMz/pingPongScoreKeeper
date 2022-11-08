const targetScore = document.querySelector('#max-score')
const btnReset=document.querySelector('#reset')

const p1 = {
    score: 0,
    button: document.querySelector('#btnP1'),
    display: document.querySelector('#p1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#btnP2'),
    display: document.querySelector('#p2')
}




p1.button.addEventListener('click',()=>updateScores(p1,p2))
p2.button.addEventListener('click',()=>updateScores(p2,p1))
btnReset.addEventListener('click',reset)
targetScore.addEventListener('change', reset)


function updateScores(player, opponent){
   player.score++
   player.display.textContent = player.score
   isGameOver() && declareWinner(player,opponent)

}

function isGameOver(){
    return p1.score=== parseInt(targetScore.value) || p2.score=== parseInt(targetScore.value)
}

function declareWinner(player, opponent){
    player.display.classList.add('has-text-success')
    opponent.display.classList.add('has-text-danger')
    player.button.disabled = true
    opponent.button.disabled = true

    
}

function reset(){
    for(let p of [p1,p2]){
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false
    }
}

