// ==========================================================================
// DATA DEFINITIONS & STATE MANAGEMENT
// ==========================================================================

// Connection data representing Figma Prototyping Wires
const connectionsData = [
  // SCREEN 1 (HOME) -> Targets
  { id: 'c1', fromId: 's1-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c2', fromId: 's1-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c3', fromId: 's1-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c4', fromId: 's1-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c5', fromId: 's1-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c6', fromId: 's1-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c7', fromId: 's1-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c8', fromId: 's1-hero-explore', toId: 'screen-explore', label: 'CTA Jelajahi Profil' },
  { id: 'c9', fromId: 's1-hero-contact', toId: 'screen-contact', label: 'CTA Hubungi Saya' },

  // SCREEN 2 (EXPLORE) -> Targets
  { id: 'c10', fromId: 's2-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c11', fromId: 's2-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c12', fromId: 's2-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c13', fromId: 's2-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c14', fromId: 's2-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c15', fromId: 's2-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c16', fromId: 's2-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c17', fromId: 's2-btn-skills', toId: 'screen-skills', label: 'CTA Lihat Kemampuan' },

  // SCREEN 3 (SKILLS) -> Targets
  { id: 'c18', fromId: 's3-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c19', fromId: 's3-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c20', fromId: 's3-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c21', fromId: 's3-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c22', fromId: 's3-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c23', fromId: 's3-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c24', fromId: 's3-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c25', fromId: 's3-btn-tools', toId: 'screen-tools', label: 'CTA Lihat Tools' },

  // SCREEN 4 (TOOLS) -> Targets
  { id: 'c26', fromId: 's4-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c27', fromId: 's4-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c28', fromId: 's4-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c29', fromId: 's4-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c30', fromId: 's4-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c31', fromId: 's4-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c32', fromId: 's4-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c33', fromId: 's4-btn-projects', toId: 'screen-projects', label: 'CTA Hasil Proyek' },

  // SCREEN 5 (PROJECTS) -> Targets
  { id: 'c34', fromId: 's5-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c35', fromId: 's5-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c36', fromId: 's5-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c37', fromId: 's5-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c38', fromId: 's5-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c39', fromId: 's5-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c40', fromId: 's5-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c41', fromId: 's5-proj-card-1', toId: 'screen-project-detail-1', label: 'Detail Film Pendek' },
  { id: 'c42', fromId: 's5-proj-card-2', toId: 'screen-project-detail-2', label: 'Detail Proyek Web' },
  { id: 'c43', fromId: 's5-proj-card-3', toId: 'screen-project-detail-3', label: 'Detail Poster Berita' },
  { id: 'c44', fromId: 's5-proj-card-4', toId: 'screen-project-detail-4', label: 'Detail MLBB Turnamen' },

  // SCREEN 6 (PROJECT DETAIL 1) -> Targets
  { id: 'c45', fromId: 's6-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c46', fromId: 's6-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c47', fromId: 's6-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c48', fromId: 's6-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c49', fromId: 's6-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c50', fromId: 's6-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c51', fromId: 's6-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c52', fromId: 's6-btn-back', toId: 'screen-projects', label: 'Kembali Ke Daftar Proyek' },

  // SCREEN 7 (PROJECT DETAIL 2) -> Targets
  { id: 'c53', fromId: 's7-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c54', fromId: 's7-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c55', fromId: 's7-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c56', fromId: 's7-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c57', fromId: 's7-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c58', fromId: 's7-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c59', fromId: 's7-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c60', fromId: 's7-btn-back', toId: 'screen-projects', label: 'Kembali Ke Daftar Proyek' },

  // SCREEN 8 (CONTACT) -> Targets
  { id: 'c61', fromId: 's8-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c62', fromId: 's8-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c63', fromId: 's8-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c64', fromId: 's8-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c65', fromId: 's8-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c66', fromId: 's8-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c67', fromId: 's8-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c68', fromId: 's8-btn-submit', toId: 'screen-home', label: 'Kirim Formulir (Redirect Home)' },

  // SCREEN 9 (CV VIEWER) -> Targets
  { id: 'c69', fromId: 's9-btn-close', toId: 'screen-home', label: 'Tutup CV Saya' },

  // SCREEN 10 (PROJECT DETAIL 3) -> Targets
  { id: 'c70', fromId: 's10-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c71', fromId: 's10-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c72', fromId: 's10-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c73', fromId: 's10-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c74', fromId: 's10-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c75', fromId: 's10-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c76', fromId: 's10-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c77', fromId: 's10-btn-back', toId: 'screen-projects', label: 'Kembali Ke Daftar Proyek' },

  // SCREEN 11 (PROJECT DETAIL 4) -> Targets
  { id: 'c78', fromId: 's11-nav-home', toId: 'screen-home', label: 'Tab Home' },
  { id: 'c79', fromId: 's11-nav-explore', toId: 'screen-explore', label: 'Tab Explore' },
  { id: 'c80', fromId: 's11-nav-skills', toId: 'screen-skills', label: 'Tab Skills' },
  { id: 'c81', fromId: 's11-nav-tools', toId: 'screen-tools', label: 'Tab Tools' },
  { id: 'c82', fromId: 's11-nav-projects', toId: 'screen-projects', label: 'Tab Proyek' },
  { id: 'c83', fromId: 's11-nav-contact', toId: 'screen-contact', label: 'Tab Kontak' },
  { id: 'c84', fromId: 's11-btn-cv', toId: 'screen-cv', label: 'Tombol CV Saya' },
  { id: 'c85', fromId: 's11-btn-back', toId: 'screen-projects', label: 'Kembali Ke Daftar Proyek' }
];

