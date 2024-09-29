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

function renderCubes() {
    for (let i = 0; i < NUMBER_OF_CUBES; i++) {
        let cube = new Cube3d({idex: i, trackIndex: i, name: 'Composer Name', backgroundColor: 'red', composerImage: 'Bach.png', faceImage: 'face1.webp'});
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