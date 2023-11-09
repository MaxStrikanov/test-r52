export const changeLanguage = () => {
	const btn = document.querySelectorAll('.header__control_btn')[2]
	const language = document.querySelector('.header__control_btn span')
	let isClicked = false;

	btn.addEventListener('click', () => {
	
		isClicked ? language.textContent = 'EN' : language.textContent = 'RU';

		isClicked = !isClicked; 
	});
}