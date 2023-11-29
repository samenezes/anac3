import React, { useState} from "react";
// import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Temps from "./components/Temps";
import AddTemp from "./components/AddTemp";
import TempDatails from "./components/TempDatails";

import "./App.css";

const App = () => {
	
	const [temps, settemps] = useState([]);

	// useEffect(() => {
	// 	const fetchtemps = async () => {
	// 		const { data } = await axios.get(
	// 			"https://jsonplaceholder.cypress.io/todos?_limit=10"
	// 		);

	// 		settemps(data);
	// 	};

	// 	fetchtemps();
	// }, []);

	const handleTempClick = (tempId) => {
		const newTemp = temps.map((temp) => {
			if (temp.id === tempId) return { ...temp, completed: !temp.completed };

			return temp;
		});

		settemps(newTemp);
	};

	const handleTempAddition = (tempTitle) => {
		const newTemp = [
			...temps,
			{
				title: tempTitle,
				id: uuidv4(),
				completed: false,
			},
		];

		settemps(newTemp);
	};

	const handleTempDeletion = (tempId) => {
		const newTemp = temps.filter((temp) => temp.id !== tempId);

		settemps(newTemp);
	};

	return (
		<Router>
			<div className="container">
				<Header />
					<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTemp handleTempAddition={handleTempAddition} />
							<Temps
								temp={temps}
								handleTempClick={handleTempClick}
								handleTempDeletion={handleTempDeletion}
							/>
						</>
					)}
				/>
				<Route path="/:tempTitle" exact component={TempDatails} />
			</div>
		</Router>
	);
};

export default App;
