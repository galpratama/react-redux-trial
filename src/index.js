/* @flow */

// Load modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import youtubeSearch from 'youtube-api-search';

// Load app modules
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

// Youtube API key
const API_KEY = 'AIzaSyCZzgrmsWxGolZuX_sPF9F7wAerTGOcoOs';

// Variables
const root = document.querySelector('#root');

// Create a new component. This component should produce
// some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    youtubeSearch({ key: API_KEY, term: 'mamamoo' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
  render() {
    return (
      <div>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, root);
