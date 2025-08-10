(function(){
  const easeIn = el => el.classList.add('reveal-in');
  const targets = Array.from(document.querySelectorAll('.section, .card, .btn, .grid-3 > *, .grid-2 > *'));
  targets.forEach(el => el.classList.add('reveal-target'));
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ easeIn(e.target); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  targets.forEach(t=> io.observe(t));
  // Header shadow on scroll
  const header = document.querySelector('.header');
  if(header){
    const onScroll = () => {
      if (window.scrollY > 4) header.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
      else header.style.boxShadow = 'var(--shadow)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();