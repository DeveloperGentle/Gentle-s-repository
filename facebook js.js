let eyeIcon = document.querySelector('.material-symbols-outlined')

let pass = document.querySelector('#pass')

let span = document.getElementById('span')

let eyeIconInvis = document.getElementById('invisible')

// eyeIconInvis.addEventListener('click' ,function () {
//     if(pass.type === 'text') {
//         pass.type = 'password'
//     }

//     else {
//         pass.type = 'text'
//     }
// })

eyeIcon.addEventListener('click', function () {
    if(pass.type === 'password') {
        pass.type = 'text'
        this.classList.toggle(`<span class="material-symbols-outlined"  style=" cursor: pointer; margin-left:-47px; position: absolute;">
        visibility_off
        </span>`)
        

    } 
    else{
        pass.type = 'password'
    } 

})


