import './App.css'
import Counter from './Counter'
import { useState } from 'react'

import axios from 'axios'

function App() {

  const [quote, setQuote] = useState('')

  return (
    <>
      <div className="App">
        <h1>Hello World!</h1>
        <Counter />
        <h1>{quote}</h1>
        <button onClick={() => { axios.get('http://api.kanye.rest').then(res => setQuote(res.data.quote)) }}>Get a quote</button>
      </div>
    </>
  )
}

export default App
