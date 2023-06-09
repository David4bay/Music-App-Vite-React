import React from 'react'
import { playAudio } from '../util/util'

function LibrarySong({id, setSongs, song, songs, setCurrentSong, audioRef, isPlaying}) {

    async function songSelectHandler() {
        const selectedSong = songs.filter((state) => state.id === song.id)
    await setCurrentSong(selectedSong[0])
        // OR DO THIS
        // setCurrentSong(song)
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        })
        setSongs(newSongs);
        playAudio(isPlaying, audioRef)
    }

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;