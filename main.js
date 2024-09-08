// const navLinks = document.querySelectorAll('.nav-link')

// navLinks.forEach(link => {
//     link.onclick = () => {
//         console.log(link)
//         navLinks.forEach(l => l.classList.remove('nav-active'))
//         link.classList.add('nav-active')
//     }
// })
const menuBtn = document.querySelector(".fa-bars")
const side = document.querySelector('#side')

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times')
    side.classList.toggle('active')
}