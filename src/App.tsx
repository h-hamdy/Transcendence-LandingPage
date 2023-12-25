import './App.css'
import { Ending } from './components/Ending'
import { Features } from './components/Features'
import { IntroCard } from './components/IntroCard'
import { NavBar } from './components/NavBar'
import { Team } from './components/Team'
import { Testimonial } from './components/Testimonial'

function App() {

  return (
    <>
		<div className="p-10 flex flex-col h-screen bg-[#F7F8F9]">
			<NavBar/>
			<div className='pt-32'>
				<IntroCard/>
			</div>
		</div>
		<Features/>
		<Team/>
		<Testimonial/>
		<Ending/>

    </>
  )
}

export default App
