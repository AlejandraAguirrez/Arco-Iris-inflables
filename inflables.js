let alquilerTotal = 0

let nombreUsuario = prompt('Ingrese su nombre')
let eleccionAlquiler = parseInt(prompt('Hola '+nombreUsuario+ '! Ingresa el número de producto que deseas alquilar: 1.Tobogan Gigante - 2.Metegol - 3.Plaza Selva'))

let alquilarMas = true

let juegos = []
let carrito = []

class Juegos{
    constructor(categoria, precio, stock){
        this.categoria = categoria
        this.precio = precio
        this.stock = stock
} 
modificarStock(){
    this.stock = this.stock - 1
}
}

const toboganGigante = new Juegos('inflables', 17000, 4)
const metegol = new Juegos('juegos', 3700, 8)
const plazaSelva = new Juegos('plazaBlanda', 17000, 3)
juegos.push(toboganGigante)
juegos.push(metegol)
juegos.push(plazaSelva) 
console.log(juegos)


while(alquilarMas===true){
    if(eleccionAlquiler===1){
        alquilerTotal = alquilerTotal + toboganGigante.precio
        carrito.push(juegos[0])
        toboganGigante.modificarStock()
        console.log(toboganGigante.stock)
    } else if(eleccionAlquiler===2){
        alquilerTotal = alquilerTotal + metegol.precio
        carrito.push(juegos[1])
        metegol.modificarStock()
        console.log(metegol.stock)
    } else if(eleccionAlquiler===3){
        alquilerTotal = alquilerTotal + plazaSelva.precio
        carrito.push(juegos[2])
        plazaSelva.modificarStock()
        console.log(plazaSelva.stock)
    } else {
        eleccionAlquiler = parseInt(prompt('Ingresa el número de producto que deseas alquilar: 1.Tobogan Gigante - 2.Metegol - 3.Plaza Selva'))
        continue
    }
eleccion = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
if(eleccion===1){
    eleccionAlquiler = parseInt(prompt('Ingresa el número de producto que deseas alquilar: 1.Tobogan Gigante - 2.Metegol - 3.Plaza Selva'))
} else if(eleccion===2){
    alquilarMas = false
}
} 
console.log(carrito)

alert('El valor subtotal es de: '+alquilerTotal)

const stockMinimo = juegos.find(juegos=>juegos.stock<=2)
console.log(stockMinimo)

