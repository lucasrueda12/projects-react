import { useState } from 'react';

export function TwitterFollowCard({ children ,formattedUserName, userName='unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () =>{
      setIsFollowing(!isFollowing);
    }

  return (
    <article className='tw-followCard is-hover'>
      <header className='tw-followCard-header tw-pd-tb'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt={`El avatar de ${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>{formattedUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}