'use client';
import { useState } from "react";
import InputField from "../common/InputField";

const CropPlanningForm = () => {
    const [cropcode, setCropCode] = useState('');
    const [variety, setVariety] = useState('');
    const [season, setSeason] = useState('');

    const [plotnumber, setPlotNumber] = useState('');
    const [area, setArea] = useState('');
    const [isMixedCrop, setIsMixedCroping] = useState(null);

    const [seedRequired, setSeedRequired] = useState('');
    const [fertilizerRequired, setFertilizerRequired] = useState('');
    const [manpowerMachinery, setManpowerMachinery] = useState('');

    function reset(){
        setCropCode('');
        setVariety('');
        setSeason('');
        setPlotNumber('');
        setArea('');
        setIsMixedCroping(null);
        setSeedRequired('');
        setFertilizerRequired('');
        setManpowerMachinery('');
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    return (
        <form className="flex flex-col gap-5 w-full h-full justify-center opacity-100 transtion-all duration-200 ease-linear">
            <div className="w-full flex items-center gap-4 justify-center">
                <dummy className="w-full-4/5"></dummy>
                <button className="font-semibold px-4 py-1 bg-green-400 hover:bg-gray-400 rounded-lg">+ Add Another Crop Plan</button>
            </div>
            <span className="h-[0.5px] flex bg-gray-400 w-2/1 justify-center"></span>
            <dummy className="w-full"></dummy>
            <div className="w-full flex items-center gap-4 justify-center font-semibold">
                <InputField
                    label="Crop Code"
                    value={cropcode}
                    setValue={setCropCode}
                />
                <InputField 
                    label="Variety"
                    value={variety}
                    setValue={setVariety}
                />
                <InputField 
                    label="Season"
                    value={season}
                    setValue={setSeason}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Plot Number"
                    value={plotnumber}
                    setValue={setPlotNumber}
                />
                <InputField 
                    label="Area"
                    value={area}
                    setValue={setArea}
                />
                <span className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold">Mixed Cropping</label>
                        <span
                            className="px-2 py-1 flex gap-2 items-center"
                        >
                            <input 
                                type="radio" name="mixed"
                                onClick={(e) => setIsMixedCroping(true)}
                            /> 
                            <label className="mr-2">Yes</label>
                            <input
                                type="radio" name="mixed"
                                onClick={(e) => setIsMixedCroping(false)}
                            /> 
                            <label>No</label>
                        </span>
                </span>
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Seed Required"
                    value={seedRequired}
                    setValue={setSeedRequired}
                />
                <InputField 
                    label="Fertilizer Required"
                    value={fertilizerRequired}
                    setValue={setFertilizerRequired}
                />
                <InputField 
                    label="Manpower & Manchinery Required"
                    value={manpowerMachinery}
                    setValue={setManpowerMachinery}
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

export default CropPlanningForm;