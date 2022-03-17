
//hambager menu//
document.querySelector('.btn').onclick = function(e) {
  var menu = document.querySelector('.menu');
  var btn = document.querySelector('.btn');
  var menubtn = document.querySelector('.menu-bunton');
  var menutxt = document.querySelector('.menu-bunton P');
  menu.classList.toggle('is-active');
  btn.classList.toggle('is-active');
  menubtn.classList.toggle('is-active');
  menutxt.classList.toggle('is-active');
  e.preventDefault();
}
//end hambager manu//
//Cursor MouseMove-//

    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
        cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX +"px;top:" + e.clientY + "px;"
    });


//End Cursor MouseMove//
//slide scroll//
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let el_to_show = document.querySelectorAll('.show-on-scroll');

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 200

    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop = () => {
    el_to_show.forEach(el => {
        if (isElInViewPort(el)) el.classList.add('show')
    })

    scroll(loop)
}

loop()
//end slide scroll//


//loading Animation//
$(window).on("load",function(){
  $(".load-container").delay(2000).fadeOut(500);
});

//end loading Animation//
