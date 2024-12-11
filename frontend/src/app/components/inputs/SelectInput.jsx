
const SelectInput = ({label, options, onChange,value}) => (
	<div className="flex flex-col gap-2">
		<label className="font-semibold ml-1 text-sm"> {label}</label>
		<select 
			onChange={onChange} 
			className= "py-2 px-4 rounded-lg outline-none bg-white border"
			value={value}
		>
			<option disabled value="">select</option>
			{options.map((opt,index) => (
				<option value={opt} className="py-1 px-4 bg-white" key={index}>{opt}</option>
			))}
		</select>
	</div>
);

export default SelectInput;