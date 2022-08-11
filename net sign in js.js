let fGold = document.getElementById('f-gold')

let secGold = document.getElementById('sec-gold')

let email = document.querySelector('#email')

let passe = document.getElementById('passed')

 function ifFocused() {

  fGold.style.display = 'inherit'

    }

    let showBut = document.getElementById('show-pass')
let pass = document.getElementById('passed')

passed.addEventListener('focus', function() {
   
   showBut.style.opacity = '1'
   showBut.style.transition = 'all 300ms ease-out'
   showBut.style.cursor = 'pointer'
 

})

showBut.addEventListener('click', function() { if(passed.value.length > 0) {
  if(passed.type === 'password') {
    passed.type = 'text'
    showBut.innerHTML = 'HIDE'
    showBut.style.fontSize = 'small'
    showBut.style.cursor = 'pointer'

    passed.focus()
 
  }
  

  else{
    passed.type = 'password'
    showBut.innerHTML = 'SHOW'
    showBut.style.marginLeft = '-50px'
    showBut.style.fontSize = 'small'
    showBut.style.cursor = 'pointer'
    passed.focus()
   
    
  }
}
})

 email.addEventListener('focusout', function () {
     
    fGold.style.display = 'none'

 }
 )

 function ifFocus() {


    secGold.style.display = 'inherit'
    


 
 }

 passed.addEventListener('focusout' , function () {
    secGold.style.display = 'none'
    showBut.style.opacity = '0'
   showBut.style.transition = 'all 300ms ease-out'
   showBut.style.cursor = 'initial'

   

    
 })

