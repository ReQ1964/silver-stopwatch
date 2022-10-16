const countStart = () => {
	seconds++;
	let days = Math.floor(seconds / 86400);
	let hrs = Math.floor((seconds - days * 86400) / 3600);
	let mins = Math.floor((seconds - hrs * 3600 - days * 86400) / 60);
	let secs = seconds % 60;
	time.innerHTML = `${fixNumberHandler(days)}:${fixNumberHandler(
		hrs
	)}:${fixNumberHandler(mins)}:${fixNumberHandler(secs)}`;
	console.log(mins);
	console.log(hrs);
};
