import React, {useState} from "react";
import ReactDOM from "react-dom";


export function Todo() {
	const [test, setTest] = useState(["Paolo", "Monica", "Paolo"]);
	const [color, setColor] = useState("Green");
	const [input, setInput] = useState();
	const [number, setNumber] = useState(11);
	const [obj, setObj] = useState({
		name: "Monica",
		role: "developer"
	});

	return (
		<>
			<div className="text-center mt-5">
				{test.map((item, index) => {
					return <div key={index}>{item + color}</div>;
				})}
			</div>
			<div>{number}</div>
			<div onClick={() => setNumber(number + 1)} className="btn btn-info">
				Increase
			</div>
			<div onClick={() => setColor(input)} className="btn btn-info">
				Change Color to Red
			</div>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					onChange={e => setInput(e.target.value)}
				/>
			</div>
		</>
	);
}
