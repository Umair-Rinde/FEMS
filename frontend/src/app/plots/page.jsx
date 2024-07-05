'use client'
import { useState } from "react";
import { BsClipboard2DataFill, BsDatabaseFillAdd, BsPlusCircleFill } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import InputField from "@/app/components/InputField";
import WebLayout from "../components/WebLayout";

const PlotsForm = () => {

    const [plots, setPlots] = useState([]);

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

    function savePlotsData(){
        let plotsData = {
            Pno: plotNumber,
            Name: plotName,
            Size: plotSize,
            GatNo: plotGatNo,
            Soil: soiltype,
            Owner: ownership
        };

        setPlots((prev) => [...prev, plotsData]);
    }

    function addPlotDetails(e) {
        e.preventDefault();
        if(isValidData()){
            savePlotsData();
            reset();
        }
    }

    function isValidData(){
        if(!(plotNumber && plotName && plotSize && plotGatNo && soiltype && ownership)){
            alert("Please fill complete staff data");

            return false;
        }
        return true;
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        if(plots.length === 0){
            alert("Empty Plot Data!");
        }

        console.log(plots);
    }

    const [popup, setPopup] = useState(false);
    const [idx, setIdx] = useState(0);

    return (
    <WebLayout>
        <div className="w-full h-screen bg-[#ccffcc] p-4  m-auto flex flex-col justify-center items-center">
        
        <form className="flex flex-col w-full gap-2 justify-center p-4 bg-[#e5ffe5]">
        <span className='flex gap-2 '>
          <logo className="w-8 h-8 p-1 bg-[#34ff34] text-white shadow-sm rounded-[50%] border-2 border-white flex justify-center items-center">
          <BsClipboard2DataFill className="w-fit" />
          </logo>
          <h1 className="text-2xl font-bold ">Plots</h1>
        </span>
            <dummy className="w-full-4/5"></dummy>
            {popup && <PlotDataPopup plot={plots[idx]} setPopup={setPopup}/>}
                {plots.length > 0 && (
                    <table className="text-black">
                        <tr>
                            <th>Plot Number</th>
                            <th>Plot Name</th>
                            <th>Plot Size</th>
                            <th>Plot Gat. No.</th>
                            <th>Soil Type</th>
                            <th>Ownership</th>
                            <th></th>
                        </tr>
                        {plots.map((plot,index) => (
                            <tr>
                                <td>{plot.Pno}</td>
                                <td>{plot.Name}</td>
                                <td>{plot.Size}</td>
                                <td>{plot.GatNo}</td>
                                <td>{plot.Soil}</td>
                                <td>{plot.Owner}</td>
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
                <button className="font-semibold px-4 py-1  text-white bg-[#34ff34] rounded-sm flex gap-2 items-center hover:text-white hover:bg-[#42cd42]" onClick={addPlotDetails}><BsDatabaseFillAdd/>Add Another Plot Detail</button>
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
            </div>
        </form>

        </div>
        </WebLayout>
    )
}

const PlotDataPopup = ({plot, setPopup}) => {
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
                    <td>Plot No.</td>
                    <td>{plot.Pno}</td>
                </tr>
                <tr>
                    <td>Plot Name</td>
                    <td>{plot.Name}</td>
                </tr>
                <tr>
                    <td>Size</td>
                    <td>{plot.Size}</td>
                </tr>
                <tr>
                    <td>Plot GatNo</td>
                    <td>{plot.GatNo}</td>
                </tr>
                <tr>
                    <td>Soil Type</td>
                    <td>{plot.Soil}</td>
                </tr>
                <tr>
                    <td>Ownership</td>
                    <td>{plot.Owner}</td>
                </tr>
                
            </table>
            </container>
        </div>
    )
}

export default PlotsForm;