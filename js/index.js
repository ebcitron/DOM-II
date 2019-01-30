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
   h2dudes[1].textContent ='WOAH THERE, PUT ME DOWN, try the guy below';

})


imgss[2].addEventListener('dblclick', e => {
    h2dudes[2].textContent = "come on.. im sleeping.. push someone elses buttons";
})

const buttonss = document.querySelectorAll('.btn');



const h4bros = document.querySelectorAll('h4');


buttonss[0].addEventListener('mouseenter', e => {
    h4bros[0].textContent = 'Dare you to copy me';
    h4bros[0].style.color = 'purple';
})


h4bros[0].addEventListener('copy', e => {
    h4bros[1].style.color = 'red';
    h4bros[1].style.border = '1px solid blue';
    h4bros[1].textContent = "no, copy me";
})


const theMeat = document.querySelector('.container');


theMeat.addEventListener('click', e => {
    e.currentTarget.style.color = 'purple';
})



navvy.addEventListener('click', e =>{
    e.preventDefault();

console.log(navvy);
})