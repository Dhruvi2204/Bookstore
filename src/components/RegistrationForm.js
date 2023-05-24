import React from "react";

export default function RegistrationForm(props) {
	function matchPassword() {
		let allAreFilled = true;
		document
			.getElementById("myForm")
			?.querySelectorAll("[required]")
			.forEach(function (i) {
				if (!allAreFilled) return;
				// @ts-ignore
				if (i.type === "radio") {
					let radioValueCheck = false;
					// @ts-ignore
					document
						.getElementById("myForm")
						// @ts-ignore
						?.querySelectorAll(`[name=${i.name}]`)
						.forEach(function (r) {
							// @ts-ignore
							if (r.checked) radioValueCheck = true;
							// @ts-ignore
						});
					allAreFilled = radioValueCheck;
					return;
				}
				// @ts-ignore
				if (!i.value) {
					allAreFilled = false;
					return;
				}
			});
		if (!allAreFilled) {
			alert("Fill all the fields");
			return;
		}

		let pw1 = document.getElementById("pw1")?.innerText;
		let pw2 = document.getElementById("pw2")?.innerText;

		if (pw1 !== pw2) {
			alert("Passwords did not match");
		} else {
			alert("Registration completed");
			console.log(props.data);
		}
	}

	return (
		<form id="myForm" className="container">
			<p>
				<b>Firstname :</b>
				<input
					type="text"
					id="fname"
					name="fname"
					placeholder="Your first name"
					onChange={(e) => props.handleInputChange(e)}
					required
				/>
			</p>
			<p>
				<b>Middlename :</b>
				<input
					type="text"
					id="mname"
					name="mname"
					placeholder="Your middle name"
					onChange={(e) => props.handleInputChange(e)}
				/>
			</p>
			<p>
				<b>Lastname :</b>
				<input
					type="text"
					id="lname"
					name="lname"
					placeholder="Your last name"
					required
					onChange={(e) => props.handleInputChange(e)}
				/>
			</p>


			<p>
				<label htmlFor="phone">
					<b>Phone :</b>{" "}
				</label>
				{/* <input type="text" name="phcode" value="+91" size={1} disabled /> */}
				<input
					type="text"
					name="phone"
					id="phone"
					maxLength={10}
					placeholder="Contact-no"
					onChange={(e) => props.handleInputChange(e)}
				/>
			</p>

			<p>
				<b>Email :</b>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your email-id"
					onChange={(e) => props.handleInputChange(e)}
					required
				/>
			</p>

			<p>
				<b>Password :</b>
				<input
					type="password"
					name="password"
					id="pw1"
					minLength={5}
					placeholder="minimum 5 length"
					onChange={(e) => props.handleInputChange(e)}
					required
				/>
			</p>

			<div className="boxy">
				<button
					type="button"
					value="Submit"
					id="but"
					
				>
					Submit
				</button>
			</div>
		</form>
	);
}
