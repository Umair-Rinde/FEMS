"use client";
import { useState } from "react";
import { PageWraper } from "../hoc";
import { BsTrash3Fill } from "react-icons/bs";
import { SelectInput, TextInput } from "../components/inputs";

const Plots = () => {
  const [plotNumber, setPlotNumber] = useState("");
  const [plotName, setplotName] = useState("");
  const [plotGateNo, setplotGateNo] = useState("");
  const [plotLattitude, setplotLattitude] = useState("");
  const [plotLongitude, setplotLongitude] = useState("");
  const [plotOwener, setplotOwener] = useState("");
  const [plotSize, setplotSize] = useState("");
  const [plotSoilType, setplotSoilType] = useState("");
  const [plotVillage, setplotVillage] = useState("");

  const [arr, setArr] = useState([]);

  const savePlots = () => {
    if (!plotNumber || !plotName ||!plotSize ||!plotGateNo ||!plotLongitude ||!plotLattitude ||!plotSoilType ||!plotOwener ||!plotVillage) {
      alert("All fields are required, Please fill all the details!");
      return;
    }
    else {
      const newEntry = {
        plotNumber,
        plotName,
        plotSize,
        plotGateNo,
        plotLongitude,
        plotLattitude,
        plotSoilType,
        plotOwener,
        plotVillage
      };
      setArr([...arr, newEntry]);
      alert("data save in table");
    };
    
  }

  const deleteCell = (index) => {
    setArr(arr.filter((item, i) => index !== i));
  }


  return (
    <main className="form-container">

      {
        arr.length > 0 ?
          <div className="w-full overflow-scroll">
            <table className="w-[95rem]" >
              <thead className=" text-white bg-[#00e600]">
                <tr className="text-center">
                  <th>Plot Number</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Gate No</th>
                  <th>Longitude</th>
                  <th>Lattitude</th>
                  <th>Soil Type</th>
                  <th>OwnerShip</th>
                  <th>Village</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((item, index) => (
                  <tr key={index} className="text-center hover:bg-blue-100 bg-white transition-transform">
                    <td>{item.plotNumber}</td>
                    <td>{item.plotName}</td>
                    <td>{item.plotSize}</td>
                    <td>{item.plotGateNo}</td>
                    <td>{item.plotLongitude}</td>
                    <td>{item.plotLattitude}</td>
                    <td>{item.plotSoilType}</td>
                    <td>{item.plotOwener}</td>
                    <td>{item.plotVillage}</td>
                    <td><button title="Delete cell" onClick={() => (deleteCell(index))} className=" hover:text-red-500"><BsTrash3Fill /></button></td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
          : ""
      }

      <h1 className="form-heading">Plots</h1>
      <div className="form-grid">
        <TextInput
          label="Plot number"
          placeholder="0000000"
          type="number"
          value={plotNumber}
          onChange={(e) => setPlotNumber(e.target.value)}
        />
        <TextInput
          label="Plot Name"
          placeholder="enter plot name"
          value={plotName}
          onChange={(e) => setplotName(e.target.value)}
        />
        <TextInput
          label="Plot size"
          placeholder="0"
          type="number"
          value={plotSize}
          onChange={(e) => setplotSize(e.target.value)}

        />
        <TextInput
          label="Plot Gate No."
          placeholder="0000000"
          type="number"
          value={plotGateNo}
          onChange={(e) => setplotGateNo(e.target.value)}
        />
        <TextInput
          label="Longitude"
          placeholder={`00'00"`}
          type="text"
          value={plotLongitude}
          onChange={(e) => setplotLongitude(e.target.value)}

        />
        <TextInput
          label="Lattitude"
          placeholder={`00'00"`}
          type="text"
          value={plotLattitude}
          onChange={(e) => setplotLattitude(e.target.value)}

        />
        <SelectInput
          label="Soil type"
          options={["type-01", "type-02", "type-03"]}
          value={plotSoilType}
          onChange={(e) => setplotSoilType(e.target.value)}

        />
        <TextInput
          label="Ownership"
          placeholder=""
          value={plotOwener}
          onChange={(e) => setplotOwener(e.target.value)}

        />
        <TextInput
          label="Village"
          placeholder=""
          value={plotVillage}
          onChange={(e) => setplotVillage(e.target.value)}

        />
      </div>

      <div className="form-btns-container">
        <button
          onClick={savePlots}
          className="form-btn bg-secondary hover:bg-secondary-hover"
        >
          + Save
        </button>
      </div>
    </main>
  );
};

export default PageWraper(Plots);
