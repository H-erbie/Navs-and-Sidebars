let humburgur = document.querySelector('.topHam');
let firstDiv = document.querySelector('.humburger .one');
let secondDiv = document.querySelector('.humburger .two');
let thirdDiv = document.querySelector('.humburger .three');
let sideBar = document.querySelector('.nav-stretch ul')
let sides = document.querySelector('.sides')

window.addEventListener('load', () => {
  
    cross();
})
cross = () => {
        humburgur.addEventListener('click', () => {
            firstDiv.classList.toggle('cross-x');
            secondDiv.classList.toggle('hide');
            thirdDiv.classList.toggle('cross-y');
            sideBar.classList.toggle('displaySide');
            sides.classList.toggle('cloak');
        })
    }
//sticky
//margin