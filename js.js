document.addEventListener('click', e => {
	const target = e.target;

	if(target.classList.contains('checkbox') && (target.closest('.select--styles-work')) && (target.checked)) {
		const styleName = target.closest('label').querySelectorAll('span')[target.closest('label').querySelectorAll('span').length-1];
		document.querySelector('.selected-styles').innerHTML += styleName.innerHTML + ', ';
	}
	if(target.classList.contains('checkbox') && (target.closest('.select--styles-work')) && !(target.checked)) {
		const styleName = target.closest('label').querySelectorAll('span')[target.closest('label').querySelectorAll('span').length-1];
		document.querySelector('.selected-styles').innerHTML.replace(styleName.innerHTML + ', ', "");
	}
});