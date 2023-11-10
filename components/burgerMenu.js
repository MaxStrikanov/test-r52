export const burgerMenu = () => {
	const burgerBtn = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const content = document.querySelector('.menu__overlay');

	burgerBtn.addEventListener('click', () => {

		if(!document.querySelector('.burger__checkbox').checked) {
			menu.style.transform = 'translateX(0%)'
			content.style.display = 'block';
      document.body.style.overflow = 'hidden'
		} else {
			menu.style.transform = 'translateX(-400%)'
			content.style.display = 'none';
      document.body.style.overflow = 'auto'
		}
	})

  content.addEventListener('click', () => {
    menu.style.transform = 'translateX(-400%)'
			content.style.display = 'none';
      document.body.style.overflow = 'auto'
  })

}