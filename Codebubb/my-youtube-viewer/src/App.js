import React, { useState, useEffect } from 'react';
import { Search } from './Search';
import { Video } from './Video';

export function App() {
    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'
    const [videos, setVideos] = useState([])
    const [currentChannelId, setCurrentChannelId] = useState('UCuvTObpdx__W966kbdIZ4_Q')

    useEffect(() => {
        (async () => {
            const data = await fetch(`${baseUrl}${currentChannelId}`)
            .then(response => response.json())
           
            setVideos(data.items)
            console.log(data.items);
        })()
    }, [currentChannelId])

    return (
        <div className="app-container">
            <h1>Latest YouTube Videos</h1>
        </div>
    );
};
