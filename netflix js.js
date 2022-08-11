let plusSign = document.querySelector('.plus-sign')

 function pass() {
   document.body.style.backgroundColor = "red"
}



let sign = document.getElementById('plus')

let u = document.getElementById('cancel')

sign.addEventListener('click', function () {
 
  if(u.style.display === 'none') {
    u.style.display = 'inherit'
    sign.innerHTML = '-'
  }

else {
  u.style.display = 'none'
  sign.innerHTML = '+'
}
})

document.getElementById('what-sign').addEventListener('click', function () {
  if(document.getElementById('what-sen').style.display === 'none') {
    document.getElementById('what-sign').innerHTML = '-'
    document.getElementById('what-sen').style.display = 'inherit'
  }

else {
  document.getElementById('what-sign').innerHTML = '+'
  document.getElementById('what-sen').style.display = 'none'
}
})


document.getElementById('cost-sign').addEventListener('click', function () {
  if(document.getElementById('cost-sen').style.display === 'none') {
    document.getElementById('cost-sign').innerHTML = '-'
    document.getElementById('cost-sen').style.display = 'inherit'
  }

else {
  document.getElementById('cost-sign').innerHTML = '+'
  document.getElementById('cost-sen').style.display = 'none'
}
})

document.getElementById('watch-sign').addEventListener('click', function () {
  if(document.getElementById('watch-sen').style.display === 'none') {
    document.getElementById('watch-sign').innerHTML = '-'
    document.getElementById('watch-sen').style.display = 'inherit'
  }

else {
  document.getElementById('watch-sign').innerHTML = '+'
  document.getElementById('watch-sen').style.display = 'none'
}
})


document.getElementById('what-can-sign').addEventListener('click', function () {
  if(document.getElementById('what-can-sen').style.display === 'none') {
    document.getElementById('what-can-sen').style.display = 'inherit'
    document.getElementById('what-can-sign').innerHTML = '-'
  }

else {
  document.getElementById('what-can-sen').style.display = 'none'
  document.getElementById('what-can-sign').innerHTML = '+'
}
})


document.getElementById('kids-sign').addEventListener('click', function () {
  if(document.getElementById('kids-sen').style.display === 'none') {
    document.getElementById('kids-sen').style.display = 'inherit'
    document.getElementById('kids-sign').innerHTML = '-'
  }

else {
  document.getElementById('kids-sign').innerHTML = '+'
  document.getElementById('kids-sen').style.display = 'none'
}
})




