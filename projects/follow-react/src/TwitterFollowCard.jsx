import { useState } from "react"

export function TwitterFollowCard({userName, nameUser}) {
	const [isFollowing, setIsFollowing] = useState(false)


	const text = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing ?
	'tw-followCard-button is-following' :
	'tw-followCard-button'

	const handleClick = ()=>{
		setIsFollowing(!isFollowing)
	}

	const imageSrc = `https://unavatar.io/${userName}`
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-img' alt= "Eder Zoy" src= {imageSrc}/>
        <div className='tw-followCard-div'>
          <strong>{nameUser}</strong>
          <span className='tw-followCard-span'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
					{text}
        </button>
      </aside>
    </article>
  )
}
