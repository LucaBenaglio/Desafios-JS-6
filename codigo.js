class Humano {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

const humanos = []

const form = document.getElementById("idForm")

const divHumanos = document.getElementById("divHumanos")
const botonMostrar = document.getElementById("botonMostrar")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let nombre = document.getElementById("idNombre").value
    let apellido = document.getElementById("idApellido").value
    let edad = document.getElementById("idEdad").value

    const humanoCreado = new Humano(nombre, apellido, edad)
    humanos.push(humanoCreado)

    form.reset()
})

botonMostrar.addEventListener("click", () => {
    humanos.forEach(humanoCreado => {
        divHumanos.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${humanoCreado.nombre}</h5>
                <h5 class="card-title">Apellido: ${humanoCreado.apellido}<h5>
                <h5 class="card-title">Edad: ${humanoCreado.edad}</h5>
            </div>
        </div>
        `
    })
})


