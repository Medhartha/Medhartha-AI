document.querySelector('footer').insertAdjacentHTML('afterbegin', `<div class="shell stay-close"><div class="stay-heading"><p class="eyebrow gold">05 / STAY CLOSE</p><h2>Stay close to<br><em>Medhartha.</em></h2><p>Pick the way that suits you. We reply to every message.</p></div><div class="stay-grid"><article><span>01</span><h3>Newsletter</h3><p>One useful AI idea each week, in plain language.</p><a href="#join">Subscribe <i>→</i></a></article><article><span>02</span><h3>Contact us</h3><p>Questions about a program or your team? Write to us.</p><a href="mailto:hello@medhartha.com">Send a message <i>↗</i></a></article><article><span>03</span><h3>Support us</h3><p>Sponsor a seat for a student who cannot afford one.</p><a href="mailto:hello@medhartha.com?subject=Sponsor%20a%20Medhartha%20seat">Sponsor a seat <i>↗</i></a></article><article><span>04</span><h3>Community</h3><p>Learn alongside other builders and share what works.</p><a href="mailto:hello@medhartha.com?subject=Join%20the%20Medhartha%20community">Join the community <i>↗</i></a></article></div></div>`);
const footerStyles = document.createElement('style'); footerStyles.textContent = `.stay-close{padding:104px 0 72px;display:grid;grid-template-columns:.82fr 1.18fr;gap:85px}.stay-heading h2{font:500 clamp(42px,4.6vw,62px)/.98 "Playfair Display",serif;letter-spacing:-.055em;margin:0}.stay-heading h2 em{color:var(--sage)}.stay-heading>p:last-child{font-size:14px;line-height:1.6;color:#c7d2c5;max-width:255px;margin:22px 0 0}.stay-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 35px}.stay-grid article{padding:21px 0 24px;border-top:1px solid rgba(247,245,238,.24)}.stay-grid article:nth-last-child(-n+2){border-bottom:1px solid rgba(247,245,238,.24)}.stay-grid span{font:10px "DM Mono",monospace;color:var(--gold-light)}.stay-grid h3{font:500 22px "Playfair Display",serif;margin:14px 0 8px}.stay-grid p{font-size:12px;line-height:1.55;color:#c7d2c5;margin:0 0 15px;max-width:205px}.stay-grid a{font-size:12px;font-weight:700;color:var(--gold-light);text-decoration:none}.stay-grid i{font-style:normal;margin-left:6px}.footer-inner{border-top:1px solid rgba(247,245,238,.24)}@media(max-width:760px){.stay-close{padding:75px 0 45px;grid-template-columns:1fr;gap:38px}.stay-grid{grid-template-columns:1fr;gap:0}.stay-grid article:nth-last-child(-n+2){border-bottom:0}.stay-grid article:last-child{border-bottom:1px solid rgba(247,245,238,.24)}}`; document.head.appendChild(footerStyles);
const inbox = 'contactus@medhartha.com';
document.querySelectorAll('a[href*="hello@medhartha.com"]').forEach((link) => { link.href = link.href.replace('hello@medhartha.com', inbox); link.textContent = link.textContent.replace('hello@medhartha.com', inbox); });
document.getElementById('interest-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('form-message');
  if (!email) return;
  message.textContent = 'Opening your email app so you can join the list.';
  window.location.href = 'mailto:' + inbox + '?subject=' + encodeURIComponent('Medhartha build log signup') + '&body=' + encodeURIComponent('Please add ' + email + ' to the Medhartha weekly recap.');
});

