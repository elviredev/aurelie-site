// Background THPACE
const canvas = document.querySelector('#make-me-cool');

const settings = {
	colors: ['#060b34',  '#6a7fb1',  '#d2ac75'],
	triangleSize: 37,
    pointVariationX: 12,
    pointVariationY: 18,
    particleSettings: {
        color: "#eaedd7",
        count: [1.5, 5],
        interval: [2066, 5561],
        radius: [0.1, 2],
        opacity: [0.1, 0.52]
    }
};

Thpace.create(canvas, settings);

// Animation GreenSock
window.onload = function() {
    TweenMax.set('body', {opacity: 1});

    let timeline = new TimelineMax();

    timeline
    .from('.bloc-titre h1', 0.5, {opacity: 0, right: "200%" }, 0.3)
    .from('.sous-titre', 0.7, {opacity: 0, right: "200%"}, 0.7)
    .from('.bloc-titre span', 0.9, {opacity: 0, right: "200%"}, 1)
    .staggerFrom('.item', 0.3, {y: 50, opacity:0}, 0.3)
}