import React, { Component } from 'react'
import YouTube from 'react-youtube'

class Youtube extends Component {
  videoOnReady (event) {
    // access to player in all event handlers via event.target
  }

  render () {
    const opts = { 
      height: '550',
      width: '1110',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
    const {videoId} = this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />
    )
  }
}

export default Youtube