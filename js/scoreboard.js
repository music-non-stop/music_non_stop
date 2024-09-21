const scoreBoardData = loadScoreBoardData();

function renderScoreBoardData() {
    const scoreBoard = document.getElementById('scoreboard-table');
    if (scoreBoardData) {
        scoreBoardData.forEach(function(entry) {                    
            let tr = document.createElement('tr');
            let rank = document.createElement('td');
            rank.textContent = `none`;            
            let name = document.createElement('td');
            name.textContent = `${entry.username}`;
            let score = document.createElement('td');
            score.textContent = `${entry.score}`;
            tr.appendChild(rank);
            tr.appendChild(name);
            tr.appendChild(score);
            scoreBoard.appendChild(tr);
        });
    }
}

console.log(scoreBoardData);
renderScoreBoardData();