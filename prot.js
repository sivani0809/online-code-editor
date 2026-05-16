let hour=document.getElementById('hor')
hour.addEventListener('click',()=>{
let today=new Date()
hour.textContent=today.toLocaleTimeString()

hour.style.fontSize='25px'
hour.style.color='yellow'

})
