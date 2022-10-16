const startStopBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const time = document.querySelector('.clock p');
const clock = document.querySelector('.clock');

let seconds = 0;
let interval = null;

const fixNumberHandler = (value) => {
	if (value < 10) {
		return '0' + value;
	} else {
		return value;
	}
};

const countStart = () => {
	seconds++;
	let hrs = Math.floor(seconds / 360000);
	let mins = Math.floor((seconds - hrs * 360000) / 6000);
	let secs = Math.floor((seconds - mins * 6000 - hrs * 360000) / 100);
	let ms = seconds % 100;
	time.innerHTML = `${fixNumberHandler(hrs)}:${fixNumberHandler(
		mins
	)}:${fixNumberHandler(secs)}:${fixNumberHandler(ms)}`;
};
const intervalHandler = () => {
	clock.classList.toggle('hover');
	if (interval) {
		startStopBtn.innerHTML =
			'<span class="material-symbols-outlined" id="arrow"> play_arrow </span>';
		interval = clearInterval(interval);
		return;
	} else {
		startStopBtn.innerHTML =
			'<span class="material-symbols-outlined" id="pause">pause</span>';
		interval = setInterval(countStart, 10);
	}
};
const intervalStop = () => {
	interval = clearInterval(interval);
	seconds = 0;
	time.innerHTML = `00:00:00:00`;
	startStopBtn.innerHTML =
		'<span class="material-symbols-outlined" id="arrow"> play_arrow </span>';
	clock.classList.remove('hover');
};

startStopBtn.addEventListener('click', intervalHandler);
stopBtn.addEventListener('click', intervalStop);
