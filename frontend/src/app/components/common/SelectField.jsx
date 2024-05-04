'use client';
const SelectField = ({options, setOption, currentOption, selectLabel, label}) => {
    function selectOption(e){
        e.preventDefault();
        setOption(e.target.value);
    }
    return (
        <span className="flex flex-col gap-2 w-full">
            <label className="text-sm font-semibold">{label}</label>
            <select
                className="px-2 py-1 outline-none border-2 rounded-lg"
                onChange={selectOption}
            >
                <option selected disabled>{selectLabel}</option>
                {options.map((optn) => (
                    <option value={optn} selected={currentOption==optn}>{optn}</option>
                ))}
            </select>
        </span>
    )
}
export default SelectField;