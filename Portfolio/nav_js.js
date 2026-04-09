/* ============================================================
   nav.js — injects the shared nav + sidebar on every page.
   Include this at the BOTTOM of every HTML file, just before </body>
   ============================================================ */

(function () {
  /* ── 1. Detect current page for active state ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    if (href === 'index.html' && (page === 'index.html' || page === '')) return true;
    return page === href;
  }

  function lnk(href, label) {
    return `<a href="${href}" class="${isActive(href) ? 'active' : ''}">${label}</a>`;
  }

  /* ── 2. Build HTML ── */
  const navHTML = `
  <!-- SIDEBAR -->
  <div class="sidebar-overlay" id="sidebarOverlay">
    <div class="sidebar-backdrop"></div>
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-title">Explore</div>
        <button class="sidebar-close" id="sidebarClose">&#x2715;</button>
      </div>

      <div class="sidebar-section">
        <span class="sidebar-section-label">Work</span>
        <a href="projects.html" class="sidebar-link">
          <div class="sl-left">
            <div class="sl-icon" style="background:#fdf0f3;">&#128308;</div>
            <div>
              <div class="sl-name">Projects</div>
              <div class="sl-desc">CPS Connect, YouTube, Alexa and more</div>
            </div>
          </div>
          <span class="sl-arrow">&#8594;</span>
        </a>
        <a href="internships.html" class="sidebar-link">
          <div class="sl-left">
            <div class="sl-icon" style="background:#f0f0f0;">&#127970;</div>
            <div>
              <div class="sl-name">Internships</div>
              <div class="sl-desc">SharkNinja Brand Marketing Co-op</div>
            </div>
          </div>
          <span class="sl-arrow">&#8594;</span>
        </a>
      </div>

      <div class="sidebar-section">
        <span class="sidebar-section-label">Creative</span>
        <a href="photography.html" class="sidebar-link">
          <div class="sl-left">
            <div class="sl-icon" style="background:#eef8f7;">&#128247;</div>
            <div>
              <div class="sl-name">Photography and Film</div>
              <div class="sl-desc">Streets, people, Boston and more</div>
            </div>
          </div>
          <span class="sl-arrow">&#8594;</span>
        </a>
        <a href="blog.html" class="sidebar-link">
          <div class="sl-left">
            <div class="sl-icon" style="background:#faf8f3;">&#9997;&#65039;</div>
            <div>
              <div class="sl-name">Blog</div>
              <div class="sl-desc">Thoughts on marketing and media</div>
            </div>
          </div>
          <span class="sl-arrow">&#8594;</span>
        </a>
      </div>

      <div class="sidebar-section">
        <span class="sidebar-section-label">Me</span>
        <a href="index.html#about" class="sidebar-link">
          <div class="sl-left">
            <div class="sl-icon" style="background:#fdf0f3;">&#127807;</div>
            <div>
              <div class="sl-name">About me</div>
              <div class="sl-desc">Aishu in her own words</div>
            </div>
          </div>
          <span class="sl-arrow">&#8594;</span>
        </a>
        <a href="contact.html" class="sidebar-link">
          <div class="sl-left">
            <div class="sl-icon" style="background:#f0f0f0;">&#9993;&#65039;</div>
            <div>
              <div class="sl-name">Contact</div>
              <div class="sl-desc">Let's talk</div>
            </div>
          </div>
          <span class="sl-arrow">&#8594;</span>
        </a>
      </div>
    </div>
  </div>

  <!-- NAV -->
  <nav class="nav">
    <a href="index.html" class="nav-brand">
      <div class="nav-brand-mark">A</div>
      Aishwarya Sivakumar
    </a>
    <div class="nav-center">
      ${lnk('projects.html',    'Projects')}
      ${lnk('internships.html', 'Internships')}
      ${lnk('photography.html', 'Photography')}
      ${lnk('blog.html',        'Blog')}
      ${lnk('contact.html',     'Contact')}
    </div>
    <div class="nav-right">
      <button class="btn-pink" id="sidebarOpen" style="font-size:13px;padding:8px 18px;">
        View my work &#9776;
      </button>
    </div>
  </nav>`;

  /* ── 3. Inject before first child of body ── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  /* ── 4. Sidebar logic ── */
  const overlay = document.getElementById('sidebarOverlay');
  const openBtn  = document.getElementById('sidebarOpen');
  const closeBtn = document.getElementById('sidebarClose');
  const backdrop = overlay.querySelector('.sidebar-backdrop');

  function openSidebar()  { overlay.classList.add('open');    document.body.style.overflow = 'hidden'; }
  function closeSidebar() { overlay.classList.remove('open'); document.body.style.overflow = ''; }

  openBtn .addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  backdrop.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

  /* Close sidebar when any sidebar link is clicked */
  overlay.querySelectorAll('.sidebar-link').forEach(a => a.addEventListener('click', closeSidebar));

  /* ── 5. Expose openSidebar globally (for inline onclick in hero btns) ── */
  window.openSidebar = openSidebar;
})();
