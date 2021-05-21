import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://randomuser.me/api/portraits/men/40.jpg'
        message='Wow this works'
        timestamp='This is a timestamp'
        username='Tim Brewer'
        image='https://i.ytimg.com/vi/kP9TfCWaQT4/maxresdefault.jpg'
      />
      <Post
        profilePic='https://randomuser.me/api/portraits/women/25.jpg'
        message='This works too'
        timestamp='This is a timestamp too'
        username='Deanna Long'
      />
    </div>
  )
}

export default Feed
