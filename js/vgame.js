const NUMBER_OF_CUBES = 12;
const NUMBER_OF_CUBE_PAIRS = NUMBER_OF_CUBES / 2;

class GameCube {
    constructor({ index, trackIndex, composer, title, composerImage, faceImage }) {
        this.index = index;
        this.trackIndex = trackIndex;
        this.composer = composer;
        this.title = title;
        this.imgComposer = composerImage;
        this.imgFace = faceImage;
    }

    // Render the 3D cube
    render() {
        return `
            <div id="cube-${this.index}" class="cube" onclick="cubeClicked(${this.index})">
                <<div class="cube">
                <div class="cube-front"><img src="${this.imgFace}" alt="image of composer"></div>
                <div class="cube-back">Back</div>
                <div class="cube-top"><img src="${this.imgComposer}" alt="image of composer"></div>
                <div class="cube-bottom">${this.composer} <p>Title of the track </p></div>
                <div class="cube-left">Left</div>
                <div class="cube-right">Right</div>
            </div>`;
    }
}


class Game {
    constructor(cubes, mp3player, gameOverCallback) {
        // Array of GameCube objects
        this.cubes = cubes;
        // Instance of the MP3Player class
        this.mp3player = mp3player;
        // First Cube selected
        this.firstCube = null;
        // Second Cube selected
        this.secondCube = null;
        // Score
        this.score = 0;
        // Number of cubes uncovered
        this.cubes_uncovered = 0;
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
        this.firstCube = null;
        this.secondCube = null;
        this.score = 0;
        this.cubes_uncovered = 0;
        this.mp3player.stop();
    }

    stopPlayback() {
        this.mp3player.stop();
    }

    cubePicked(n) {
        if (this.hideTriviaQuestionsCallback !== null) {
            this.hideTriviaQuestionsCallback();
        }
        // Play the song associated with the Cube    
        this.mp3player.play(this.cubes[n].trackIndex);
        // If the first Cube is null, it means that this is the first Cube to be selected
        if (this.firstCube == null) {
            this.firstCube = this.cubes[n];
        }// If the second Cube is null, it means that this is the second Cube to be selected
        else if (this.secondCube == null) {
            this.secondCube = this.cubes[n];
        } else {
            // If both cubes have been selected, but no match has been found, the second Cube becomes the first Cube
            // and the Cube that was just selected becomes the second Cube
            this.firstCube = this.secondCube;
            this.secondCube = this.cubes[n];
        }
        // Check if the two cubes are a match
        // If they are, the score is incremented and the cubes_uncovered counter is incremented by 2        
        // and the return value is true
        // If they are not, the return value is false
        // Also, if all the cubes have been uncovered, the game is over and the return value is true
        return this.isAMatch(n);
    }

