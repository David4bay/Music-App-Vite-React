import { useState, useRef, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.scss'
import Player from './components/Player'
import Song from './components/Song'
import data from './util/data'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  const [libraryStatus, setLibraryStatus] = useState(true);

  const audioRef = useRef(null);

  const timeUpdateHandler = useCallback(e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
        ...songInfo,
        currentTime: current,
        duration
    })
}, [songInfo])

  return (
    <div className={`App ${libraryStatus ? 'centered' : ''}`}>
      <Nav
       libraryStatus={libraryStatus}
       setLibraryStatus={setLibraryStatus}
       />
      <Song currentSong={currentSong} />
      <Player
      songs={songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying} 
      currentSong={currentSong} 
      />
      <Library
      libraryStatus={libraryStatus} 
      setSongs={setSongs}
      songs={songs}
      isPlaying={isPlaying} 
      setCurrentSong={setCurrentSong} 
      />
      <audio 
      onLoadedMetadata={timeUpdateHandler} 
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}
      ></audio>
    </div>
  )
}

export default App;
