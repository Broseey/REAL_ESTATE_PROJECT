const open = document.querySelector('.menubtn');
const close = document.querySelector('.close');

var t1 = gsap.timeline({defaults :{ duration:1, ease: 'expo.inOut'} });
open.addEventListener('click', () => {
        if(t1.reversed()) {
            t1.play();
        }else{        

    t1.to('.smallernav', { right: 0,})
      .to('.smallernav', {height: '100vh',top:0 }, '-=.4')
      .to('.smallernav ul li a', {opacity:1, PointerEvents: 'all', stagger: .2}, '-=.7')
      .to('.close',{ opacity:1, PointerEvents: 'all'}, "-=.8")
      .to('.smallernav h2', { opacity: 1}, '-=1.2')
    }
});

close.addEventListener('click', () => {
    t1.reverse();
})