'use client'
import { useState } from "react";
import { BsClipboard2DataFill, BsDatabaseFillAdd, BsPlusCircleFill } from "react-icons/bs";
import Layout from "../../common/Layout";
// import InputField from "../common/InputField";

const PlotsForm = () => {
    const [plotNumber, setPlotNumber] = useState('');
    const [plotName, setPlotName] = useState('');
    const [plotSize, setPlotSize] = useState('');

    const [plotGatNo, setPlotGatNo] = useState('');
    const [soiltype, setSoilType] = useState('');
    const [ownership, setOwnership] = useState('');

    function reset(){
        setPlotNumber('');
        setPlotName('');
        setPlotSize('');
        setPlotGatNo('');
        setSoilType('');
        setOwnership('');
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    return (
        <>
        <div className="w-full h-screen bg-[#ccffcc] p-4  m-auto flex flex-col justify-center items-center">
        
        <form className="flex flex-col w-full gap-2 justify-center p-4 bg-[#e5ffe5]">
        <span className='flex gap-2 '>
          <logo className="w-8 h-8 p-1 bg-[#34ff34] text-white shadow-sm rounded-[50%] border-2 border-white flex justify-center items-center">
          <BsClipboard2DataFill className="w-fit" />
          </logo>
          <h1 className="text-2xl font-bold ">Plots</h1>
        </span>
            <hr className="w-full border-1 border-[#34ff34] "/>

            <div className="w-full flex items-center gap-4 justify-end ">
                <dummy className="w-full-4/5"></dummy>
                <button className="font-semibold px-4 py-1  text-white bg-[#34ff34] rounded-sm flex gap-2 items-center hover:text-white hover:bg-[#42cd42]"><BsDatabaseFillAdd/>Add Another Plot Detail</button>
            </div>
            <div className="w-full lg:flex  items-center gap-4 justify-center font-semibold">
                <InputField
                    label="Plot Number"
                    value={plotNumber}
                    setValue={setPlotNumber}
                />
                <InputField 
                    label="Plot Name"
                    value={plotName}
                    setValue={setPlotName}
                />
                <InputField 
                    label="Plot Size"
                    value={plotSize}
                    setValue={setPlotSize}
                />
            </div>
            <div className="w-full lg:flex  items-center gap-4 justify-between">
                <InputField
                    label="Plot Gat. Number"
                    value={plotGatNo}
                    setValue={setPlotGatNo}
                />
                <InputField 
                    label="Soil Type"
                    value={soiltype}
                    setValue={setSoilType}
                />
                <InputField 
                    label="Ownership"
                    value={ownership}
                    setValue={setOwnership}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <dummy className="w-full"></dummy>
            </div>
            <div className="lg:flex items-center justify-center gap-4 my-5 font-semibold">
                <button className="px-4 py-1 text-white bg-[#34ff34] hover:text-white hover:bg-[#36a936] rounded-sm flex gap-2 items-center"><BsPlusCircleFill/>Add More Fields</button>

                <button className="px-4 py-1 my-2 mr-2 bg-gray-300 hover:text-white hover:bg-[#42cd42] rounded-sm"
                    onClick={onSubmitHandler}
                >Delete A Field</button>

                <button className="px-4 py-1 bg-gray-300 hover:text-white hover:bg-[#42cd42] rounded-sm">Edit a Field</button>
            </div>
        </form>

        </div>

        </>
    )
}

export default PlotsForm;


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
