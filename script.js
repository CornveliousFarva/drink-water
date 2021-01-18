// Variable declarations
const percentage = document.getElementById('percentage')
const smallCups = document.querySelectorAll('.cup-small')
const waterLeft = document.getElementById('water-left')
const liters = document.getElementById('liters')

// Update big cups declaration 1
updateBigCup()

//Loop through the small cups
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

//Highlight cups function
function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups [idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    //Update the small cups
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        } else{
            cup.classList.remove('full')
        }
    })

    // Update big cups declaration within the highlightCups function
    updateBigCup()
}

// Function to update the big cups
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`   
    }

    if(fullCups === totalCups){
        waterLeft.style.visibility = 'hidden'
        waterLeft.style.height = 0
    } else{
        waterLeft.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}Liter`
    }

    
}