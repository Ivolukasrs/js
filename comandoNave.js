let namePilot = prompt(" Qual seu nome piloto?")

let velocityInicial = 0

let velocityDesirable = prompt("Qual velocidade deseja acelerar a Nave?")

let velocityConfirmation = confirm("Estamos indo para velocidade de " + velocityDesirable + "km /s, podemos prosseguir ?")

if (velocityConfirmation) {
    velocityInicial = velocityDesirable
}
if (velocityInicial <= 0) {
    alert("Nave esta parada, cosnsidre acelerar")
} else if (velocityInicial <= 40) {
    alert("velocidade mediana, desejar acelar?")
} else if (velocityInicial < 80) {
    alert("parece uma boa velocidade")
} else if (velocityInicial > 100) {
    alert("velocidade perigosa")

}
alert("Piloto: " + namePilot + "\nVelocidade: " + velocityInicial + "Km/s")