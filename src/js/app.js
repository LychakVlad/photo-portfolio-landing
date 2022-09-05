import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();

// Burger menu

const iconMenu = document.querySelector('.header_icon');
const langMenu = document.querySelector('.intro_language');
const bodyMenu = document.querySelector('.header_nav');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		bodyMenu.classList.toggle('_active');
		langMenu.classList.toggle('_active');
	});

}


const anchors = document.querySelectorAll('a[href*="#"]')


for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
		if (iconMenu.classList.contains('_active')) {
			iconMenu.classList.remove('_active');
			bodyMenu.classList.remove('_active');
			langMenu.classList.remove('_active');
		}
	})
}
