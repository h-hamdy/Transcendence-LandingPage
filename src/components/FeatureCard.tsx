interface Props {
	icon: string,
	title: string,
	disc: string
}

export function FeatureCard ({icon, title, disc}: Props) {
	return (
		<>
			<div className="flex flex-col items-center gap-[15px]">

			<div className="bg-[#6961CC] w-[60px] h-[60px] rounded-lg flex items-center justify-center">
				<img src={icon}></img>
			</div>
			<div className="font-bold text-white tracking-wider">{title}</div>
			<div className="w-[300px] text-center text-[#556987]">{disc}</div>
			</div>
		</>
	)
}