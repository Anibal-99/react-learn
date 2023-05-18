import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
	
	return (
		<section className='App'>

			<TwitterFollowCard 
			isFollowing 
			userName="midudev" 
			nameUser="Eder Zoy" 
			/>

			<TwitterFollowCard
			isFollowing
			userName="Jey" 
			nameUser="Joaquin Alvarez" 
			/>

			<TwitterFollowCard
			isFollowing
			userName="Mati" 
			nameUser="Matias Arias" 
			/>

			<TwitterFollowCard
			isFollowing
			userName="Samu" 
			nameUser="Samuel Andres" 
			/>
		</section>
	)
}