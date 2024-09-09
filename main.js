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

const form = document.querySelector('#register-form')
const card = document.querySelector('#register-card')
const inputs = document.querySelectorAll('.input')
const ime = document.querySelector('#ime')
const prezime = document.querySelector('#prezime')
const email = document.querySelector('#email')
const telefon = document.querySelector('#telefon')


form.addEventListener('submit', (e) => {
    e.preventDefault()


    // const email = document.querySelector('#email').value
    // const password = document.querySelector('#password').value
    // const confirmPassword = document.querySelector('#confirm-password').value
    
    // if (email === '' || password === '' || confirmPassword === '') {
    //     alert('Please fill in all fields')
    //     return
    // }
    
    // if (password !== confirmPassword) {
    //     alert('Passwords do not match')
    //     return
    // }
    inputs.forEach(input => {
        const errorPhar = input.parentNode.querySelector('.error')
        if(input.value === ''){
            input.classList.add('input-error')
            errorPhar.classList.add('error-active')
        }else{
            input.classList.remove('input-error')
            errorPhar.classList.remove('error-active')

        }
    })

    if(ime.value !== '' && prezime.value !== '' && email.value !== '' && telefon.value !== ''){
        console.log(ime.value, prezime.value, email.value, telefon.value)

        card.innerHTML = `
        
    <div class="card-right">
        
        <div class="card-top">
            <h1 class="card-header green">
                Vasa prijava je predata<br>
                molimo sačekajte dok vas proverimo dali ste podobni za nasu organizaciju 
                <br> odgovor ćete dobiti putem imejla
            </h1>
        </div>
    <div class="card-body mb-24">Odgovor očekujte u periodu od mesec do 6 meseci
    </div>
    <div class="card-footer">
        <div class="footer-left red">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            Lorem, ipsum dolor sit amet
        </div>
        <div class="footer-message"><i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <div class="call"><i class="fa fa-phone" aria-hidden="true"></i>
        </div>
    </div>
    `
}
})