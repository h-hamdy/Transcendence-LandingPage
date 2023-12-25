import { MemberCard } from "./MemberCard";

export function Team () {
	return (
		<>
		<div className="flex items-center justify-center pt-10">
			<div className="bg-gray-200 flex items-center justify-center w-[60px] text-xs font-semibold text-[#6961CC] h-[25px] rounded-xl">Team</div>
		</div>
			<div className="bg-white">
				<div className="xl:text-4xl text-3xl font-extrabold tracking-wider text-center flex  justify-center text-[#2A3342] pt-5">Meet Our Exceptional Team</div>
				<div className="text-[#556987] p-10 text-center font-semibold text-base pb-[50px]">Dive into the heart of our success story as you meet the exceptional individuals who form our dynamic team.<br/> Learn about the passion, expertise, and collaboration that drive our journey towards excellence.</div>
				<div className="flex justify-around items-center">
					<div className="w-[340px] h-[460px] bg-[#F7F8F9] rounded-xl shadow-xl flex flex-col items-center gap-[10px] px-5 hover:scale-110 duration-300">
						<MemberCard profile="/src/assets/hhamdy.jpg" name="Houssam" stack="Front-end Dev" disc="Introducing our front-end wizard, crafting seamless and innovative user experiences with creative precision."/>
					</div>
					<div className="w-[340px] h-[460px] bg-[#F7F8F9] rounded-xl shadow-xl flex flex-col items-center gap-[10px] px-5 hover:scale-110 duration-300">
						<MemberCard profile="/src/assets/ahamdy.jpg" name="Adnane" stack="Full Stack" disc="Adaptable team member excelling in game development and system administration for a seamless user experience."/>
					</div>
					<div className="w-[340px] h-[460px] bg-[#F7F8F9] rounded-xl shadow-xl flex flex-col items-center gap-[10px] px-5 hover:scale-110 duration-300">
						<MemberCard profile="/src/assets/hkhalil.jpg" name="Hassan" stack="Back-end Dev" disc="Introducing our skilled back-end expert, guiding operations for a seamless and optimal user experience."/>
					</div>

				</div>
				
			</div>
		</>
	)
}