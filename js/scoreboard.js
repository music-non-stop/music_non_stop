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
            let time = document.createElement('td');
            time.textContent = `${entry.time}`;
            tr.appendChild(rank);
            tr.appendChild(name);
            tr.appendChild(score);
            tr.appendChild(time);
            scoreBoard.appendChild(tr);
        });
    }
}

console.log(scoreBoardData);
renderScoreBoardData();