import Sidebar from '../../Components/SideBar/SideBar'

import PostFeed from './PostFeed/PostFeed'
import ConteudoFeed from './ConteudoFeed/ConteudoFeed'
import BottomBar from '../../Components/BottomBar/BottomBar'
import './feed.css'
import { useState, useEffect } from 'react'


export default function Feed() {

    const [data, setData] = useState([]);

        useEffect(() => {
            const evtSource = new EventSource("http://localhost:8080/post/stream-sse");
            evtSource.onmessage = (event) => {
            if (event.data) {
                setData(event.data);
            }
            };
        }, []);

        console.log(data);

    return (
        <div className='feed bg'>
            <Sidebar></Sidebar>
            <div className='containerFeed'>
               
                <PostFeed></PostFeed>
                <ConteudoFeed></ConteudoFeed>
            </div>
            <BottomBar></BottomBar>
        </div>
    )
}