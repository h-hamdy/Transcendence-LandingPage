interface Props {
	profile: string,
	name: string,
	stack: string,
	disc: string,
}

export function MemberCard ( {profile, name, stack, disc}: Props ) {
	return (
		<>
			<div className="w-[340px] h-[460px] bg-[#F7F8F9] rounded-xl shadow-xl flex flex-col items-center gap-[10px] px-5">
				<img src={profile} className="rounded-full w-[88px] h-[88px] mt-10 shadow-lg"></img>
				<div className="text-[#2A3342] font-bold text-3xl tracking-wider">{name}</div>
				<div className="text-[#6961CC] font-semibold tracking-wider">{stack}</div>
				<div className="text-[#556987] font-semibold text-center pt-[25px] text-sm tracking-wider">{disc}</div>
				 {
	(name === "Houssam" && 
		<div className="w-[80%]">
			<div className="w-full flex items-center justify-around pt-[20px]">
				<img src="/src/assets/react.svg" className="rounded-full w-[55px] h-[55px] object-fit"></img>
				<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" className="w-[50px] h-[50px]"></img>
				<img src="/src/assets/vite.svg" className="rounded-full w-[55px] h-[55px]"></img>
			</div>
			<div className="flex items-center justify-center gap-[15px] pt-5">
				<a href="https://h-hamdy.github.io/Portfolio">
					<img src="/src/assets/website.png" className="w-[26px]"></img>
				</a>
				<a href="https://www.linkedin.com/in/houssam-hamdy-393792232/">
					<img src="/src/assets/linked-in.png" className="w-[26px]"></img>
				</a>
				<a href="https://github.com/h-hamdy">
					<img src="/src/assets/github.png" className="w-[26px]"></img>
				</a>
			</div>
		</div>
	)
	}
	{
	(name === "Adnane" && 
		<div className="w-[80%]">
			<div className="w-full flex items-center justify-around pt-[20px]">
			<img src="/src/assets/nest.png" className="rounded-full w-[55px] h-[55px] object-fit"></img>
			<img src="/src/assets/react.svg" className="rounded-full w-[55px] h-[55px] object-fit"></img>
			<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" className="w-[50px] h-[50px]"></img>
			</div>
			<div className="flex items-center justify-center gap-[15px] pt-5">
				<a href="https://www.linkedin.com/in/adnan-hamdy-a64428241/">
					<img src="/src/assets/linked-in.png" className="w-[26px]"></img>
				</a>
				<a href="https://github.com/adnanehamdy">
					<img src="/src/assets/github.png" className="w-[26px]"></img>
				</a>
			</div>
		</div>
	)
	}
	{
	(name === "Hassan" && 
		<div className="w-[80%]">
			<div className="w-full flex items-center justify-around pt-[20px]">
				<img src="/src/assets/nest.png" className="rounded-full w-[55px] h-[55px] object-fit"></img>
				<img src="/src/assets/docker.png" className=" w-[55px] h-[55px]"></img>
				<img src="/src/assets/mariadb.png" className=" w-[55px] h-[55px]"></img>
			</div>
			<div className="flex items-center justify-center gap-[15px] pt-5">
				<a href="https://www.linkedin.com/in/hassan-khalil-502a48247/">
					<img src="/src/assets/linked-in.png" className="w-[26px]"></img>
				</a>
				<a href="https://github.com/hassakhalil/">
					<img src="/src/assets/github.png" className="w-[26px]"></img>
				</a>
			</div>
		</div>
	)
	}
			</div>

		</>
	)
}