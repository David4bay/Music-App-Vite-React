import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause
} from '@fortawesome/free-solid-svg-icons'
import { playAudio } from '../util/util'

const Player = ({setSongs, songs, setCurrentSong, songInfo, setSongInfo, currentSong, isPlaying, setIsPlaying, audioRef}) => {
    
    function activeLibraryHandler(nextPrev) {
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id) {
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
    }

    function playSongHandler() {
        if (isPlaying) {
            audioRef.current.play();
           setIsPlaying(!isPlaying)
        } else {
            audioRef.current.pause();
           setIsPlaying(!isPlaying)
        }
    }

    function getTime(time) {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    function dragHandler(e) {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    async function skipTrackHandler(direction) {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {
            console.log(currentSong.id)
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if (direction === 'skip-back') {
            if ((currentIndex - 1) % songs.length === -1) {
            await setCurrentSong(songs[songs.length - 1])
                activeLibraryHandler(songs[songs.length - 1])
                playAudio(isPlaying, audioRef)
                return;
        }
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }
        playAudio(isPlaying, audioRef)
    }

    return (
        <div className='player'>
            <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input type="range" onChange={dragHandler} value={songInfo.currentTime} min={0} max={songInfo.duration} />
            <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
        <div className="play-control">
        <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} size='2x' className='skip-back' icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} size='2x' className='play' icon={isPlaying === true ? faPlay : faPause} />
        <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')}  size='2x' className='skip-forward' icon={faAngleRight} />
        </div>
        </div>
    )
}


export default Player;