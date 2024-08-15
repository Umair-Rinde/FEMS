"use client";
import { useState } from "react";

import { PageWraper } from "@/app/hoc";
import { SelectInput, TextInput } from "@/app/components/inputs";

const ManPower = () => {
	return (
		<main className="form-container">
			<h1 className="form-heading">Plots</h1>
			<div className="form-grid">
				<TextInput 
					label="Person ID"
					onChange={() => {}}
					placeholder="0000000"
					type="number"
				/>
				<TextInput 
					label="Description"
					onChange={() => {}}
					placeholder="enter plot name"
				/>
        <TextInput 
					label="Ph. Numbers"
					onChange={() => {}}
					placeholder="0"
					type="number"
				/>
        <TextInput 
					label="Name"
					onChange={() => {}}
				/>
        <TextInput 
					label="Person position"
					onChange={() => {}}
					placeholder="worker / manager"
				/>
			</div>

			<div className="form-btns-container">
				<button className="form-btn bg-gray-200 hover:bg-gray-300">Save</button>
				<button className="form-btn bg-secondary hover:bg-secondary-hover">+ Add plot</button>
			</div>
		</main>
	);
}

export default PageWraper(ManPower);