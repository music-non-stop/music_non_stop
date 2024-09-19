// Fisher Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function card_clicked(n) {
    // Flip the card over
    flip_card_over(n);
    // If we have a winner
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

const playlist = ['Bach', 'Beethoven', 'Brahms', 'Chopin', 'Johann Strauss', 'Mozart', 'Rossini', 'Satie', 'Sibelius', 'Tchaikovski', 'Verdi', 'Vivaldi']
const audio_files_path = './assets/audio/';

const player = new MP3Player(audio_files_path, playlist);

var previous_card = null;

// Create an array of GameCard objects, two objects for each track in the playlist
const gameCards = [];

for (let i = 0; i < 3; i++) {
    gameCards.push(new GameCard(i, i));
    gameCards.push(new GameCard(i, i));
}

console.log(gameCards);
// Shuffle the game cards
shuffle(gameCards);
// Now set the inicies to correspond to the shuffled array
for (let i = 0; i < gameCards.length; i++) {
    gameCards[i].index = i;
}
// Embed the game cards in the DOM
const cardsContainer = document.getElementById('cards-container');
gameCards.forEach(card => {
    cardsContainer.innerHTML += card.render();
});
// Create a new Game object
const game = new Game(gameCards, player);
console.log(gameCards)