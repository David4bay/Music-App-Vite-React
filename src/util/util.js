import React from 'react'

export function playAudio({isPlaying, audioRef}) {
    if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
     playPromise.then((audio) => {
         audioRef.current.play()})
    }
 }
}