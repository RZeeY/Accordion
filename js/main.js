'use strict'

let rimg = document.querySelectorAll('.r-img');
let bg = document.querySelectorAll('.bg')[0];
let rboxWidth = document.querySelectorAll('.r-box')[0].offsetWidth;
let rimgWidth = rimg[0].offsetWidth;
let marginWidth = (rboxWidth-rimgWidth)/(rimg.length-1);
let color = ['#E6573F','#FCD08F','#71C8E7','#003D6D' ,'#bd6ea6'];
let images = [
    'timg1.jpg',
    'timg2.jpg',
    'timg3.jpg',
    'timg4.jpg',
    'timg5.jpg'
];
let defaultLeft = [];

rimg.forEach(function(item, index) {
    let img=new Image();
    img.onload=function() {
            rimg[index].style.background = `url('img/${images[index]}') center no-repeat`;
            rimg[index].style.backgroundSize = 'cover';
        };
    img.src= `img/${images[index]}`;

    rimg[index].style.left = index * marginWidth + 'px';
    rimg[index].style.backgroundColor = color[index];
    rimg[index].index = index;
    defaultLeft.push(index * marginWidth);

    rimg[index].addEventListener('click',function(e) {

        if(Number(this.style.left.replace('px','')) == defaultLeft[this.index]) {
            for(let i = this.index+1; i <= (rimg.length-1); i++) {
                let curtLeft = Number(rimg[i].style.left.replace('px',''));
                let setLeft = curtLeft + (rimgWidth-marginWidth);
                if(curtLeft > defaultLeft[i])
                    setLeft = curtLeft;
                rimg[i].style.left = setLeft + 'px';
            }
        }

        else if(Number(this.style.left.replace('px','')) > defaultLeft[this.index]) {
            for(let i = this.index; i > 0; i--) {
                rimg[i].style.left = defaultLeft[i] + 'px';
            }
        }

        bg.style.cssText =
        `background: url('img/${images[this.index]}') center no-repeat;
         background-size: cover;
         filter: blur(34px)`
    });
});
