import React, { useState } from "react";

import Button from "./Button";

import "./AddTemp.css";

const AddTemp = ({ handleTempAddition }) => {
	const [inputData, setInputData] = useState("");

	const handleInputChange = (e) => {
		setInputData(e.target.value);
	};

	const handleAddTempClick = () => {
		handleTempAddition(inputData);
		setInputData("");
	};

	return (
		<div className="add-temp-container">
			<input
				onChange={handleInputChange}
				value={inputData}
				className="add-temp-input"
				type="text"
			/>
			;
			<div className="add-temp-button-container">
				<Button onClick={handleAddTempClick}>Adicionar</Button>
			</div>
		</div>
	);
};

export default AddTemp;
