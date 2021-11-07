// @ts-check
import React from 'react'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json()).catch((err) => console.log(err))
function Commits ({ repo = 'shawn-sandy/ideas', branch = 'main' }) {
  const { data, error } = useSWR(
    `https://api.github.com/repos/${repo}/commits?sha=${branch}`,
    fetcher
  )
  // console.log(data)
  // console.log(error)

  if (error) return 'An error has occurred.'
  if (!data) return (<p className='loading'>Loading...</p>)

  return (
    <section className='app'>
      <h1>Git commit</h1>

      {error !== undefined
        ? 'errors'
        : data.map((item) => (
          <div key={item.sha}>
            <section className='commits'>
              <div className='avatar'>
                <img src={item.author.avatar_url} alt='avatar' />
              </div>
              <div>
                <p className='commit-message'>
                  {item.commit.message}
                </p>

                <p>{item.commit.author.name}</p>

              </div>
            </section>
            <hr />
          </div>
        ))}

    </section>
  )
}

export default Commits
