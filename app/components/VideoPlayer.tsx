'use client'

import React from 'react'
import VideoPlayerControls from './VideoPlayerControls'
import { useState, useEffect, useRef } from 'react'

export default function VideoPlayer() {

   const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoDuration, setVideoDuration] = useState<number>()
  const [videoProgress, setVideoProgress] = useState<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      setVideoDuration(video.duration)
    }
  }, [])

  useEffect(() => {
    if (isPaused) return
    const currentTime = videoRef.current?.currentTime
    if (videoDuration != null && currentTime != null) {
      let loadingTimeOut = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev)=> prev + 0.0001)
        } else {
          setVideoProgress(currentTime / videoDuration)
        }
      }, 10)
      return () => {
        clearTimeout(loadingTimeOut)
      }
    }
  },[videoDuration, videoProgress, isPaused])

  const touglePlayPause = () => {
    const video = videoRef.current
    if (video) {
      setIsPaused(!video.paused)
      video.paused ? video.play() : video.pause()
    }
  }

  return (
     <div className='relative w-[100%] max-w-6xl mx-auto my-8 rounded-md overflow-hidden'>
        <div className='absolute top-2 right-2 z-10'>
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={touglePlayPause}
          />
        </div>
        <video
          className='w-full'
          loop autoPlay /* muted */
          ref={videoRef}
        >
          <source src='video/React.mp4'/>
        </video>
       </div>
  )
}