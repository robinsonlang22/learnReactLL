import React from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'

export default function App() {
  return (
    <div>
      <MRouter>
        <Tabbar></Tabbar>
      </MRouter>
    </div>
  )
}
