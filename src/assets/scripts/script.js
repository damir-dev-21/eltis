import Jquery from 'jquery'


export function start(){

  let $ = Jquery;
  
  let bg = document.querySelector('.main__body__left');
  let bg1 = document.querySelector('.main__body__right');


  window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    bg1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
  });


$(document).ready(function () {
    $('#menu').on('click', 'a', function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
  
      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
  
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
    });
  });
  
}










export function slidees(){
    const slider = document.querySelector('.slider');
    const buttons = document.querySelectorAll('.btn');
    const options = document.querySelectorAll('.option');
    const slides = document.querySelectorAll('.img');

    let index = 1;
    let op_index = 0;
    let size = slides[index].clientWidth;

    console.log('w',window.innerWidth);

    update();

    function update(){
        if(window.innerWidth <= 1225){
            
            slider.style.transform = "translateX(" + (-window.innerWidth-44 * index) +"px)";
        }

        slider.style.transform = "translateX(" + (-size * index) +"px)";

        options.forEach(op=>op.classList.remove('colored'));
        options[op_index].classList.add('colored');

    }

    function slide(){
        slider.style.transition = "transform .5s ease-in-out";
        update();
    }

    function btnCheck(){
        if(this.id === 'prev'){
            index--;
            if(op_index === 0){
                op_index = slides.length-3;
            }
            else{
                op_index--;
            }
        }
        else if(this.id === 'next'){
            index++
            if(op_index === slides.length-3){
                op_index = 0
            }
            else{
                op_index++;
            }
        }

        slide();
    }

    function optionFunc(){
        let i = Number(this.getAttribute('option-index'));
        index = i + 1;
        op_index = i;
        slide();
    }

    slider.addEventListener('transitionend',()=>{
        if(slides[index].id === "last"){
            slider.style.transition = "none";
            index = slides.length-2;
            slider.style.transform = "translateX("+ (-size*index) + "px)";
        }
        else if(slides[index].id === "first"){
            slider.style.transition = "none";
            index = 1;
            slider.style.transform = "translateX("+(-size*index)+"px)"
        }
    })

    buttons.forEach(btn=>btn.addEventListener('click',btnCheck))
    options.forEach(opton=>opton.addEventListener('click',optionFunc))
}



