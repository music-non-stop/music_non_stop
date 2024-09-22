# Music Non Stop

Music Non Stop is a classical music-themed memory card game. Designed to enhance your memory while appreciating classical music.

![The website shown on a variety of screen sizes](/documentation/doc-images/amiresponsive.webp)

Visit the deployed site: [Music Non Stop](https://music-non-stop.github.io/music_non_stop/index.html)

**Developed by:** Harmonic Hackers

# Table of Contents

- [A Classical Memory Game for the Mind](#musicnonstop-a-classical-memory-game-for-the-mind)
- [Goals](#goals)
- [User Stories](#user-stories)
- [Planning & Design](#planning--design)
- [Test](#test)
- [Deployment & Local Development](#deployment--local-development)
- [Credits](#credits)
---

## A Classical Memory Game for the Mind

<details>
<summary>Logo</summary>
<br>

The violin is a quintessential instrument in classical music, making it an excellent choice to represent this genre. It immediately signals to users that the game is centered around classical music.
The text “MusicNonStop” suggests continuous play and engagement, which is essential for a memory game. It implies that the game will keep players mentally active and entertained.

<img src="/documentation/doc-image/logoforreadme.jpg">

</details>

<details>
<summary>Game Overview</summary>
<br>

Music Non Stop is a card game that trains your brain to improve your memory while bringing the beauty of classical music to your ears. Designed for music lovers of all ages, this game challenges players to match pairs of cards that play the same classical tune. There are 24 cards featuring 12 unique pairs.

</details>

<details>
<summary>How to play</summary>
<br>

1. The game will start the timer as soon as you begin.
2. Click on any two cards to flip them over and listen to the tunes.
3. If the cards play the same tune, you have found a match. The cards will remain face up.
4. If the cards do not match, they will flip back over after a short delay.
5. Keep selecting two cards at a time, trying to remember the tunes and their locations.
6. The game ends when all pairs have been matched.

</details>

<details>
<summary>Scoring</summary>
<br>

 - The scoring system rewards players with extra points for faster card matches. The quicker you match the cards, the more points you earn. Extra points are calculated based on the time between card picks. The game also saves your score and time, which are displayed at the end and recorded on the scoreboard.
- The game involves flipping cards and matching pairs. Points are awarded based on how quickly the pairs are matched.
- The top 10 players, ranked by their scores in descending order, are displayed on the scoreboard.
- Players can earn additional bonus points by answering trivia questions.

</details>

<details>
<summary>Tips for Success</summary>
<br>

1. Pay close attention to the tunes that each card plays.
2. Try to remember the location of each tune to make matching easier.
3. Practice makes perfect! The more you play, the better you’ll get at remembering the tunes.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_



## User Stories

<details>
<summary>List of US</summary>
<br>
  
As a developer, I want to create a repository and invite collaborators so that the project can be managed collaboratively and code can be version-controlled.

As a Scrum Master, I want to create a Kanban board so that tasks can be tracked and organized for better project workflow management.

As a developer, I want to create wireframes so that the layout and user flow are planned and validated before development.

As a developer, I want to create audio files so that the game has appropriate sound effects and music to enhance the user experience.

As a developer, I want to create a color palette so that the site has a cohesive and appealing visual identity.

As a developer, I want to choose typography so that the site has consistent and readable fonts that enhance user experience.

As a developer, I want to create a README file so that others can understand the project structure and purpose easily.

As a developer, I want to create game instructions so that users can quickly learn how to play and enjoy the game.

As a developer, I want to code the game logic so that the game functions according to the specified rules and provides an engaging experience.

As a developer, I want to create a 404 page so that users have a friendly and helpful experience when encountering a broken link.

As a developer, I want to create an About page so that users can learn more about the project and its creators.

As a developer, I want to create an index/landing page so that users are greeted with a clear and engaging introduction to the site.

As a developer, I want to create a global CSS structure so that the site's styles are organized and consistent across all pages.

As a developer, I want to add a favicon so that the site has a recognizable icon in the browser tab, enhancing brand identity.

As a developer, I want to deploy the site so that users can access and interact with the project online.

As a developer, I want to create a feedback form so that users can provide their thoughts and suggestions, helping to improve the site.

As a developer, I want to create or find images for the memory game cards so that the game is visually engaging and fun for players.

As a developer, I want to create a game landing page so that users have a visually engaging and functional entry point to the game.

As a player, I want my score and username to be saved in local storage, so that I can continue where I left off and track my performance over time.

As a player, I want to be asked a trivia or challenge question after successfully pairing cards so that I can earn extra points and add an additional layer of complexity and engagement to the game.

As a user/developer, I want a responsive navbar that transforms into a hamburger menu on smaller screens so that I can navigate the site easily regardless of the device I'm using.

As a music lover, I want to play a game that features classical music tunes, so that I can enjoy classical music while having fun.

As a parent, I want a game that is educational and entertaining for my children, so that they can improve their memory skills and develop an appreciation for classical music.

As a teacher, I want to use a game in my classroom that helps students improve their auditory memory and concentration, so that they can enhance their learning abilities in a fun and engaging way.

As a competitive player, I want a game that tracks my time and performance, so that I can challenge myself to improve and compete with friends and family.

As a classical music enthusiast, I want a game that includes a variety of famous classical pieces, so that I can test my knowledge and discover new music.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Planning & Design

The development process for this project followed an Agile methodology, emphasizing continuous improvement throughout the development lifecycle. We assigned tasks to each other, which helped us distribute the workload efficiently and ensured clarity on responsibilities.

<details>
<summary>Wireframes</summary>
<br>

<img src="documentation/wireframes/about_us.png">
<img src="documentation/wireframes/game.png">
<img src="documentation/wireframes/game_over.png">
<img src="documentation/wireframes/home.png">
<img src="documentation/wireframes/instructions.png">
<img src="documentation/wireframes/scoreboard.png">

</details>

<details>
<summary>Colour palettes</summary>
<br>

<img src="/documentation/doc-image/img_8611.png">

Deep Forest Green (#004D40): This color evokes a sense of depth and richness, much like the profound and intricate compositions found in classical music. It can also symbolize the natural, timeless beauty of classical pieces.

Muted Gold (#F7E7CE): Gold often represents elegance and sophistication, which are key characteristics of classical music. This color can also hint at the historical and prestigious nature of classical compositions.

Light Beige (#D0B8A8): Beige is a neutral, calming color that can provide a soothing background, allowing players to focus on the game. It also complements the other colors without overpowering them, adding to the overall harmony.

Dark Charcoal (#2E2E2E): This color adds contrast and depth, much like the dramatic moments in classical music. It can also represent the serious and intense emotions that classical music can evoke.

Soft Coral Pink (#F08080): This color introduces a touch of modernity and freshness, perhaps symbolizing new interpretations or contemporary performances of classical pieces. It adds a lively and inviting element to the palette.

</details>

## JavaScript Audio

We have created a class for playing audio files. Since we're going to use mp3-format it is named 'MP3Player'. The class is defined in mp3-player.js.

<details>
  <summary>MP3Player Class Documentation</summary>

  ### MP3Player

  #### Constructor

  The constructor accepts two parameters **path** and **playlist**.

  - **path**: The path to the folder with the mp3-files. The path is relative to the HTML document in which the script is loaded.
  - **playlist**: An array of audio file names without the extension. All files must be in mp3 format. Example:

  <code>
  // array with mp3 filenames  
  const playlist = ["symphony1", "symphony2", "mozart-track1", "bach-track1"];  
  // path to the folder with the files  
  const path = "./js/audio/"  
  // create an instance of the mp3-player  
  const player = new MP3Player(path, playlist);  
  // Play the first track from the list (which is symphony1.mp3)  
  player.play(1);  
  </code>

  #### Properties

  - **audio**
  - **playBtn**
  - **stopBtn**
  - **prevBtn**
  - **nextBtn**
  - **tracks**
  - **audio_files_folder_path**
  - **trackIndex**

  #### Methods

  The class implements all the essential methods for playing mp3 files:

  - `play(n)`
  - `stop()`
  - `pause()`
  - `prev()`
  - `next()`
  
</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Technologies used

<details>
<summary>List of Technologies</summary>
<br>
  
- HTML
- CSS 
- JavaScript
- GitHub
- Git
- Photoshop
- paint.net
- am I responsive
- Bootstrap
- jQuery
- Cloudflare

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Test

<details>
<summary>Test Details</summary>

### Test environment

Testing was performed on the following devices
- x
- y

### Responsiveness

- [Am I Responsive]()

### Validator, Accessibilty

- [W3C](https://www.w3.org/developers/tools/) was used to validate the HTML on all pages of the website. Result is PASS.
- [W3C jigsaw](https://www.w3.org/developers/tools/) was used to validate the CSS. Result is PASS
- [JSHint](https://jshint.com/about/) was used to validate the JavaScript. Result is PASS
- No warning or errors present in Dev Tools.
- [Lighthouse chrome devtool]()
   - add image

</details>

<details>
<summary>Test executed</summary>
<br>

| ID | Description | Expected Outcome | Result | Comment |
| --- | --- | --- | --- | --- |
| 01 |  |  | PASS/FAIL   |  |

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Deployment & Local Development

<details>
<summary>Deployment</summary>
<br>
  
Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, [Music Non Stop](https://github.com/music-non-stop/music_non_stop/)
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

This site is deployed using GitHub Pages - [Music Non Stop](https://github.com/music-non-stop/music_non_stop/)

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

<details>
<summary>Local Deployment</summary>

#### How to Fork

To fork the Music Non Stop repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Music Non Stop](https://github.com/music-non-stop/music_non_stop/)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Music Non Stop repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Music Non Stop](https://github.com/music-non-stop/music_non_stop/)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Credits

<details>
<summary>Content</summary>
<br>
- Website content created by the developer. Images sourced from free resources unless otherwise stated.
- The images and sounds on the "Error: Page Not Found" are sourced from DaCapoAlCoda.com, [C note in treble clef](https://www.dacapoalcoda.com/c-music-note) and [F note in treble clef](https://www.dacapoalcoda.com/f-music-note)
-  Code  on the "Error: Page Not Found" was inspired by:
    * [mdn HTMLMediaElement: play() method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)
    * [W3Schools HTML DOM Audio Object](https://www.w3schools.com/jsref/dom_obj_audio.asp)

</details>
  
<details>
<summary>Acknowledgements</summary>
<br>  
- Thanks to Code Institute for the chance to work on this hackathon.
- Thanks to our facilitator [Vasilica Pavaloi](https://github.com/Vasi012)
- Thanks to all team members, for their work and co-operation:
  - [Alina Teodora Brinzac](https://github.com/TeodoraAlina)
  - [Anthony Radose](https://github.com/anthonyradose)
  - [Dimitri Edel](https://github.com/dimitri-edel)
  - [Jacqueline Kalmár](https://github.com/JaqiKal)
  - [Kiko Climent](https://github.com/Kiko-Climent)
  - [Monica Iancu](https://github.com/Monicaular)
  - [Julia Karpa](https://github.com/Julia-Karpa)

  </details>

  _<span style="color: blue;">[Back to Content](#table-of-contents)</span>_
