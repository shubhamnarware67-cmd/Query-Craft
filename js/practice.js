/* ==========================================================================
   QueryCraft — Practice Page UI (Phase 4)
   Renders practice questions grouped by category, with an inline "Try
   Yourself" mini SQL editor (using the same simulator engine) and a
   reveal-based Hint / Show Solution flow.
   ========================================================================== */

(function () {
  'use strict';

  let activeCategory = 'Beginner';

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
  }

  function renderResultTable(execResult) {
    if (execResult.type !== 'select') {
      const label = execResult.type === 'insert' ? '1 row inserted' :
        `${execResult.result.affectedRows} row(s) affected`;
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

  function renderQuestionCard(q, index) {
    const cardId = 'pq-' + q.id;
    return `
      <div class="practice-card" data-id="${q.id}">
        <div class="practice-card-head">
          <span class="badge ${q.difficulty === 'Easy' ? 'badge-green' : q.difficulty === 'Medium' ? 'badge-cyan' : 'badge-red'}">${escapeHtml(q.difficulty)}</span>
          <span class="practice-db-label">Dataset: ${escapeHtml(q.database)}</span>
        </div>
        <p class="practice-question-text">${index + 1}. ${escapeHtml(q.question)}</p>

        <div class="practice-actions">
          <button class="btn btn-ghost btn-sm pq-hint-btn">Show Hint</button>
          <button class="btn btn-ghost btn-sm pq-try-btn">Try Yourself</button>
          <button class="btn btn-ghost btn-sm pq-solution-btn">Show Solution</button>
        </div>

        <div class="pq-hint" style="display:none;"></div>
        <div class="pq-try" style="display:none;"></div>
        <div class="pq-solution" style="display:none;"></div>
      </div>`;
  }

  function wireQuestionCard(card, q) {
    const hintBtn = card.querySelector('.pq-hint-btn');
    const tryBtn = card.querySelector('.pq-try-btn');
    const solutionBtn = card.querySelector('.pq-solution-btn');
    const hintBox = card.querySelector('.pq-hint');
    const tryBox = card.querySelector('.pq-try');
    const solutionBox = card.querySelector('.pq-solution');

    hintBtn.addEventListener('click', function () {
      const isOpen = hintBox.style.display !== 'none';
      hintBox.style.display = isOpen ? 'none' : 'block';
      hintBtn.textContent = isOpen ? 'Show Hint' : 'Hide Hint';
      if (!isOpen) hintBox.innerHTML = `<p class="pq-hint-text">💡 ${escapeHtml(q.hint)}</p>`;
    });

    tryBtn.addEventListener('click', function () {
      const isOpen = tryBox.style.display !== 'none';
      tryBox.style.display = isOpen ? 'none' : 'block';
      tryBtn.textContent = isOpen ? 'Try Yourself' : 'Hide Editor';
      if (!isOpen && !tryBox.dataset.built) {
        tryBox.dataset.built = 'true';
        tryBox.innerHTML = `
          <textarea class="pq-editor" spellcheck="false" placeholder="Write your query here...">SELECT </textarea>
          <div class="pq-editor-actions">
            <button class="btn btn-primary btn-sm pq-run-btn">▶ Run</button>
          </div>
          <div class="pq-try-result"></div>`;

        const editor = tryBox.querySelector('.pq-editor');
        const runBtn = tryBox.querySelector('.pq-run-btn');
        const resultBox = tryBox.querySelector('.pq-try-result');

        runBtn.addEventListener('click', function () {
          const db = JSON.parse(JSON.stringify(QC_SAMPLE_DBS[q.database]));
          try {
            const execResult = QC_SQL_ENGINE.run(editor.value, db);
            resultBox.innerHTML = renderResultTable(execResult);
          } catch (e) {
            resultBox.innerHTML = `<div class="pg-error"><strong>Error:</strong> ${escapeHtml(e.message)}</div>`;
          }
        });
      }
    });

    solutionBtn.addEventListener('click', function () {
      const isOpen = solutionBox.style.display !== 'none';
      solutionBox.style.display = isOpen ? 'none' : 'block';
      solutionBtn.textContent = isOpen ? 'Show Solution' : 'Hide Solution';
      if (!isOpen && !solutionBox.dataset.built) {
        solutionBox.dataset.built = 'true';
        const db = JSON.parse(JSON.stringify(QC_SAMPLE_DBS[q.database]));
        let resultHtml = '';
        try {
          const execResult = QC_SQL_ENGINE.run(q.solutionSql, db);
          resultHtml = renderResultTable(execResult);
        } catch (e) {
          resultHtml = `<div class="pg-error">${escapeHtml(e.message)}</div>`;
        }
        solutionBox.innerHTML = `
          <pre class="sql-block"><code>${escapeHtml(q.solutionSql)}</code></pre>
          ${resultHtml}
          <p class="pq-explanation">${escapeHtml(q.explanation)}</p>`;
      }
    });
  }

  function renderCategory(container, category) {
    const questions = QC_PRACTICE.filter((q) => q.category === category);
    container.innerHTML = questions.map(renderQuestionCard).join('');
    container.querySelectorAll('.practice-card').forEach((card, i) => {
      const q = questions[i];
      wireQuestionCard(card, q);
    });
  }

  function init() {
    const root = document.getElementById('practice-app');
    if (!root || typeof QC_PRACTICE === 'undefined' || typeof QC_SAMPLE_DBS === 'undefined') return;

    const categories = ['Beginner', 'Intermediate', 'Advanced', 'Industry'];
    const counts = {};
    categories.forEach((c) => { counts[c] = QC_PRACTICE.filter((q) => q.category === c).length; });

    root.innerHTML = `
      <div class="practice-tabs">
        ${categories.map((c) => `<button class="practice-tab ${c === activeCategory ? 'is-active' : ''}" data-category="${c}" aria-pressed="${c === activeCategory}">${c} <span class="practice-tab-count">${counts[c]}</span></button>`).join('')}
      </div>
      <div id="practice-list" class="practice-list-container"></div>`;

    const listContainer = document.getElementById('practice-list');
    renderCategory(listContainer, activeCategory);

    root.querySelectorAll('.practice-tab').forEach((tab) => {
      tab.addEventListener('click', function () {
        activeCategory = tab.getAttribute('data-category');
        root.querySelectorAll('.practice-tab').forEach((t) => { t.classList.remove('is-active'); t.setAttribute('aria-pressed', 'false'); });
        tab.classList.add('is-active');
        tab.setAttribute('aria-pressed', 'true');
        renderCategory(listContainer, activeCategory);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
