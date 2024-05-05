'use client';
const InputField = ({label, placeholder,value,setValue,type="text"}) => {
    return (
        <span className="flex flex-col gap-2 w-full h-full opacity-100 transtion-all duration-200 ease-linear">
            <label className="text-sm font-bold">{label}</label>
            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                className="px-2 py-1 outline-none border-2 rounded-lg"
            />
        </span>
    )
}
export default InputField;