let pic = document.querySelector('#pic');
let keyPic = document.querySelector('#keyPic');
let picBtn = document.querySelector('#picBtn');


const pics = 
['../img/pic1.png', '../img/pic2.png', '../img/pic3.png', '../img/pic4.png', '../img/pic5.png', '../img/pic6.png', '../img/pic7.png','../img/pic8.png','../img/pic9.png','../img/pic10.png','../img/pic11.png'];

window.onload = function(){
  let randomN1 = Math.floor(Math.random()* pics.length);
  let randomN2;
  do {
    randomN2 = Math.floor(Math.random() * pics.length);
  }
  while (randomN1 === randomN2);
  pic.src = pics[randomN1];
  keyPic.src = pics[randomN2];
  console.log(randomN1, randomN2);
};

function randomKeyPic(){
  let randomKeyNum = Math.floor(Math.random()* pics.length);
  keyPic.src = pics[randomKeyNum];
};

const trys = []

let message = document.querySelector('#messageContainer');

picBtn.addEventListener('click', function(event) {
  event.preventDefault();
  randomKeyPic();
  if(pic.src === keyPic.src){
    trys.push(true);
    message.classList.add('bg-success');
    message.innerHTML = 'Woops! Something went wrong. Please try again';
    console.log(trys);
  }
});