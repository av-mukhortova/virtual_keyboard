var body = document.querySelector('body');
var header = document.querySelector('header');
var logo = document.querySelector('.logo');
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
var blackout = document.querySelector('#blackout');
var btn_prev = document.querySelector('.prev');
var btn_next = document.querySelector('.next');
var cards = document.querySelectorAll('.pets_slider div');
var slider = document.querySelector('.pets_slider');
var modal = document.querySelector('.modal_wrapper');
var close_button = document.querySelector('.modal__button');
var screen = document.documentElement.clientWidth;

var pets = [
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sofia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
];

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  if (screen >= 768) {
    cards[2].className = 'pets_card';
    if (screen >= 1280) {
      cards[3].className = 'pets_card';
    }
  }
}

burger.onclick = function () {
  if (burger.className === 'burger') {
    burger.className = 'burger burger-active';
    menu.className = 'menu menu-active';
    body.className = 'body-active';
    header.className = 'header-active';
    logo.className = 'logo logo-active';
    blackout.className = 'blackout';
  } else {
    burger.className = 'burger';
    menu.className = 'menu';
    body.className = '';
    header.className = '';
    logo.className = 'logo';
    blackout.className = '';
  }
}

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(header);
  var parent = event.target.parentElement;
  if (!withinBoundaries && parent.className !== 'pets_card' && event.target.className !== 'pets_card' && event.target.className.substring(0,11) !== 'card_window') {
    burger.className = 'burger';
    menu.className = 'menu';
    body.className = '';
    header.className = '';
    logo.className = 'logo';
    blackout.className = '';
    modal.className = 'modal_wrapper modal_hidden';
  }
})

function sortingCards() {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  var i = 0;
  var arr = [];
  for (card of cards) {
    if (card.className != 'pets_card') {
      arr.push(i);
    } else {
      cards[i].className = 'pets_card pets_card_hidden';
    }
    i++;
  }
  shuffle(arr);
  cards[arr[0]].className = 'pets_card';
  if (screen >= 768) {
    cards[arr[1]].className = 'pets_card';
    if (screen >= 1280) {
      cards[arr[2]].className = 'pets_card';
    }
  }
}
btn_prev.onclick = function () {
  sortingCards();
}
btn_next.onclick = function () {
  sortingCards();
}

slider.onclick = function () {
  var id = -1;
  var parent = event.target.parentElement;
  if(parent.className === 'pets_card'){
    id = +parent.id.substring(9,10);
  }
  if(event.target.className === 'pets_card'){
    id = +event.target.id.substring(9,10);
  }
  if(id >= 0) {
    document.querySelector('.modal__window img').src=pets[id].img;
    document.querySelector('.modal__window h3').innerText=pets[id].name;
    document.querySelector('.modal__window h4').innerText=pets[id].type+' - '+pets[id].breed;
    document.querySelector('.modal__window h5').innerText=pets[id].description;
    document.querySelector('.modal__age').innerHTML='<b>Age:</b> '+pets[id].age;
    document.querySelector('.modal__inoculations').innerHTML='<b>Inoculations:</b> '+pets[id].inoculations;
    document.querySelector('.modal__diseases').innerHTML='<b>Diseases:</b> '+pets[id].diseases;
    document.querySelector('.modal__parasites').innerHTML='<b>Parasites:</b> '+pets[id].parasites;

    modal.className = 'modal_wrapper';
    body.className = 'scroll_hidden';
  }
}

close_button.onclick = function () {
  modal.className = 'modal_wrapper modal_hidden';
  body.className = '';
}