# music_non_stop

# JavaScript Audio
I have created a class for playing audio files. Since we're going to use mp3-format I named it MP3Player. The class is defined in mp3-player.js.

## MP3Player

### Constructor
The constructor accepts two parameters **path** and **playlist**

**path** is the path to the folder with the mp3-files. The path is relative to the html document in which the script is loaded.
**playlist** is an array of audio file names without the extension. All files must be in mp3 format. Example 

<code>

// array with mp3 filenames
const playlist = { "symphony1", "symphony2", "mozart-track1", "bach-track1"};
// path to the folder with the files
const path = "./js/audio/"
// create an instance of the mp3-player
cont player = MP3Player(path, playlist);
// Pöay the first track from the list (which is symphony1.mp3)
player.play(1);

</code>

### Properties
audio
playBtn
stopBtn
prevBtn
nextBtn
tracks
audio_files_foler_path
trackIndex

### Methods
The class implements all the essential methods for playing mp3 files. Play.stop, pause, previous, next.

play(n)
stop()
pause()
prev()
next()