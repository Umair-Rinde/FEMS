'use client';
import { useState } from "react";
import InputField from "../common/InputField";

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
        <form className="flex flex-col gap-5 w-full justify-center opacity-100">
            <div className="w-full flex items-center gap-4 justify-center">
                <dummy className="w-full-4/5"></dummy>
                <button className="font-semibold px-4 py-1 bg-green-400 hover:bg-gray-400 rounded-lg">+ Add Another Crop Plan</button>
            </div>
            <span className="h-[0.5px] flex bg-gray-400 w-2/1 justify-center"></span>
            <dummy className="w-full"></dummy>
            <div className="w-full flex items-center gap-4 justify-center font-semibold">
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
            <div className="w-full flex items-center gap-4 justify-between">
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
            <div className="flex items-center justify-center gap-3 my-5 font-semibold">
                <button className="px-4 py-1 bg-green-400 hover:bg-gray-400 rounded-lg">+ Add More Fields</button>
                <button className="px-4 py-1 bg-gray-300 hover:bg-blue-800 rounded-lg"
                    onClick={onSubmitHandler}
                >Submit</button>
            </div>
        </form>
    )
}

export default PlotsForm;