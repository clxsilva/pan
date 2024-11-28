/**
 * Simples simulador do botão de pãnico
 * @author Claudio Silva
 */

// estudo de eventos relacionados a click do mouse (pressionado ou não pressionado) e telas touch
// passo 1: capturar os elementos do html (DOM)
const botao = document.getElementById('button')

// pré carregamento do arquivo de áudio
let som = new Audio("sound/alarm.mp3")
let stream, track // variáveis de apoio
inicializarLanterna()

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
    ligar()
    inicializarLanterna()
})

// deixar de pressionar a tela touch
botao.addEventListener('touchend', (event) => {
    event.preventDefault() // ignorar o comportamento padrão
    // console.log("deixar de pressionar")
    som.pause()
    desligar()
    inicializarLanterna
})

// lanterna (torch)
async function inicializarLanterna() {
    // try-catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return;
        }
        console.log("lanterna pronta")
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

// Função para ligar a lanterna (torch)
async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

// Função para desligar a lanterna sem parar o stream
async function desligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}