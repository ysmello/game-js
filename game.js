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

monsterImage.src = 'images/monster.png'

//Objetos do jogo
const hero = {
    speed: 256 //Movimento em pixels por segundo
}

const monster = {}

let monsterCaught = 0

//Controles
const keysDown = {}

window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true
}, false)

window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode]
}, false)

//Reseta o jogo quando o jogador pega o monstro
const reset = function() {
    hero.x = canvas.width / 2
    hero.y = canvas.height / 2

    //Posiciona o monstro randomicamente na tela
    monster.x = 32 + (Math.random() * (canvas.width - 64))
    monster.y = 32 + (Math.random() * (canvas.width - 64))
}

//Atualiza os objetos do jogo
const update = function(modifier) {
    if (38 in keysDown) { //Arrow up
        hero.y -= hero.speed * modifier
    }
    if (40 in keysDown) { //Arrow down
        hero.y += hero.speed * modifier
    }
    if (37 in keysDown) { //Arrow left
        hero.x -= hero.speed * modifier
    }
    if (39 in keysDown) { //Arrow right
        hero.x += hero.speed * modifier
    }

    //Verificando aproximacao dos personagens
    if (
        hero.x <= (monster.x + 32) 
        && monster.x <= (hero.x + 32)
        && hero.y <= (hero.y + 32)
        && mosnter.y <= (monster.y + 32)
    ) {
        ++monsterCaught
        reset()
    } 
}

//Renderizando Imagens
const render = function() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0)
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y)
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y)
    }

    //Points
    ctx.fillStyle = 'rbg(250, 250, 250)'
    ctx.font = '24px Helvetica'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText('Monstros pegos: ' + monsterCaught, 32, 32)
}

//Loop do jogo
const main = function() {
    const now = Date.now()
    const delta = now - then

    update(delta / 1000)
    render()

    then = now

    requestAnimationFrame(main)
}

let then = Date.now()
reset()
main()