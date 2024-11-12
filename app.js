/**
 * Simples simulador do botão de pãnico
 * @author Claudio Silva
 */

// estudo de eventos relacionados a click do mouse (pressionado ou não pressionado) e telas touch
// passo 1: capturar os elementos do html (DOM)
const botao = document.getElementById('button')

// pré carregamento do arquivo de áudio
let som = new Audio("sound/alarm.mp3")

// passo 2: manipular o evento mouse pressionado
// addEventListener ("escuta de eventos em tempo real")
// mousedown (mouse pressionado constantemente)
// mouseup (soltar o botão do mouse)
// touchstart (pressionar a tela)
// touchend (deixar de pressionar)

// pressionar o botão do mouse e manter
botao.addEventListener('mousedown', (event) => {
    event.preventDefault() // ignorar o comportamento padrão
    // console.log("botão do mouse pressionado")
    som.play()
})

// soltar o botão do mouse
botao.addEventListener('mouseup', (event) => {
    event.preventDefault() // ignorar o comportamento padrão
    // console.log("botão do mouse solto")
    som.pause()
})

// pressionar a tela touch e manter
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() // ignorar o comportamento padrão
    // console.log("tela pressionada")
    som.play()
})

// deixar de pressionar a tela touch
botao.addEventListener('touchend', (event) => {
    event.preventDefault() // ignorar o comportamento padrão
    // console.log("deixar de pressionar")
    som.pause()
})