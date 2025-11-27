document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('projects-grid');
  fetch('projects.json')
    .then(r=>r.json())
    .then(renderProjects)
    .catch(err=>{
      console.error('projects load error', err);
      grid.innerHTML = '<p style="color:#f88">프로젝트를 불러오지 못했습니다.</p>';
    });

  function renderProjects(list){
    if(!Array.isArray(list) || list.length===0){
      grid.innerHTML = '<p>등록된 프로젝트가 없습니다.</p>';
      return;
    }
    grid.innerHTML = '';
    list.forEach(p=>{
      const el = document.createElement('article');
      el.className = 'project';
      el.innerHTML = `
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
        <h4>${escapeHtml(p.title)}</h4>
        <p>${escapeHtml(p.summary)}</p>
        <div class="tags">${(p.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
        <div style="margin-top:8px"><a class="btn" href="${escapeHtml(p.link)}" target="_blank">자세히 보기</a></div>
      `;
      grid.appendChild(el);
    });
  }

  function escapeHtml(s){
    if(!s) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
});
