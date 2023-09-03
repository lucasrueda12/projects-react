import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
import './app.css'

const users = [
  {
    userName: 'lucasrueda12',
    name: 'Lucas Rueda',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'RomVai',
    name: 'RomV',
    isFollowing: false
  }
]

export function App() {
  const format = (userName) => `@${userName}`

  return (
    <section className='App'>
      <div className='tw-followCard-title tw-pd'>
        <h2>A quien Seguir</h2>
      </div>
      <div>
        {
          users.map(user => {
            const { userName, name, isFollowing } = user;
            return (
              <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
                formattedUserName={format}
              >
                {name}
              </TwitterFollowCard>
            )
          })
        }
      </div>
      <a href="#" className='tw-followCard-viewMore is-hover'>
        <div>Mostrar mas</div>
      </a>
    </section>
  )
}

