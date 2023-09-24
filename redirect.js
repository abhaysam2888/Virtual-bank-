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

// virtual bank Account
// retrive balance form localStr
let depositMoney = localStorage.getItem('deposit')
class bankAccount {
    constructor(availableBalance){
        this.availableBalance = availableBalance;
        this.totalDeposit = 0;
        this.totalWithdraw = 0;
    }

    deposit(amount){
        if (amount > 0) {
           this.availableBalance += amount
           localStorage.setItem('deposit', this.availableBalance)
           this.totalDeposit += amount
           return `Rs.${this.availableBalance}`
        }
    }
    
    depositAmount(){
        return this.totalDeposit
    }
    
    withdrawAmount(){
        return this.totalWithdraw
    }
    withdraw(balance){
        if (balance > this.availableBalance) {
           return `insufficent funds`
        }

        this.availableBalance -= balance
        localStorage.setItem('deposit', this.availableBalance)
        this.totalWithdraw += balance
        return `Rs.${this.availableBalance}`
    }

    checkBalance(){
       return this.availableBalance
    }
}
const myAccount = new bankAccount(Number(depositMoney))



// withdraw money
let rs50 = document.querySelector('#rs50')
let rs100 = document.querySelector('#rs100')
let rs200 = document.querySelector('#rs200')
let rs500 = document.querySelector('#rs500')
let currentBalance = document.querySelector('#currentBal')
let withdrawAmount = document.querySelector('#withdrawAmount')
 
rs50.addEventListener('click', () => {
    let withdrawMoney = 50;
    let withdraw = myAccount.withdraw(withdrawMoney);
    currentBalance.textContent = withdraw;
    withdrawAmount.textContent = myAccount.withdrawAmount()
})
rs100.addEventListener('click', () => {
    let withdrawMoney = 100;
    let withdraw = myAccount.withdraw(withdrawMoney);
    currentBalance.textContent = withdraw;
    withdrawAmount.textContent = myAccount.withdrawAmount()
})
rs200.addEventListener('click', () => {
    let withdrawMoney = 200;
    let withdraw = myAccount.withdraw(withdrawMoney);
    currentBalance.textContent = withdraw;
    withdrawAmount.textContent = myAccount.withdrawAmount()
})
rs500.addEventListener('click', () => {
    let withdrawMoney = 500;
    let withdraw = myAccount.withdraw(withdrawMoney);
    currentBalance.textContent = withdraw;
    withdrawAmount.textContent = myAccount.withdrawAmount()
})


// check balance
let fLetter = document.querySelector('#nameFL')
let fLetter2 = document.querySelector('#nameFL2')
let fLetter3 = document.querySelector('#nameFL3')
let userName = document.querySelector('#name')
let userName2 = document.querySelector('#name2')
let userName3 = document.querySelector('#name3')
let balance = document.querySelector('#deposit')
let balance2 = document.querySelector('#balance1')
let refresh = document.querySelector('#refresh')

// set names
function setName() {
    // first letter set
    const firstLetter = localStorage.getItem('fName').charAt(0);
    fLetter.textContent = firstLetter
    fLetter2.textContent = firstLetter
    fLetter3.textContent = firstLetter
    // name set
    let localName = `${localStorage.getItem('fName')} ${localStorage.getItem('LName')}`
    userName.textContent = localName
    userName2.textContent = localName
    userName3.textContent = localName
}
setName()

// set current balance
balance.addEventListener('click', () => {
    if (balance.classList.contains('bal-hidden')) {
        balance.classList.remove('bal-hidden')
        balance.textContent = localStorage.getItem('deposit')
        balance2.textContent = localStorage.getItem('deposit')
    } else {
       balance.classList.add('bal-hidden')
       balance.textContent = 'Click here to Check Balance'
       balance2.textContent = '*****'
    }
})
// refresh balance
refresh.addEventListener('click', () => {
    balance.textContent = localStorage.getItem('deposit')
    balance2.textContent = localStorage.getItem('deposit')
})

// myAccount.deposit(10000)

// deposit Balance
let balance3 = document.querySelector('#balance3')
let card2 = document.querySelector('#cardDeposit50')
let card3 = document.querySelector('#cardDeposit100')
let card4 = document.querySelector('#cardDeposit200')
let card5 = document.querySelector('#cardDeposit500')
let depositl = document.querySelector('#depositAmount')
card2.addEventListener('click', () => {
    let deposit = 50;
    let money = myAccount.deposit(deposit);
    balance3.textContent = money;
    depositl.textContent = myAccount.depositAmount()
})
card3.addEventListener('click', () => {
    let deposit = 100;
    let money = myAccount.deposit(deposit);
    balance3.textContent = money;
    depositl.textContent = myAccount.depositAmount()
})
card4.addEventListener('click', () => {
    let deposit = 200;
    let money = myAccount.deposit(deposit);
    balance3.textContent = money;
    depositl.textContent = myAccount.depositAmount()
})
card5.addEventListener('click', () => {
    let deposit = 500;
    let money = myAccount.deposit(deposit);
    balance3.textContent = money;
    depositl.textContent = myAccount.depositAmount()
})