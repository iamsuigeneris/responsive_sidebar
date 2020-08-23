// function toggleMenu() {
//     let nav = document.querySelector('.navigation')
//     let toggle = document.querySelector('.toggle')
//     nav.classList.toggle('active')
//     toggle.classList.toggle('active')
// }

// const btn = document.querySelector('#btn')
// btn.addEventListener('click',toggleMenu)

function toggleMenu(){
    const nav = document.querySelector('.navigation')
    const toggle = document.querySelector('.toggle')
    nav.classList.toggle('active')
    toggle.classList.toggle('active')
}

const btn = document.querySelector('#btn')
btn.addEventListener('click',toggleMenu)