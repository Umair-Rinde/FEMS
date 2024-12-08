"use client";
import { useState } from "react";
import { PageWraper } from "../hoc";
import { SelectInput, TextArea, TextInput } from "../components/inputs";
import { BsTrash3Fill } from "react-icons/bs";

const WaterResources = () => {
	const [resourceId, setresourceId] = useState("");
	const [descrip, setdescrip] = useState("");
	const [resourceType, setresourceType] = useState("");

	const [arr, setArr] = useState([]);

	const saveWaterResources = () => {
	    if (!resourceId || !resourceType ||!descrip) {
			alert("All fields are required, Please fill all the details!");
			return;
		}
		else {
			const newEntry = {
				resourceId,
				resourceType,
				descrip
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
										<td>{item.resourceId}</td>
										<td>{item.resourceType}</td>
										<td>{item.descrip}</td>
										<td><button title="Delete cell" onClick={()=>(deleteCell(index))} className=" hover:text-red-500"><BsTrash3Fill/></button></td>
									</tr>
									
								))}
							</tbody>
						</table>
					</div>
					: ""
			}

			<h1 className="form-heading">Water resources</h1>
			<div className="flex flex-col gap-5">
				<TextInput
					label="Water resource ID or name"
					value={resourceId}
					onChange={(e) => setresourceId(e.target.value)}
				/>
				<TextArea
					label="Description"
					value={descrip}
					onChange={(e) => setdescrip(e.target.value)}
				/>
				<SelectInput
					label="Choose resource type"
					options={["Surface Water (rivers, lakes, etc.)", "Ground Water (wells)", "Rain Water", "Recycled Water"]}
					value={resourceType}
					onChange={(e) => setresourceType(e.target.value)}
				/>
			</div>

			<div className="form-btns-container">
			<button
					onClick={saveWaterResources}
					className="form-btn bg-secondary hover:bg-secondary-hover"
				>
				+ Save
				</button>
			</div>
		</main>
	);
}

export default PageWraper(WaterResources);