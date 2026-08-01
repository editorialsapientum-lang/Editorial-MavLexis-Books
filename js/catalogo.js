/* =========================================================================
   Lógica de la Biblioteca / Catálogo
   Presenta los libros agrupados por categoría (como una biblioteca real),
   con buscador y filtro por sello editorial y por categoría.
   ========================================================================= */

(function(){
  const state = { sello: 'todos', categoria: 'todas', q: '' };

  const sectionsWrap = document.getElementById('librarySections');
  const emptyState = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');
  const catFiltersEl = document.getElementById('categoryFilters');
  const selloToggleEl = document.getElementById('selloToggle');
  const searchInput = document.getElementById('searchInput');

  const params = new URLSearchParams(window.location.search);
  if (params.get('sello')) state.sello = params.get('sello');
  if (params.get('cat')) state.categoria = params.get('cat');
  if (params.get('q')) state.q = params.get('q');

  // Chips solo para categorías con al menos un libro
  const categoriasConLibros = CATEGORIAS.filter(c => LIBROS.some(l => l.categoria === c.slug));
  categoriasConLibros.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.dataset.cat = c.slug;
    btn.textContent = c.nombre;
    if (state.categoria === c.slug) btn.classList.add('active');
    catFiltersEl.appendChild(btn);
  });
  if (state.categoria !== 'todas') {
    const todasBtn = catFiltersEl.querySelector('[data-cat="todas"]');
    if (todasBtn) todasBtn.classList.remove('active');
  }

  catFiltersEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    state.categoria = btn.dataset.cat;
    catFiltersEl.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    render();
  });

  selloToggleEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    state.sello = btn.dataset.sello;
    selloToggleEl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  });
  if (state.sello !== 'todos') {
    selloToggleEl.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.sello === state.sello));
  }
  if (state.q) searchInput.value = state.q;

  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.q = e.target.value.trim().toLowerCase(); render(); }, 150);
  });

  function selloSlug(sello){ return sello === 'Sapientum' ? 'sapientum' : 'mavlexis'; }

  function filteredBooks(){
    return LIBROS.filter(l => {
      if (state.sello !== 'todos' && selloSlug(l.sello) !== state.sello) return false;
      if (state.categoria !== 'todas' && l.categoria !== state.categoria) return false;
      if (state.q) {
        const haystack = (l.titulo + ' ' + l.autores.join(' ')).toLowerCase();
        if (!haystack.includes(state.q)) return false;
      }
      return true;
    });
  }

  function render(){
    const libros = filteredBooks();
    resultCount.textContent = libros.length === 1 ? '1 libro encontrado' : `${libros.length} libros encontrados`;

    if (!libros.length) {
      sectionsWrap.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }
    emptyState.style.display = 'none';

    // Agrupar por categoría, respetando el orden definido en CATEGORIAS
    const porCategoria = {};
    libros.forEach(l => { (porCategoria[l.categoria] = porCategoria[l.categoria] || []).push(l); });

    const html = CATEGORIAS
      .filter(c => porCategoria[c.slug] && porCategoria[c.slug].length)
      .map(c => `
        <div class="library-section reveal in">
          <div class="library-section-head">
            <h3>${c.nombre}</h3>
            <span class="library-count">${porCategoria[c.slug].length} ${porCategoria[c.slug].length === 1 ? 'libro' : 'libros'}</span>
          </div>
          <div class="book-grid">
            ${porCategoria[c.slug].map(bookCardHTML).join('')}
          </div>
        </div>
      `).join('');

    sectionsWrap.innerHTML = html;
    attachCardEvents(sectionsWrap);
  }

  render();
})();
