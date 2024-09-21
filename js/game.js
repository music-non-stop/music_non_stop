class GameCard {
    constructor(index, trackIndex, name, backgroundColor, composerImage, faceImage) {
// use index for the card id
        this.index = index;
        this.trackIndex = trackIndex;
        this.name = name; 
        this.backgroundColor = backgroundColor;
        this.imgComposer = composerImage;
        this.imgFace = faceImage;
    }
// Render the card in the DOM
    render() {
        return `
            <div class="flip-card">
                <div id="card-${this.index}" class="flip-card-inner" onclick="cardClcked(${this.index})">
                    <div class="flip-card-front">
                        <img src="${this.imgFace}" alt="Card Image" class="face-image">
                    </div>
                    <div class="flip-card-back" style="background-color: ${this.backgroundColor};" >
                        <img src="${this.imgComposer}" alt="Composer Image" class="composer-image">                        
                    </div>
                </div>
            </div>
        `;
    }
}

class Game {
    constructor(cards, mp3player, gameOverCallback) {
// Array of GameCard objects
        this.cards = cards;
// Instance of the MP3Player class
        this.mp3player = mp3player;
// First card selected
        this.firstCard = null;
// Second card selected
        this.secondCard = null;
// Score
        this.score = 0; 
// Number of cards uncovered
        this.cards_uncovered = 0;     
// Callback function for game over
        this.gameOverCallback = gameOverCallback;             
        this.timer = 0; 
        this.timerInterval = null; 
    }   

    restart() {
        this.firstCard = null;
        this.secondCard = null;
        this.score = 0;
        this.cards_uncovered = 0;        
    }
    
    pickCard(n) {
            // Play the song associated with the card    
        this.mp3player.play(this.cards[n].trackIndex);
        // If the first card is null, it means that this is the first card to be selected
        if(this.firstCard == null) {
            this.firstCard = this.cards[n];
        }// If the second card is null, it means that this is the second card to be selected
        else if(this.secondCard == null) {
            this.secondCard = this.cards[n];
        }else {
// If both cards have been selected, but no match has been found, the second card becomes the first card
            // and the card that was just selected becomes the second card
            this.firstCard = this.secondCard;
            this.secondCard = this.cards[n];
        }
// Check if the two cards are a match
        // If they are, the score is incremented and the cards_uncovered counter is incremented by 2        
        // and the return value is true
        // If they are not, the return value is false
        // Also, if all the cards have been uncovered, the game is over and the return value is true
        return this.isAMatch(n);
    }

    isAMatch(n) {
        if (this.firstCard == null || this.secondCard == null) {
            return false;
        }

        if (this.firstCard.trackIndex === this.secondCard.trackIndex && this.firstCard.index !== n) {
            this.firstCard = null;
            this.secondCard = null;
            this.score++;
            this.cards_uncovered += 2;

            if (this.isGameOver()) {
                this.onGameOver(this.gameOverCallback);
            }
            return true;
        }
        return false;
    }

    isGameOver() {
        return this.cards_uncovered === this.cards.length;
    }

    // Method for calling a function supplied for game over

    onGameOver(callback) {
        // Stop the timer
        this.stopTimer();
    
        // Update the final score
        document.getElementById('final-score').textContent = this.score;
    
        // Get the final time from the timer element
        const finalTime = document.getElementById('timer').textContent;
        document.getElementById('final-timer').textContent = finalTime;
    
        // Retrieve player name from localStorage, fallback to "Player" if not found
        const playerName = localStorage.getItem("playerName") || "Player";
        document.getElementById('player-name').textContent = playerName;
    
        // Set the game over message based on the score
        const message = this.score >= 10 ? "You're a music master!" : "Better luck next time!";
        document.getElementById('game-over-message').textContent = message;
    
        // Show the game over popup
        document.getElementById('game-over-screen').style.display = 'flex';
    
        // Call the callback function
        callback();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timer++;
            const minutes = Math.floor(this.timer / 60);
            const seconds = this.timer % 60;
            document.getElementById('timer').textContent = 
                `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timerInterval);
    }

    addScore(extraScore) {
        this.score += extraScore;
    }
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    const cardData = []; // Populate this with your card data
    const mp3player = new MP3Player(); // Ensure this is defined
    const game = new Game(cardData, mp3player, () => {
        console.log('Game Over');
    });
    game.startTimer(); // Start the timer when the game starts
});