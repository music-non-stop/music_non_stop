class GameCard {
    constructor(index, image) {
        this.index = index;
        this.image = image;
    }
    render() {
        return `
            <div class="flip-card">
                <div id="card-${this.index}" class="flip-card-inner" onclick="card_clicked(${this.index})">
                    <div class="flip-card-front">
                        <h4>Play song ${this.index}</h4>
                    </div>
                    <div class="flip-card-back">
                        <h4>My Song</h4>
                        <p>Artist: My Artist</p>
                        <p>Album: My Album</p>
                    </div>
                </div>
            </div>
        `;
    }
}