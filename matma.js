const fistNr = document.querySelector('.one')
const secondNr = document.querySelector('.two')
const invalue = document.querySelector('input')
const score = document.querySelector('#score')
const zlotych = document.querySelector('.won')
const moneyMessage = document.querySelector('#moneyText')
const mainDiv = document.querySelector('main')
let points = 0
const start = () => {
    const  x = Math.floor(Math.random()*(10-1))+1
    let  y = Math.floor(Math.random()*(10-3))+3
    while ((x+y)>15) {
        y--
    }
    fistNr.textContent = x
    secondNr.textContent = y
    invalue.focus()
}
document.addEventListener('DOMContentLoaded',(ev) => {
  start()

})
// ev button & enter
document.addEventListener('keydown',(e) => {
  if(e.key == 'Enter'){
    calc()
    spr()
  }
})
function calc(){
    const a = +fistNr.textContent
    const b = +secondNr.textContent
    let sum = a + b
    return sum
}
function spr(){
    const fcalc = +invalue.value
    if (fcalc === calc()){
        win()
    }else{
        lose()
    }
}
function win(){
    colorGreen()
    invalue.disabled = true
    const change = setTimeout(next , 1000)
    points++
    showScore()
    checkPunkts()
}
function lose(){
    colorRed()
}
function next(){
    invalue.value = ''
    color()
    start()
    invalue.disabled = false
    invalue.focus()
}
function showScore(){
    score.textContent = points
}
function color(){
    let pageColor = document.body
    pageColor.style.backgroundColor = 'white'
}

function colorGreen(){
    let pageColor = document.body
    pageColor.style.backgroundColor = 'lightgreen'
}
function colorRed(){
    let pageColor = document.body
    pageColor.style.backgroundColor = 'lightcoral'
}
function checkPunkts(){
    
    switch (points) {
        case 5:
            zlotych.textContent = 1
            zlotych.className ='win'
            break;
            case 10:
                zlotych.textContent = 3
                break;
        case 15:
            zlotych.textContent = 5
            moneyMessage.className ='win'
            zlotych.className ='win'
            moneyMessage.textContent = 'Tata bankrut - wygrałeś kieszonkowe :'
            setTimeout(popup,1000)
            break;
        default:
            break;
        }

}
function popup(){
    if (confirm('Czy chcesz zagrać jescze raz ?')) {
        location.reload()
    }else{
        mainDiv.innerHTML=''
        const p =document.createElement('p')
        const date =document.createElement('p')
        p.textContent = 'Zadzwoń do tata odebrać kieszonkowe'
        const godz =  new Date().toLocaleDateString()
        date.textContent = godz
        mainDiv.appendChild(p)
        mainDiv.appendChild(date)
    }
}
const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };
 
  resizeOps();
  window.addEventListener("resize", resizeOps);
