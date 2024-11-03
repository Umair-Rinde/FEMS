"use client";

import { PageWraper } from "../hoc";
import { SelectInput, TextArea, TextInput } from "../components/inputs";

const WaterResources = () => {
	return (
		<main className="form-container">
			<h1 className="form-heading">Water resources</h1>
			<div className="flex flex-col gap-5">
				<TextInput 
					label="Water resource ID or name"
					onChange={() => {}}
				/>
				<TextArea 
          label="Description"
          onChange={() => {}}
        />
        <SelectInput 
          label="Choose resource type"
          options={["Surface Water (rivers, lakes, etc.)", "Ground Water (wells)", "Rain Water", "Recycled Water"]}

        />
			</div>

			<div className="form-btns-container">
				<button className="form-btn bg-gray-200 hover:bg-gray-300">Save</button>
				<button className="form-btn bg-secondary hover:bg-secondary-hover">+ Add plot</button>
			</div>
		</main>
	);
}

export default PageWraper(WaterResources);