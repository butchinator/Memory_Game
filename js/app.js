/*
 * Create a list that holds all of your cards
 */
 let cardsArray = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle']

 var deck = document.querySelector(".deck");

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


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function createCards() {
    deck.innerHTML = "";
    
    for (let i = 0; i < cardsArray.length; i++) {
        let card = document.createElement('li');
        card.classList.add('card');
        let icon = document.createElement('i');
        icon.setAttribute('class', 'fa');
        card.append(icon);
        deck.append(card);
    }

    let shuffledCards = shuffle(cardsArray);
    let cardItems = document.querySelectorAll('.card .fa');
    for (let j = 0; j < cardsArray.length; j++) {
        cardItems[j].classList.add(shuffledCards[j]);
     }
}

createCards();








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
