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