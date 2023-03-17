// INGRESAR VALOR ANIMAL
const ingresar = document.getElementById('ingresar')
const ingresarButton = document.getElementById('ingresarButton')



// ARRAY DE ANIMALES

const animales =[{nombre:'perro'},{nombre:'gato'},{nombre:'conejo'},{nombre:'jirafa'},{nombre:'serpiente'},{nombre:'abeja'}]
ingresarButton.addEventListener('click',()=>{
    
    let name=ingresar.value
  console.log(name);
if(name===''){
    document.write("ERROR")
}else if(isNaN(name)){
    animales.push({nombre:name})
    ingresar.value=''
}else{
    document.write("ERROR")
}}
)

    

const mostrarAnimales = document.getElementById('mostrar')
mostrarAnimales.addEventListener('click',function(){
    let contenido=''
    contenido=`<table><th>ANIMALES</th>`
    animales.forEach(name=>{contenido+=`<tr><td>${name}</td></tr>`})
    contenido+=`</table>`
    document.getElementById('visual').innerHTML=contenido
})

const ordenarAnimales = document.getElementById('ordenar')
ordenarAnimales.addEventListener('click',function(){
    const animalesOrd = animales.map(animal=>animal.nombre)
    animalesOrd.sort()
    let contenido=''
    contenido=`<table><th>ANIMALES</th>`
    animalesOrd.forEach(name=>{contenido+=`<tr><td>${name}</td></tr>`})
    contenido+=`</table>`
    document.getElementById('visual').innerHTML=contenido
})

const buscarNumero = document.getElementById('buscarN')
buscarNumero.addEventListener('click',function(){
    let  animalNum = animales.map(animal=>animal.nombre)
    const buscarN=parseInt(document.getElementById("ingresarN").value)
    animalNum=animalNum.slice((buscarN)-1)
    let contenido=''
    contenido=`<table><th>ANIMALES</th>`
    animalNum.forEach(name=>{contenido+=`<tr><td>${name}</td></tr>`})
    contenido+=`</table>`
    document.getElementById('visual').innerHTML=contenido
})

const buscarAnimal = document.getElementById('buscarAn')
buscarAnimal.addEventListener('click',function(){
   let textAni = animales.map(animal=>animal.nombre)
    const buscarAn=(document.getElementById("buscarTexto").value)
    textAni = textAni.includes(buscarAn)
if(textAni==true){
    contenido=`<table><th>RESULTADO</th>`
    contenido+=(`<tr><td>el animal si aparece</td></tr>`)
    contenido+=`</table>`
    document.getElementById('visual').innerHTML=contenido
}else{
    contenido=`<table><th>RESULTADO</th>`
    contenido+=(`<tr><td>el animal no aparece</td></tr>`)
    contenido+=`</table>`
    document.getElementById('visual').innerHTML=contenido
}
})