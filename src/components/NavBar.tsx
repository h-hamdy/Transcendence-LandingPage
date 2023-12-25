export function NavBar() {
	return (
	  <>
		<nav className="fixed top-0 left-0 right-0 z-50 h-[90px] bg-[#F7F8F9] flex items-center justify-between p-10">
		  <div className="flex justify-start">
			<img src="/src/assets/Logo.svg" className="w-[70px]" alt="logo"></img>
		  </div>
		  <div className="flex gap-[40px] justify-center text-[#556987] font-bold text-md ml-32">
			<button className="hover:border-b-[2px] border-[#6961CC] rounded-md underline-offset-[4px]">About Us</button>
			<button className="hover:border-b-[2px] border-[#6961CC] rounded-md underline-offset-[4px]">Features</button>
			<button className="hover:border-b-[2px] border-[#6961CC] rounded-md underline-offset-[4px]">Game</button>
			<button className="hover:border-b-[2px] border-[#6961CC] rounded-md underline-offset-[4px]">Testimonial</button>
		  </div>
		  {/* <button> */}
		  <a href="https://github.com/h-hamdy/ft_transcendence">
			<div className="border rounded-lg h-[45px] w-[110px] bg-[#6961CC] flex items-center justify-center text-sm font-bold text-white shadow-xl hover:scale-110 duration-300">
			  Start Play
			</div>
		  </a>
		  {/* </button> */}
		</nav>
	  </>
	);
  }
  