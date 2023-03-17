const url = "https://pokeapi.co/api/v2/pokemon"+buscar+""






    btnbuscar.addEventListener('click',()=>{
async function buscar(){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    const foto=datos.sprites.front_shiny;
    let pokemon = document.getElementById('pokemon')
    pokemon.innerHTML=`<img src=${foto}>`
}
})