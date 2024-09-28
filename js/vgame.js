const NUMBER_OF_CUBES = 12;

class Cube3d {    
    constructor({index, trackIndex, name, backgroundColor, composerImage, faceImage}) {
        this.index = index;
        this.trackIndex = trackIndex;
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.imgComposer = composerImage;
        this.imgFace = faceImage;
     }

    // Render the 3D cube
    render(id) {
        return `
            <div id="cube-${id}" class="cube" onclick="rotateCube(${id})">
                <<div class="cube">
                <div class="cube-front"><img src="./assets/images/card_faces/face1.webp" alt="image of composer"></div>
                <div class="cube-back">Back</div>
                <div class="cube-top"><img src="./assets/images/composers/Bach.png" alt="image of composer"></div>
                <div class="cube-bottom">Composer Name <p>Title of the track </p></div>
                <div class="cube-left">Left</div>
                <div class="cube-right">Right</div>
            </div>`;
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
        // Callback function for showing trivia questions
        this.showTrivaQuestionsCallback = null;        
        // Callback fucntion for hiding trivia questions
        this.hideTriviaQuestionsCallback = null;
        this.timer = 0;
        this.timerInterval = null;
    }

    restart() {
        this.firstCard = null;
        this.secondCard = null;
        this.score = 0;
        this.cards_uncovered = 0;
        this.mp3player.stop();
    }

    stopPlayback() {
        this.mp3player.stop();
    }

    pickCard(n) {
        if (this.hideTriviaQuestionsCallback !== null) {
            this.hideTriviaQuestionsCallback();
        }
        // Play the song associated with the card    
        this.mp3player.play(this.cards[n].trackIndex);
        // If the first card is null, it means that this is the first card to be selected
        if (this.firstCard == null) {
            this.firstCard = this.cards[n];
        }// If the second card is null, it means that this is the second card to be selected
        else if (this.secondCard == null) {
            this.secondCard = this.cards[n];
        } else {
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

            if (this.showTrivaQuestionsCallback !== null) {
                this.showTrivaQuestionsCallback();
            }

            if (this.isGameOver()) {
                this.hideTriviaQuestionsCallback();                
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
        // Call the callback function after a delay
        // The main.js needs to get through the last function first
        setTimeout(() => {
            callback();
        }, 1000);        
    }

    

    addScore(extraScore) {
        this.score += extraScore;
    }
    // Setter for the showTriviaQuestionsCallback
    addShowTriviaQuestionsCallback(callback) {
        this.showTrivaQuestionsCallback = callback;
    }
    // Setter for the hideTriviaQuestionsCallback
    addHideTriviaQuestionsCallback(callback) {
        this.hideTriviaQuestionsCallback = callback;
    }    

    stopPlayback() {
        this.mp3player.stop();
    }
}


function renderCubes() {
    for (let i = 0; i < NUMBER_OF_CUBES; i++) {
        let cube = new Cube3d();
        let cubeHtml = cube.render(i);
        document.getElementById('cubes-container').innerHTML += cubeHtml;
    }
}

function rotateCube(id) {
    let cube = document.getElementById(`cube-${id}`);
    cube.className = 'cube cube-rotate-up';
    // wait for 1 second and them rotate-down
    setTimeout(() => {        
        cube.className ='cube cube-rotate-down';
    }, 1000);
    // wait for 1 second and them rotate-to-front
    setTimeout(() => {        
        cube.className = 'cube cube-rotate-to-front';
    }, 4000);
}

renderCubes();