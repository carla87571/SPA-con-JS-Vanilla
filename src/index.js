import router from './routes/index.js';

window.addEventListener('load', () => {
	router();
	setTimeout(() => {
		const btn = document.getElementById('darkModeToggle');
		if (btn) {
			btn.onclick = () => {
				document.body.classList.toggle('dark-mode');
				btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
			};
		}
	}, 50);
});
window.addEventListener('hashchange', () => {
	router();
	setTimeout(() => {
		const btn = document.getElementById('darkModeToggle');
		if (btn) {
			btn.onclick = () => {
				document.body.classList.toggle('dark-mode');
				btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
			};
		}
	}, 50);
});