// Fisher Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Flip a card over and play the associated track
// Signal the game object that a card has been picked
// Let the game object determine if the card matches the previous card
function card_clicked(n) {
    // Flip the card over
    flip_card_over(n);
    // Pick a card and see if it matches the previous card
    if (game.pickCard(n)) {
        previous_card = null;
        return;
    }
    // Flip the previously selected card back over
    if (previous_card != n && previous_card != null) {
        flip_card_over(previous_card);
        previous_card = n;
    } else {
        previous_card = n;
    }
}

// Flip a card over
function flip_card_over(n) {
    const card = document.getElementById(`card-${n}`);
    card.classList.toggle('flip-card-over');
}

// Show the game over screen
function game_over() {
    const gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.style.display = 'block';

}

// Populate the gameCards array with GameCard objects
function getGameCards() {
    for (let i = 0; i < 3; i++) {
        gameCards.push(new GameCard(i, i));
        gameCards.push(new GameCard(i, i));
    }
}

// Reassign the index property of each game card to match its new position in the array
function reassign_gameCards_indexes() {
    for (let i = 0; i < gameCards.length; i++) {
        gameCards[i].index = i;
    }
}

// Embed the game cards in the DOM
function embedGameCards(cardsContainer) {
    gameCards.forEach(card => {
        cardsContainer.innerHTML += card.render();
    });
}
// Generate the game cards
function generateGameCards() {
    // Poulate the gameCards array with GameCard objects
    getGameCards();
    // Shuffle the game cards
    shuffle(gameCards);
    // Reassign the index property of each game card to match its new position in the array
    reassign_gameCards_indexes();
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

generateGameCards();
// Embed the game cards in the DOM
const cardsContainer = document.getElementById('cards-container');

// Embed the game cards in the DOM
embedGameCards(cardsContainer);
// Create a new Game object
const game = new Game(gameCards, player, game_over);

