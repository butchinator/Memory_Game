// declare variables
let card = document.querySelectorAll('.card');
let cardList = Array.from(card);

const deck = document.querySelector('.deck');
let clickedCard;
let openedCards = [];
let matchedCards = [];

let moves;
const movesCount = document.querySelector('.moves');
const moveSpan = document.querySelector('.move-span');

const score = document.querySelector('.stars');
const stars = score.querySelectorAll('li');
const finalScore = document.querySelector('.finalScore');
const timeTaken =   document.querySelector('.timeTaken');
const finalMoves =  document.querySelector('.finalMoves');
let starsScore;
let endMessage;

const timer = document.querySelector('#timer');
let time = 0;
let sec = 0;
let min = 0;

const myModal = document.getElementById('myModal');
const close = document.querySelector('.close');

const restart = document.querySelector('.restart');
restart.addEventListener('click', gameStart);
const tryAgain = document.querySelector('.tryAgain');



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

window.onload = gameStart();

// start the game
function gameStart() {
    moves = 0;
    movesCount.innerHTML = moves;
    stopTime();
    timer.innerHTML = "00:00";
    // show 3 stars at beginning
    for (let star of stars) {
        star.classList.remove('hide');
      }
    matchedCards.length = 0;
    // shuffle cards
    let cards = shuffle(cardList);
    //create list of cards
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('open', 'show', 'match');
        deck.appendChild(cards[i]);
    };
    cardClick();
};

//event listener to click cards
function cardClick() {
    deck.addEventListener('click', function(event) {
        clickedCard = event.target;
        if (clickedCard.className === "card" && openedCards.length < 2) {
            turnCard(event);
            addOpenedCard(event);
        } else {
            event.stopPropagation();
        };
    });
};


// add classes to turn cards
function turnCard(event) {
    clickedCard.classList.toggle('open');
    clickedCard.classList.toggle('show');
};

// add to openedCards array
function addOpenedCard(event) {
    openedCards.push(clickedCard);
    if(time === 0){
        time ++
        startTime();
    }
    if (openedCards.length == 2) {
        addMove()
        starRating()
        if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
            matchedCard();
            endGame();
        } else {
            noMatchedCard()
        };
    };
};


// if the cards match
function matchedCard() {
    openedCards[0].classList.remove('open', 'show');
    openedCards[1].classList.remove('open', 'show');
    openedCards[0].classList.toggle('match');
    openedCards[1].classList.toggle('match');
    matchedCards.push(openedCards);
    clearCards();
    console.log(matchedCards.length);
};

// if the cards do not match
function noMatchedCard() {
    setTimeout (function() {
        openedCards[0].classList.remove('open', 'show',);
        openedCards[1].classList.remove('open', 'show',);
        clearCards();
    }, 800);
};

// clear openedCards array
function clearCards() {
    openedCards = [];
};

// add moves
function addMove() {
    moves++;
    if (moves === 1) {
        moveSpan.innerHTML = " Move";
        movesCount.innerHTML = moves;
    } else {
        moveSpan.innerHTML = " Moves";
        movesCount.innerHTML = moves;
    };
};

// start the timer - inspiration from https://www.youtube.com/watch?v=KK7EH8h97jU
function startTime() {
    time = setInterval (function() {
        sec++
        if (sec < 10) {
            sec = '0' + sec;
        };
        if (sec === 60) {
            min++
            sec = 0;
            sec = '0' + sec;
        };
        timer.innerHTML = min + ':' + sec;
    }, 1000);
};

// stop the timer
function stopTime() {
    clearInterval(time);
    time = 0;
    sec = 0;
    min = 0;
};

// star rating
function starRating() {
    for (let star of stars) {
        if (moves > 14  && moves <= 18) {
            score.children[2].classList.add('hide');
        } else if (moves > 19 && moves <= 24) {
            score.children[1].classList.add('hide');
        } else if (moves > 24) {
            score.children[0].classList.add('hide');
        };
    };
};

// end game functionality
function endGame() {
    if (matchedCards.length === 8) {
        stopTime()
        openModal();
        restartGame();
    };
};

// popup on game completion
function openModal() {
    myModal.style.display = "block";
    finalMessage()
    starsScore = document.querySelector(".stars").innerHTML;
    finalScore.innerHTML = starsScore;
    finalMoves.innerHTML = movesCount.innerHTML;
    timeTaken.innerHTML = timer.innerHTML;
    closeModal();
};

// message shown on game completion
function finalMessage() {
    endMessage = document.querySelector('.message');
    if (moves <= 14) {
        endMessage.innerHTML = "Superstar!!!"
    } else if (moves > 14 && moves < 24) {
        endMessage.innerHTML = "So close! Keep it up!"
    } else if (moves >= 24) {
        endMessage.innerHTML = "Unlucky! You can do better!!"
    };
};

// close the popup
function closeModal() {
    close.addEventListener('click', function() {
        myModal.style.display = "none";
    });
};

// restart the game
function restartGame(event) {
    tryAgain.addEventListener('click', function() {
        myModal.style.display = "none";
        gameStart();
    });
};


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
