
// cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)


// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
let countEl = document.getElementById("count")
let saveDisplayEl = document.getElementById("saveDisplay-el")
console.log(countEl)

let i = 0
let count = 0

function countingFunction() {
    count += 1
    countEl.textContent = count
}

function save() {
    let currentStr = ""
    if (i == 0) {
        currentStr += count 
        saveDisplayEl.innerText += currentStr
    } else {
        currentStr += " - " + count 
    saveDisplayEl.textContent += currentStr
    
    }
    i++
    count = 0
    countEl.textContent = count
}