// App State
const state = {
  mode: 'website',             // 'website', 'canvas', or 'play'
  zoom: 0.65,                 // default zoom level for 1080p canvas fit
  panX: 50,                   // horizontal offset
  panY: 50,                   // vertical offset
  activeScreenId: 'screen-home',
  selectedWireId: null,
  showWires: true,
  showHotspots: true,
  deviceType: 'desktop',      // 'desktop' or 'mobile'
  history: [],                // navigation history for back action
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================

window.addEventListener('DOMContentLoaded', () => {
  initCanvasDrag();
  initCanvasWheel();
  initSidebarList();
  
  // Set website mode or export mode based on URL hash on startup
  checkHash();

  // Listen for hash changes
  window.addEventListener('hashchange', checkHash);

  // Wait a small bit for browser layout calculation before drawing SVG paths
  setTimeout(() => {
    drawWires();
    focusScreen('screen-home', false); // Focus home screen without animation on init
  }, 100);

  // Resize window triggers redrawing of SVG lines
  window.addEventListener('resize', () => {
    if (state.mode === 'canvas') {
      drawWires();
    }
  });

  // Setup click hotspot delegation for play mode presentation view
  const presentationContainer = document.getElementById('device-viewport-container');
  if (presentationContainer) {
    presentationContainer.addEventListener('click', handlePresentationClick);
  }

  // Setup click hotspot delegation for website mode view
  const websiteContainer = document.getElementById('workspace-website');
  if (websiteContainer) {
    websiteContainer.addEventListener('click', handlePresentationClick);
  }
});

function checkHash() {
  const hash = window.location.hash;
  if (hash === '#export') {
    setMode('export');
  } else if (hash.startsWith('#screen-')) {
    const screenId = hash.slice(1);
    const screen = document.getElementById(screenId);
    if (screen) {
      setMode('website');
      navigateToScreen(screenId, false);
    }
  } else {
    // Default to home screen in website mode
    setMode('website');
    navigateToScreen('screen-home', false);
  }
}

// ==========================================================================
// CANVAS PAN & ZOOM FUNCTIONS
// ==========================================================================

function applyCanvasTransform(smooth = false) {
  const canvasInner = document.getElementById('canvas-inner');
  if (smooth) {
    canvasInner.style.transition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)';
    setTimeout(() => {
      canvasInner.style.transition = 'transform 0.1s linear';
    }, 350);
  } else {
    canvasInner.style.transition = 'transform 0.1s linear';
  }
  canvasInner.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
  document.getElementById('zoom-value').innerText = `${Math.round(state.zoom * 100)}%`;
}

function zoomCanvas(delta) {
  const oldZoom = state.zoom;
  state.zoom = Math.min(2.0, Math.max(0.15, state.zoom + delta));
  
  // Adjust pan to zoom into the center of the viewport
  const viewport = document.getElementById('canvas-viewport');
  const viewWidth = viewport.clientWidth;
  const viewHeight = viewport.clientHeight;
  
  const centerX = viewWidth / 2;
  const centerY = viewHeight / 2;
  
  // Calculate relative coordinate of center
  const centerRelX = (centerX - state.panX) / oldZoom;
  const centerRelY = (centerY - state.panY) / oldZoom;
  
  // Adjust pan for new zoom
  state.panX = centerX - centerRelX * state.zoom;
  state.panY = centerY - centerRelY * state.zoom;
  
  applyCanvasTransform();
}

