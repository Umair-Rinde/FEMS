
"use client";
import { useState } from "react";

import { PageWraper } from "@/app/hoc";
import { SelectInput, TextArea, TextInput } from "@/app/components/inputs";

const Machinery = () => {
	return (
		<main className="form-container">
			<h1 className="form-heading">Machinery</h1>
			<div className="flex flex-col gap-5">
				<TextInput 
					label="Machine ID"
					onChange={() => {}}
				/>
				<TextArea 
          label="Description"
          onChange={() => {}}
        />
        <TextInput
					label="Total number"
					onChange={() => {}}
					placeholder="0"
					type="number"
				/>
			</div>

			<div className="form-btns-container">
				<button className="form-btn bg-gray-200 hover:bg-gray-300">Save</button>
				<button className="form-btn bg-secondary hover:bg-secondary-hover">+ Add plot</button>
			</div>
		</main>
	);
}

export default PageWraper(Machinery);