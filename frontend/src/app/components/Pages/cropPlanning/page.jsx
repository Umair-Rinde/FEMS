'use client'
import { useState } from "react";
import { BsClipboard2DataFill, BsDatabaseFillAdd, BsPlusCircleFill } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import Layout from "../../common/Layout";
// import InputField from "../common/InputField";

const CropPlanningForm = () => {

    
    const [cropPlan, setCropPlan] = useState([]);

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

    function saveCropPlanningData(){
        let cropPlanData = {
            CropCode: cropcode,
            Variety: variety,
            Season: season,
            Plotnumber: plotnumber,
            Area: area,
            IsMixed: isMixedCrop,
            SeedRequired: seedRequired,
            Fertilizers: fertilizerRequired,
            manpowerAndMachinery: manpowerMachinery
        };

        setCropPlan((prev) => [...prev, cropPlanData]);
    }

    function addCropPlanDetails(e) {
        e.preventDefault();
        if(isValidData()){
            saveCropPlanningData();
            reset();
        }
    }

    function isValidData(){
        if(!(cropcode && variety && season && plotnumber && area && isMixedCrop!=null && fertilizerRequired && manpowerMachinery)){
            alert("Please fill complete staff data");

            return false;
        }
        return true;
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        // Logic to handle submit
    }

    const [popup, setPopup] = useState(false);
    const [idx, setIdx] = useState(0);

    return (
        <>
        <div className="w-full h-screen bg-[#ccffcc] p-4  m-auto flex flex-col justify-center items-center">
        
        <form className="flex flex-col w-full gap-2 justify-center p-4 bg-[#e5ffe5]">
        <span className='flex gap-2 '>
          <logo className="w-8 h-8 p-1 bg-[#34ff34] text-white shadow-sm rounded-[50%] border-2 border-white flex justify-center items-center">
          <BsClipboard2DataFill className="w-fit" />
          </logo>
          <h1 className="text-2xl font-bold ">Crop Planning</h1>
        </span>
        <dummy className="w-full-4/5"></dummy>
            {popup && <CropPlanDataPopup cropPlan={cropPlan[idx]} setPopup={setPopup}/>}
                {cropPlan.length > 0 && (
                    <table className="text-black">
                        <tr>
                            <th>Crop Code</th>
                            <th>Variety</th>
                            <th>Season</th>
                            <th>Plot Number</th>
                            <th>Area</th>
                            <th>Mixed Cropping</th>
                            <th>Seed Required</th>
                            <th>Fertilizer Required</th>
                            <th>Manpower & Machinery Required</th>
                            <th></th>
                        </tr>
                        {cropPlan.map((cropPlan,index) => (
                            <tr>
                                <td>{cropPlan.CropCode}</td>
                                <td>{cropPlan.Variety}</td>
                                <td>{cropPlan.Season}</td>
                                <td>{cropPlan.Plotnumber}</td>
                                <td>{cropPlan.Area}</td>
                                <td>{cropPlan.IsMixed}</td>
                                <td>{cropPlan.SeedRequired}</td>
                                <td>{cropPlan.Fertilizers}</td>
                                <td>{cropPlan.manpowerAndMachinery}</td>
                                <td className="justify-center p-1 gap-1 font-semibold flex items-center">
                                    <button className="justify-center p-1 gap-1 font-semibold flex items-center"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIdx(index);
                                            setPopup(true);
                                        }}
                                    ><GrView/>View</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                )}
                <dummy className="w-full-4/5"></dummy>
            <hr className="w-full border-1 border-[#34ff34] "/>

            <div className="w-full flex items-center gap-4 justify-end ">
                <dummy className="w-full-4/5"></dummy>
                <button className="font-semibold px-4 py-1  text-white bg-[#34ff34] rounded-sm flex gap-2 items-center hover:text-white hover:bg-[#42cd42]" onClick={addCropPlanDetails}><BsDatabaseFillAdd/>Add Another Crop Plan</button>
            </div>
            <div className="w-full lg:flex  items-center gap-4 justify-center font-semibold">
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
            <div className="w-full lg:flex  items-center gap-4 justify-between">
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

const CropPlanDataPopup = ({plot, setPopup}) => {
    function closePopup(e){
        e.preventDefault();
        setPopup(false);
    }
    return (
        <div className="fixed w-screen h-screen flex items-center justify-center top-5 left-5 z-10 bg-[#0000005d]">
            <container className="flex flex-col gap-2 items-end bg-white p-2 rounded-xl">
            <div className="lg:flex items-center justify-center gap-1 font-semibold">
                <button className="text-sm bg-gray-500 hover:bg-green-400 px-2 py-1 gap-1 font-semibold rounded flex items-center text-white "><FaRegEdit/>Edit</button>
                <button onClick={closePopup}
                className="text-sm bg-red-500 hover:bg-green-400 px-2 py-1 font-semibold gap-1 rounded flex items-center text-white "
                ><RiCloseFill/>Close</button>
            </div>
            <table className="bg-white">
                <tr>
                    <td>Crop Code</td>
                    <td>{cropPlan.CropCode}</td>
                </tr>
                <tr>
                    <td>Variety</td>
                    <td>{cropPlan.Variety}</td>
                </tr>
                <tr>
                    <td>Season</td>
                    <td>{cropPlan.Season}</td>
                </tr>
                <tr>
                    <td>Plot Number</td>
                    <td>{cropPlan.Plotnumber}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{cropPlan.Area}</td>
                </tr>
                <tr>
                    <td>Mixed Cropping</td>
                    <td>{cropPlan.IsMixed}</td>
                </tr>
                <tr>
                    <td>Seed Required</td>
                    <td>{cropPlan.SeedRequired}</td>
                </tr>
                <tr>
                    <td>Fertilizer Required</td>
                    <td>{cropPlan.Fertilizers}</td>
                </tr>
                <tr>
                    <td>Manpower & Machinery Required</td>
                    <td>{cropPlan.manpowerAndMachinery}</td>
                </tr>
                
            </table>
            </container>
        </div>
    )
}

export default CropPlanningForm;


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
