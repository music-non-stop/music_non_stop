class Player {
    constructor() {
        this.audio = document.getElementById('audio');
        this.playBtn = document.getElementById('play');
        this.pauseBtn = document.getElementById('pause');
        this.prevBtn = document.getElementById('prev');
        this.nextBtn = document.getElementById('next');
        this.songs = ['harmony.mp3', 'monnlight.mp3'];
        this.soundPromise = null;
        this.songIndex = 0;
    }

    play = (n) => {
        if (n !== null) {
            try{
               this.audio.pause();
            }catch(e){
                // console.log(e);
            }
            this.audio = new Audio(`./assets/audio/${this.songs[n]}`);
            this.soundPromise = this.audio.play();
        } else {
            this.audio = new Audio(`./assets/audio/${this.songs[this.songIndex]}`);
            this.soundPromise = this.audio.play();
        }
    }

    pause =() => {
        // If the sound promise is not null, then pause the audio
        if (this.soundPromise !== null) {
            this.soundPromise.then(_ => {
                this.audio.pause();
            }).catch(error => {
                console.error('Error pausing audio:', error);
            });
        }    
    }

    prev = () => {
        this.songIndex = this.songIndex > 0 ? this.songIndex - 1 : this.songs.length - 1;
        this.play(null);
    }

    next = () => {
        this.audio.pause();
        this.songIndex = this.songIndex < this.songs.length - 1 ? this.songIndex + 1 : 0;
        this.audio = new Audio(`./assets/audio/${this.songs[this.songIndex]}`);
        this.play(null);
    }
}



function card_clicked(n) {
    // Flip the previously selected card back
    if(current_card != 0) {
        flip_card_over(current_card);
    }
    // Flip the selected card
    current_card = n;
    flip_card_over(n);
}
// Flip a card over
function flip_card_over(n) {
    const card = document.getElementById(`card-${n}`);
    card.classList.toggle('flip-card-over');
    // array index of the song
    index = n - 1;
    player.play(index);
}

document.addEventListener('DOMContentLoaded', () => {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach((card, index) => {
        card.addEventListener('click', () => card_clicked(index + 1));
    });
});

const player = new Player();
// Currently selected card
var current_card = 0;