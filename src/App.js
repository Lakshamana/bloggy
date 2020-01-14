import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
