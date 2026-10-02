(() => {
  const nav=document.querySelector('.nav'),menu=document.querySelector('.menu-toggle');
  menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  let lang=localStorage.getItem('sbhl-lang')||'en'; const toggle=document.getElementById('langToggle');
  function applyLang(){document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-fr]').forEach(el=>el.textContent=lang==='fr'?el.dataset.fr:el.dataset.en);if(toggle)toggle.textContent=lang==='fr'?'EN':'FR';}
  toggle?.addEventListener('click',()=>{lang=lang==='en'?'fr':'en';localStorage.setItem('sbhl-lang',lang);applyLang();}); applyLang();
  document.querySelectorAll('[data-topic]').forEach(card=>card.addEventListener('click',()=>{const topic=document.getElementById('topic');if(topic)topic.value=card.dataset.topic;}));
  const form=document.getElementById('quoteForm'),status=document.getElementById('quoteStatus');
  form?.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form).entries());const body=['SBHL REQUEST','----------------',`Name: ${data.name||''}`,`Company: ${data.company||''}`,`Country code: ${data.country||''}`,`Phone: ${data.phone||''}`,`Email: ${data.email||''}`,`Product / service: ${data.topic||''}`,'','Message:',data.message||''].join('\n');const recipient='REPLACE_WITH_VERIFIED_EMAIL';
  if(recipient.includes('REPLACE_WITH')){
    const waText='SBHLOIL REQUEST\nName: '+(data.name||'')+'\nCompany: '+(data.company||'')+'\nCountry code: '+(data.country||'')+'\nPhone: '+(data.phone||'')+'\nEmail: '+(data.email||'')+'\nProduct / service: '+(data.topic||'')+'\n\nMessage:\n'+(data.message||'');
    window.open('https://wa.me/22607565454?text='+encodeURIComponent(waText),'_blank','noopener');
    status.textContent='Opening WhatsApp to send your request…';
    return;
  }
  window.location.href='mailto:'+recipient+'?subject='+encodeURIComponent('SBHLOIL Request')+'&body='+encodeURIComponent(body);
  status.textContent='Opening your email client…';});
})();