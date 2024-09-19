class GameCard {
    constructor(index, trackIndex) {
        // use index for the card id
        this.index = index;
        this.trackIndex = trackIndex;
    }
    render() {
        return `
            <div class="flip-card">
                <div id="card-${this.index}" class="flip-card-inner" onclick="card_clicked(${this.index})">
                    <div class="flip-card-front">
                        <h4>Track ${this.trackIndex}</h4>
                    </div>
                    <div class="flip-card-back">
                        <p>Listen and pick another card</p>
                    </div>
                </div>
            </div>
        `;
    }
}

class Game {
    constructor(cards, mp3player) {
        this.cards = cards;
        this.mp3player = mp3player;
        this.firstCard = null;
        this.secondCard = null;
        this.score = 0;        
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
            // If both cards have been selected, we need to flip them back over
            this.firstCard = this.secondCard;
            this.secondCard = this.cards[n];
        }

        return this.isAMatch(n);
    }

    
    // See if both cards have the same index and are not the same card
    isAMatch = (n) => {
        // If both cards are null, it means that only one has been selected
        if (this.firstCard == null || this.secondCard == null) {            
            return false;
        }

        if (this.firstCard.trackIndex == this.secondCard.trackIndex && this.firstCard.index != n) {
            this.firstCard = null;
            this.secondCard = null;
            this.score++;
            console.log('Score: ' + this.score);
            return true;
        }
        return false;
    }
}