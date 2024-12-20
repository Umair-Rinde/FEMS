"use client";
import { useState } from "react";

import { PageWraper } from "../hoc";
import { SelectInput, TextInput } from "../components/inputs";

const Plots = () => {
  return (
    <main className="form-container">
      <h1 className="form-heading">Plots</h1>
      <div className="form-grid">
        <TextInput
          label="Plot number"
          onChange={() => {}}
          placeholder="0000000"
          type="number"
        />
        <TextInput
          label="Plot Name"
          onChange={() => {}}
          placeholder="enter plot name"
        />
        <TextInput
          label="Plot size"
          onChange={() => {}}
          placeholder="0"
          type="number"
        />
        <TextInput
          label="Plot Gat No."
          onChange={() => {}}
          placeholder="0000000"
          type="number"
        />
        <TextInput
          label="Longitude"
          onChange={() => {}}
          placeholder={`00'00"`}
          type="text"
        />
        <TextInput
          label="Lattitude"
          onChange={() => {}}
          placeholder={`00'00"`}
          type="text"
        />
        <SelectInput
          label="Soil type"
          options={["type-01", "type-02", "type-03"]}
          onChange={() => {}}
        />
        <TextInput label="Ownership" onChange={() => {}} placeholder="" />
        <TextInput label="Village" onChange={() => {}} placeholder="" />
      </div>

      <div className="form-btns-container">
        <button className="form-btn bg-gray-200 hover:bg-gray-300">Save</button>
        <button className="form-btn bg-secondary hover:bg-secondary-hover">
          + Add plot
        </button>
      </div>
    </main>
  );
};

export default PageWraper(Plots);
