import "./App.css";

export default function App() {
	function milisecondsToCountdown(miliseconds) {
		const days = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
		const hours = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);

		return {
			days,
			hours,
			minutes,
			seconds,
		};
	}

	const openingDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
	const today = new Date(Date.now());

	const countdown = milisecondsToCountdown(new Date(openingDate - today));

	return (
		<div className="App">
			<h1 className="heading">We're launching soon</h1>
			<div>Days Hours Minute Seconds</div>
			<div class="attribution">
				<p>
					Challenge by
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
						rel="noreferrer"
					>
						Frontend Mentor
					</a>
					and Coded by{" "}
					<a href="https://github.com/bruno-gurgel" target="_blank" rel="noreferrer">
						Bruno Gurgel
					</a>
					.
				</p>
			</div>
		</div>
	);
}
