let scoreH = document.getElementById("home-score-button")
let scoreG = document.getElementById("guest-score-button")
let homeScore = 0
let guestScore = 0
function plusOneH(){
    homeScore += 1
    scoreH.textContent = homeScore
}
function plusOneG(){
    guestScore += 1
    scoreG.textContent = guestScore
}

function plusTwoH(){
    homeScore += 2
    scoreH.textContent = homeScore
}
function plusTwoG(){
    guestScore += 2
    scoreG.textContent = guestScore
}

function plusThreeH(){
    homeScore += 3
    scoreH.textContent = homeScore
}
function plusThreeG(){
    guestScore += 3
    scoreG.textContent = guestScore
}
