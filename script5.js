const openBtn = document.querySelectorAll('[data-modal-target]')
const closeBtn = document.querySelectorAll("[data-modal-close]")
const overlay = document.getElementById("overlay")
const nextbtn = document.querySelector('.nextbtn')
const currentParagraph = document.querySelector('.current')
const nextParagraph = document.querySelector('.next')
const tooltip = document.querySelector('.tooltip')

nextbtn.addEventListener('click', (() => {
    currentParagraph.classList.toggle('inactive')
    nextParagraph.classList.toggle('active')
    tooltip.classList.toggle('active')
}))

openBtn.forEach((btn) => {
    const modal = document.querySelector(btn.dataset.modalTarget) //Checks the target of our data-modal-target. could have also used '.modal'
    btn.addEventListener('click', (() => {
    openModal(modal)
    }))
})

closeBtn.forEach((btn) => {
    const modal = btn.closest(".modal")
    btn.addEventListener('click', (() => {
    closeModal(modal)
    }))  
})

overlay.addEventListener('click', (() => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach((modal) => {
    closeModal(modal)
    })  
}))


function openModal(modal){
    if(modal == undefined) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == undefined) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


function Riddle() {
   var password = document.getElementById("Riddle1");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "CLEAR SKULL") {
    alert("You have made it through! Congradulations!"); 
   return true;
   }
   alert("You have failed!");
   return false;
   }