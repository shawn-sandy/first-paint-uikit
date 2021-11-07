import React from 'react'
import './Commit.css'
import Commits from './Components/Commits'

const fetcher = (url) => fetch(url).then((res) => res.json()).catch((err) => console.log(err))
function App () {
  // console.log(data)
  return (
    <section className='app'>
      <Commits />
    </section>
  )
}

export default App
