import React from "react";

export default function NumberBoxWithLabel({ number, label }) {
	return (
		<div className="number-box">
			<div className="number-box__number">{number}</div>
			<div className="number-box__label">{label}</div>
		</div>
	);
}
