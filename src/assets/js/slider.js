let dataSlider = [];

const sliderContainerElem = document.querySelector('.sliderContainer');
const testimonialImgElem = document.querySelector('.testimonialImage');
const sliderBlockquoteElem = document.getElementById('sliderBlockquote');
const pElem = sliderBlockquoteElem.childNodes[1];
const citeElem = sliderBlockquoteElem.childNodes[3];
const circleBtnContainerElem = sliderBlockquoteElem.childNodes[5];

let numberOfSlide = 0;

console.log(pElem);
console.log(citeElem);
console.log(circleBtnContainerElem);
fetch('./data/slider.json').then(response => {
    return response.json();
}).then(data=> {
    data.forEach(data => {
            dataSlider.push(data);
            const circleBtnElem = document.createElement('div');
            circleBtnElem.classList.add('circleBtn');
            circleBtnElem.setAttribute('data-slide-num', numberOfSlide++);
            circleBtnContainerElem.appendChild(circleBtnElem);
        });
}).then(()=>{
    showSlides(0);
});

circleBtnContainerElem.addEventListener('click',(e)=>{
    console.log(e.target.dataset.slideNum);
    if(e.target.dataset.slideNum !=null) {
        showSlides(Number(e.target.dataset.slideNum));
    }
})



function showSlides(slideNum){

    setTimeout(() => {
        testimonialImgElem.src = dataSlider[slideNum].img;
        pElem.innerText = dataSlider[slideNum].description;
        citeElem.innerText = dataSlider[slideNum].name;
    }, 500);
    circleBtnContainerElem.childNodes.forEach(btn=>{
        btn.classList.remove('activeCircleBtn');
        if(btn.dataset.slideNum == slideNum){
            btn.classList.add('activeCircleBtn');
        }
    });
}

