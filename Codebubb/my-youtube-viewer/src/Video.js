import React from "react";

export const Video = ({video}) => (
  <div key={video.guid} className="videos__item">
    <div className="video__image">
      <a href={video.link} target="_blank" rel="noopener noreferrer">
        <img
          src={`https://i4.ytimg.com/vi/${
            video.guid.split(":")[2]
          }/mqdefault.jpg`}
        />
      </a>
    </div>
    <div className="video__footer">
      <p>{video.title}</p>
    </div>
  </div>
);
