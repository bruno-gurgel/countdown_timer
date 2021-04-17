import { useEffect, useState } from "react";
import "./App.css";
import facebookIcon from "./assets/icon-facebook.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";
import NumberBoxWithLabel from "./components/NumberBoxWithLabel";

export default function App() {
	const [countdown, setCountDown] = useState(calculateCountdown());

	useEffect(() => {
		const timer = setTimeout(() => {
			setCountDown(calculateCountdown());
		}, 1000);

		return () => clearTimeout(timer);
	});

	// * TODO : FIX TIMER

	function calculateCountdown() {
		const year = new Date().getFullYear();
		const month = new Date().getMonth();
		const today = new Date(`${month}/10/${year}`);
		const openingDate = new Date(`${month + 1}/10/${year}`);

		const difference = new Date(openingDate - today);

		const timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};

		return timeLeft;
	}

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

	return (
		<div className="App">
			<h1 className="heading">We're launching soon</h1>
			<div className="countdown">
				<NumberBoxWithLabel number={countdown.days} label="days" />
				<NumberBoxWithLabel number={countdown.hours} label="hours" />
				<NumberBoxWithLabel number={countdown.minutes} label="minutes" />
				<NumberBoxWithLabel number={countdown.seconds} label="seconds" />
			</div>

			<footer className="footer">
				<div className="social-media">
					<img src={facebookIcon} alt="Facebook icon" />
					<img src={pinterestIcon} alt="Facebook icon" />
					<img src={instagramIcon} alt="Facebook icon" />
				</div>
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
			</footer>
		</div>
	);
}
