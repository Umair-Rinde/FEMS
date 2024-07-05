const InputField = ({label, placeholder,value,setValue,type="text"}) => {
    return (
        <span className="flex flex-col gap-2 w-full opacity-100">
            <label className="text-sm font-semibold">{label}</label>
            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                className="px-2 py-1 outline-none border rounded-sm"
            />
        </span>
    )
}

export default InputField;