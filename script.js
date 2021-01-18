// Variable declarations
const waterLeft = document.getElementById('water-left')
const percentage = document.getElementById('percentage')
const smallCups = document.querySelectorAll('.cup-small')
const waterLeft = document.getElementById('water-left')

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
}