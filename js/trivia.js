// Array of questions with answers:
const triviaQuestions = [
  {
    question: "On which instrument is a Nocturne usually played?",
    answer: "Piano",
  },
  {
    question: "Legato' is an instruction to play a piece in what style?",
    answer: "Smoothly",
  },
  {
    question: "In which century did Dmitri Shostakovich live?",
    answer: "20th",
  },
  {
    question: "La Scala is an Opera House in which Italian city?",
    answer: "Milan",
  },
  {
    question: "What nationality was the composer Carl Weber?",
    answer: "German",
  },
  {
    question: "Which of these was NOT one of the Three Tenors?",
    answer: "Andrea Bocelli",
  },
  {
    question: "Charles Villiers Stanford was born in which country?",
    answer: "Ireland",
  },
  {
    question: "Which of the following means unaccompanied singing?",
    answer: "A Cappella",
  },
  {
    question: "To what year did Tchaikovsky dedicate a famous overture?",
    answer: "1812",
  },
  {
    question: "The Gamelan is the traditional orchestra in which country?",
    answer: "Indonesia",
  },
  {
    question: "Which of these terms describes the slowest style of playing?",
    answer: "Largo",
  },
  {
    question: "Swan Lake' was a work by which Russian Composer?",
    answer: "Tchaikovsky",
  },
  {
    question: "Prokofiev produced a work entitled 'The Love For Three…..'?",
    answer: "Oranges",
  },
  {
    question: "Ludwig Van Kochel made catalogued which composers works?",
    answer: "Mozart",
  },
  {
    question: "Which of these periods of classical music came first?",
    answer: "Renaissance",
  },
  {
    question: "What is the nickname of Beethoven's 5th Piano Concerto?",
    answer: "Emperor",
  },
  {
    question: "The Bayreuth Festival celebrates the music of which composer?",
    answer: "Wagner",
  },
  {
    question: "Which American Composer wrote 'Nixon in China'?",
    answer: "Adams",
  },
  {
    question: "Symphonie Fantastique' is a work by which composer?",
    answer: "Berlioz",
  },
  {
    question: "The Halle Orchestra is based in which British City?",
    answer: "Manchester",
  },
  {
    question: "Which of the following is NOT a stringed instrument?",
    answer: "Clarinet",
  },
  {
    question:
      "Henry Wood was the founder of which famous classical music event?",
    answer: "Proms",
  },
  {
    question:
      "To which composer did Elizabeth I grant a monopoly of sheet music?",
    answer: "Tallis",
  },
  {
    question: "How many operas were written by Rimsky-Korsakov?",
    answer: "15",
  },
  {
    question: "Which of these terms describes the fastest style of playing?",
    answer: "Presto",
  },
  {
    question: "How many players are involved in a string quartet?",
    answer: "4",
  },
  {
    question: "How many Operas were composed by Giacomo Puccini?",
    answer: "12",
  },
  {
    question: "After which planet is Mozart's Symphony No. 41 named?",
    answer: "Jupiter",
  },
  {
    question: "How is Beethoven's 3rd Symphony better known?",
    answer: "Eroica",
  },
  {
    question: "Who was the founder of Impressionist music?",
    answer: "Debussy",
  },
  {
    question: "Who composed 'The Thieving Magpie Overture'?",
    answer: "Gioachino Rossini",
  },
  {
    question: "Who created 'The Blue Danube'?",
    answer: "Johann Strauss II",
  },
  {
    question: "What nationality is the composer John Adams?",
    answer: "American",
  },
  {
    question: "Which of these was NOT an Italian composer?",
    answer: "Liszt",
  },
  {
    question:
      "Sergei Prokofiev composed a ballet based on what Shakespearian play?",
    answer: "Romeo And Juliet",
  },
  {
    question: "Who composed the Tritsch-Tratsch Polka?",
    answer: "Johann Strauss II",
  },
  {
    question: "What nationality was the composer Sibelius?",
    answer: "Finnish",
  },
  {
    question: "Who composed 'Revolutionary' Etude?",
    answer: "Frederic Chopin",
  },
  {
    question: "Who composed 'Finlandia'?",
    answer: "Jean Sibelius",
  },
  {
    question: "Who composed 'Peter and the Wolf'?",
    answer: "Sergei Prokofiev",
  },
  {
    question: "Who composed the 'Grosse Fugue'?",
    answer: "Ludwig Van Beethoven",
  },
  {
    question: "Which of these was NOT a German composer?",
    answer: "Chopin",
  },
  {
    question: "Which one of these was NOT a French composer?",
    answer: "Liszt",
  },
  {
    question: "What opera features a quack named Dulcamara?",
    answer: "The Elixir of Love",
  },
  {
    question:
      "Das Rheingold,' 'Die Walküre,' 'Siegfried,' and 'Götterdammerung' make up what Richard Wagner 'cycle'?",
    answer: "The Ring Cycle",
  },
  {
    question: "What opera contains the famous 'Casta Diva' aria?",
    answer: "Norma",
  },
  {
    question:
      "Carl Maria von Weber's 'Der Freischütz' translates to what in English?",
    answer: "The Marksman",
  },
  {
    question:
      "In George Frideric Handel's opera 'Xerxes,' Xerxes is the king of what land?",
    answer: "Persia",
  },
  {
    question: "Ave Maria' was composed by whom?",
    answer: "Schubert",
  },
  {
    question: "Bach's 'Brandenburg Concertos' were composed during what era?",
    answer: "Baroque",
  },
  {
    question: "Bolero' was the work of which composer?",
    answer: "Ravel",
  },
  {
    question: "Who composed 'The Planets'?",
    answer: "Holst",
  },
  {
    question: "Belshazzar's Feast' was a work by which British composer?",
    answer: "Walton",
  },
  {
    question: "Dido and Aeneas' is a work by which composer?",
    answer: "Purcell",
  },
  {
    question: "What was the first name of Sibelius?",
    answer: "Jean",
  },
  {
    question: "Fur Elise' was a work by which composer?",
    answer: "Beethoven",
  },
  {
    question: "Liszt's 'Hungarian Rhapsodies' were composed during what era?",
    answer: "Middle Romantic",
  },
  {
    question:
      "What kind of 'Concerto' did Alban Berg compose during the Atonal era?",
    answer: "Violin",
  },
  {
    question:
      "Mozart's Symphonies No. 40 and 41 were composed during what era?",
    answer: "Classical",
  },
  {
    question:
      "Tchaikovsky's Symphony No. 6 'Pathetique' was composed during what era?",
    answer: "Late Romantic",
  },
  {
    question:
      "Mendelssohn's Symphony No. 4 'Italian' was composed during what era?",
    answer: "Middle Romantic",
  },
  {
    question:
      "Dvorak's Symphony No. 9 'From the New World' was composed during what era?",
    answer: "Late Romantic",
  },
  {
    question: "Beethoven's Symphony No. 5 and 7 were composed during what era?",
    answer: "Early Romantic",
  },
  {
    question: "Brahms' Symphony No. 4 was written during what era?",
    answer: "Late Romantic",
  },
  {
    question: "Neo-Classicism emerged in which decade?",
    answer: "1920's",
  },
  {
    question: "Which of these periods of classical music came latest?",
    answer: "Romantic",
  },
  {
    question: "What was the first name of the Russian composer Prokofiev?",
    answer: "Sergei",
  },
  {
    question: "What was the first name of prolific Opera composer Puccini?",
    answer: "Giacomo",
  },
  {
    question:
      "What was the first name of the composer known as Adam the Hunchback?",
    answer: "De La Halle",
  },
  {
    question: "What was the first name of the composer Mahler?",
    answer: "Gustav",
  },
  {
    question: "What was the first name of German composer Schumann?",
    answer: "Robert",
  },
  {
    question: "What was the name of Beethoven's only Opera?",
    answer: "Fidelio",
  },
  {
    question: "Who composed the Funeral March?",
    answer: "Frederic Chopin",
  },
  {
    question: "Who composed the Skater's Waltz?",
    answer: "Émile Waldteufel",
  },
  {
    question: "The song 'O Fortuna' is from what opera?",
    answer: "Carmina Burana",
  },
  {
    question:
      "Who composed the Wedding March for the opera 'A Midsummer Night's Dream'?",
    answer: "Felix Mendelssohn",
  },
  {
    question: "Who composed the Anvil Chorus of 'Il Trovatore'?",
    answer: "Giuseppe Verdi",
  },
  {
    question:
      "Who composed the Lacrimosa movement in The Requiem Mass in D minor?",
    answer: "Wolfgang Amadeus Mozart",
  },
  {
    question: "James Galway found fame playing which instrument?",
    answer: "Flute",
  },
  {
    question: "Pablo Casals is famed for playing which instrument?",
    answer: "Cello",
  },
  {
    question: "Itzhak Perlman was a virtuoso on which instrument?",
    answer: "Violin",
  },
  {
    question: "Vannesa-Mae found fame playing which musical instrument?",
    answer: "Violin",
  },
  {
    question: "Nigel Kennedy is famed for playing which instrument?",
    answer: "Violin",
  },
  {
    question: "Klavier is the German word for what instrument?",
    answer: "Keyboard",
  },
  {
    question: "Pizzicato is associated with which type of instrument?",
    answer: "String",
  },
  {
    question: "Joe Ventui is famous for playing which instrument?",
    answer: "Violin",
  },
  {
    question: "The Fairy Queen' is a work by which composer?",
    answer: "Purcell",
  },
  {
    question:
      "The March of the Toreadors' comes from an Opera by which composer?",
    answer: "Bizet",
  },
  {
    question: "Who composed the first Symphony that included singers?",
    answer: "Beethoven",
  },
  {
    question:
      "Richard Strauss' 'Der Rosenkavalier' translates to what in English?",
    answer: "The Knight Of The Rose",
  },
  {
    question: "St Matthews Passion' is a work by which composer?",
    answer: "Bach",
  },
  {
    question: "Danse Macabre' is a famous work by which composer?",
    answer: "Saint Saens",
  },
  {
    question: "Carmina Burana' is a famous work by which composer?",
    answer: "Orff",
  },
  {
    question: "How many strings does a Harp have?",
    answer: "46",
  },
  {
    question: "Air on a G String' is by which composer?",
    answer: "Bach",
  },
  {
    question: "Fingal's Cave' is a work by which composer?",
    answer: "Mendelssohn",
  },
  {
    question:
      "Clock2 and 'Surprise' are common names for symphonies by which composer?",
    answer: "Haydn",
  },
  {
    question: "How many keys does a piano have?",
    answer: "88",
  },
  {
    question:
      "What is the name of the birdcatcher in the opera 'The Magic Flute'?",
    answer: "Papageno",
  },
  {
    question: "How many instruments will be involved in a 'Cadenza'?",
    answer: "1",
  },
  {
    question: "Rallentando refers to what?",
    answer: "Decrease in Speed",
  },
  {
    question: "The Manaus Opera House lies on which river?",
    answer: "Nile",
  },
  {
    question: "In which country was Antonio Vivaldi born?",
    answer: "Italy",
  },
  {
    question: "In what country was Gustav Mahler born?",
    answer: "Austria",
  },
  {
    question: "Issac Albeniz was born in which country?",
    answer: "Spain",
  },
  {
    question: "In what century did Henry Purcell live?",
    answer: "17th",
  },
  {
    question: "What is the highest of all the male voices?",
    answer: "Alto",
  },
  {
    question: "How many strings are there on a double bass?",
    answer: "4",
  },
  {
    question:
      "What classic musician is in the title of a famous Chuck Berry song?",
    answer: "Beethoven",
  },
  {
    question: "What is the lowest of the Soprano voices?",
    answer: "Mezzo",
  },
  {
    question: "Modulation involves the movement of what?",
    answer: "Key",
  },
  {
    question: "Queen Anne was the patron of which composer?",
    answer: "Handel",
  },
  {
    question: "In which year did Sergei Rachmaninov die?",
    answer: "1943",
  },
  {
    question:
      "What does the title of Franz Liszt's 'La Campanella' mean in English?",
    answer: "Little Bell",
  },
  {
    question: "What is the lowest of the female voices?",
    answer: "Contralto",
  },
  {
    question: "In which century did Thomas Tallis live?",
    answer: "16th",
  },
  {
    question: "Erik Satie was a composer from which country?",
    answer: "France",
  },
  {
    question: "In what year was Ralph Vaughn Williams born?",
    answer: "1872",
  },
  {
    question: "Who composed 'Pomp And Circumstance March No. 1'?",
    answer: "Edward Elgar",
  },
  {
    question: "Which composer had the first names Wolfgang Amadeus?",
    answer: "Mozart",
  },
  {
    question: "Missa Solemnis' is a work by which composer?",
    answer: "Beethoven",
  },
  {
    question: "What nationality was the composer Bela Bartok?",
    answer: "Hungarian",
  },
  {
    question: "George Phillipe Telemann was born in which country?",
    answer: "Germany",
  },
  {
    question: "Scheherazade' is a work by which composer?",
    answer: "Rimsky-Korsakov",
  },
  {
    question: "The Salzburg Festival is associated with which composer?",
    answer: "Mozart",
  },
  {
    question: "After which European city is Symphony No. 38 by Mozart named?",
    answer: "Prague",
  },
  {
    question: "Stradivarius is famous for making what type of instrument?",
    answer: "Violin",
  },
  {
    question: "Which composer wrote the famous Brandenburg Concertos?",
    answer: "Bach",
  },
  {
    question: "Adagio refers to what kind of pace within a piece of music?",
    answer: "Slow",
  }
];

// Example Function to display a trivia question that can be integrated into game logic:
function displayTriviaQuestion() {
    // Randomly select a trivia question
    const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
    const selectedQuestion = triviaQuestions[randomIndex];

    // Display the question 
    const triviaContainer = document.getElementById('trivia-container');
    triviaContainer.innerHTML = `
        <h3>Bonus Question!</h3>
        <p>${selectedQuestion.question}</p>
        <input type="text" id="trivia-answer" placeholder="Your answer here" />
        <button onclick="checkTriviaAnswer('${selectedQuestion.answer}')">Submit</button>
    `;
}

// Example Function to check the trivia answer that can be integrated into game logic:
function checkTriviaAnswer(correctAnswer) {
    const userAnswer = document.getElementById('trivia-answer').value.trim();
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct! You earned extra points!");
        isAMatch.score++
    } else {
        alert(`Wrong! The correct answer was: ${correctAnswer}`);
    }
}