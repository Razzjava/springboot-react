import { useState } from 'react'
import Home from './components/Home.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello World!</h1>
        <Home></Home>
    </>
  )
}

export default App
