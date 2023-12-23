import './App.css'
// import { Features } from './components/Features'
import { IntroCard } from './components/IntroCard'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <>
		<div className="p-10 flex flex-col h-screen bg-[#F7F8F9]">
			<NavBar/>
			<IntroCard/>
		</div>
    </>
  )
}

export default App
