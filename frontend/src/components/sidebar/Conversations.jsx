import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation/>
      <Conversation/>
            
    </div>
  )
}

export default Conversations