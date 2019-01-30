// Your code goes here


const funBus = document.querySelector('.logo-heading');

funBus.addEventListener('click', e => {
    funBus.textContent = 'Who you clickkin? pass over the next guy ?';
})


const navvy = document.querySelectorAll('.nav-link');


navvy[0].addEventListener('mouseover', e => {
   navvy[0].textContent = ' nope not here, type on the next element?';
})


navvy[1].addEventListener('keydown', e => {
    navvy[1].style.color = 'green';
    navvy[1].textContent = 'scroll down over the first h2 till its blue for next clue';
})



const h2dudes = document.querySelectorAll('h2');

h2dudes[0].addEventListener('wheel', e => {
    h2dudes[0].textContent = "Check under the image?";
    h2dudes[0].style.color = 'blue';
})




const imgss = document.querySelectorAll('img');

imgss[1].addEventListener('drag', e => {
   h2dudes[1].textContent ='WOAH THERE, PUT ME DOWN';

})