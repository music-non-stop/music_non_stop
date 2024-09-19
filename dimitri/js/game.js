class Game {
    constructor(cards) {
        this.cards = cards;  // Array of card objects
        this.selectedCard = null;  // The first card selected
        this.matchedPairs = 0;  // Track matched pairs
    }

    pickCard(cardIndex) {
        const card = this.cards[cardIndex];

        if (this.selectedCard === null) {
            // First card picked
            this.selectedCard = card;
            return false;  // No match yet
        } else {
            // Second card picked, check for match
            const isMatch = this.selectedCard.track === card.track;
            if (isMatch) {
                this.matchedPairs += 1;
                this.selectedCard = null;  // Reset for the next turn
                return true;  // Match found
            } else {
                this.selectedCard = null;  // No match, reset selection
                return false;  // No match
            }
        }
    }

    isGameOver() {
        return this.matchedPairs === this.cards.length / 2;  // All pairs matched
    }
}
