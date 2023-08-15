let homeCountEl = document.getElementById("home-count-el")
let guestCountEl = document.getElementById("guest-count-el")

console.log(homeCountEl)

let count = 0

function increment1(){
    count += 1
    homeCountEl.innerText = count
}

function increment2(){
    count += 2
    homeCountEl.innerText = count
}

function increment3(){
    count += 3
    homeCountEl.innerText = count
}