// nav bar script
const navBar = document.querySelector("#repose-bar")
const navLinks = document.querySelector('#navLinks')

navBar.addEventListener('click', (e) => {
    if (navLinks.classList.contains('none')) {
        navLinks.classList.remove("none");
        navLinks.style.display = 'block'
    } else {
        navLinks.classList.add('none')
        navLinks.style.display = 'none'
    }
})


// form script
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let deposit = document.getElementById('depositBal');
let submit = document.getElementById('submit');
let userFNameRegex = /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/gm
let userLNameRegex = /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/gm

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (userFNameRegex.test(fName.value) && userLNameRegex.test(lName.value) && deposit.value <= 10000) {
        // convert deposit into string
        let numStr = deposit.value.toString()
        console.log(numStr);
        localStorage.setItem(`fName`, `${fName.value}`)
        localStorage.setItem(`LName`, `${lName.value}`)
        localStorage.setItem(`deposit`, `${numStr}`)
        window.location.href = './redirect.html'
    }else{
        alert(`Name: Maximum length is (24)
Deposit Balance: should be less than (10000)
        `)
    }
})
localStorage.clear()
























































// node script.js