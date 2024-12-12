"use client";
import { useState } from "react";

import { PageWraper } from "@/app/hoc";
import { SelectInput, TextInput } from "../components/inputs";
import Table from '@/app/components/Table';

const CurrentCropStocks = () => {
	const [cropCode, setCropCode] = useState("");
	const [variety, setVariety] = useState("");
	const [season, setSeason] = useState("");
	const [quantityOnHold, setQuantityOnHold] = useState("");
	const [quantitySold, setQuantitySold] = useState("");
	const [harvestingDate, setHarvestingDate] = useState("");
	const [sellingDate, setSellingDate] = useState("");

	const [cropStocks, setCropStocks] = useState([]);

	const reset = () => {
		setCropCode('');
		setVariety('');
		setSeason('');
		setQuantityOnHold('');
		setQuantitySold('');
		setHarvestingDate('');
		setSellingDate('');
	}

	const saveCurrentCropStock = () => {
		if (!cropCode || !variety || !season || !quantityOnHold || !quantitySold || !harvestingDate || !sellingDate
		) {
			alert("All fields are required, Please fill all the details!");
			return;
		}
		else {
			const newEntry = {
				cropCode,
				variety,
				season,
				quantityOnHold,
				quantitySold,
				harvestingDate,
				sellingDate,
			};
			setCropStocks([...cropStocks, newEntry]);
			// alert("data save in table");
			reset();
		};
	}

	return (
		<main className="flex flex-col gap-10 justify-center items-center">
			<div className="form-container">
				<h1 className="form-heading">Current stock</h1>
				<div className="form-grid">
					<SelectInput 
						label="Crop Code"
						options={["crop-code-01","crop-code-02","crop-code-03"]}
						value={cropCode}
						onChange={(e) => setCropCode(e.target.value)}
					/>
					<SelectInput
						label="Variety"
						options={["variety-01","variety-02","variety-03","variety-04"]}
						value={variety}
						onChange={(e) => setVariety(e.target.value)}
					/>
					<SelectInput 
						label="Season"
						options={["kharif (monsoon)", "rabi (spring)", "Zaid (summer)"]}
						onChange={(e) => setSeason(e.target.value)}
						value={season}
					/>
					<TextInput 
						label="Quantity on hold"
						value={quantityOnHold}
						onChange={(e) => setQuantityOnHold(e.target.value)}
						placeholder="0"
						type="number"
					/>
					<TextInput 
						label="Sold quantity"
						value={quantitySold}
						onChange={(e) => setQuantitySold(e.target.value)}
						placeholder="0"
						type="number"
					/>
					<TextInput 
						label="Expected harvesting date"
						onChange={(e) => setHarvestingDate(e.target.value)}
						type="date"
						value={harvestingDate}
					/>
					<TextInput 
						label="Expected selling date"
						value={sellingDate}
						onChange={(e) => setSellingDate(e.target.value)}
						type="date"
					/>
				</div>

				<div className="form-btns-container">
					<button className="form-btn bg-gray-200 hover:bg-gray-300">Save</button>
					<button className="form-btn bg-secondary hover:bg-secondary-hover"
						onClick={saveCurrentCropStock}
					>+ Add crop plan</button>
				</div>
			</div>

			{cropStocks.length > 0 && 
			<Table 
				data={cropStocks}
				setData={setCropStocks}
			/>}
		</main>
	);
}

export default PageWraper(CurrentCropStocks);