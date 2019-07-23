// Cria o canvas
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 512
canvas.height = 480

document.body.appendChild(canvas)


//Imagem de fundo
let bgReady = false
const bgImage = new Image()

bgImage.onload = function() {
    bgReady = true;
}

bgImage.src = 'images/background.png'

//Imagem hero
let heroReady = false
const heroImage = new Image()

heroReady.onload = function() {
    heroReady = true
}

heroImage.src = 'images/hero.png'

//Imagem monster
let monsterReady = false
const monsterImage = new Image()

monsterImage.onload = function() {
    monsterReady = true
}

monsterImage.src = 'image/monster.png'

//Objetos do jogo
const hero = {
    speed: 256 // movimento em pixels por segundo
}

const monster = {}

let monsterCaught = 0

//Controles