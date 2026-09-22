/* ==========================================================================
   QueryCraft — Interview Preparation Page UI (Phase 5)
   Two tabbed sections: conceptual Q&A (Beginner/Intermediate/Advanced/
   Scenario) and coding interview questions (Easy/Medium/Advanced), each
   built entirely from js/interview-data.js.
   ========================================================================== */

(function () {
  'use strict';

  let activeConceptCat = 'Beginner';
  let activeCodingDiff = 'Easy';

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

  // ---- Concept Q&A section ----

  function renderConceptCard(q, index) {
    return `
      <div class="interview-qa-card" data-id="${q.id}">
        <button class="interview-qa-toggle">
          <span class="interview-qa-num">${index + 1}</span>
          <span class="interview-qa-question">${escapeHtml(q.question)}</span>
          <span class="interview-qa-chevron">▾</span>
        </button>
        <div class="interview-qa-body" style="display:none;">
          <p class="interview-qa-short"><strong>Short answer:</strong> ${escapeHtml(q.shortAnswer)}</p>
          <p class="interview-qa-detail">${escapeHtml(q.detailedExplanation)}</p>
          <pre class="sql-block"><code>${escapeHtml(q.example)}</code></pre>
          <div class="interview-tip"><strong>💡 Interview Tip:</strong> ${escapeHtml(q.interviewTip)}</div>
        </div>
      </div>`;
  }

  function renderConceptCategory(container) {
    const questions = QC_INTERVIEW_CONCEPTS.filter((q) => q.category === activeConceptCat);
    container.innerHTML = questions.map(renderConceptCard).join('');
    container.querySelectorAll('.interview-qa-card').forEach((card) => {
      const toggle = card.querySelector('.interview-qa-toggle');
      const body = card.querySelector('.interview-qa-body');
      const chevron = card.querySelector('.interview-qa-chevron');
      toggle.addEventListener('click', function () {
        const isOpen = body.style.display !== 'none';
        body.style.display = isOpen ? 'none' : 'block';
        chevron.textContent = isOpen ? '▾' : '▴';
        card.classList.toggle('is-open', !isOpen);
      });
    });
  }

  // ---- Coding questions section ----

  function renderCodingCard(q, index) {
    return `
      <div class="practice-card" data-id="${q.id}">
        <div class="practice-card-head">
          <span class="badge ${q.difficulty === 'Easy' ? 'badge-green' : q.difficulty === 'Medium' ? 'badge-cyan' : 'badge-red'}">${escapeHtml(q.difficulty)}</span>
          <span class="practice-db-label">Dataset: ${escapeHtml(q.database)}</span>
        </div>
        <p class="practice-question-text">${index + 1}. ${escapeHtml(q.question)}</p>
        <div class="practice-actions">
          <button class="btn btn-ghost btn-sm cq-solution-btn">Show Solution</button>
        </div>
        <div class="cq-solution" style="display:none;"></div>
      </div>`;
  }

  function renderCodingDifficulty(container) {
    const questions = QC_INTERVIEW_CODING.filter((q) => q.difficulty === activeCodingDiff);
    container.innerHTML = questions.map(renderCodingCard).join('');
    container.querySelectorAll('.practice-card').forEach((card, i) => {
      const q = questions[i];
      const btn = card.querySelector('.cq-solution-btn');
      const box = card.querySelector('.cq-solution');
      btn.addEventListener('click', function () {
        const isOpen = box.style.display !== 'none';
        box.style.display = isOpen ? 'none' : 'block';
        btn.textContent = isOpen ? 'Show Solution' : 'Hide Solution';
        if (!isOpen && !box.dataset.built) {
          box.dataset.built = 'true';
          const db = JSON.parse(JSON.stringify(QC_SAMPLE_DBS[q.database]));
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

  function init() {
    const root = document.getElementById('interview-app');
    if (!root || typeof QC_INTERVIEW_CONCEPTS === 'undefined' || typeof QC_INTERVIEW_CODING === 'undefined') return;

    const conceptCats = ['Beginner', 'Intermediate', 'Advanced', 'Scenario'];
    const conceptLabels = { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Advanced', Scenario: 'Industry Scenarios' };
    const conceptCounts = {};
    conceptCats.forEach((c) => { conceptCounts[c] = QC_INTERVIEW_CONCEPTS.filter((q) => q.category === c).length; });

    const codingDiffs = ['Easy', 'Medium', 'Advanced'];
    const codingCounts = {};
    codingDiffs.forEach((d) => { codingCounts[d] = QC_INTERVIEW_CODING.filter((q) => q.difficulty === d).length; });

    root.innerHTML = `
      <div class="section-head" style="margin-bottom:var(--sp-5);">
        <span class="eyebrow">Concepts</span>
        <h2 style="font-size:var(--fs-xl);">Conceptual Interview Questions</h2>
      </div>
      <div class="practice-tabs">
        ${conceptCats.map((c) => `<button class="practice-tab ${c === activeConceptCat ? 'is-active' : ''}" data-concept-cat="${c}" aria-pressed="${c === activeConceptCat}">${conceptLabels[c]} <span class="practice-tab-count">${conceptCounts[c]}</span></button>`).join('')}
      </div>
      <div id="interview-concept-list" class="interview-qa-list"></div>

      <div class="section-head" style="margin-top:var(--sp-8);margin-bottom:var(--sp-5);">
        <span class="eyebrow">Coding Round</span>
        <h2 style="font-size:var(--fs-xl);">SQL Coding Interview Questions</h2>
      </div>
      <div class="practice-tabs">
        ${codingDiffs.map((d) => `<button class="practice-tab ${d === activeCodingDiff ? 'is-active' : ''}" data-coding-diff="${d}" aria-pressed="${d === activeCodingDiff}">${d} <span class="practice-tab-count">${codingCounts[d]}</span></button>`).join('')}
      </div>
      <div id="interview-coding-list" class="practice-list-container"></div>`;

    const conceptList = document.getElementById('interview-concept-list');
    const codingList = document.getElementById('interview-coding-list');

    renderConceptCategory(conceptList);
    renderCodingDifficulty(codingList);

    root.querySelectorAll('[data-concept-cat]').forEach((tab) => {
      tab.addEventListener('click', function () {
        activeConceptCat = tab.getAttribute('data-concept-cat');
        root.querySelectorAll('[data-concept-cat]').forEach((t) => { t.classList.remove('is-active'); t.setAttribute('aria-pressed', 'false'); });
        tab.classList.add('is-active');
        tab.setAttribute('aria-pressed', 'true');
        renderConceptCategory(conceptList);
      });
    });

    root.querySelectorAll('[data-coding-diff]').forEach((tab) => {
      tab.addEventListener('click', function () {
        activeCodingDiff = tab.getAttribute('data-coding-diff');
        root.querySelectorAll('[data-coding-diff]').forEach((t) => { t.classList.remove('is-active'); t.setAttribute('aria-pressed', 'false'); });
        tab.classList.add('is-active');
        tab.setAttribute('aria-pressed', 'true');
        renderCodingDifficulty(codingList);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
