import React, { useState, useEffect } from 'react'
import axios from './plugins/axios.plugin'
import './css/Home.css'

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
        <div className='card'>
          <div className='card-content'>
            <span className='card-title blue-text'>{title}</span>
            <p>
              {body.substring(0, 50)}... <span>Read more</span>
            </p>
          </div>
        </div>
      )
    })
  ) : (
    <div className='center'>Loading...</div>
  )
  return (
    <div className='img-back'>
      <div className='smoke-layer'>
        <div className='container'>
          <div className='row'>
            <div className='col s12'>{renderPosts}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
