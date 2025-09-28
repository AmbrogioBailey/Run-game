let vehicles = ["🏎️", "🏍️", 
    "🚐", "🛻", "🚎", "🐆", 
    "🦅", "🐎", "🐑", 
    "🐕", "🐅",
    "🦌", "🦬", "🦘", 
    "🐢", "🐓", "🦍", 
    "🛺", "🚛", "🛴", 
    "🚲", "🛵"]

let firstCar = document.getElementById("first-car")


const raceStart = document.getElementById("number")
let clickCount = 0

raceStart.addEventListener('click', function () {
    clickCount++
    first = Math.floor( Math.random()* vehicles.length)
    firstCar.textContent = vehicles[first]
    const itemAnimated = document.getElementById("first-car")
    setTimeout(() => {
        itemAnimated.style.right = 'calc(100% - 110px)'
    }, 1000)
    if (clickCount > 1) {
        itemAnimated.style.display = 'none'
        window.location.reload()
    }
       
})







