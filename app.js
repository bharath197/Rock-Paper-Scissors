function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1;
    if (n == 1) {
        return 'rock'
    }
    else if (n == 2) {
        return 'paper'
    }
    else {
        return 'sciccors'
    }
}

function playRound() {
    round += 1
    console.log(round)
    if (round == 5) {
        declareWinner();

    }
    else if (round > 5) {
        return
    }
    let computerSelection = getComputerChoice();
    let playerSelection = this.value.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'sciccors'
        || playerSelection === 'sciccors' && computerSelection === 'paper'
        || playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('player wins')
        playerscore += 1
        player.textContent = player.textContent.slice(0, -1) + playerscore
    }
    else if (playerSelection === computerSelection) {
        console.log('draw')
    }
    else {
        console.log('computer wins');
        computerscore += 1
        comp.textContent = comp.textContent.slice(0, -1) + computerscore
    }
}

function declareWinner() {
    const para = document.createElement('p')
    para.setAttribute('id', 'winner')
    para.textContent = ''
    if (computerscore > playerscore) para.textContent += `computer wins`
    else if (playerscore > computerscore) para.textContent += `player wins`
    else para.textContent = 'Match draw'
    div.appendChild(para)
    reset()
}

function reset() {
    const resetbutton = document.createElement('button')
    resetbutton.textContent = 'reset'
    div.appendChild(resetbutton)
    resetbutton.addEventListener('click', () => {
        round = 0
        playerscore = 0
        computerscore = 0
        comp.textContent = `computer score is 0`
        player.textContent = `player score is 0`
        div.removeChild(resetbutton)
        const para = document.querySelector('#winner')
        div.removeChild(para)
    })
}

let playerscore = 0
let computerscore = 0
let round = 0

const btns = document.querySelectorAll('button')
const body = document.querySelector('body');
const div = document.createElement('div')

const comp = document.createElement('p')
comp.setAttribute('id', 'computer-score')
comp.textContent = `computer score is 0`

const player = document.createElement('p')
player.setAttribute('id', 'player-score')
player.textContent = `player score is 0`

body.appendChild(div)
div.appendChild(comp)
div.appendChild(player)

btns.forEach((btn) => {
    btn.addEventListener('click', playRound)
})