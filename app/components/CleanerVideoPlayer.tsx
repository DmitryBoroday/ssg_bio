'use client'

import React, { useEffect, useRef, useState } from 'react'
import VideoPlayerControls from './VideoPlayerControls'

export default function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null)

    const [isPaused, setIsPaused] = useState(true)
    const [videoDuration, setVideoDuration] = useState(0)
    const [videoProgress, setVideoProgress] = useState(0)

    useEffect(() => {
        const video = videoRef.current

        if (!video) return

        const handleLoadedMetadata = () => {
            setVideoDuration(video.duration)
        }

        const handleTimeUpdate = () => {
            if (video.duration) {
                setVideoProgress(video.currentTime / video.duration)
            }
        }

        const handlePlay = () => {
            setIsPaused(false)
        }

        const handlePause = () => {
            setIsPaused(true)
        }

        video.addEventListener('loadedmetadata', handleLoadedMetadata)
        video.addEventListener('timeupdate', handleTimeUpdate)
        video.addEventListener('play', handlePlay)
        video.addEventListener('pause', handlePause)

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata)
            video.removeEventListener('timeupdate', handleTimeUpdate)
            video.removeEventListener('play', handlePlay)
            video.removeEventListener('pause', handlePause)
        }
    }, [])

    const togglePlayPause = () => {
        const video = videoRef.current

        if (!video) return

        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }

    return (
        <div className='relative w-full h-full'>
            <div className="absolute top-2 right-2 z-10">
                <VideoPlayerControls
                    progress={videoProgress}
                    isPaused={isPaused}
                    onPlayPause={togglePlayPause}
                />
            </div>

            <video
                ref={videoRef}
                className='w-full h-full object-cover bg-black rounded-xl filter brightness-125'
                loop
                autoPlay
                playsInline
            >
                <source src='/video/intro.mp4' type='video/mp4' />
            </video>
        </div>
    )
}