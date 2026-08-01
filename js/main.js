/* =========================================================================
   MavLexis Books — comportamiento compartido del sitio
   ========================================================================= */

// ---------- Menú móvil ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }
});

// ---------- Reveal on scroll ----------
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

// ---------- Footer (se renderiza igual en todas las páginas) ----------
function renderFooter(){
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="assets/img/logo-mark.png" alt="MavLexis Books">
            <span>MavLexis Books</span>
          </div>
          <p style="max-width:32ch;">Editorial universitaria dedicada a la escritura y publicación de libros académicos en Panamá.</p>
          <div class="social-row">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.3c0-.87.24-1.46 1.5-1.46H16.5V4.14C16.24 4.1 15.32 4 14.25 4 12 4 10.5 5.32 10.5 7.9v2.6H8v3h2.5V21h3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg></a>
            <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3zm5 12.7c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.8.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.6.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.8 1.7.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2 0 1.4.7 1.7.8.2.1.4.2.5.3.1.2.1.9-.1 1.4z"/></svg></a>
          </div>
        </div>
        <div>
          <h4>Navegación</h4>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="catalogo.html">Biblioteca</a></li>
            <li><a href="publica-tu-libro.html">Publica tu libro</a></li>
            <li><a href="nosotros.html">Quiénes somos</a></li>
          </ul>
        </div>
        <div>
          <h4>Sellos editoriales</h4>
          <ul>
            <li><a href="catalogo.html?sello=mavlexis">Editorial MavLexis Books</a></li>
            <li><a href="catalogo.html?sello=sapientum">Sapientum</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>mavlexisbooks@gmail.com</li>
            <li>+507 6594-3848</li>
            <li>Panamá</li>
            <li><a href="contacto.html">Enviar un mensaje →</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Editorial MavLexis Books. Todos los derechos reservados.</span>
        <span>Sello asociado: Sapientum</span>
      </div>
    </div>
  `;
}

// ---------- Utilidades de catálogo ----------
function categoriaNombre(slug){
  const c = CATEGORIAS.find(c => c.slug === slug);
  return c ? c.nombre : slug;
}

function bookCardHTML(libro){
  const selloClass = libro.sello === 'Sapientum' ? 'sapientum' : '';
  return `
    <article class="book-card reveal in" data-id="${libro.id}" tabindex="0" role="button" aria-label="Ver detalle de ${libro.titulo}">
      <div class="book-cover">
        <img src="assets/portadas/${libro.portada}" alt="Portada de ${libro.titulo}" loading="lazy">
        <span class="book-tag ${selloClass}">${libro.sello}</span>
      </div>
      <div class="book-info">
        <h4>${libro.titulo}</h4>
        <p class="autor">${libro.autores[0]}${libro.autores.length > 1 ? ' et al.' : ''}</p>
        <span class="cat">${categoriaNombre(libro.categoria)}</span>
        <span class="ver-link">Ver libro →</span>
      </div>
    </article>
  `;
}

function renderFeatured(containerId, count){
  const el = document.getElementById(containerId);
  if (!el) return;
  const destacados = LIBROS.filter(l => l.destacado).slice(0, count);
  const lista = destacados.length ? destacados : LIBROS.slice(0, count);
  el.innerHTML = lista.map(bookCardHTML).join('');
  attachCardEvents(el);
}

function attachCardEvents(container){
  container.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', () => openBookModal(card.dataset.id));
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openBookModal(card.dataset.id); });
  });
}

// ---------- Modal de libro ----------
function openBookModal(id){
  const libro = LIBROS.find(l => l.id === id);
  if (!libro) return;
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  const selloClass = libro.sello === 'Sapientum' ? 'sapientum' : '';
  const asunto = encodeURIComponent(`Consulta sobre: ${libro.titulo}`);
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button class="modal-close" id="modalCloseBtn" aria-label="Cerrar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="modal-cover"><img src="assets/portadas/${libro.portada}" alt="Portada de ${libro.titulo}"></div>
      <div class="modal-body">
        <span class="cat">${libro.sello} · ${categoriaNombre(libro.categoria)}</span>
        <h3>${libro.titulo}</h3>
        <p>${libro.autores.join(', ')}</p>
        <div class="modal-meta">
          <span><b>Publicación:</b> ${libro.fecha}</span>
          ${libro.isbn ? `<span><b>ISBN:</b> ${libro.isbn}</span>` : ''}
        </div>
        <p>${libro.sinopsis}</p>
        <div class="modal-actions">
          ${libro.amazon ? `<a class="btn btn-gold btn-sm" href="${libro.amazon}" target="_blank" rel="noopener">Comprar en Amazon</a>` : ''}
          <a class="btn btn-outline btn-sm" href="contacto.html?asunto=${asunto}">Solicitar información</a>
        </div>
      </div>
    </div>
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalCloseBtn').addEventListener('click', closeBookModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeBookModal(); });
  document.addEventListener('keydown', escCloseModal);
}
function closeBookModal(){
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', escCloseModal);
}
function escCloseModal(e){ if (e.key === 'Escape') closeBookModal(); }
