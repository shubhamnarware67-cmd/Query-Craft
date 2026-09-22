/* ==========================================================================
   QueryCraft — Projects Page UI (Phase 6)
   Renders 5 project cards (schema + design notes + runnable queries) and
   the final capstone section, all built from js/projects-data.js.
   ========================================================================== */

(function () {
  'use strict';

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
  }

  function renderResultTable(execResult) {
    if (execResult.type !== 'select') {
      const label = execResult.type === 'insert' ? '1 row inserted' : `${execResult.result.affectedRows} row(s) affected`;
      return `<div class="pg-success">✓ ${label}</div>`;
    }
    const { columns, rows } = execResult.result;
    if (!rows.length) return '<div class="pg-empty-result">Query ran successfully — 0 rows returned.</div>';
    let html = '<div class="pg-table-scroll"><table class="pg-result-table"><thead><tr>';
    columns.forEach((c) => { html += `<th>${escapeHtml(c)}</th>`; });
    html += '</tr></thead><tbody>';
    rows.forEach((row) => {
      html += '<tr>';
      columns.forEach((c) => {
        const val = row[c];
        html += `<td>${val === null || val === undefined ? '<span class="pg-null">NULL</span>' : escapeHtml(val)}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    return html;
  }

  function renderProjectCard(project) {
    const queryItemsHtml = project.queries.map((q, i) => `
      <div class="proj-query-item" data-idx="${i}">
        <p class="proj-query-question">${i + 1}. ${escapeHtml(q.question)}</p>
        <button class="btn btn-ghost btn-sm proj-query-btn">Show Query &amp; Result</button>
        <div class="proj-query-answer" style="display:none;"></div>
      </div>`).join('');

    const notesHtml = project.designNotes.map((n) => `<li>${escapeHtml(n)}</li>`).join('');

    return `
      <div class="project-card" data-project-id="${project.id}">
        <div class="project-card-header">
          <div>
            <h3 class="project-title">${escapeHtml(project.title)}</h3>
            <p class="project-tagline">${escapeHtml(project.tagline)}</p>
          </div>
          <span class="badge badge-cyan">${project.tables.length} tables</span>
        </div>

        <details class="project-schema-details">
          <summary>View Schema (CREATE TABLE)</summary>
          <pre class="sql-block"><code>${escapeHtml(project.schema)}</code></pre>
          <ul class="important-points">${notesHtml}</ul>
        </details>

        <div class="proj-queries">
          <h4 class="proj-queries-title">Analytical Queries</h4>
          ${queryItemsHtml}
        </div>
      </div>`;
  }

  function wireProjectCard(card, project) {
    card.querySelectorAll('.proj-query-item').forEach((item) => {
      const idx = parseInt(item.getAttribute('data-idx'), 10);
      const q = project.queries[idx];
      const btn = item.querySelector('.proj-query-btn');
      const box = item.querySelector('.proj-query-answer');

      btn.addEventListener('click', function () {
        const isOpen = box.style.display !== 'none';
        box.style.display = isOpen ? 'none' : 'block';
        btn.textContent = isOpen ? 'Show Query & Result' : 'Hide Query & Result';
        if (!isOpen && !box.dataset.built) {
          box.dataset.built = 'true';
          const db = JSON.parse(JSON.stringify(QC_SAMPLE_DBS[project.database]));
          let resultHtml = '';
          try {
            const execResult = QC_SQL_ENGINE.run(q.solutionSql, db);
            resultHtml = renderResultTable(execResult);
          } catch (e) {
            resultHtml = `<div class="pg-error">${escapeHtml(e.message)}</div>`;
          }
          box.innerHTML = `
            <pre class="sql-block"><code>${escapeHtml(q.solutionSql)}</code></pre>
            ${resultHtml}
            <p class="pq-explanation">${escapeHtml(q.explanation)}</p>`;
        }
      });
    });
  }

  function renderCapstone(container) {
    const reqHtml = QC_CAPSTONE.requirements.map((r) => `<li>${escapeHtml(r)}</li>`).join('');
    const refQueriesHtml = QC_CAPSTONE.referenceQueries.map((q) => `
      <div class="capstone-ref-query">
        <h5>${escapeHtml(q.label)}</h5>
        <pre class="sql-block"><code>${escapeHtml(q.sql)}</code></pre>
        <p class="pq-explanation">${escapeHtml(q.explanation)}</p>
      </div>`).join('');

    container.innerHTML = `
      <div class="card card-glass" style="margin-bottom:var(--sp-6);">
        <p style="color:var(--text-muted);">${escapeHtml(QC_CAPSTONE.intro)}</p>
      </div>

      <div class="card" style="margin-bottom:var(--sp-6);">
        <h3 style="font-size:var(--fs-md);margin-bottom:var(--sp-4);">Requirements Checklist</h3>
        <ul class="important-points">${reqHtml}</ul>
      </div>

      <details class="project-schema-details" style="margin-bottom:var(--sp-6);">
        <summary>View Reference Schema</summary>
        <pre class="sql-block"><code>${escapeHtml(QC_CAPSTONE.referenceSchema)}</code></pre>
      </details>

      <div class="capstone-ref-queries">
        <h3 style="font-size:var(--fs-md);margin-bottom:var(--sp-4);">Reference Queries</h3>
        ${refQueriesHtml}
      </div>`;
  }

  function init() {
    const projectsRoot = document.getElementById('projects-app');
    const capstoneRoot = document.getElementById('capstone-app');
    if (typeof QC_PROJECTS === 'undefined' || typeof QC_CAPSTONE === 'undefined') return;

    if (projectsRoot) {
      projectsRoot.innerHTML = QC_PROJECTS.map(renderProjectCard).join('');
      projectsRoot.querySelectorAll('.project-card').forEach((card) => {
        const id = card.getAttribute('data-project-id');
        const project = QC_PROJECTS.find((p) => p.id === id);
        wireProjectCard(card, project);
      });
    }

    if (capstoneRoot) {
      renderCapstone(capstoneRoot);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
