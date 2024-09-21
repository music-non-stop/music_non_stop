// Fisher Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// How many card pairs for the game?
// This setting will be used inside the getGameCards function
// The maximum number of card pairs is 12
const NUMBER_OF_CARD_PAIRS = 6;

// These variables are used to keep track of the previously selected cards, so the clicks can be ignored
flip_previous_card = false;
uncovered_cards = [];
// The time when the last card was picked
time_of_last_card_pick = 0;


// Function for updating score display panel
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `${game.score}`;
}

// Flip a card over and play the associated track
// Signal the game object that a card has been picked
// Let the game object determine if the card matches the previous card
function card_clicked(n) {
    // If the timee of the last pick is 0, that means it is the opening move
    if(time_of_last_card_pick == 0) {
        time_of_last_card_pick = Date.now();
    }
    // Check if a card is among the uncovered cards
    function is_among_uncovered_cards(n) {
        return uncovered_cards.includes(n);
    }
    // If the user clicked on the same card again ignore the click
    if (previous_card == n) return;
    // If the card is among the covered cards, ignore the click
    if (is_among_uncovered_cards(n)) return
    // Flip the card over
    flip_card_over(n);
    // Pick a card and see if it matches the previous card
    // game.pickCard(n) returns true if the cards match
    if (game.pickCard(n)) {
        calculateExtraScore();

        // If the cards match, add them to the uncovered_cards array
        uncovered_cards.push(n);
        uncovered_cards.push(previous_card);

        previous_card = n;
        flip_previous_card = false;

        // Update the score display
        updateScoreDisplay();
        // Set the time of the last card pick to the current time
        time_of_last_card_pick = Date.now();
        return;
    }
    // Flip the previously selected card back over
    if (previous_card != null && flip_previous_card) flip_card_over(previous_card);
    previous_card = n;
    // Flag that if the card does not match the previous card, flip the previous card back over
    flip_previous_card = true;

    function calculateExtraScore() {
        let extra_score = 0;
        // Calculate the time difference between the last two card picks
        let time_difference = Date.now() - time_of_last_card_pick;
        // Convert the time difference to seconds
        let time_difference_seconds = time_difference / 1000;
        // Calculate the extra score based on the time difference
        extra_score = Math.floor(50 / time_difference_seconds);
        // Add the extra score to the game score
        game.addScore(extra_score);
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
    gameOverScreen.style.display = 'grid';
    const score = document.getElementById('score');
    score.innerHTML = `Score: ${game.score}`;
    saveScoreBoardData({ username: playerData.username, score: game.score });
}

function game_restart() {
    // Remove after testing
    scoreBoardData = loadScoreBoardData();
    console.log(scoreBoardData);

    // clear the covered cards array
    uncovered_cards = [];
    previous_card = null;
    remove_cards_from_DOM();
    // Reinitialize the game cards
    const newGameCards = [];
    generateGameCards(newGameCards);
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
    const path_to_composer_images = './assets/images/composers/';
    const path_to_face_images = './assets/images/card_faces/';
    var colors = getCardColors();
    var composerImages = getComposerImages();
    var faceImages = getCardImages();
    // Shuffle the colors array
    shuffle(colors);
    // Shuffle the face images array
    shuffle(faceImages);
    // array index track number in the playlist
    let trackIndex = 0;
    // Assign random track index between 0 and 5 to trackIndex
    trackIndex = Math.floor(Math.random() * 6);

    for (let i = 0; i < NUMBER_OF_CARD_PAIRS; i++, trackIndex++) {
        // assign filenames to the GameCard objects, based on the playlist array
        arr.push(new GameCard(i, trackIndex, playlist[trackIndex], colors[i], path_to_composer_images + composerImages[trackIndex], path_to_face_images + faceImages[0]));
        arr.push(new GameCard(i, trackIndex, playlist[trackIndex], colors[i], path_to_composer_images + composerImages[trackIndex], path_to_face_images + faceImages[0]));
    }
}

function getCardColors() {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'brown', 'grey', 'black', 'cyan', 'magenta', 'darkblue'];
    return colors;
}

function getComposerImages() {
    const images = ['Bach.png', 'Beethoven.jpg', 'Brahms.jpg', 'chopin.jpeg', 'Johann_Strauss.jpg', 'mozart.jpg', 'Rossini.jpg', 'Satie.jpg', 'Sibelius.jpg', 'tchaikovsky.jpg', 'Verdi.jpg', 'vivaldi.jpg'];
    return images;
}

// Get the names of the face up images for the game cards
function getCardImages() {
    const images = ['face1.webp', 'face2.webp', 'face3.webp', 'face4.webp', 'face5.webp'];
    return images;
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
// Load the player data from local storage
const playerData = loadPlayerData();
if (playerData) {
    console.log(`Welcome back, ${playerData.username}! Your last score was: ${playerData.score}`);
} else {
    console.log("Welcome new player!");
}

