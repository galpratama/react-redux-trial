/* @flow */

import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;

  console.log(video);
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {title} by <strong>{channelTitle}</strong>
            </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
