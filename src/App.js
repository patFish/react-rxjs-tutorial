import React, { useLayoutEffect } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FirstPerson } from './components'

import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FirstPerson} exact />
        <Route path="/first-person" component={FirstPerson} exact />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
