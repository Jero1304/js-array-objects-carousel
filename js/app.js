/*
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione 
del markup statico del carosello e delle singole slide 
(se partite dal vecchio codice commentatevi la parte che genera le slide dinamicamente da js)
Milestone 1:
Rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali 
per popolare dinamicamente il carosello.
PS.
La logica del cambio slide deve continuare a funzionare anche 
con la nuova struttura delle slide
*/

const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
let slideIndex = 0
const carosello = document.querySelector('.carosello')

for (let i = 0; i < images.length; i++) {
	const {image, title, text} = images[i];
	let className = 'slide'

	if (i === slideIndex) {
		className += ' active'
	}

	const htmlSlide = `
        <div class="slide text-center">
            <h1>${title}</h1>            
            <img src="${image}" alt="${title}">
            <p>${text}</p>
        </div>
    `

	carosello.innerHTML += htmlSlide
}

let slideEle = document.querySelectorAll('.carosello .slide')
const arrowLeftEle = document.getElementById('arrow-left')
const arrowRightEle = document.getElementById('arrow-right')

slideEle[slideIndex].classList.add('active')

arrowLeftEle.addEventListener('click', function () {
	slideEle[slideIndex].classList.remove('active')

	if (slideIndex > 0) {
		slideIndex--
	} else {
		slideIndex = slideEle.length - 1
	}

	slideEle[slideIndex].classList.add('active')
})

arrowRightEle.addEventListener('click', function () {
	console.log('next slide')
	console.log(slideIndex)

	const lastIndex = slideEle.length - 1;

	slideEle[slideIndex].classList.remove('active')

	if (slideIndex < lastIndex) {
		slideIndex ++
	} else {
		slideIndex = 0
	}

	console.log(slideEle[slideIndex])
	slideEle[slideIndex].classList.add('active')


})
