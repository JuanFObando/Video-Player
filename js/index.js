//Variables constantes para obtener los atributos ID de las etiquetas HTML
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")

//Asociación de eventos de escucha y funciones
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

//Función para manejar la pausa del video
function handlePause(){
    $video.pause()          //Pausa la reproducción del video
    $play.hidden = false    //Presenta el botón play
    $pause.hidden = true    //Oculta el botón de pausa
    console.log('Enviado evento de pausa en el video')
}

//Función para manejar la reproducción del video
function handlePlay(){
    $video.play()           //Reproduce el video
    $play.hidden = true     //Oculta el botón de reproducción
    $pause.hidden = false   //Presenta el botón de pausa
    console.log('Enviado evento de reproducción en el video')
}

//Función para manejar el retroceso de 10 segundos del video
function handleBackward(){
    $video.currentTime -= 10    //Indica que se retrase 10 segundos el video
    console.log('Enviado evento atrasar 10 segundos ', $video.currentTime)
}

//Función para manejar el avance de 10 segundos del video
function handleForward(){
    $video.currentTime += 10    //Indica que se adelante 10 segundos el video
    console.log('Enviado evento para adelantar 10 segundos ', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)


function handleLoaded(){
    $progress.max = $video.duration
    console.log('Cargado mi video', $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    // console.log('actualización tiempo ', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log('Elemnto Progress ', $progress.value)
}