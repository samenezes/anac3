import React from "react";

import Temp from "./Temp";

const Temps = ({ temp, handleTempClick, handleTempDeletion }) => {
	return (
		<>
			{temp.map((temps) => (
				<Temp
					key={temps.id}
					temp={temps}
					handleTempClick={handleTempClick}
					handleTempDeletion={handleTempDeletion}
				/>
			))}
		</>
	);
};

export default Temps;
