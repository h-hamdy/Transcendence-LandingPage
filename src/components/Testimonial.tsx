export function Testimonial () {
	return (
		<>
		<div className="p-10 flex flex-col items-center justify-center">

			<div className="flex items-center justify-center p-10 pt-16 ">
				<div className="bg-gray-200 flex items-center justify-center w-[80px] text-xs font-semibold text-[#6961CC] h-[25px] rounded-xl">Testimonial</div>
			</div>
			<div className="flex items-center justify-center text-3xl font-extrabold text-center text-[#2A3342] relative tracking-wider">
				<img src="/src/assets/coma.svg" className="absolute left-[-100px] top-[-50px] w-[130px]"></img>
				<img src="/src/assets/coma2.svg" className="absolute right-[-10px] bottom-[-50px] w-[130px]"></img>
			" CyberPong transforms the game of ping pong <br/>with live chat A game-changing <br/> for the player experience "
			</div>
			<img src="/src/assets/hhamdy.jpg" className="rounded-full w-[88px] h-[88px] mt-10 shadow-lg"></img>
			<div className="pt-5 text-lg font-bold text-[#2A3342]">Full Stack Dev</div>
			<img src="/src/assets/dot.svg" className="p-10"></img>
		</div>
		</>
	)
}