import React from 'react'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import Films from './views/Films'
import Cinemas from './views/Cinemas'
import Center from './views/Center'

export default function App() {
  return (
    <div>
      <HashRouter>
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>
        <Route path="/center" component={Center}></Route>
      </HashRouter>
    </div>
  )
}
