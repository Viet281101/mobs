// Update current time
function updateTime() {
	const now = new Date();
	const formattedTime = now.toLocaleString('en-US', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
	});
	document.getElementById('current-time').textContent = formattedTime;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
