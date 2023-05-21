import React from 'react'
import LibrarySong from './LibrarySong';

function Library({libraryStatus, setSongs, songs, setCurrentSong, audioRef, isPlaying}) {

    return (
        <div className={`${libraryStatus ? 'active-library' : 'library'}`}>
            <h2 style={{textAlign: 'center'}}>Library</h2>
            <div className="library-songs"></div>
            {songs.map(song => 
            <LibrarySong
            id={song.id} 
            setSongs={setSongs}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            isPlaying={isPlaying}
            audioRef={audioRef}
             />)}
        </div>
    )
}

export default Library;