let uno = document.getElementById('uno')
let dos = document.getElementById('dos')
let tres = document.getElementById('tres')
let cuatro = document.getElementById('cuatro')
let cinco = document.getElementById('cinco')
let seis = document.getElementById('seis')
let siete = document.getElementById('siete')
let ocho = document.getElementById('ocho')
let nueve = document.getElementById('nueve')
let cero = document.getElementById('cero')
let sumar = document.getElementById('sumar')
let restar = document.getElementById('restar')
let dividir = document.getElementById('dividir')
let multiplicar = document.getElementById('multiplicar')
let pantalla = document.getElementById('pantalla')

function borrar(){
    document.getElementById('pantalla').value = ""
    return
}

uno.addEventListener("click", function(){
    document.getElementById('pantalla').value += uno.value
})

dos.addEventListener("click", function(){
    document.getElementById('pantalla').value += dos.value
})

tres.addEventListener("click", function(){
    document.getElementById('pantalla').value += tres.value
})

cuatro.addEventListener("click", function(){
    document.getElementById('pantalla').value += cuatro.value
})

cinco.addEventListener("click", function(){
    document.getElementById('pantalla').value += cinco.value
})

seis.addEventListener("click", function(){
    document.getElementById('pantalla').value += seis.value
})

siete.addEventListener("click", function(){
    document.getElementById('pantalla').value += siete.value
})

ocho.addEventListener("click", function(){
    document.getElementById('pantalla').value += ocho.value
})

nueve.addEventListener("click", function(){
    document.getElementById('pantalla').value += nueve.value
})

cero.addEventListener("click", function(){
    document.getElementById('pantalla').value += cero.value
})

sumar.addEventListener("click", function(){
    document.getElementById('pantalla').value += sumar.value
})

restar.addEventListener("click", function(){
    document.getElementById('pantalla').value += restar.value
})


multiplicar.addEventListener("click", function(){
    document.getElementById('pantalla').value += multiplicar.value
})


dividir.addEventListener("click", function(){
    document.getElementById('pantalla').value += dividir.value
})

function resultado(){
    let total
    total = document.getElementById('pantalla').value 
    //console.log(document.getElementById('pantalla').value)

    //console.log(eval(total))
    
    document.getElementById('pantalla').value = eval(total)

}













