let acrescentar = document.querySelector('.acrescentar')
let diminuir = document.querySelector('.diminuir')
let contador = document.querySelector('.contador')

 let contagem  = 0

acrescentar.addEventListener('click',()=>{
   contagem++
   contador.innerText = contagem
   
})


diminuir.addEventListener('click',()=>{
   if(contagem != -1 ){
   contador.innerText = contagem
   contagem--
   }
})