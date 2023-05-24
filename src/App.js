import "./App.css";
import React, { useState } from "react";
import NavHead from "./components/NavHead";
import Registration from "./components/Registration";
import Navigation from "./components/Navigation";
function App() {
	const obj={
		fname: "",
		mname: "",
		lname: "",
		email: "",
		password: "",
		phone: "",
	}
	const [data, setData] = useState(obj);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<Navigation/>
			<NavHead />
			<Registration data={data} handleChange={handleInputChange} />
		</>
	);
}

export default App;
