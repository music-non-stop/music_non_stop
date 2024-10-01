// class for the quiz 
class Quiz {
    constructor(game, gameView) {
        this.game = game;
        this.gameView = gameView;
        this.questions = triviaQuestions;
        this.currentQuestion = "";
        this.currentAnswer = "";
        this.currentOptions = [];
        this.htmlContainer = document.getElementById("quiz-container");
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generateNextQuestion = () => {
        this.hideFeedbackMessage();
        this.shuffle(this.questions);
        this.currentQuestion = this.questions[0].question;
        this.currentAnswer = this.questions[0].answer;
        this.currentOptions = this.questions[0].options;
        this.shuffle(this.currentOptions);
    }

    renderQuestion = () => {
        this.htmlContainer.innerHTML = `
            <div class="quiz-entire-line">${this.currentQuestion}</div>
            <div class="quiz-option-line">
                ${this.currentOptions.map((option, index) => `
                    <div class="quiz-option-itme">
                        <input class="quiz-option" 
                        type="radio" id="option${index}" 
                        name="quiz-option" 
                        value="${option}" 
                        onclick="checkQuizAnswer('${option}')"/> ${option}
                    </div>`)
                .join("")}
            </div>
        `;
        this.htmlContainer.style.display = "block";
    }

    guess = (answer) => {        ;
        if (answer === this.currentAnswer) {
            this.game.addScore(30);
            this.gameView.updateScoreDisplay();
            this.showSuccessMessage();
        }
        else {
            this.showFailureMessage();
        }

    }

    showSuccessMessage = () => {
        this.hideQuizContainer();
        let feedbackMessage = document.getElementById("quiz-message");
        feedbackMessage.className = "quiz-message-success";
        feedbackMessage.textContent = "Correct! You have scored 30 points!";
        feedbackMessage.style.display = "flex";
    }

    showFailureMessage = () => {
        this.hideQuizContainer();
        let feedbackMessage = document.getElementById("quiz-message");
        feedbackMessage.className = "quiz-message-fail";
        feedbackMessage.textContent = "Incorrect! The correct answer is: " + this.currentAnswer;
        feedbackMessage.style.display = "flex";
    }

    showQuizPlaceholder = () => {
        let feedbackMessage = document.getElementById("quiz-message");
        feedbackMessage.className = "quiz-message-success";
        feedbackMessage.textContent = "Here you will see a BONUS question to score some EXTRA points !";
        feedbackMessage.style.display = "flex";
    }

    hideQuizPlaceholder = () => {
        let feedbackMessage = document.getElementById("quiz-message");
        feedbackMessage.style.display = "none";
    }

    hideFeedbackMessage = () => {
        let feedbackMessage = document.getElementById("quiz-message");
        feedbackMessage.style.display = "none";
    }

    hideQuizContainer = () => {
        this.htmlContainer.style.display = "none";
    }

}

// Array of questions with answers:
const triviaQuestions = [
    {
        question: "On which instrument is a Nocturne usually played?",
        answer: "Piano",
        options: ["Piano", "Guitar", "Violin", "Flute"],
    },
    {
        question: "Legato' is an instruction to play a piece in what style?",
        answer: "Smoothly",
        options: ["Smoothly", "Quickly", "Loudly", "Softly"],
    },
    {
        question: "In which century did Dmitri Shostakovich live?",
        answer: "20th",
        options: ["20th", "19th", "21st", "18th"],
    },
    {
        question: "La Scala is an Opera House in which Italian city?",
        answer: "Milan",
        options: ["Milan", "Rome", "Venice", "Florence"],
    },
    {
        question: "What nationality was the composer Carl Weber?",
        answer: "German",
        options: ["German", "French", "Italian", "Austrian"],
    },
    {
        question: "Which of these was NOT one of the Three Tenors?",
        answer: "Andrea Bocelli",
        options: ["Andrea Bocelli", "Luciano Pavarotti", "Placido Domingo", "Jose Carreras"],
    },
    {
        question: "Charles Villiers Stanford was born in which country?",
        answer: "Ireland",
        options: ["Ireland", "England", "Scotland", "Wales"],
    },
    {
        question: "Which of the following means unaccompanied singing?",
        answer: "A Cappella",
        options: ["A Cappella", "Solo", "Chorale", "Accompanied"],
    },
    {
        question: "To what year did Tchaikovsky dedicate a famous overture?",
        answer: "1812",
        options: ["1812", "1776", "1848", "1900"],
    },
    {
        question: "The Gamelan is the traditional orchestra in which country?",
        answer: "Indonesia",
        options: ["Indonesia", "Thailand", "India", "Philippines"],
    },
    {
        question: "Which of these terms describes the slowest style of playing?",
        answer: "Largo",
        options: ["Largo", "Allegro", "Andante", "Vivace"],
    },
    {
        question: "Swan Lake' was a work by which Russian Composer?",
        answer: "Tchaikovsky",
        options: ["Tchaikovsky", "Prokofiev", "Shostakovich", "Rachmaninoff"],
    },
    {
        question: "Prokofiev produced a work entitled 'The Love For Three…..'?",
        answer: "Oranges",
        options: ["Oranges", "Apples", "Bananas", "Peaches"],
    },
    {
        question: "Ludwig Van Kochel made catalogued which composer's works?",
        answer: "Mozart",
        options: ["Mozart", "Beethoven", "Haydn", "Brahms"],
    },
    {
        question: "Which of these periods of classical music came first?",
        answer: "Renaissance",
        options: ["Renaissance", "Baroque", "Classical", "Romantic"],
    },
    {
        question: "What is the nickname of Beethoven's 5th Piano Concerto?",
        answer: "Emperor",
        options: ["Emperor", "Heroic", "Rondo", "Moonlight"],
    },
    {
        question: "The Bayreuth Festival celebrates the music of which composer?",
        answer: "Wagner",
        options: ["Wagner", "Brahms", "Berlioz", "Debussy"],
    },
    {
        question: "Which American Composer wrote 'Nixon in China'?",
        answer: "Adams",
        options: ["Adams", "Gershwin", "Copland", "Bernstein"],
    },
    {
        question: "Symphonie Fantastique' is a work by which composer?",
        answer: "Berlioz",
        options: ["Berlioz", "Ravel", "Debussy", "Stravinsky"],
    },
    {
        question: "The Halle Orchestra is based in which British City?",
        answer: "Manchester",
        options: ["Manchester", "London", "Birmingham", "Liverpool"],
    },
    {
        question: "Which of the following is NOT a stringed instrument?",
        answer: "Clarinet",
        options: ["Clarinet", "Violin", "Cello", "Double Bass"],
    },
    {
        question: "Henry Wood was the founder of which famous classical music event?",
        answer: "Proms",
        options: ["Proms", "Festival de Cannes", "Edinburgh Festival", "Salzburg Festival"],
    },
    {
        question: "To which composer did Elizabeth I grant a monopoly of sheet music?",
        answer: "Tallis",
        options: ["Tallis", "Byrd", "Purcell", "Dowland"],
    },
    {
        question: "How many operas were written by Rimsky-Korsakov?",
        answer: "15",
        options: ["15", "10", "20", "25"],
    },
    {
        question: "Which of these terms describes the fastest style of playing?",
        answer: "Presto",
        options: ["Presto", "Allegro", "Vivace", "Largo"],
    },
    {
        question: "How many players are involved in a string quartet?",
        answer: "4",
        options: ["4", "3", "5", "6"],
    },
    {
        question: "How many operas were composed by Giacomo Puccini?",
        answer: "12",
        options: ["12", "10", "8", "15"],
    },
    {
        question: "After which planet is Mozart's Symphony No. 41 named?",
        answer: "Jupiter",
        options: ["Jupiter", "Mars", "Venus", "Saturn"],
    },
    {
        question: "How is Beethoven's 3rd Symphony better known?",
        answer: "Eroica",
        options: ["Eroica", "Pastoral", "Emperor", "Moonlight"],
    },
    {
        question: "Who was the founder of Impressionist music?",
        answer: "Debussy",
        options: ["Debussy", "Ravel", "Satie", "Chausson"],
    },
    {
        question: "Who composed 'The Thieving Magpie Overture'?",
        answer: "Gioachino Rossini",
        options: ["Gioachino Rossini", "Verdi", "Puccini", "Bizet"],
    },
    {
        question: "Who created 'The Blue Danube'?",
        answer: "Johann Strauss II",
        options: ["Johann Strauss II", "Brahms", "Liszt", "Beethoven"],
    },
    {
        question: "What nationality is the composer John Adams?",
        answer: "American",
        options: ["American", "British", "Canadian", "Australian"],
    },
    {
        question: "Which of these was NOT an Italian composer?",
        answer: "Liszt",
        options: ["Liszt", "Verdi", "Puccini", "Albinoni"],
    },
    {
        question: "Sergei Prokofiev composed a ballet based on what Shakespearian play?",
        answer: "Romeo And Juliet",
        options: ["Romeo And Juliet", "Macbeth", "Hamlet", "Othello"],
    },
    {
        question: "Who composed the Tritsch-Tratsch Polka?",
        answer: "Johann Strauss II",
        options: ["Johann Strauss II", "J. S. Bach", "Chopin", "Mozart"],
    },
    {
        question: "What nationality was the composer Sibelius?",
        answer: "Finnish",
        options: ["Finnish", "Swedish", "Norwegian", "Danish"],
    },
    {
        question: "Who composed 'Revolutionary' Etude?",
        answer: "Frederic Chopin",
        options: ["Frederic Chopin", "Franz Liszt", "Claude Debussy", "Sergei Rachmaninoff"],
    },
    {
        question: "Who composed 'Finlandia'?",
        answer: "Jean Sibelius",
        options: ["Jean Sibelius", "Edvard Grieg", "Gustav Mahler", "Carl Nielsen"],
    },
    {
        question: "Who composed 'Peter and the Wolf'?",
        answer: "Sergei Prokofiev",
        options: ["Sergei Prokofiev", "Igor Stravinsky", "Dmitri Shostakovich", "Aaron Copland"],
    },
    {
        question: "Who composed the 'Grosse Fugue'?",
        answer: "Ludwig Van Beethoven",
        options: ["Ludwig Van Beethoven", "Johann Sebastian Bach", "Johannes Brahms", "Wolfgang Amadeus Mozart"],
    },
    {
        question: "Which of these was NOT a German composer?",
        answer: "Chopin",
        options: ["Chopin", "Bach", "Beethoven", "Schumann"],
    },
    {
        question: "Which one of these was NOT a French composer?",
        answer: "Liszt",
        options: ["Liszt", "Debussy", "Ravel", "Fauré"],
    },
    {
        question: "What opera features a quack named Dulcamara?",
        answer: "The Elixir of Love",
        options: ["The Elixir of Love", "Carmen", "La Traviata", "Tosca"],
    },
    {
        question: "Das Rheingold,' 'Die Walküre,' 'Siegfried,' and 'Götterdammerung' make up what Richard Wagner 'cycle'?",
        answer: "The Ring Cycle",
        options: ["The Ring Cycle", "The Flying Dutchman", "Lohengrin", "Tannhäuser"],
    },
    {
        question: "What opera contains the famous 'Casta Diva' aria?",
        answer: "Norma",
        options: ["Norma", "Aida", "Tosca", "La Bohème"],
    },
    {
        question: "Carl Maria von Weber's 'Der Freischütz' translates to what in English?",
        answer: "The Marksman",
        options: ["The Marksman", "The Hunter", "The Soldier", "The Archer"],
    },
    {
        question: "In George Frideric Handel's opera 'Xerxes,' Xerxes is the king of what land?",
        answer: "Persia",
        options: ["Persia", "Greece", "Egypt", "Babylon"],
    },
    {
        question: "Ave Maria' was composed by whom?",
        answer: "Schubert",
        options: ["Schubert", "Bach", "Beethoven", "Verdi"],
    },
    {
        question: "Bach's 'Brandenburg Concertos' were composed during what era?",
        answer: "Baroque",
        options: ["Baroque", "Classical", "Romantic", "Modern"],
    },
    {
        question: "Bolero' was the work of which composer?",
        answer: "Ravel",
        options: ["Ravel", "Debussy", "Stravinsky", "Fauré"],
    },
    {
        question: "Who composed 'The Planets'?",
        answer: "Holst",
        options: ["Holst", "Elgar", "Vaughan Williams", "Britten"],
    },
    {
        question: "Belshazzar's Feast' was a work by which British composer?",
        answer: "Walton",
        options: ["Walton", "Elgar", "Holst", "Britten"],
    },
    {
        question: "Dido and Aeneas' is a work by which composer?",
        answer: "Purcell",
        options: ["Purcell", "Handel", "Vivaldi", "Bach"],
    },
    {
        question: "What was the first name of Sibelius?",
        answer: "Jean",
        options: ["Jean", "Karl", "Henrik", "Mikael"],
    },
    {
        question: "Fur Elise' was a work by which composer?",
        answer: "Beethoven",
        options: ["Beethoven", "Mozart", "Haydn", "Schubert"],
    },
    {
        question: "Liszt's 'Hungarian Rhapsodies' were composed during what era?",
        answer: "Middle Romantic",
        options: ["Middle Romantic", "Early Romantic", "Late Romantic", "Classical"],
    },
    {
        question: "What kind of 'Concerto' did Alban Berg compose during the Atonal era?",
        answer: "Violin",
        options: ["Violin", "Piano", "Cello", "Flute"],
    },
    {
        question: "Mozart's Symphonies No. 40 and 41 were composed during what era?",
        answer: "Classical",
        options: ["Classical", "Romantic", "Baroque", "Early Romantic"],
    },
    {
        question: "Tchaikovsky's Symphony No. 6 'Pathetique' was composed during what era?",
        answer: "Late Romantic",
        options: ["Late Romantic", "Middle Romantic", "Classical", "Early Romantic"],
    },
    {
        question: "Mendelssohn's Symphony No. 4 'Italian' was composed during what era?",
        answer: "Middle Romantic",
        options: ["Middle Romantic", "Late Romantic", "Classical", "Baroque"],
    },
    {
        question: "Dvorak's Symphony No. 9 'From the New World' was composed during what era?",
        answer: "Late Romantic",
        options: ["Late Romantic", "Early Romantic", "Classical", "Modern"],
    },
    {
        question: "Beethoven's Symphony No. 5 and 7 were composed during what era?",
        answer: "Early Romantic",
        options: ["Early Romantic", "Classical", "Middle Romantic", "Late Romantic"],
    },
    {
        question: "Brahms' Symphony No. 4 was written during what era?",
        answer: "Late Romantic",
        options: ["Late Romantic", "Middle Romantic", "Classical", "Early Romantic"],
    },
    {
        question: "Neo-Classicism emerged in which decade?",
        answer: "1920s",
        options: ["1920s", "1930s", "1910s", "1940s"],
    },
    {
        question: "Which of these periods of classical music came latest?",
        answer: "Romantic",
        options: ["Romantic", "Classical", "Baroque", "Early Music"],
    },
    {
        question: "What was the first name of the Russian composer Prokofiev?",
        answer: "Sergei",
        options: ["Sergei", "Dmitri", "Igor", "Vladimir"],
    },
    {
        question: "What was the first name of prolific Opera composer Puccini?",
        answer: "Giacomo",
        options: ["Giacomo", "Pietro", "Alberto", "Ruggero"],
    },
    {
        question: "What was the first name of the composer known as Adam the Hunchback?",
        answer: "De La Halle",
        options: ["De La Halle", "Bach", "Rameau", "Lully"],
    },
    {
        question: "What was the first name of the composer Mahler?",
        answer: "Gustav",
        options: ["Gustav", "Richard", "Hugo", "Arnold"],
    },
    {
        question: "What was the first name of German composer Schumann?",
        answer: "Robert",
        options: ["Robert", "Johannes", "Paul", "Richard"],
    },
    {
        question: "What was the name of Beethoven's only Opera?",
        answer: "Fidelio",
        options: ["Fidelio", "Carmen", "Don Giovanni", "The Magic Flute"],
    },
    {
        question: "Who composed the Funeral March?",
        answer: "Frederic Chopin",
        options: ["Frederic Chopin", "Beethoven", "Brahms", "Liszt"],
    },
    {
        question: "Who composed the Skater's Waltz?",
        answer: "Émile Waldteufel",
        options: ["Émile Waldteufel", "Johann Strauss", "Tchaikovsky", "Debussy"],
    },
    {
        question: "The song 'O Fortuna' is from what opera?",
        answer: "Carmina Burana",
        options: ["Carmina Burana", "Aida", "Carmen", "The Magic Flute"],
    },
    {
        question: "Who composed the Wedding March for the opera 'A Midsummer Night's Dream'?",
        answer: "Felix Mendelssohn",
        options: ["Felix Mendelssohn", "Tchaikovsky", "Berlioz", "Stravinsky"],
    },
    {
        question: "Who composed the Anvil Chorus of 'Il Trovatore'?",
        answer: "Giuseppe Verdi",
        options: ["Giuseppe Verdi", "Puccini", "Rossini", "Donizetti"],
    },
    {
        question: "Who composed the Lacrimosa movement in The Requiem Mass in D minor?",
        answer: "Wolfgang Amadeus Mozart",
        options: ["Wolfgang Amadeus Mozart", "Bach", "Haydn", "Beethoven"],
    },
    {
        question: "James Galway found fame playing which instrument?",
        answer: "Flute",
        options: ["Flute", "Violin", "Cello", "Trumpet"],
    },
    {
        question: "Pablo Casals is famed for playing which instrument?",
        answer: "Cello",
        options: ["Cello", "Violin", "Piano", "Double Bass"],
    },
    {
        question: "Itzhak Perlman was a virtuoso on which instrument?",
        answer: "Violin",
        options: ["Violin", "Viola", "Cello", "Flute"],
    },
    {
        question: "Vannesa-Mae found fame playing which musical instrument?",
        answer: "Violin",
        options: ["Violin", "Harp", "Piano", "Guitar"],
    },
    {
        question: "Nigel Kennedy is famed for playing which instrument?",
        answer: "Violin",
        options: ["Violin", "Viola", "Cello", "Trumpet"],
    },
    {
        question: "Klavier is the German word for what instrument?",
        answer: "Keyboard",
        options: ["Keyboard", "Piano", "Organ", "Harpsichord"],
    },
    {
        question: "Pizzicato is associated with which type of instrument?",
        answer: "String",
        options: ["String", "Wind", "Percussion", "Brass"],
    },
    {
        question: "Joe Venturi is famous for playing which instrument?",
        answer: "Violin",
        options: ["Violin", "Piano", "Cello", "Saxophone"],
    },
    {
        question: "The Fairy Queen' is a work by which composer?",
        answer: "Purcell",
        options: ["Purcell", "Handel", "Vivaldi", "Mozart"],
    },
    {
        question: "The March of the Toreadors' comes from an Opera by which composer?",
        answer: "Bizet",
        options: ["Bizet", "Verdi", "Puccini", "Wagner"],
    },
    {
        question: "Who composed the first Symphony that included singers?",
        answer: "Beethoven",
        options: ["Beethoven", "Haydn", "Mozart", "Brahms"],
    },
    {
        question: "Richard Strauss' 'Der Rosenkavalier' translates to what in English?",
        answer: "The Knight Of The Rose",
        options: ["The Knight Of The Rose", "The Rose Cavalier", "The Rose Knight", "The Knight of Roses"],
    },
    {
        question: "St Matthews Passion' is a work by which composer?",
        answer: "Bach",
        options: ["Bach", "Handel", "Vivaldi", "Mozart"],
    },
    {
        question: "Danse Macabre' is a famous work by which composer?",
        answer: "Saint Saens",
        options: ["Saint Saens", "Debussy", "Ravel", "Chopin"],
    },
    {
        question: "Carmina Burana' is a famous work by which composer?",
        answer: "Orff",
        options: ["Orff", "Bach", "Mozart", "Stravinsky"],
    },
    {
        question: "How many strings does a Harp have?",
        answer: "46",
        options: ["46", "40", "48", "42"],
    },
    {
        question: "Air on a G String' is by which composer?",
        answer: "Bach",
        options: ["Bach", "Vivaldi", "Mozart", "Haydn"],
    },
    {
        question: "Fingal's Cave' is a work by which composer?",
        answer: "Mendelssohn",
        options: ["Mendelssohn", "Brahms", "Chopin", "Liszt"],
    },
    {
        question: "Clock2 and 'Surprise' are common names for symphonies by which composer?",
        answer: "Haydn",
        options: ["Haydn", "Mozart", "Beethoven", "Brahms"],
    },
    {
        question: "How many keys does a piano have?",
        answer: "88",
        options: ["88", "76", "61", "49"],
    },
    {
        question: "What is the name of the birdcatcher in the opera 'The Magic Flute'?",
        answer: "Papageno",
        options: ["Papageno", "Tamino", "Pamina", "Monostatos"],
    },
    {
        question: "How many instruments will be involved in a 'Cadenza'?",
        answer: "1",
        options: ["1", "2", "3", "4"],
    },
    {
        question: "Rallentando refers to what?",
        answer: "Decrease in Speed",
        options: ["Decrease in Speed", "Increase in Speed", "Static", "Tempo Change"],
    },
    {
        question: "The Manaus Opera House lies on which river?",
        answer: "Nile",
        options: ["Nile", "Amazon", "Yangtze", "Danube"],
    },
    {
        question: "In which country was Antonio Vivaldi born?",
        answer: "Italy",
        options: ["Italy", "France", "Austria", "Spain"],
    },
    {
        question: "In what country was Gustav Mahler born?",
        answer: "Austria",
        options: ["Austria", "Germany", "Hungary", "Czech Republic"],
    },
    {
        question: "Issac Albeniz was born in which country?",
        answer: "Spain",
        options: ["Spain", "France", "Portugal", "Italy"],
    },
    {
        question: "In what century did Henry Purcell live?",
        answer: "17th",
        options: ["17th", "16th", "18th", "19th"],
    },
    {
        question: "What is the highest of all the male voices?",
        answer: "Alto",
        options: ["Alto", "Tenor", "Bass", "Countertenor"],
    },
    {
        question: "How many strings are there on a double bass?",
        answer: "4",
        options: ["4", "5", "6", "3"],
    },
    {
        question: "What classic musician is in the title of a famous Chuck Berry song?",
        answer: "Beethoven",
        options: ["Beethoven", "Mozart", "Chopin", "Bach"],
    },
    {
        question: "What is the lowest of the Soprano voices?",
        answer: "Mezzo",
        options: ["Mezzo", "Soprano", "Alto", "Contralto"],
    },
    {
        question: "Modulation involves the movement of what?",
        answer: "Key",
        options: ["Key", "Tempo", "Dynamics", "Pitch"],
    },
    {
        question: "Queen Anne was the patron of which composer?",
        answer: "Handel",
        options: ["Handel", "Purcell", "Vivaldi", "Bach"],
    },
    {
        question: "In which year did Sergei Rachmaninov die?",
        answer: "1943",
        options: ["1943", "1945", "1939", "1950"],
    },
    {
        question: "What does the title of Franz Liszt's 'La Campanella' mean in English?",
        answer: "Little Bell",
        options: ["Little Bell", "Big Bell", "The Bell", "Bell"],
    },
    {
        question: "What is the lowest of the female voices?",
        answer: "Contralto",
        options: ["Contralto", "Soprano", "Mezzo", "Alto"],
    },
    {
        question: "In which century did Thomas Tallis live?",
        answer: "16th",
        options: ["16th", "15th", "17th", "18th"],
    },
    {
        question: "Erik Satie was a composer from which country?",
        answer: "France",
        options: ["France", "Germany", "Italy", "Spain"],
    },
    {
        question: "In what year was Ralph Vaughn Williams born?",
        answer: "1872",
        options: ["1872", "1865", "1880", "1890"],
    },
    {
        question: "Who composed 'Pomp And Circumstance March No. 1'?",
        answer: "Edward Elgar",
        options: ["Edward Elgar", "Vaughan Williams", "Holst", "Berlioz"],
    },
    {
        question: "Which composer had the first names Wolfgang Amadeus?",
        answer: "Mozart",
        options: ["Mozart", "Bach", "Beethoven", "Haydn"],
    },
    {
        question: "Missa Solemnis' is a work by which composer?",
        answer: "Beethoven",
        options: ["Beethoven", "Bach", "Haydn", "Mozart"],
    },
    {
        question: "What nationality was the composer Bela Bartok?",
        answer: "Hungarian",
        options: ["Hungarian", "Romanian", "Czech", "Slovak"],
    },
    {
        question: "George Phillipe Telemann was born in which country?",
        answer: "Germany",
        options: ["Germany", "France", "Belgium", "Switzerland"],
    },
    {
        question: "Scheherazade' is a work by which composer?",
        answer: "Rimsky-Korsakov",
        options: ["Rimsky-Korsakov", "Prokofiev", "Stravinsky", "Shostakovich"],
    },
    {
        question: "The Salzburg Festival is associated with which composer?",
        answer: "Mozart",
        options: ["Mozart", "Brahms", "Haydn", "Mahler"],
    },
    {
        question: "After which European city is Symphony No. 38 by Mozart named?",
        answer: "Prague",
        options: ["Prague", "Vienna", "Berlin", "Budapest"],
    },
    {
        question: "Stradivarius is famous for making what type of instrument?",
        answer: "Violin",
        options: ["Violin", "Cello", "Harp", "Piano"],
    },
    {
        question: "Which composer wrote the famous Brandenburg Concertos?",
        answer: "Bach",
        options: ["Bach", "Vivaldi", "Handel", "Mozart"],
    },
    {
        question: "Adagio refers to what kind of pace within a piece of music?",
        answer: "Slow",
        options: ["Slow", "Fast", "Moderate", "Variable"],
    },
];

