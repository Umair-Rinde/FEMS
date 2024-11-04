
const SelectInput = ({label, options, onChange}) => (
	<div className="flex flex-col gap-2">
		<label className="font-semibold ml-1 text-sm"> {label}</label>
		<select 
			onChange={onChange} 
			className="py-2 px-4 rounded-lg outline-none bg-white border"
		>
			<option value="" selected disabled>select</option>
			{options.map((opt) => (
				<option value={opt} className="py-1 px-4 bg-white">{opt}</option>
			))}
		</select>
	</div>
);

export default SelectInput;