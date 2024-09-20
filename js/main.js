// Fisher Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// These variables are used to keep track of the previously selected cards, so the clicks can be ignored
flip_previous_card = false;
uncovered_cards =  [];

// Check if a card is among the covered cards
function is_among_uncovered_cards(n) {    
    return uncovered_cards.includes(n);
}

// Function for updating score display panel
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `${game.score}`;
}

// Flip a card over and play the associated track
// Signal the game object that a card has been picked
// Let the game object determine if the card matches the previous card
function card_clicked(n) {
    // If the user clicked on the same card again ignore the click
    if (previous_card == n) return;
    // If the card is among the covered cards, ignore the click
    if (is_among_uncovered_cards(n)) return
    // Flip the card over
    flip_card_over(n);
    // Pick a card and see if it matches the previous card
    // game.pickCard(n) returns true if the cards match
    if (game.pickCard(n)) {
        // If the cards match, add them to the uncovered_cards array
        uncovered_cards.push(n);
        uncovered_cards.push(previous_card);

        previous_card = n;
        flip_previous_card = false;

        // Update the score display
        updateScoreDisplay();
        return;
    }
    // Flip the previously selected card back over
    if(previous_card != null && flip_previous_card) flip_card_over(previous_card);
    previous_card = n;
    // Flag that if the card does not match the previous card, flip the previous card back over
    flip_previous_card = true;
}

// Flip a card over
function flip_card_over(n) {
    const card = document.getElementById(`card-${n}`);
    card.classList.toggle('flip-card-over');
}

// Show the game over screen
function game_over() {
    const gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.style.display = 'grid'; 
    const score = document.getElementById('score');
    score.innerHTML = `Score: ${game.score}`; 
}

function game_restart() {    
    // clear the covered cards array
    uncovered_cards = [];   
    previous_card = null; 
    remove_cards_from_DOM();
    // Reinitialize the game cards
    const newGameCards = [];
    generateGameCards(newGameCards);
    // player.cards = newGameCards;
    embedGameCards(cardsContainer, newGameCards);  
    game = new Game(newGameCards, player, game_over);  
    // Hide the game over screen
    const gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.style.display = 'none';     
}

// Remove all cards from the DOM
function remove_cards_from_DOM() {
    var elements = document.getElementsByClassName('flip-card');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}


// Populate the gameCards array with GameCard objects
function getGameCards(arr) {
    var colors = getCardColors();
    shuffle(colors);

    for (let i = 0; i < 5; i++) {
        // assign filenames to the GameCard objects, based on the playlist array
        arr.push(new GameCard(i, i, playlist[i], colors[i]));
        arr.push(new GameCard(i, i, playlist[i], colors[i]));
    }
}

function getCardColors(){
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'brown', 'grey', 'black','cyan', 'magenta', 'darkblue'];
    return colors;
}

// Reassign the index property of each game card to match its new position in the array
function reassign_gameCards_indexes(arr) {
    for (let i = 0; i < gameCards.length; i++) {
        arr[i].index = i;
    }
}

// Embed the game cards in the DOM
function embedGameCards(cardsContainer, arrGameCards) {
    arrGameCards.forEach(card => {
        cardsContainer.innerHTML += card.render();
    });
}
// Generate the game cards
function generateGameCards(arr) {
    // Poulate the gameCards array with GameCard objects
    getGameCards(arr);
    // Shuffle the game cards
    shuffle(arr);
    // Reassign the index property of each game card to match its new position in the array
    reassign_gameCards_indexes(arr);
}

// playlist for the MP3Player class. Each track in the playlist is associated with a GameCard object
// Each name in the playlist must match the name of an MP3 file in the audio folder
const playlist = ['Bach', 'Beethoven', 'Brahms', 'Chopin', 'Johann Strauss', 'Mozart', 'Rossini', 'Satie', 'Sibelius', 'Tchaikovski', 'Verdi', 'Vivaldi']

// Path to the audio files
const audio_files_path = './assets/audio/';
// Create an instance of the MP3Player class
const player = new MP3Player(audio_files_path, playlist);
// Variable to store the index of the previously selected card
var previous_card = null;
// Create an array of GameCard objects, two objects for each track in the playlist
const gameCards = [];

generateGameCards(gameCards);
// Embed the game cards in the DOM
const cardsContainer = document.getElementById('cards-container');

// Embed the game cards in the DOM
embedGameCards(cardsContainer, gameCards);
// Create a new Game object
game = new Game(gameCards, player, game_over);