const thoughtModal = document.createElement('div');
thoughtModal.className = 'thought-modal';
thoughtModal.innerHTML = `<div class="thought-card" role="dialog" aria-modal="true" aria-labelledby="thought-title"><button class="close-thought" aria-label="Close">×</button><p class="eyebrow">A SMALL QUESTION FOR YOU</p><h2 id="thought-title">What would you love AI to help with?</h2><p class="thought-copy">Your note goes directly to the Medhartha team. It helps shape the videos and future sessions we create.</p><textarea id="visitor-thought" placeholder="For example: I want help creating content, managing my work, or building an idea…"></textarea><button class="send-thought">Share my thought <span>→</span></button><p class="thought-note">Your email app will open with your message ready to send.</p></div>`;
document.body.appendChild(thoughtModal);
const modalStyles = document.createElement('style');
modalStyles.textContent = `.thought-modal{position:fixed;inset:0;background:rgba(20,42,33,.68);display:none;place-items:center;padding:20px;z-index:40}.thought-modal.open{display:grid}.thought-card{width:min(510px,100%);background:var(--ivory);padding:37px;box-shadow:12px 13px 0 rgba(223,199,150,.55);position:relative}.thought-card h2{font:500 34px/1.03 "Playfair Display",serif;letter-spacing:-.04em;margin:0 0 15px}.thought-copy{font-size:14px;line-height:1.58;color:var(--muted);max-width:420px}.thought-card textarea{width:100%;min-height:122px;border:1px solid var(--line);background:#fffdf8;font:14px/1.5 "DM Sans",sans-serif;padding:13px;margin:17px 0;resize:vertical;color:var(--ink)}.send-thought{border:0;background:var(--forest);color:var(--ivory);font:700 13px "DM Sans",sans-serif;padding:14px 17px;cursor:pointer}.send-thought span{color:var(--gold-light);margin-left:8px}.thought-note{font-size:10px;color:var(--muted);margin:12px 0 0}.close-thought{position:absolute;right:14px;top:11px;border:0;background:transparent;color:var(--forest);font-size:26px;cursor:pointer}.path-grid a{cursor:pointer}`;
document.head.appendChild(modalStyles);
let selectedPath = '';
document.querySelectorAll('.path-grid a').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  selectedPath = link.querySelector('span').textContent.trim();
  thoughtModal.classList.add('open');
  document.getElementById('visitor-thought').focus();
}));
document.querySelector('.close-thought').addEventListener('click', () => thoughtModal.classList.remove('open'));
thoughtModal.addEventListener('click', (event) => { if (event.target === thoughtModal) thoughtModal.classList.remove('open'); });
document.querySelector('.send-thought').addEventListener('click', () => {
  const thought = document.getElementById('visitor-thought').value.trim();
  const body = `Visitor path: ${selectedPath}\n\nWhat they want help with:\n${thought || 'No message added.'}`;
  window.location.href = 'mailto:' + inbox + '?subject=' + encodeURIComponent(`Medhartha visitor — ${selectedPath}`) + '&body=' + encodeURIComponent(body);
});

// Content is intentionally honest about the channel's early stage.
document.querySelector('.hero h1').innerHTML = 'Learn AI with me,<br><em>one useful step at a time.</em>';
document.querySelector('.hero .intro').textContent = 'I’m learning AI in public and sharing what I discover, so we can explore useful tools and ideas together.';
document.querySelector('.video-surface .play').textContent = '✦';
document.querySelector('.video-surface p').innerHTML = 'FIRST VIDEO<br>COMING SOON';
document.querySelectorAll('.lesson-list i').forEach(icon => icon.remove());
document.querySelectorAll('.lesson-list article').forEach(item => item.setAttribute('aria-label', item.innerText + ' — coming soon'));
const founder = document.createElement('section');
founder.className = 'founder shell';
founder.innerHTML = `<p class="eyebrow muted">A NOTE FROM THE FOUNDER</p><h2>Learning together,<br><em>with purpose.</em></h2><p>I started Medhartha because I love teaching and believe education should make new ideas feel accessible. I’m exploring AI one step at a time, sharing what I learn, and inviting you to learn alongside me. My hope is to turn this journey into practical lessons and courses as it grows.</p>`;
document.querySelector('.journey').before(founder);
const founderStyles = document.createElement('style'); founderStyles.textContent = `.founder{padding:100px 0}.founder h2{font:500 clamp(42px,5vw,65px)/1 "Playfair Display",serif;letter-spacing:-.05em;margin:0 0 22px}.founder h2 em{color:#71876d}.founder>p:last-child{max-width:670px;color:#53645b;font-size:17px;line-height:1.75}.stay-grid article:nth-child(3) p{max-width:230px}@media(max-width:760px){.founder{padding:72px 0}}`; document.head.appendChild(founderStyles);
const supportCard = document.querySelector('.stay-grid article:nth-child(3)');
supportCard.querySelector('h3').textContent = 'Support the journey';
supportCard.querySelector('p').textContent = 'Have an idea, resource, or collaboration that could help Medhartha grow? We’d love to hear from you.';
supportCard.querySelector('a').textContent = 'Get in touch';
supportCard.querySelector('a').href = 'mailto:contactus@medhartha.com?subject=Supporting%20the%20Medhartha%20journey';
const communityCard = document.querySelector('.stay-grid article:nth-child(4)');
communityCard.querySelector('p').textContent = 'A space to learn together is coming soon. Get in touch to hear updates.';
communityCard.querySelector('a').textContent = 'Ask about the community';
document.querySelector('.join small').textContent = 'This opens your email app to send a signup request; you are not subscribed until you send it.';
document.querySelector('.thought-copy').textContent = 'Tell us what you’re interested in. Your email app will open with a message ready for you to send.';

// Direct visitors to the Google Sheets-connected AI journey form.
document.querySelectorAll('.path-grid a').forEach(link => {
  const replacement = link.cloneNode(true);
  replacement.href = 'ai-journey-form.html';
  link.replaceWith(replacement);
});
const signupForm = document.getElementById('interest-form');
signupForm.outerHTML = '<div class="join-form-link"><p>Tell us where you are in your AI journey, and opt in to email updates if you wish.</p><a class="button solid" href="ai-journey-form.html">Share your AI story</a></div>';
document.querySelectorAll('.stay-grid a[href="#join"]').forEach(link => { link.href = 'ai-journey-form.html'; });
