

  let start = document.querySelector('#start')
  let game = document.querySelector('#game')
  let box = document.createElement ('div')
  let boxWidth;
  start.addEventListener('click',startGame)
  let boxSize = getRandom (30, 30)

  

  function renedBox (){
    box.style.height = box.style.width = boxSize +'px'
    box.style.position ='absolute'
    box.style.backgroundColor ='blue'
    box.style.borderRadius ='50%'
    game.insertAdjacentElement ('afterbegin', box)
  }
 
  function startGame (){
    start.classList.add ('none')
    game.style.backgroundColor = '#fff'
    renedBox()
   
  }
  function getRandom (min, max){
    return Math.floor(Math.random () * (max - min) + min )
  }

  