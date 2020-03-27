$(document).ready(function () {
	let	tabsItem = $('.tabs-item');

	tabsItem.on('click', function(event) {
		event.preventDefault();
		let activContent = $(this).attr('href');

		$('.visible').toggleClass('visible');
		$(activContent).toggleClass('visible');

		$('.tabs-item-activ').toggleClass('tabs-item-activ');
		$(this).toggleClass('tabs-item-activ');

		});
});