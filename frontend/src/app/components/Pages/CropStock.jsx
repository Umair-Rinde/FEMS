'use client';
import { useState } from "react";
import InputField from "../common/InputField";

const CropStockForm = () => {
    const [cropcode, setCropCode] = useState('');
    const [variety, setVariety] = useState('');
    const [season, setSeason] = useState('');

    const [quality, setQuality] = useState('');
    const [sold, setSold] = useState('');
    const [harvestdate, setHarvestDate] = useState('');

    const [selldate, setSellDate] = useState('');
    const [other, setOther] = useState('');

    function reset(){
        setCropCode('');
        setVariety('');
        setSeason('');
        setQuality('');
        setSold('');
        setHarvestDate('');
        setSellDate('');
        setOther('');
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
                    label="Quality"
                    value={quality}
                    setValue={setQuality}
                />
                <InputField 
                    label="Sold"
                    value={sold}
                    setValue={setSold}
                />
                <InputField 
                    label="Harvest Date"
                    value={harvestdate}
                    setValue={setHarvestDate}
                />
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <InputField
                    label="Sell Date"
                    value={selldate}
                    setValue={setSellDate}
                />
                <InputField 
                    label="Other"
                    value={other}
                    setValue={setOther}
                />
                <dummy className="w-full"></dummy>
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
                <dummy className="w-full"></dummy>
            </div>
            <div className="flex items-center justify-center gap-3 my-5 font-semibold">
                <button className="px-4 py-1 bg-green-400 hover:bg-gray-400 rounded-lg">+ Add More Fields</button>
                <button className="px-4 py-1 bg-gray-300 hover:bg-blue-800 rounded-lg"
                    onClick={onSubmitHandler}
                >Delete A Field</button>
                <button className="px-4 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg">Edit a Field</button>
            </div>
        </form>
    )
}

export default CropStockForm;