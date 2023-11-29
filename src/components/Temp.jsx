import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Temp.css";

const Temp = ({ temp, handleTempClick, handleTempDeletion }) => {
	const history = useHistory();

	const handleTempDetailsClick = () => {
		history.push(`/${temp.title}`);
	};

	return (
		<div
			className="temp-container"
			style={temp.completed ? { borderLeft: "6px solid #D43CFA" } : {}}
		>
			<div className="temp-title" onClick={() => handleTempClick(temp.id)}>
				{temp.title}
			</div>

			<div className="buttons-container">
				<button
					className="remove-temp-button"
					onClick={() => handleTempDeletion(temp.id)}
				>
					<CgClose />
				</button>
				<button
					className="see-temp-details-button"
					onClick={handleTempDetailsClick}
				>
					<CgInfo />
				</button>
			</div>
		</div>
	);
};

export default Temp;
