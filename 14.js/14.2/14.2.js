const themeToggle = document.getElementById('theme-toggle');
		const themeStyles = document.querySelector('.dark-theme');
		themeToggle.addEventListener('click', () => {
			if (themeToggle.textContent === 'Тёмная тема') {
				themeToggle.textContent = 'Светлая тема';
				document.body.classList.add('dark-theme');
			} else {
				themeToggle.textContent = 'Тёмная тема';
				document.body.classList.remove('dark-theme');
			}
		});