function zoomFit() {
  state.zoom = 0.35;
  state.panX = 150;
  state.panY = 100;
  applyCanvasTransform(true);
}

function initCanvasDrag() {
  const viewport = document.getElementById('canvas-viewport');
  
  viewport.addEventListener('mousedown', (e) => {
    // Only drag if clicking on background grid, SVG, or if spacebar is held down
    const isBg = e.target.classList.contains('canvas-viewport') || 
                 e.target.classList.contains('canvas-inner') || 
                 e.target.id === 'wires-overlay';
                 
    if (isBg || e.button === 1) { // Left click background or middle mouse click
      state.isDragging = true;
      state.dragStartX = e.clientX - state.panX;
      state.dragStartY = e.clientY - state.panY;
      viewport.style.cursor = 'grabbing';
      e.preventDefault();
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.isDragging) return;
    state.panX = e.clientX - state.dragStartX;
    state.panY = e.clientY - state.dragStartY;
    applyCanvasTransform();
  });

  window.addEventListener('mouseup', () => {
    if (state.isDragging) {
      state.isDragging = false;
      viewport.style.cursor = 'grab';
    }
  });
}

function initCanvasWheel() {
  const viewport = document.getElementById('canvas-viewport');
  
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    // Zoom with Ctrl key or just normal wheel
    const delta = e.deltaY < 0 ? 0.05 : -0.05;
    zoomCanvas(delta);
  }, { passive: false });
}

