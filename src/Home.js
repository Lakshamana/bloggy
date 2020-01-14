import React, { useState, useEffect } from 'react'
import axios from './plugins/axios.plugin'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get()
  })

  return <div>Home</div>
}

export default Home
