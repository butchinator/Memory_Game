/*
 * Create a list that holds all of your cards
 */

let card = document.querySelectorAll('.card');
let cardList = Array.from(card);

const deck = document.querySelector('.deck');

let openedCards = [];
let matchedCards = [];

let moves = 0;
let movesCount = document.querySelector('.moves');

let score = document.querySelector('.stars');
let stars = score.querySelectorAll('li');

console.log(cardList);



/*

deck.addEventListener("click", function(event){
if (event.target.classList.contains("card")){
 event.target.style.transform = "rotateY(-180deg)";
}
});
*/

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let cards = shuffle(cardList);
console.log(cards);

//create list of cards
for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('open', 'show', 'match');
    deck.appendChild(cards[i]);
}
console.log(cards);

//event listener to turn cards
deck.addEventListener('click', function(event) {
    if (event.target.className === "card" && openedCards.length < 2) {
        turnCard(event);
        addOpenedCard(event);
    } else {
        // event.stopPropagation();
        console.log('2 cards open');
    };
});

// add classes to show cards
function turnCard(event) {
    event.target.classList.toggle('open');
    event.target.classList.toggle('show');
}

// add to openedCards array
function addOpenedCard(event) {
    openedCards.push(event.target);
    console.log(openedCards[0].innerHTML);
    console.log(openedCards[1].innerHTML);
    if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
        matchedCard();
    } else {

    };
}



function matchedCard() {
    openedCards[0].classList.remove('open', 'show');
    openedCards[1].classList.remove('open', 'show');
    openedCards[0].classList.toggle('match');
    openedCards[1].classList.toggle('match');
    matchedCards.push(openedCards);
    console.log(matchedCards);
}

function notMatchedCard() {
    
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */





/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
