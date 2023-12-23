import { FeatureCard } from "./FeatureCard"

export function Features () {
	return (
		<>
			<div className="h-[800px] w-full p-8 bg-[#20243C]">
				<div className="text-white xl:text-4xl text-3xl font-extrabold tracking-wider text-center flex  justify-center pt-10">Feature Implemented in this project ...</div>
				<div className="text-[#556987] p-5 text-center font-semibold text-base pb-[60px]">Experience a dynamic online ping pong platform with features designed for seamless interaction and entertainment</div>
				<div className="flex flex-col gap-[30px]">

				<div className="flex justify-around">
					<FeatureCard icon="/src/assets/Chat.svg" title="Chat" disc="Fuel collaboration with real-time chat, fostering community interaction in the gaming environment. Create groups for seamless communication and teamwork."/>
					<FeatureCard icon="/src/assets/Game.svg" title="Game" disc="Dive into thrilling gameplay that blends excitement and competition. Personalized profiles enhance each match for an engaging gaming experience."/>
					<FeatureCard icon="/src/assets/Profile.svg" title="User Profile" disc="Craft your unique digital identity with a personalized user profile. Showcase your preferences and achievements, making your presence distinctive in the gaming community."/>					
				</div>

				<div className="flex  justify-around">
					<FeatureCard icon="/src/assets/Stats.svg" title="User Stats" disc="Highlight your gaming persona with tailored stats. Stand out in the community, online or offline or playing0."/>
					<FeatureCard icon="/src/assets/2fa.svg" title="Two-Factor Authentication (2FA)" disc="Elevate your account security with Two-Factor Authentication (2FA). Add an extra layer of protection, ensuring secure access to your gaming profile."/>
					<FeatureCard icon="/src/assets/Rancking.svg" title="Rancking system" disc="Level up and conquer the leaderboard with our Ranking System. Achieve gaming milestones and compete for the top spot."/>					
				</div>
					
				
				</div>
			</div>
		</>
	)
}

// . Engage in <span className="font-bold text-[#6B767D]">real-time chat</span>, personalize your <span className="font-bold text-[#6B767D]">user profile</span>, and enjoy an immersive <span className="font-bold text-[#6B767D]">gaming module</span> Elevate your account security with <span className="font-bold text-[#6B767D]">Two-Factor Authentication</span>, and stay connected with instant <span className="font-bold text-[#6B767D]">user status updates</span>. Climb the ranks with a comprehensive <span className="font-bold text-[#6B767D]">ranking system</span> that recognizes achievements and skill levels. This platform offers a blend of gaming excitement, social connectivity, and user-centric features for a rewarding experience