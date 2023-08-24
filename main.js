//pegar todas as teclas do piano
const teclas = document.querySelectorAll('#piano-container .key')

function playNote(event){
  //pegar o keycode
  let audioKeyCode = getKeyCode(event);
  //pegar qual é a tecla digitada
  const key = document.querySelector(`[data-key="${audioKeyCode}"]`)
  //verificar se a key existe
  const isKeyExists = key
  if(!isKeyExists){
    return
  }
  //tocar o audio
  addPlayingClass(key)
  playAudio(audioKeyCode)  
}

function addPlayingClass(key){
  key.classList.toggle('playing')
}

function getKeyCode(event){
  let keyCode;
  
  const isKeyword = event.type === "keydown"
  if(isKeyword){
    keyCode = event.keyCode
  }else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}


function playAudio(audioKeyCode){
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removePlayingClass(event){
  event.target.classList.remove('playing')
}

//click mouse
teclas.forEach((item) => {
  item.addEventListener('click', playNote)
  item.addEventListener('transitionend', removePlayingClass)
})

//tocar com o teclado 
window.addEventListener('keydown',playNote);

