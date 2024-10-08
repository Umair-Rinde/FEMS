

const TextArea = ({label, placeholder="enter short description of this watersource", value, onChange, type="text"}) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="font-semibold ml-1 text-sm">{label}</label>
			<textarea
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				className="py-2 px-4 outline-none border rounded-lg"
			/>
		</div>
	)
}

export default TextArea;