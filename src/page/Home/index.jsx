import React, { useState } from 'react'
import './index.css'
import Edit from './components/Edit'
import List from './components/List'

const Home = () => {
  return (
    <div className='app'>
        <Edit/>
        <List/>
    </div>
  )
}

export default Home