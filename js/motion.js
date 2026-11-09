// Progressive enhancements: content stays readable if animations are unavailable.
export function enhanceExperience(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const targets=document.querySelectorAll('.section-head,.featured,.upcoming,.home-about,.case-section,.about-intro,.philosophy,.practice');
  let reveal;
  if(!reduced.matches && 'IntersectionObserver' in window){
    reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');reveal.unobserve(entry.target);}}),{threshold:.06});
    targets.forEach(el=>{el.classList.add('reveal');reveal.observe(el);});
  }
  reduced.addEventListener('change',()=>{if(reduced.matches){reveal?.disconnect();targets.forEach(el=>el.classList.add('in-view'));}});
  const sections=[...document.querySelectorAll('.case-section')];
  if(sections.length){
    const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
    let queued=false;
    const update=()=>{
      const distance=document.documentElement.scrollHeight-innerHeight;
      progress.style.transform=`scaleX(${distance>0?Math.min(1,scrollY/distance):0})`;
      const active=sections.filter(s=>s.getBoundingClientRect().top<innerHeight*.4).at(-1)||sections[0];
      document.querySelectorAll('.case-nav a').forEach(a=>{if(a.hash===`#${active.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
      queued=false;
    };
    addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}},{passive:true});addEventListener('resize',update);update();
  }
  const field=document.querySelector('.signal-field');
  if(field && matchMedia('(hover:hover) and (pointer:fine)').matches){
    let pending=false, px=0,py=0;
    field.addEventListener('pointermove',e=>{if(reduced.matches)return;const box=field.getBoundingClientRect();px=((e.clientX-box.left)/box.width-.5)*12;py=((e.clientY-box.top)/box.height-.5)*12;if(!pending){pending=true;requestAnimationFrame(()=>{field.style.setProperty('--mx',`${px}px`);field.style.setProperty('--my',`${py}px`);pending=false;});}});
    field.addEventListener('pointerleave',()=>{field.style.setProperty('--mx','0px');field.style.setProperty('--my','0px');});
  }
  // Accessible native dialog keeps focus inside; Escape returns to the trigger.
  const gallery=[...document.querySelectorAll('.case-content figure img')];
  if(gallery.length){
    const dialog=document.createElement('dialog');dialog.className='image-dialog';dialog.setAttribute('aria-label','Project image viewer');dialog.innerHTML='<button type="button" class="close-dialog" aria-label="Close image">Close ×</button><img alt=""><p></p>';document.body.append(dialog);
    const close=()=>dialog.close();dialog.querySelector('button').addEventListener('click',close);
    dialog.addEventListener('click',e=>{if(e.target===dialog)close();});
    dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
    gallery.forEach(img=>{const button=document.createElement('button');button.type='button';button.className='image-zoom';button.setAttribute('aria-label',`Enlarge image: ${img.alt}`);img.replaceWith(button);button.append(img);button.insertAdjacentHTML('beforeend','<span aria-hidden="true">View detail ↗</span>');button.addEventListener('click',()=>{const large=dialog.querySelector('img');large.src=img.src;large.alt=img.alt;dialog.querySelector('p').textContent=img.closest('figure').querySelector('figcaption')?.textContent||img.alt;dialog.showModal();document.body.classList.add('dialog-open');});});
  }
}
