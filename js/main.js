'use strict';

// убираем рекламу
const toRemove = document.querySelector('.ads');
toRemove.remove();

// вставляем пункты в нужные блоки

const fromGreenToBlack = document.querySelector('.item_two .props__item_four');
const blackLi = document.querySelectorAll('.items .item_four .props__item');
blackLi[2].after(fromGreenToBlack);

const fromYellowToBlue = document.querySelector('.item_five .props__list');
const blueH2 = document.querySelector('.item_five h2.item__title');
const fromBlueToYellow = document.querySelector('.item_three .props__list');
const yellowH2 = document.querySelector('.item_three h2.item__title');

yellowH2.after(fromYellowToBlue);
blueH2.after(fromBlueToYellow);

const fromRedToGreen = document.querySelectorAll('.item_six .props__item_two');
const greenBox = document.querySelector('.item_two .props__list');
for (let i = 0; i < fromRedToGreen.length; i++) {
  greenBox.append(fromRedToGreen[i]);
}

// раставляем заголовки в нужные блоки

const toRedTitle = document.querySelector('.item_two .item__title').innerHTML;
const toBlueTitle = document.querySelector('.item_six .item__title').innerHTML;
const toGreenTitle = document.querySelector('.item_five .item__title')
    .innerHTML;


document.querySelector('.item_two .item__title').innerHTML = toGreenTitle;
document.querySelector('.item_three .item__title').innerHTML =
`This и прототипы объектов`;
document.querySelector('.item_five .item__title').innerHTML = toBlueTitle;
document.querySelector('.item_six .item__title').innerHTML = toRedTitle;

// расставляем блоки в нужном порядке

const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');

itemOne.after(itemTwo);
itemThree.after(itemFour);
itemFive.after(itemSix);