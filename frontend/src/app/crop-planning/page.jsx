"use client";
import { useState } from "react";

import { PageWraper } from "../hoc";
import { RadioInput, SelectInput, TextInput } from "@/app/components/inputs";

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
	return (
		<main className="form-container">
			<h1 className="form-heading">Crop Planning</h1>
			<div className="form-grid">
				<SelectInput 
					label="Crop Code"
					options={["crop-code-01","crop-code-02","crop-code-03"]}
					onChange={() => {}}
				/>
				<SelectInput
					label="Variety"
					options={["variety-01","variety-02","variety-03","variety-04"]}
					onChange={() => {}}
				/>
				<SelectInput 
					label="Season"
					options={["kharif (monsoon)", "rabi (spring)", "Zaid (summer)"]}
				/>
				<TextInput 
					label="Plot number"
					onChange={() => {}}
					placeholder="0"
					type="number"
				/>
				<TextInput 
					label="Area"
					onChange={() => {}}
					placeholder="0"
					type="number"
				/>
				<RadioInput 
					label="Mixed cropping"
					name="mixed-cropping"
					onSelect={() => {}}
					options={["Yes", "No"]}
				/>
				<RadioInput 
					label="Seed required"
					name="seed-required"
					onSelect={() => {}}
					options={["Yes", "No"]}
				/>
				<RadioInput 
					label="Fertilizer required"
					name="fertilizer-required"
					onSelect={() => {}}
					options={["Yes", "No"]}
				/>
				<RadioInput 
					label="Manpower/Machinery required"
					name="manpower-machinery-required"
					onSelect={() => {}}
					options={["Yes", "No"]}
				/>
			</div>

			<div className="form-btns-container">
				<button className="form-btn bg-gray-200 hover:bg-gray-300">Save</button>
				<button className="form-btn bg-secondary hover:bg-secondary-hover">+ Add crop plan</button>
			</div>
		</main>
	);
}

export default PageWraper(CropPlanning);