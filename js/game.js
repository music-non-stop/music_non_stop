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
                <div id="card-${this.index}" class="flip-card-inner" onclick="card_clicked(${this.index})">
                    <div class="flip-card-front">
                        <img src="${this.imgFace}" alt="Face Image" class="face-image">
                    </div>
                    <div class="flip-card-back" style="background-color: ${this.backgroundColor};" >
                        <img src="${this.imgComposer}" alt="Composer Image" class="composer-image">
                        <p>${this.name}</p>
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
    }   

    restart = () => {
        this.firstCard = null;
        this.secondCard = null;
        this.score = 0;
        this.cards_uncovered = 0;        
    }
    
    pickCard = (n) => {
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

    
    // See if both cards have the same index and are not the same card
    isAMatch = (n) => {
        // Check if only one card has been selected
        function isOnlyOneCardSelected(card1, card2) {
            return card1 == null || card2 == null;
        }
        // Check if the two cards match
        function isCardsMatch(card1_trackIndex, card2_trackIndex, card1_index, n) {
            return card1_trackIndex == card2_trackIndex && card1_index != n;
        }

        // If only one card is selected, then it is not a match
        if (isOnlyOneCardSelected(this.firstCard, this.secondCard)) {            
            return false;
        }

        if (isCardsMatch(this.firstCard.trackIndex, this.secondCard.trackIndex, this.firstCard.index, n)) {
            // Reset the first and second cards
            this.firstCard = null;
            this.secondCard = null;
            // Increment the score and the cards_uncovered counter
            this.score++;
            this.cards_uncovered += 2;
            
            if (this.isGameOver()) {
                // Call the callback function for game over                
                this.onGameOver(this.gameOverCallback);
            }
            return true;
        }
        return false;
    }

    isGameOver = () => {
        return this.cards_uncovered == this.cards.length;
    }

    // Method for calling a function supplied for game over
    onGameOver = (callback) => {
       callback();
    }
}