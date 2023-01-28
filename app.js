let namePilot = prompt("Qual é o seu nome piloto?")

let velocity = 0 

let newVelocity = prompt("Em qual velocidade você deseja acelerar a nave")

let confirmationVelocity = confirm("Você quer a velocidade " + newVelocity + " km/s ?")

if (confirmationVelocity){
    velocity = newVelocity
}
console.log

if(velocity <= 0){
    alert ("A nave está parada. Considere partir e aumentar a velocidade ")
} else if (velocity >= 40 && velocity <= 80){
    alert ("Parece uma boa velocidade para se manter!")
}
else if (velocity < 80){
    alert ("Parece uma boa velocidade para se manter")
} else if (velocity < 100){
    alert ("Velocidade alta. Considere diminuir!")
} else {
    alert("Velocidade perigosa. controle automatico forçado")
}

alert("Nome do Piloto: " + namePilot + "\nVelocidade desejada: " + newVelocity + " Km/s")
