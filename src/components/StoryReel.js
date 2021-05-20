import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
        image='https://images.unsplash.com/photo-1621494042354-b94734dd3bd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        profileSrc='https://randomuser.me/api/portraits/men/40.jpg'
        title='Tim Brewer'
      />
      <Story
        image='https://images.unsplash.com/photo-1621390324893-ea412aa9453c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
        profileSrc='https://randomuser.me/api/portraits/women/25.jpg'
        title='Deanna Long'
      />
      <Story
        image='https://images.unsplash.com/photo-1621343342486-0eb7705dd2ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        profileSrc='https://randomuser.me/api/portraits/men/22.jpg'
        title='Walter Castillo'
      />
      <Story
        image='https://images.unsplash.com/photo-1621512676584-6765fb6ae9ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'
        profileSrc='https://randomuser.me/api/portraits/women/65.jpg'
        title='Tiffany Nguyen'
      />
      <Story
        image='https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        profileSrc='https://randomuser.me/api/portraits/men/68.jpg'
        title='Rom Duncan'
      />
    </div>
  )
}

export default StoryReel
