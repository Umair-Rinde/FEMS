"use client"; 
import { useState } from "react";
import { PageWraper } from "../../app/hoc";
import { BsTrash3Fill } from "react-icons/bs";
import { RadioInput, SelectInput, TextInput } from "../components/inputs";

const CropPlanning = () => {
	const [cropCode, setCropCode] = useState("");
	const [variety, setVariety] = useState("");
	const [season, setSeason] = useState("");
	const [plotNumber, setPlotNumber] = useState("");
	const [area, setArea] = useState("");
	const [mixedCropping, setMixedCropping] = useState(null);
	const [seedRequired, setSeedRequired] = useState(null);
	const [fertilizer, setFertilizer] = useState(null);
	const [manpower, setManpower] = useState(null);

	const [arr, setArr] = useState([]);

	const saveCropPlanning = () => {
		if (!cropCode || !variety || !season || !plotNumber || !area) {
			alert("All fields are required, Please fill all the details!");
			return;
		}
		else {
			const newEntry = {
				cropCode,
				variety,
				season,
				plotNumber,
				area,
				mixedCropping,
				seedRequired,
				fertilizer,
				manpower,
			};
			setArr([...arr, newEntry]);
			alert("data save in table");
		};
		
	}

	const deleteCell = (index) => {
			setArr(arr.filter((item,i)=>index !== i));
	}

	return (
		<main className="form-container">
			{
				arr.length > 0 ?
					<div className="w-full overflow-scroll">
						<table className="w-[95rem]" >
							<thead className=" text-white bg-[#00e600]">
								<tr className="text-center">
									<th>Crop Code</th>
									<th>Variety</th>
									<th>Season</th>
									<th>Plot No.</th>
									<th>Area</th>
									<th>Mixed Cropping</th>
									<th>Seed Required</th>
									<th>Fertilizer Required</th>
									<th>Manpower/Machinery</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{arr.map((item, index) => (
									<tr key={index} className="text-center hover:bg-blue-100 bg-white transition-transform">
										<td>{item.cropCode}</td>
										<td>{item.variety}</td>
										<td>{item.season}</td>
										<td>{item.plotNumber}</td>
										<td>{item.area}</td>
										<td>{item.mixedCropping}</td>
										<td>{item.seedRequired}</td>
										<td>{item.fertilizer}</td>
										<td>{item.manpower}</td>
										<td><button title="Delete cell" onClick={()=>(deleteCell(index))} className=" hover:text-red-500"><BsTrash3Fill/></button></td>
									</tr>
									
								))}
							</tbody>
						</table>
					</div>
					: ""
			}


			<h1 className="form-heading">Crop Planning</h1>
			<div className="form-grid">
				<SelectInput
					label="Crop Code"
					options={["crop-code-01", "crop-code-02", "crop-code-03"]}
					value={cropCode}
					onChange={(e) => setCropCode(e.target.value)}
				/>
				<SelectInput
					label="Variety"
					options={["variety-01", "variety-02", "variety-03", "variety-04"]}
					value={variety}
					onChange={(e) => setVariety(e.target.value)}
				/>
				<SelectInput
					label="Season"
					options={["kharif (monsoon)", "rabi (spring)", "zaid (summer)"]}
					value={season}
					onChange={(e) => setSeason(e.target.value)}
				/>
				<TextInput
					label="Plot Number"
					placeholder="0"
					type="number"
					value={plotNumber}
					onChange={(e) => setPlotNumber(e.target.value)}
				/>
				<TextInput
					label="Area"
					placeholder="0"
					type="number"
					value={area}
					onChange={(e) => setArea(e.target.value)}
				/>
				<RadioInput
					label="Mixed Cropping"
					name="mixed-cropping"
					options={["Yes", "No"]}
					value={mixedCropping}
					onChange={(e) => setMixedCropping(e.target.value)}
				/>
				<RadioInput
					label="Seed Required"
					name="seed-required"
					options={["Yes", "No"]}
					value={seedRequired}
					onChange={(e) => setSeedRequired(e.target.value)}
				/>
				<RadioInput
					label="Fertilizer Required"
					name="fertilizer-required"
					options={["Yes", "No"]}
					value={fertilizer}
					onChange={(e) => setFertilizer(e.target.value)}
				/>
				<RadioInput
					label="Manpower/Machinery Required"
					name="manpower-machinery-required"
					options={["Yes", "No"]}
					value={manpower}
					onChange={(e) => setManpower(e.target.value)}
				/>
			</div>

			<div className="form-btns-container">
				<button
					onClick={saveCropPlanning}
					className="form-btn bg-secondary hover:bg-secondary-hover"
				>
				+ Save
				</button>
			</div>
		</main>
	);
};


export default PageWraper(CropPlanning);
