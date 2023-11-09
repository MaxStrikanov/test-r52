export const burgerMenu = () => {
	const burgerBtn = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const content = document.querySelector('.content');

	burgerBtn.addEventListener('click', () => {

		if(!document.querySelector('.burger__checkbox').checked) {
			menu.style.transform = 'translateX(0%)'
			content.style.background = 'rgba(0, 0, 0, 0.6)'
			content.style.width= 'calc(100% - 300px)'
		} else {
			menu.style.transform = 'translateX(-400%)'
			content.style.background = 'transparent'
			content.style.width= '100%'
		}
		
	})
}
