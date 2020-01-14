import React, { useState, useEffect } from 'react'
import axios from './plugins/axios.plugin'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.post('/api/posts/query', {}).then(({ data }) => {
      setPosts(data)
    })
  }, [])

  const renderPosts = posts.length ? (
    posts.map(post => {
      const { title, body } = post
      return (
        <div className='card blue-grey darken-2'>
          <div className='card-content white-text'>
            <span className='card-title'>{title}</span>
            <p>{body}</p>
          </div>
        </div>
      )
    })
  ) : (
    <span className='center'>Loading...</span>
  )
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>{renderPosts}</div>
      </div>
    </div>
  )
}

export default Home
