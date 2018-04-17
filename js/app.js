/*
 * Create a list that holds all of your cards
 */

let card = document.querySelectorAll('.card');
let cardList = Array.from(card);

const deck = document.querySelector('.deck');

let openedCards = [];
let matchedCards = [];

let moves = 0;
const movesCount = document.querySelector('.moves');

const score = document.querySelector('.stars');
let stars = score.querySelectorAll('li');

const timer = document.querySelector('#timer');
let time;
let sec = 0;
let min = 0;

let clickedCard;

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
    clickedCard = event.target;
    if (clickedCard.className === "card" && openedCards.length < 2) {
        turnCard(event);
        addOpenedCard(event);
    } else {
        event.stopPropagation();
        console.log('2 cards open');
    };
});

// add classes to clicked cards
function turnCard(event) {
    clickedCard.classList.toggle('open');
    clickedCard.classList.toggle('show');
}

// add to openedCards array
function addOpenedCard(event) {
    openedCards.push(event.target);
    if (openedCards.length == 2) {
        addMove()
        if (moves == 1) {
            startTime()
        }
        if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
            matchedCard();
            endGame();
        } else {
            noMatchedCard()
            console.log(openedCards);
        };
    }
}


// if the cards match
function matchedCard() {
    openedCards[0].classList.remove('open', 'show');
    openedCards[1].classList.remove('open', 'show');
    openedCards[0].classList.toggle('match');
    openedCards[1].classList.toggle('match');
    matchedCards.push(openedCards);
    console.log(matchedCards.length);
    clearCards();
    console.log(openedCards);
}

// if the cards do not match
function noMatchedCard() {
    setTimeout (function() {
        openedCards[0].classList.remove('open', 'show');
        openedCards[1].classList.remove('open', 'show');
        clearCards();
        console.log(openedCards);
    }, 800);
}

// clear openedCards array
function clearCards() {
    openedCards = [];
}

// add moves
function addMove() {
    moves++;
    movesCount.innerHTML = moves;
}

// end game funcionality
function endGame() {
    if (matchedCards.length === 8) {
        stopTime()
    }
}

// start the timer
function startTime() {
    time = setInterval (function() {
        sec++
        if (sec < 10) {
            sec = '0' + sec;
        };
        if (sec === 60) {
            min++
            sec = 0;
        };
        timer.innerHTML = min + ':' + sec;
    }, 1000);
}

// stop the timer
function stopTime() {
    clearInterval(time);
    sec = 0;
    min = 0;
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
