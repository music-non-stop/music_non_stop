// Fisher Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function card_clicked(n) {
    // Flip the previously selected card back
    if (current_card != 0) {
        flip_card_over(current_card);
    }
    // Flip the selected card
    current_card = n;
    flip_card_over(n);
    // array index of the song
    index = n - 1;
    player.play(index);
}
// Flip a card over
function flip_card_over(n) {
    const card = document.getElementById(`card-${n}`);
    card.classList.toggle('flip-card-over');    
}

const playlist = ['harmony', 'monnlight']
const audio_files_path = './assets/audio/';

const player = new MP3Player(audio_files_path, playlist);
// Currently selected card
var current_card = 0;

// Create an array of GameCard objects for each track in the playlist
// const gameCards = playlist.map((track, index) => new GameCard(index + 1, track));
// // Shuffle the game cards
// shuffle(gameCards);

// // Creeate an array with one hundred integers from 1 to 100
// const cardIndices = Array.from({ length: 24 }, (_, i) => i + 1);

// console.log(cardIndices)
// shuffle(cardIndices);
// console.log('Shuffled card indices:', cardIndices);