let cards = document.querySelectorAll('.card');
// console.log(cards);
let cardOne, cardTwo;
let busy = false;


function cardFlipper(e){
    if(busy) return
   let clickedCard = e.target;
   if(clickedCard != cardOne){   
    clickedCard.classList.add('flip'); 
    if(!cardOne){
    return (cardOne = clickedCard);
    }
   cardTwo = clickedCard;
   let cardOneImg = cardOne.querySelector('img').src,
   cardTwoImg = cardTwo.querySelector('img').src;
   matchingCards(cardOneImg, cardTwoImg);
   }
}
function matchingCards(img1, img2){
    // console.log(img1, img2);
    busy = true;   
    if(img1 == img2){
        cardOne.removeEventListener('click', cardFlipper);
        cardTwo.removeEventListener('click', cardFlipper);
        cardOne = cardTwo = '';
        busy = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = '';
        busy = false;
    }, 1200);
}
cards.forEach((card) => {
    card.addEventListener('click', cardFlipper);
});