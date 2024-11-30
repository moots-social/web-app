import Sidebar from '../../Components/SideBar/SideBar'

import PostFeed from './PostFeed/PostFeed'
import ConteudoFeed from './ConteudoFeed/ConteudoFeed'
import BottomBar from '../../Components/BottomBar/BottomBar'
import './feed.css'
import { useState, useEffect } from 'react'


export default function Feed() {

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