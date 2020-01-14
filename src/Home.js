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
        <div className='card indigo lighten-4'>
          <div className='card-content'>
            <span className='card-title blue-text'>
              <strong>{title}</strong>
            </span>
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
            <div className='col s12'>
              <form>
                <div className='input-field smoke-ipt-bg ipt-style'>
                  <input type='text' placeholder='Search...' />
                </div>
              </form>
              <br />
              {renderPosts}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
