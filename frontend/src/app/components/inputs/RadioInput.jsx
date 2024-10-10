
const RadioInput = ({label, name, onSelect, options }) => {
	return (
		<div className="w-full flex flex-col gap-1 px-2 mt-1">
			<label className="font-semibold ml-1 text-sm">{label}</label>
			<div className="flex gap-8 py-1 px-2">
				{options.map((option) => (
					<span className="flex gap-2 items-center justify-center pt-1">
						<input 
								type="radio" 
								name={name} 
								value={option}
								onSelect={onSelect}
						/>
						<label className="text-lg font-semibold">{option}</label>
					</span>
				))}
			</div>
		</div>
	)
}

export default RadioInput;