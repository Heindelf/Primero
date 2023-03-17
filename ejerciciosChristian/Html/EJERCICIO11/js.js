const nombre = document.getElementById('nombre')
const edad = document.getElementById('edad')
const genero = document.getElementById('genero')
const fecha = document.getElementById('fecha')

const anadir = document.getElementById('añadir')
const personas =[
{nombre:'tasha',edad:'20',gender:'femenino'},
{nombre:'carlos',edad:'18',gender:'masculino'},
{nombre:'pedro',edad:'32',gender:'masculino'},
{nombre:'michael',edad:'78',gender:'masculino'},
{nombre:'teresa',edad:'12',gender:'femenino'},
{nombre:'sara',edad:'45',gender:'femenino'}
]
anadir.addEventListener('click',()=>{
    let name=nombre.value
    let age = edad.value
    let gender = genero.value
    let date = fecha.value

    date = date.split('-')

if(name===''||age===''||gender===''||date===''){
    document.write("ERROR")
    const nombre = document.getElementById('nombre')
    const edad = document.getElementById('edad')
    const genero = document.getElementById('genero')
    const fecha = document.getElementById('fecha')
}else{
        let dia =date[0]
        let mes = date[1]
        let anio = date[2]
        personas.push({nombre:name,edad:age,genero:gender,fecha:{dia:dia,mes:mes,anio:anio}})
        nombre.value=''
        edad.value=''
        genero.value=''
        fecha.value=''
}

})
const mostrarNombres=document.getElementById('mNombres')
mostrarNombres.addEventListener('click',function(){
    let contenido=''
    contenido=`<table><th>NOMBRES</th>`
    let nombres=personas.map(persona=>persona.nombre)
    nombres.forEach(nombre=>{contenido+=`<tr><td>${nombre}</td></tr>`})
    contenido+=`</table>`
    document.getElementById('visual').innerHTML=contenido
    
})

const mostrarEdades=document.getElementById('mEdades')
mostrarEdades.addEventListener('click',calcularEdades)

function calcularEdades(){
    let chuchos=personas.filter(persona=>{
        return persona.edad>50
    }).map(item=>item.nombre)

    let adultos =personas.filter(persona=>{
        return persona.edad>18 && persona.edad>50
    }).map(item=>item.maṕ)

    let niños =personas.filter(persona=>{
        return persona.edad<18
    }).map(item=>item.maṕ)

let contenido=`Adultos mayores <br>`
chuchos.forEach(nombre=>{
    contenido+=`${nombre}<br>`
})
 contenido+=`Adultos  <br>`
adultos.forEach(nombre=>{
    contenido+=`${nombre}<br>`
})
contenido+=`Adultos mayores <br>`
niños.forEach(nombre=>{
    contenido+=`${nombre}<br>`
})
document.getElementById('visual').innerHTML=contenido
}