"use client";
import { useState } from "react";
import { PageWraper } from "../../hoc";
import { SelectInput, TextArea, TextInput } from "../../components/inputs";
import { BsTrash3Fill } from "react-icons/bs";


const Machinery = () => {
	const [machineId, setmachineId] = useState("");
	const [descrip, setdescrip] = useState("");
	const [totalNum, settotalNum] = useState("");

	const [arr, setArr] = useState([]);

	const saveMachineData = () => {
		if (!machineId || !totalNum || !descrip) {
			alert("All fields are required, Please fill all the details!");
			return;
		}
		else {
			const newEntry = {
				machineId,
				totalNum,
				descrip
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
						<table className="w-[55rem]" >
							<thead className=" text-white bg-[#00e600]">
								<tr className="text-center">
									<th>ID / Name</th>
									<th>Resource Type</th>
									<th>Description</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{arr.map((item, index) => (
									<tr key={index} className="text-center hover:bg-blue-100 bg-white transition-transform">
										<td>{item.machineId}</td>
										<td>{item.totalNum}</td>
										<td>{item.descrip}</td>
										<td><button title="Delete cell" onClick={()=>(deleteCell(index))} className=" hover:text-red-500"><BsTrash3Fill/></button></td>
									</tr>
									
								))}
							</tbody>
						</table>
					</div>
					: ""
			}
			<h1 className="form-heading">Machinery</h1>
			<div className="flex flex-col gap-5">
				<TextInput
					label="Machine ID"
					value={machineId}
					onChange={(e) => setmachineId(e.target.value)}
				/>
				<TextArea
					label="Description"
					value={descrip}
					onChange={(e) => setdescrip(e.target.value)}
				/>
				<TextInput
					label="Total number"
					placeholder="0"
					type="number"
					value={totalNum}
					onChange={(e) => settotalNum(e.target.value)}
				/>
			</div>

			<div className="form-btns-container">
			<button
					onClick={saveMachineData}
					className="form-btn bg-secondary hover:bg-secondary-hover"
				>
				+ Save
				</button>
			</div>
		</main>
	);
}

export default PageWraper(Machinery);