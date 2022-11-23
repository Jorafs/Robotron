const controle = document.querySelectorAll("[data-controle]")


controle.forEach((elemento) => { 
    elemento.addEventListener("click", (evento) => {
        updateRobotron(evento.target.textContent, event.target.parentNode)
    })
})

function updateRobotron(operacao, controle) {
	const peca = controle.querySelector("[data-contador]")

    if(operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    } else {
        peca.value = parseInt(peca.value) - 1
    }
}
