document.addEventListener("DOMContentLoaded", () => {
	let openside = false;
	const sidebar = document.querySelector('.header-aside');
	const btnaside = document.querySelector('.btn-aside');
	const btnclose = document.querySelector('.btn-close');
	const menu_main = document.querySelectorAll(".item-nav");
	const unitalk = document.querySelector('.uni-talk');
	const main = document.querySelector('main');
	btnaside.addEventListener("click", function(event){
		event.preventDefault();
		event.stopPropagation();
		if(!openside){
			sidebar.classList.add('open');
			openside = true;
			main.addEventListener('click', mainClick, true);
		} else {
			sidebar.classList.remove('open');
			openside = false;
		}
	});
	function mainClick (event){
		sidebar.classList.remove('open');
		main.removeEventListener('click', mainClick, true);
		openside = false;
	}
	btnclose.addEventListener("click", function(event){
		event.preventDefault();
		event.stopPropagation();
		sidebar.classList.remove('open');
		openside = false;
	});
	unitalk.addEventListener("click", function(event){
		sidebar.classList.remove('open');
		openside = false;
	});
	menu_main.forEach((item) => {
		item.addEventListener('click', function(event){
			event.preventDefault();
			let sectionID = document.getElementById(event.target.getAttribute('href'));
			sectionID.scrollIntoView({behavior: 'smooth'}, true);
			if(event.target.classList.contains('haside')){
				sidebar.classList.remove('open');
				openside = false;
			}
		})
	})

});