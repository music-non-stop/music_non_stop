class Cube3d {
    // Empty constructor
    constructor() { }

    // Render the 3D cube
    render(id) {
        return `
            <div id="cube-${id}" class="cube" onclick="rotateCube(${id})">
                <<div class="cube">
                <div class="cube-front">Front</div>
                <div class="cube-back">Back</div>
                <div class="cube-top">Top</div>
                <div class="cube-bottom">Bottom</div>
                <div class="cube-left">Left</div>
                <div class="cube-right">Right</div>
            </div>`;
    }
}

function renderCubes() {
    for (let i = 0; i < 6; i++) {
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
        cube.className = 'cube cube-rotate-down';
    }, 1000);
    // wait for 1 second and them rotate-to-front
    setTimeout(() => {        
        cube.className = 'cube cube-rotate-to-front';
    }, 2000);
}

renderCubes();