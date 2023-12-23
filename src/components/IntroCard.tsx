export function IntroCard () {
	return (
		<>
			<div className="xl:px-32">

				<section className="border bg-[#20243C] w-full h-[70vh] rounded-xl p-5 relative flex items-center justify-center">
					<img src="/src/assets/style1.svg" className="absolute top-0 right-0 p-5"></img>
					<img src="/src/assets/style2.svg" className="absolute bottom-0 left-0 p-5"></img>
					<div className="flex flex-col items-center justify-center z-10">
					<div className="text-white xl:text-4xl text-3xl font-extrabold tracking-wider text-center flex items-center justify-center h-full">
					Dive into the  Ultimate Online Ping Pong Experience <br/> Landing Teaser
					</div>
						<div className="text-[#556987] p-10 text-center font-semibold text-base pb-[50px]">Embark on the exciting journey where the fusion of technology and entertainment sets the stage for an immersive gaming adventure<br/> Dive into Transcendence Playground, a thrilling online ping pong experience</div>
						<button className="border border-[#6961CC] shadow-xl rounded-lg h-[60px] w-[210px] bg-[#6961CC] flex items-center justify-center font-bold text-white  hover:scale-110 duration-300">Know more about us</button>
					</div>
				</section>
				</div>
		</>
	)
}