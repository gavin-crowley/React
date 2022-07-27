import React, { useState, useEffect } from 'react';
import { Search } from './Search';
import { Video } from './Video';

export function App() {
    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'
    const [videos, setVideos] = useState([])
    const [currentChannelId, setCurrentChannelId] = useState('')
    const [channelId, setChannelId] = useState('')

    useEffect(() => {
        (async () => {
            if (currentChannelId) {
                
                const data = await fetch(`${baseUrl}${currentChannelId}`)
                .then(response => response.json())
                
                setVideos(data.items)
                console.log(data.items);
                console.log(videos);
            }
        })()
    }, [currentChannelId])

    return (
        <div className="app-container">
            <h1>Latest YouTube Videos</h1>
            <div className="search">
                <input type="text" onChange={event => setChannelId(event.target.value)} placeholder='Enter your favorite channel ID' />
                <button onClick={() => setCurrentChannelId(channelId)}>Get Videos</button>
            </div>
            {videos.map(video => (
                <div key={video.guid} className="videos__items">
                    <div className="video__image">
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                            <img src={`https://i4.ytimg.com/vi/${video.guid.split(':')[2]}/mqdefault.jpg`} />
                        </a>
                    </div>
                    <div className="video__footer">
                        <p>{video.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
