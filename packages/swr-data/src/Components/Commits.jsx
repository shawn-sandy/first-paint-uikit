// @ts-check
import React from 'react'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json()).catch((err) => console.log(err))
function Commits () {
  const { data, error } = useSWR(
    'https://api.github.com/repos/shawn-sandy/ideas/commits?sha=main',
    fetcher
  )
  // console.log(data)
  // console.log(error)

  if (error) return 'An error has occurred.'
  if (!data) return (<p className='loading'>Loading...</p>)

  return (
    <section className='app'>
      <h1>Git commit</h1>
      <div>
        {error !== undefined
          ? 'errors'
          : data.map((item) => (
            <div key={item.sha}>
              <p>
                <strong>{item.commit.message}</strong>
              </p>
              <p>{item.commit.author.name}</p>
              <hr />
            </div>
          ))}
      </div>
    </section>
  )
}

export default Commits
