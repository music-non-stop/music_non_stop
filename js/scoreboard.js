const scoreBoardData = loadScoreBoardData();
rank = 1;

function renderScoreBoardData() {
    const scoreBoard = document.getElementById('scoreboard-table');
    if (scoreBoardData) {
        scoreBoardData.sort((a, b) => b.score - a.score);

        scoreBoardData.forEach(function(entry) {                                
            let tr = document.createElement('tr');
            let rank_cell = document.createElement('td');
            rank_cell.textContent = rank;            
            let name = document.createElement('td');
            name.textContent = `${entry.username}`;
            let score = document.createElement('td');
            score.textContent = `${entry.score}`;
            let time = document.createElement('td');
            time.textContent = `${entry.time}`;
            tr.appendChild(rank_cell);
            tr.appendChild(name);
            tr.appendChild(score);
            tr.appendChild(time);
            scoreBoard.appendChild(tr);
            rank++;
        });
    }
}

renderScoreBoardData();