    isAMatch(n) {
        if (this.firstCube == null || this.secondCube == null) {
            return false;
        }

        if (this.firstCube.trackIndex === this.secondCube.trackIndex && this.firstCube.index !== n) {
            this.firstCube = null;
            this.secondCube = null;
            this.score++;
            this.cubes_uncovered += 2;

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
        return this.cubes_uncovered === this.cubes.length;
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

    turnUpVolume() {
        this.mp3player.turnUpVolume();
    }

    turnDownVolume() {
        this.mp3player.turnDownVolume();
    }

    mute() {
        this.mp3player.mute();
    }
}

// View Class for the Game
class GameView {
    constructor() {
        this.game = null;
        this.playlist = [
            "Bach",
            "Beethoven",
            "Brahms",
            "Chopin",
            "Johann Strauss",
            "Mozart",
            "Rossini",
            "Satie",
            "Sibelius",
            "Tchaikovski",
            "Verdi",
            "Vivaldi",
        ];

        this.audio_files_path = "./assets/audio/";
        this.audio_player = new MP3Player(this.audio_files_path, this.playlist);
        // Variable to store the index of the previously selected cube
        this.previous_cube = null;
        this.cubes = [];
        this.uncovered_cubes = [];
        this.flip_previous_cube = false;
        this.time_of_last_cube_pick = 0;
    }

    // intialize the game
    initGame = () => {
        this.generateGameCubes();
        this.game = new Game(this.cubes, this.audio_player, gameOver);
        // this.game.addShowTriviaQuestionsCallback(showTriviaQuestions);
        // this.game.addHideTriviaQuestionsCallback(hideTriviaQuestions);
        this.render();
    }

    // Fisher Yates shuffle algorithm
    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generateGameCubes = () => {
        const path_to_composer_images = "./assets/images/composers/";
        const path_to_face_images = "./assets/images/card_faces/";
        var composerImages = this.getComposerImages();
        var faceImages = this.getCardImages();
        // Shuffle the face images array
        this.shuffle(faceImages);
        // array index track number in the playlist
        let trackIndex = 0;
        // Assign random track index between 0 and NUMBER_OF_CUBE_PAIRS to trackIndex
        // This way it is ensured that the starting point of the playlist is different 
        // each time and the following for-loop does not exceed the length of the playlist
        trackIndex = Math.floor(Math.random() * NUMBER_OF_CUBE_PAIRS);

        for (let i = 0; i < NUMBER_OF_CUBE_PAIRS; i++, trackIndex++) {
            // assign filenames to the GameCard objects, based on the playlist array
            // index, trackIndex, composer, title, composerImage, faceImag
            this.cubes.push(
                new GameCube(
                    {
                        index: i,
                        trackIndex: trackIndex,
                        composer: this.playlist[trackIndex],
                        title: "title of the track",
                        composerImage: path_to_composer_images + composerImages[trackIndex],
                        faceImage: path_to_face_images + faceImages[0]
                    }
                )
            );
            this.cubes.push(
                new GameCube(
                    {
                        index: i,
                        trackIndex: trackIndex,
                        composer: this.playlist[trackIndex],
                        title: "title of the track",
                        composerImage: path_to_composer_images + composerImages[trackIndex],
                        faceImage: path_to_face_images + faceImages[0]
                    }
                )
            );
        }

        // Shuffle the cubes array
        this.shuffle(this.cubes);
        // / Reassign the index property of each game cube to match its new position in the array
        for (let i = 0; i < this.cubes.length; i++) {
            this.cubes[i].index = i;
        }
    }

    getComposerImages = () => {
        const images = [
            "Bach.png",
            "Beethoven.jpg",
            "Brahms.jpg",
            "chopin.jpeg",
            "Johann_Strauss.jpg",
            "mozart.jpg",
            "Rossini.jpg",
            "Satie.jpg",
            "Sibelius.jpg",
            "tchaikovsky.jpg",
            "Verdi.jpg",
            "vivaldi.jpg",
        ];
        return images;
    }

    getCardImages = () => {
        const images = [
            "face1.webp",
            "face2.webp",
            "face3.webp",
            "face4.webp",
            "face5.webp",
        ];
        return images;
    }

    cubeClicked = (n) => {
        // showEmptyTriviaMessageContainer();

        // If the timee of the last pick is 0, that means it is the opening move
        if (this.time_of_last_cube_pick == 0) {
            this.time_of_last_cube_pick = Date.now();
        }
        // Check if a cube is among the uncovered cubes
        function isAmongUncoveredCubes(instance, n) {
            return instance.uncovered_cubes.includes(n);
        }
        // If the user clicked on the same cube again ignore the click
        if (this.previous_cube == n) return;
        // If the cube is among the covered cubes, ignore the click
        if (isAmongUncoveredCubes(this, n)) return;
        // Flip the cube over
        this.flipCubeOver(n);
        // Pick a cube and see if it matches the previous cube
        // game.cubePicked(n) returns true if the cubes match
        if (this.game.cubePicked(n)) {
            calculateExtraScore(this);

            // If the cards match, add them to the this.uncovered_cubes array
            this.uncovered_cubes.push(n);
            this.uncovered_cubes.push(this.previous_cube);
            // Show the bottom side of both cubes to display the composer name and track title
            this.showCubesBottom(n);
            this.showCubesBottom(this.previous_cube);
            // Now the current cube becomes the previous cube
            this.previous_cube = n;
            this.flip_previous_cube = false;

            // Update the score display
            // updateScoreDisplay();


            // Set the time of the last card pick to the current time (for calculating the extra score)
            this.time_of_last_cube_pick = Date.now();
            return;
        }
        // Flip both cubes to display the bottom side with the composer name and track title
        if (this.previous_cube != null && this.flip_previous_cube) this.flipCubeBack(this.previous_cube);
        this.previous_cube = n;
        // Flag that if the card does not match the previous card, flip the previous card back over
        this.flip_previous_cube = true;
        
        function calculateExtraScore(instance) {
            /* The less time the players take to find a match, the more they score */
            let extra_score = 0;
            // Calculate the time difference between the last two card picks
            let time_difference = Date.now() - instance.time_of_last_cube_pick;
            // Convert the time difference to seconds
            let time_difference_seconds = time_difference / 1000;
            // Calculate the extra score based on the time difference
            extra_score = Math.floor(50 / time_difference_seconds);
            // Add the extra score to the game score
            instance.game.addScore(extra_score);
        }
    }

    flipCubeOver = (n) => {
        let cube = document.getElementById(`cube-${n}`);
        cube.className = 'cube cube-rotate-up';
    }

    flipCubeBack = (n) => {
        let cube = document.getElementById(`cube-${n}`);
        cube.className = 'cube cube-rotate-to-front';
    }

    showCubesBottom = (n) => {
        let cube = document.getElementById(`cube-${n}`);
        cube.className = 'cube cube-rotate-down';
    }

    // Method for rendering the game
    render(){
        let container = document.getElementById('cubes-container');
        // Loop through the cubes and render them
        for (let i = 0; i < this.game.cubes.length; i++) {
            container.innerHTML += this.cubes[i].render();
        }        
    }
}

function renderCubes() {

    for (let i = 0; i < NUMBER_OF_CUBES; i++) {
        let cube = new GameCube({ idex: i, trackIndex: i, composer: 'Composer Name', title: "title", backgroundColor: 'red', composerImage: 'Bach.png', faceImage: 'face1.webp' });
        let cubeHtml = cube.render();
        document.getElementById('cubes-container').innerHTML += cubeHtml;
    }
}

function cubeClicked(n) {
    console.log(`Cube clicked: ${n}`);
    gameView.cubeClicked(n);
}

function gameOver() {
    console.log('Game Over');
}

const gameView = new GameView();
gameView.initGame();
