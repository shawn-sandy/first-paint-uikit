import React from 'react'
import './App.css'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json()).catch((err) => console.log(err))
function App () {
  const { data, error } = useSWR(
    'https://api.github.com/repos/shawn-sandy/ideas/commits?sha=main',
    fetcher
  )
  console.log(data)
  console.log(error)
  // console.log(data)
  return (
    <section className='App'>
      <h1>Git commits</h1>
      <div>
        {error
          ? 'errors'
          : data.map((item) => (
            <div key={item.sha}>
              <p>
                <strong>{item.commit.message}</strong>
              </p>
              <p>{item.commit.author.name}</p>
            </div>
            <hr />
          ))}
      </div>
    </section>
  )
}

export default App
