"use client";
import { useState } from "react";
import { PageWraper } from "../hoc";
import { BsTrash3Fill } from "react-icons/bs";
import { RadioInput, SelectInput, TextInput } from "../components/inputs";

const CurrentCropStocks = () => {
	const [cropCode, setCropCode] = useState("");
	const [variety, setVariety] = useState("");
	const [season, setSeason] = useState("");
	const [quantityOnHold, setquantityOnHold] = useState("");
	const [quantitySold, setquantitySold] = useState("");
	const [expectedDate, setexpectedDate] = useState("");
	const [harvestingDate, setharvestingDate] = useState("");

	const [arr, setArr] = useState([]);

	const saveCurrentCropStocks = () => {
		if (!cropCode || !variety || !season || !quantityOnHold || !quantitySold || !harvestingDate || !expectedDate
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
				expectedDate
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
									<th>Crop Code</th>
									<th>Variety</th>
									<th>Season</th>
									<th>Quantity On Hold</th>
									<th>Quantity Sold</th>
									<th>Harvesting Data</th>
									<th>Expected Date</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{arr.map((item, index) => (
									<tr key={index} className="text-center hover:bg-blue-100 bg-white transition-transform">
										<td>{item.cropCode}</td>
										<td>{item.variety}</td>
										<td>{item.season}</td>
										<td>{item.quantityOnHold}</td>
										<td>{item.quantitySold}</td>
										<td>{item.harvestingDate}</td>
										<td>{item.expectedDate}</td>
										<td><button title="Delete cell" onClick={() => (deleteCell(index))} className=" hover:text-red-500"><BsTrash3Fill /></button></td>
									</tr>

								))}
							</tbody>
						</table>
					</div>
					: ""
			}
			<h1 className="form-heading">Current stock</h1>
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
					label="Quantity on hold"
					placeholder="0"
					type="number"
					value={quantityOnHold}
					onChange={(e) => setquantityOnHold(e.target.value)}
				/>
				<TextInput
					label="Sold quantity"
					placeholder="0"
					type="number"
					value={quantitySold}
					onChange={(e) => setquantitySold(e.target.value)}
				/>
				<TextInput
					label="Expected harvesting date"
					type="date"
					value={harvestingDate}
					onChange={(e) => setharvestingDate(e.target.value)}
				/>
				<TextInput
					label="Expected selling date"
					type="date"
					value={expectedDate}
					onChange={(e) => setexpectedDate(e.target.value)}
				/>
			</div>

			<div className="form-btns-container">
				<button
					onClick={saveCurrentCropStocks}
					className="form-btn bg-secondary hover:bg-secondary-hover"
				>
					+ Save
				</button>
			</div>
		</main>
	);
}

export default PageWraper(CurrentCropStocks);