// Center camera on a specific screen frame
function focusScreen(screenId, animate = true) {
  const screen = document.getElementById(screenId);
  const viewport = document.getElementById('canvas-viewport');
  if (!screen || !viewport) return;

  // Set active states in sidebars and frames
  document.querySelectorAll('.layer-item').forEach(item => {
    if (item.getAttribute('data-screen') === screenId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  document.querySelectorAll('.figma-frame').forEach(f => {
    if (f.id === screenId) {
      f.classList.add('active');
    } else {
      f.classList.remove('active');
    }
  });

  // Calculate centered coordinates
  const sWidth = screen.offsetWidth;
  const sHeight = screen.offsetHeight;
  const vWidth = viewport.clientWidth;
  const vHeight = viewport.clientHeight;

  // Standard target position
  const targetX = screen.offsetLeft;
  const targetY = screen.offsetTop;

  // Zoom into 0.65 to fit screen nicely
  state.zoom = 0.65;
  state.panX = -targetX + (vWidth - sWidth * state.zoom) / 2;
  state.panY = -targetY + (vHeight - sHeight * state.zoom) / 2;

  applyCanvasTransform(animate);
  
  // Highlight connections entering/leaving this screen
  highlightScreenWires(screenId);
}

// ==========================================================================
// FIGMA WIRE DRAWER (SVG RENDERING)
// ==========================================================================

// Helper function to find coordinates of nested elements relative to container
function getRelativeCoords(element, container) {
  let x = 0;
  let y = 0;
  let curr = element;
  while (curr && curr !== container) {
    x += curr.offsetLeft || 0;
    y += curr.offsetTop || 0;
    curr = curr.offsetParent;
  }
  return {
    x: x,
    y: y,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function drawWires() {
  const container = document.getElementById('canvas-inner');
  const overlay = document.getElementById('wires-overlay');
  
  // Clear existing paths
  const oldPaths = overlay.querySelectorAll('.wire-path, .wire-hotspot');
  oldPaths.forEach(p => p.remove());

  if (!state.showWires) return;

  // Pre-calculate incoming links per target frame to distribute vertical enter coordinates
  const incoming = {};
  connectionsData.forEach(conn => {
    if (!incoming[conn.toId]) {
      incoming[conn.toId] = [];
    }
    incoming[conn.toId].push(conn.id);
  });

  connectionsData.forEach(conn => {
    const fromEl = document.getElementById(conn.fromId);
    const toEl = document.getElementById(conn.toId);

    if (!fromEl || !toEl) return;

    // Source coords (from trigger button)
    const src = getRelativeCoords(fromEl, container);
    const x1 = src.x + src.width; // starts from the right edge
    const y1 = src.y + src.height / 2;

    // Target coords (to target screen left border)
    const dstIdx = incoming[conn.toId].indexOf(conn.id);
    const dstTotal = incoming[conn.toId].length;
    
    // Spread out endpoints along the left edge of the frame to prevent overlaps
    let offsetFraction = 0.5;
    if (dstTotal > 1) {
      offsetFraction = 0.15 + (dstIdx / (dstTotal - 1)) * 0.7; // distribute between 15% and 85% height
    }
    
    const x2 = toEl.offsetLeft;
    const y2 = toEl.offsetTop + toEl.offsetHeight * offsetFraction;

    // Bezier control point offset
    const dx = Math.abs(x2 - x1);
    const controlOffset = Math.min(300, Math.max(80, dx * 0.45));

    let pathD = '';
    
    if (x2 >= x1) {
      // Clean forward s-curve
      pathD = `M ${x1} ${y1} C ${x1 + controlOffset} ${y1}, ${x2 - controlOffset} ${y2}, ${x2} ${y2}`;
    } else {
      // Loopback curve for connections going back leftwards (e.g. Nav link Home in Screen 2)
      // Curves out to the right, loops back around, and enters left edge of target
      const loopRight = Math.max(x1 + 100, x1 + (x1 - x2) * 0.1);
      pathD = `M ${x1} ${y1} C ${loopRight} ${y1}, ${x2 - 180} ${y2}, ${x2} ${y2}`;
    }

    // Create main line path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathD);
    path.setAttribute('class', `wire-path ${state.selectedWireId === conn.id ? 'active' : ''} glowing`);
    path.setAttribute('id', `wire-${conn.id}`);
    path.setAttribute('marker-end', state.selectedWireId === conn.id ? 'url(#arrow-selected)' : 'url(#arrow)');
    
    // Low opacity by default unless active/highlighted
    path.style.opacity = state.selectedWireId === conn.id ? '1' : '0.25';
    
    // Hover interactions
    path.addEventListener('mouseenter', () => {
      if (state.selectedWireId !== conn.id) {
        path.style.opacity = '0.9';
        path.style.strokeWidth = '3px';
      }
    });

    path.addEventListener('mouseleave', () => {
      if (state.selectedWireId !== conn.id) {
        path.style.opacity = '0.25';
        path.style.strokeWidth = '2.5px';
      }
    });

    path.addEventListener('click', (e) => {
      e.stopPropagation();
      selectWire(conn.id);
    });

    // Create a clickable hotspot circle at the start node (exactly like Figma)
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', x1);
    dot.setAttribute('cy', y1);
    dot.setAttribute('r', 5);
    dot.setAttribute('class', 'wire-hotspot');
    
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      selectWire(conn.id);
      // Double click or click dot centers camera on target frame
      focusScreen(conn.toId);
    });

    overlay.appendChild(path);
    overlay.appendChild(dot);
  });
}

function selectWire(wireId) {
  state.selectedWireId = wireId;
  
  // Highlight in sidebar
  document.querySelectorAll('.conn-item').forEach(item => {
    if (item.getAttribute('data-wire') === wireId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Re-draw SVG layers to apply stroke color and marker ends
  drawWires();

  // Show Inspector Panel
  const conn = connectionsData.find(c => c.id === wireId);
  if (conn) {
    const emptyEl = document.getElementById('inspector-empty');
    const selectedEl = document.getElementById('inspector-selected');
    const sourceEl = document.getElementById('ins-source-id');
    const targetEl = document.getElementById('ins-target-name');

    if (emptyEl) emptyEl.style.display = 'none';
    if (selectedEl) selectedEl.style.display = 'block';
    if (sourceEl) sourceEl.innerText = conn.fromId;
    
    const targetFrame = document.getElementById(conn.toId);
    if (targetFrame) {
      const frameNameEl = targetFrame.querySelector('.frame-name');
      if (targetEl && frameNameEl) {
        targetEl.innerText = frameNameEl.innerText;
      }
    }
  }
}

function highlightScreenWires(screenId) {
  // Reset all wire opacities
  document.querySelectorAll('.wire-path').forEach(p => {
    const wireId = p.id.replace('wire-', '');
    const conn = connectionsData.find(c => c.id === wireId);
    if (conn && (conn.toId === screenId || conn.fromId.startsWith(screenId.replace('screen-', 's')))) {
      p.style.opacity = '0.85';
      p.style.strokeWidth = '3px';
    } else if (wireId !== state.selectedWireId) {
      p.style.opacity = '0.15';
      p.style.strokeWidth = '2px';
    }
  });
}

// Sidebar list initialization
function initSidebarList() {
  const list = document.getElementById('sidebar-connections-list');
  if (!list) return;
  list.innerHTML = '';
  
  connectionsData.forEach(conn => {
    const li = document.createElement('li');
    li.className = 'conn-item';
    li.setAttribute('data-wire', conn.id);
    
    // Get clean names
    const sourceScreenPrefix = conn.fromId.split('-')[0].replace('s', 'Screen ');
    const label = `${sourceScreenPrefix} ➔ ${conn.label}`;
    
    li.innerHTML = `
      <span class="layer-icon">⚡</span>
      <span class="layer-name" style="font-size: 11px;">${label}</span>
    `;
    
    li.addEventListener('click', () => {
      selectWire(conn.id);
      // Pan camera to trigger element
      const triggerEl = document.getElementById(conn.fromId);
      if (triggerEl) {
        const frameId = conn.fromId.startsWith('s9-') ? 'screen-cv' : `screen-${conn.fromId.split('-')[0].replace('s', 'screen').replace(/[0-9]/, (m) => {
          const names = ['home', 'explore', 'skills', 'tools', 'projects', 'project-detail-1', 'project-detail-2', 'contact', 'cv'];
          return names[parseInt(m) - 1];
        })}`;
        focusScreen(conn.toId);
      }
    });
    
    list.appendChild(li);
  });
}

// Toggle controls from topbar
function toggleWires(visible) {
  state.showWires = visible;
  drawWires();
}

function toggleHotspots(visible) {
  state.showHotspots = visible;
  if (visible) {
    document.body.classList.add('show-hotspots-active');
  } else {
    document.body.classList.remove('show-hotspots-active');
  }
}
// Initial activate hotspots layout
document.body.classList.add('show-hotspots-active');

// Trigger from inspector button to run the flow
function playSelectedFlow() {
  if (state.selectedWireId) {
    const conn = connectionsData.find(c => c.id === state.selectedWireId);
    if (conn) {
      setMode('play');
      navigateToScreen(conn.toId);
    }
  }
}

// ==========================================================================
// MODE SWITCHER (CANVAS vs PRESENTATION)
// ==========================================================================

function setMode(mode) {
  state.mode = mode;
  
  const btnCanvas = document.getElementById('btn-canvas-mode');
  const btnPlay = document.getElementById('btn-play-mode');
  const workspaceCanvas = document.getElementById('workspace-canvas');
  const workspacePresentation = document.getElementById('workspace-presentation');
  const workspaceWebsite = document.getElementById('workspace-website');

  // Remove all mode classes from body
  document.body.classList.remove('website-mode', 'editor-mode', 'play-mode', 'export-canvas-mode');

  if (mode === 'export') {
    document.body.classList.add('export-canvas-mode');
    if (workspaceCanvas) workspaceCanvas.style.display = 'block';
    if (workspacePresentation) workspacePresentation.style.display = 'none';
    if (workspaceWebsite) workspaceWebsite.style.display = 'none';
  } else if (mode === 'website') {
    document.body.classList.add('website-mode');
    if (workspaceCanvas) workspaceCanvas.style.display = 'none';
    if (workspacePresentation) workspacePresentation.style.display = 'none';
    if (workspaceWebsite) workspaceWebsite.style.display = 'block';
    
    // Render current active screen in website view
    navigateToScreen(state.activeScreenId, false);
  } else if (mode === 'canvas') {
    document.body.classList.add('editor-mode');
    if (btnCanvas) btnCanvas.classList.add('active');
    if (btnPlay) btnPlay.classList.remove('active');
    if (workspaceCanvas) workspaceCanvas.style.display = 'flex';
    if (workspacePresentation) workspacePresentation.style.display = 'none';
    if (workspaceWebsite) workspaceWebsite.style.display = 'none';
    
    // Redraw paths to ensure coordinates are updated
    setTimeout(drawWires, 50);
  } else {
    document.body.classList.add('play-mode');
    if (btnCanvas) btnCanvas.classList.remove('active');
    if (btnPlay) btnPlay.classList.add('active');
    if (workspaceCanvas) workspaceCanvas.style.display = 'none';
    if (workspacePresentation) workspacePresentation.style.display = 'flex';
    if (workspaceWebsite) workspaceWebsite.style.display = 'none';
    
    // Initialize active screen in presentation viewport
    restartPresentation();
  }
}

// ==========================================================================
// PRESENTATION MODE (PLAYBACK CONTROL)
// ==========================================================================

// Change Active Device Frame Type
function setDeviceFrame(type) {
  state.deviceType = type;
  const frame = document.getElementById('device-wrapper');
  const btnDesktop = document.getElementById('btn-device-desktop');
  const btnMobile = document.getElementById('btn-device-mobile');
  
  if (frame) {
    if (type === 'desktop') {
      frame.className = 'device-frame desktop-device';
    } else {
      frame.className = 'device-frame mobile-device';
    }
  }
  if (btnDesktop) {
    if (type === 'desktop') btnDesktop.classList.add('active');
    else btnDesktop.classList.remove('active');
  }
  if (btnMobile) {
    if (type === 'mobile') btnMobile.classList.add('active');
    else btnMobile.classList.remove('active');
  }
}

function restartPresentation() {
  state.history = [];
  navigateToScreen('screen-home', false);
}

function navigateToScreen(screenId, animate = true) {
  let container;
  if (state.mode === 'website') {
    container = document.getElementById('workspace-website');
  } else {
    container = document.getElementById('device-viewport-container');
  }
  if (!container) return;

  const sourceScreen = document.getElementById(screenId);
  if (!sourceScreen) return;

  // Push to navigation history unless it's a reload/restart
  if (state.activeScreenId !== screenId && state.history[state.history.length - 1] !== state.activeScreenId) {
    state.history.push(state.activeScreenId);
  }
  
  state.activeScreenId = screenId;

  // Clone node structure
  const clonedContent = sourceScreen.querySelector('.screen-content').cloneNode(true);
  
  // Make a wrapper slide
  const slide = document.createElement('div');
  slide.className = 'play-screen active';
  slide.appendChild(clonedContent);

  // Clear previous slides
  const oldSlides = container.querySelectorAll('.play-screen');
  
  if (animate && oldSlides.length > 0) {
    // Elegant fade/slide navigation transition
    slide.style.opacity = '0';
    slide.style.transform = 'scale(0.97)';
    container.appendChild(slide);
    
    // Trigger transition reflow
    slide.offsetHeight;
    
    slide.style.opacity = '1';
    slide.style.transform = 'scale(1)';
    
    oldSlides.forEach(os => {
      os.style.opacity = '0';
      os.style.transform = 'scale(1.02)';
      os.style.pointerEvents = 'none';
      setTimeout(() => os.remove(), 400);
    });
  } else {
    container.innerHTML = '';
    container.appendChild(slide);
  }

  // Auto-scroll viewport content back to top
  const innerContent = slide.querySelector('.screen-content');
  if (innerContent) {
    innerContent.scrollTop = 0;
  }
}

function handlePresentationClick(e) {
  // Check if click hits a hotspot
  const hotspot = e.target.closest('.prototype-hotspot');
  
  if (hotspot) {
    if (hotspot.id === 's8-btn-submit') {
      triggerSubmitSim(e);
    }
    // For other hotspots, the browser's native anchor tag handling (href="#...")
    // will change the URL hash, which triggers the 'hashchange' listener to navigate.
    // So we don't need to call navigateToScreen programmatically here.
  } else {
    // Clicked outside a hotspot, flash all blue overlays
    flashHotspots();
  }
}

function flashHotspots() {
  if (!state.showHotspots) return;
  
  const container = document.getElementById('device-viewport-container');
  const hotspots = container.querySelectorAll('.prototype-hotspot');
  
  hotspots.forEach(hotspot => {
    const rect = hotspot.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();
    
    const flash = document.createElement('div');
    flash.className = 'hotspot-flash animate';
    
    // Calculate layout position including scrolls
    flash.style.left = (rect.left - parentRect.left + container.scrollLeft) + 'px';
    flash.style.top = (rect.top - parentRect.top + container.scrollTop) + 'px';
    flash.style.width = rect.width + 'px';
    flash.style.height = rect.height + 'px';
    
    container.appendChild(flash);
    setTimeout(() => flash.remove(), 400);
  });
}

// Simulation function for Contact Message Form Submission
function triggerSubmitSim(event) {
  if (event) event.preventDefault();
  const toast = document.getElementById('submit-toast');
  if (toast) toast.classList.add('show');
  
  setTimeout(() => {
    if (toast) toast.classList.remove('show');
    window.location.hash = '#screen-home';
  }, 3000);
}
