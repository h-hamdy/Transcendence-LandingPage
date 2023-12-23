export function NavBar () {
	return (
		<>
			<nav className="flex pb-10 items-center justify-between">
				<div className="flex justify-start" >
					<img src="/src/assets/Logo.svg" alt="logo"></img>
				</div>
				<div className="flex gap-[40px] justify-center text-[#556987] font-bold text-lg ml-32">
					<button className="hover:border-b-[2px] underline-offset-[4px]">About Us</button>
					<button className="hover:border-b-[2px] underline-offset-[4px]">Features</button>
					<button className="hover:border-b-[2px] underline-offset-[4px]">Game</button>
					<button className="hover:border-b-[2px] underline-offset-[4px]">Testimonial</button>
				</div>
				<button className="">
					<div className="border rounded-lg h-[56px] w-[130px] bg-[#6961CC] flex items-center justify-center font-bold text-white shadow-xl hover:scale-110 duration-300">Start Play</div>
				</button>
			</nav>
		</>
	)
}