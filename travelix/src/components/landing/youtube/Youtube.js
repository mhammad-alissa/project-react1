import React, { Component } from 'react'
import YouTube from 'react-youtube'


class Youtube extends Component {
  videoOnReady (event) {
    // access to player in all event handlers via event.target
}
  
  render () {
    const opts = {
      height: '500',
      width: '1110',
      playerVars: { 
        autoplay: 0,
        origin: 'http://localhost:3000'
      }
    }
    const {videoId} = this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        // onReady={this.videoOnReady}
        // onPlay={this.videoOnPlay}
        // onStateChange={this.videoStateChange}
      />
    )
  }
}

export default Youtube