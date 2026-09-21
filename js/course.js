/* ==========================================================================
   QueryCraft — Course Rendering Engine (Phase 2)
   Renders levels, chapter lists, and full chapter detail pages dynamically
   from QC_DATA (js/data.js). No chapter content is hard-coded in HTML.
   ========================================================================== */

(function () {
  'use strict';

  const LEVEL_BADGE_CLASS = {
    Easy: 'badge-green',
    Medium: 'badge-orange',
    Hard: 'badge-red',
  };

  function qcGetProgress() {
    try {
      const raw = localStorage.getItem('qc_progress');
      return raw ? JSON.parse(raw) : { completedChapters: [], quizScores: {}, currentChapter: 1, xp: 0, badges: [], streak: 0 };
    } catch (e) {
      return { completedChapters: [], quizScores: {}, currentChapter: 1, xp: 0, badges: [], streak: 0 };
    }
  }

  function qcSaveProgress(progress) {
    try {
      localStorage.setItem('qc_progress', JSON.stringify(progress));
    } catch (e) { /* localStorage unavailable — fail silently */ }
  }

  function qcUpdateStreak(progress) {
    const today = new Date().toISOString().slice(0, 10);
    const last = progress.lastActiveDate;
    if (last === today) return progress; // already counted today
    if (last) {
      const lastDate = new Date(last);
      const diffDays = Math.round((new Date(today) - lastDate) / 86400000);
      progress.streak = diffDays === 1 ? (progress.streak || 0) + 1 : 1;
    } else {
      progress.streak = 1;
    }
    progress.lastActiveDate = today;
    return progress;
  }

  const BADGE_DEFS = [
    { id: 'first_chapter', label: 'First Steps', desc: 'Completed your first chapter', check: (p) => p.completedChapters.length >= 1 },
    { id: 'foundation_complete', label: 'Foundation Graduate', desc: 'Completed all of Level 1', check: (p) => [1,2,3,4,5,6,7,8,9,10,11,12].every((id) => p.completedChapters.includes(id)) },
    { id: 'ten_chapters', label: 'Momentum Builder', desc: 'Completed 10 chapters', check: (p) => p.completedChapters.length >= 10 },
    { id: 'fifty_chapters', label: 'Halfway Hero', desc: 'Completed 50 chapters', check: (p) => p.completedChapters.length >= 50 },
    { id: 'all_chapters', label: 'QueryCraft Master', desc: 'Completed all 122 chapters', check: (p) => p.completedChapters.length >= 122 },
    { id: 'quiz_ace', label: 'Quiz Ace', desc: 'Scored 100% on any chapter quiz', check: (p) => Object.values(p.quizScores || {}).some((s) => s === 100) },
    { id: 'streak_3', label: '3-Day Streak', desc: 'Studied 3 days in a row', check: (p) => (p.streak || 0) >= 3 },
    { id: 'streak_7', label: '7-Day Streak', desc: 'Studied 7 days in a row', check: (p) => (p.streak || 0) >= 7 },
  ];

  function qcRefreshBadges(progress) {
    progress.badges = progress.badges || [];
    BADGE_DEFS.forEach(function (b) {
      if (b.check(progress) && progress.badges.indexOf(b.id) === -1) {
        progress.badges.push(b.id);
      }
    });
    return progress;
  }

  function isChapterUnlocked(chapterId, progress) {
    if (chapterId === 1) return true;
    return progress.completedChapters.indexOf(chapterId - 1) !== -1;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderSqlBlock(sql) {
    return `<pre class="sql-block"><code>${escapeHtml(sql)}</code></pre>`;
  }

  function renderLevelOverview(container) {
    const progress = qcGetProgress();
    const levels = QC_DATA.levels;
    const chapters = QC_DATA.chapters;

    let html = '<div class="level-grid">';
    levels.forEach(function (level) {
      const levelChapters = chapters.filter(function (c) {
        return c.id >= level.range[0] && c.id <= level.range[1];
      });
      const completedCount = levelChapters.filter(function (c) {
        return progress.completedChapters.indexOf(c.id) !== -1;
      }).length;
      const total = levelChapters.length;
      const pct = total ? Math.round((completedCount / total) * 100) : 0;

      html += `
        <a class="card level-card" href="#" data-level-id="${level.id}">
          <div class="level-card-top">
            <span class="badge badge-cyan">Level ${level.id}</span>
            <span class="level-progress-pct">${pct}%</span>
          </div>
          <h3 class="level-card-title">${escapeHtml(level.name)}</h3>
          <p class="level-card-meta">${total} chapters</p>
          <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        </a>`;
    });
    html += '</div>';
    container.innerHTML = html;

    container.querySelectorAll('.level-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        e.preventDefault();
        const levelId = parseInt(card.getAttribute('data-level-id'), 10);
        renderChapterList(container, levelId);
        window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
      });
    });
  }

  function renderChapterList(container, levelId) {
    const progress = qcGetProgress();
    const level = QC_DATA.levels.find(function (l) { return l.id === levelId; });
    const levelChapters = QC_DATA.chapters.filter(function (c) {
      return c.id >= level.range[0] && c.id <= level.range[1];
    });

    let html = `
      <button class="btn btn-ghost btn-sm back-to-levels" style="margin-bottom:var(--sp-5);">&larr; All Levels</button>
      <div class="section-head" style="margin-bottom:var(--sp-6);">
        <span class="eyebrow">Level ${level.id}</span>
        <h2>${escapeHtml(level.name)}</h2>
      </div>
      <div class="chapter-list">`;

    levelChapters.forEach(function (c) {
      const unlocked = isChapterUnlocked(c.id, progress);
      const completed = progress.completedChapters.indexOf(c.id) !== -1;
      const diffClass = LEVEL_BADGE_CLASS[c.difficulty] || 'badge-cyan';

      html += `
        <div class="chapter-row ${unlocked ? '' : 'is-locked'}" data-chapter-id="${c.id}">
          <div class="chapter-row-left">
            <span class="chapter-num">${c.id}</span>
            <div>
              <h4 class="chapter-row-title">${escapeHtml(c.title)}</h4>
              <div class="chapter-row-meta">
                <span class="badge ${diffClass}">${c.difficulty}</span>
                <span class="chapter-row-time">${c.estMinutes} min</span>
              </div>
            </div>
          </div>
          <div class="chapter-row-right">
            ${completed ? '<span class="badge badge-green">✓ Done</span>' : ''}
            ${unlocked
              ? '<button class="btn btn-primary btn-sm open-chapter">Open</button>'
              : '<span class="badge" style="color:var(--text-faint);border-color:var(--border);">🔒 Locked</span>'}
          </div>
        </div>`;
    });

    html += '</div>';
    container.innerHTML = html;

    container.querySelector('.back-to-levels').addEventListener('click', function () {
      renderLevelOverview(container);
    });

    container.querySelectorAll('.chapter-row:not(.is-locked) .open-chapter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const row = btn.closest('.chapter-row');
        const chapterId = parseInt(row.getAttribute('data-chapter-id'), 10);
        renderChapterDetail(container, chapterId);
        window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
      });
    });
  }

  function renderChapterDetail(container, chapterId) {
    const chapter = QC_DATA.chapters.find(function (c) { return c.id === chapterId; });
    if (!chapter) return;
    const progress = qcGetProgress();
    const completed = progress.completedChapters.indexOf(chapter.id) !== -1;
    const diffClass = LEVEL_BADGE_CLASS[chapter.difficulty] || 'badge-cyan';

    let examplesHtml = chapter.examples.map(function (ex) {
      return `
        <div class="example-block">
          ${renderSqlBlock(ex.sql)}
          <div class="example-output"><strong>Output:</strong><pre>${escapeHtml(ex.output)}</pre></div>
          <p class="example-explanation">${escapeHtml(ex.explanation)}</p>
        </div>`;
    }).join('');

    let mistakesHtml = chapter.commonMistakes.map(function (m) {
      return `
        <div class="mistake-block">
          <div class="mistake-wrong"><span class="badge badge-red">Wrong</span><code>${escapeHtml(m.wrong)}</code></div>
          <div class="mistake-correct"><span class="badge badge-green">Correct</span><code>${escapeHtml(m.correct)}</code></div>
          <p class="mistake-why">${escapeHtml(m.why)}</p>
        </div>`;
    }).join('');

    let practiceHtml = chapter.practiceQuestions.map(function (p, i) {
      return `
        <li class="practice-item">
          <span class="badge ${LEVEL_BADGE_CLASS[p.difficulty] || 'badge-cyan'}">${p.difficulty}</span>
          <p>${escapeHtml(p.text)}</p>
          <details><summary>Hint</summary><p>${escapeHtml(p.hint)}</p></details>
        </li>`;
    }).join('');

    let interviewHtml = chapter.interviewQuestions.map(function (q) {
      return `
        <details class="interview-item">
          <summary>${escapeHtml(q.question)}</summary>
          <p>${escapeHtml(q.answer)}</p>
        </details>`;
    }).join('');

    let importantPointsHtml = chapter.importantPoints.map(function (p) {
      return `<li>${escapeHtml(p)}</li>`;
    }).join('');

    const html = `
      <button class="btn btn-ghost btn-sm back-to-chapters" style="margin-bottom:var(--sp-5);">&larr; Back to Chapters</button>

      <div class="chapter-detail">
        <header class="chapter-detail-header">
          <div class="chapter-detail-meta">
            <span class="badge badge-cyan">Chapter ${chapter.id}</span>
            <span class="badge ${diffClass}">${chapter.difficulty}</span>
            <span class="chapter-row-time">${chapter.estMinutes} min read</span>
          </div>
          <h1>${escapeHtml(chapter.title)}</h1>
        </header>

        <section class="chapter-section">
          <h2>What is it?</h2>
          <p>${escapeHtml(chapter.concept)}</p>
        </section>

        <section class="chapter-section">
          <h2>Where is it used in real life?</h2>
          <p>${escapeHtml(chapter.realLifeExample)}</p>
        </section>

        <section class="chapter-section">
          <h2>Syntax</h2>
          ${renderSqlBlock(chapter.syntax)}
        </section>

        <section class="chapter-section">
          <h2>Example &amp; Output</h2>
          ${examplesHtml}
        </section>

        <section class="chapter-section">
          <h2>Important Points</h2>
          <ul class="important-points">${importantPointsHtml}</ul>
        </section>

        <section class="chapter-section">
          <h2>Common Mistakes</h2>
          ${mistakesHtml}
        </section>

        <section class="chapter-section">
          <h2>Interview Tip</h2>
          ${interviewHtml}
        </section>

        <section class="chapter-section">
          <h2>Practice</h2>
          <ul class="practice-list">${practiceHtml}</ul>
        </section>

        <section class="chapter-section">
          <h2>Quiz</h2>
          <p style="color:var(--text-muted);margin-bottom:var(--sp-4);">${chapter.quiz.length} questions · 70% required to pass</p>
          <button class="btn btn-primary take-quiz-btn">Take Chapter Quiz</button>
          <div class="quiz-container" style="margin-top:var(--sp-5);"></div>
        </section>

        <nav class="chapter-nav">
          <button class="btn btn-ghost prev-chapter-btn" ${chapter.id === 1 ? 'disabled' : ''}>&larr; Previous</button>
          <button class="btn ${completed ? 'btn-ghost' : 'btn-primary'} mark-complete-btn">${completed ? '✓ Completed' : 'Mark Complete'}</button>
          <button class="btn btn-ghost next-chapter-btn">Next &rarr;</button>
        </nav>
      </div>`;

    container.innerHTML = html;

    container.querySelector('.back-to-chapters').addEventListener('click', function () {
      renderChapterList(container, chapter.level === 'Beginner' ? getLevelIdForChapter(chapter.id) : getLevelIdForChapter(chapter.id));
    });

    container.querySelector('.mark-complete-btn').addEventListener('click', function () {
      let p = qcGetProgress();
      if (p.completedChapters.indexOf(chapter.id) === -1) {
        p.completedChapters.push(chapter.id);
        p.xp += 10;
      }
      p = qcUpdateStreak(p);
      p = qcRefreshBadges(p);
      qcSaveProgress(p);
      renderChapterDetail(container, chapter.id);
    });

    container.querySelector('.take-quiz-btn').addEventListener('click', function () {
      renderQuiz(container.querySelector('.quiz-container'), chapter);
    });

    const prevBtn = container.querySelector('.prev-chapter-btn');
    if (chapter.id > 1) {
      prevBtn.addEventListener('click', function () {
        renderChapterDetail(container, chapter.id - 1);
        window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
      });
    }
    const nextBtn = container.querySelector('.next-chapter-btn');
    const hasNext = QC_DATA.chapters.some(function (c) { return c.id === chapter.id + 1; });
    if (!hasNext) nextBtn.setAttribute('disabled', 'true');
    nextBtn.addEventListener('click', function () {
      if (hasNext) {
        renderChapterDetail(container, chapter.id + 1);
        window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
      }
    });
  }

  function getLevelIdForChapter(chapterId) {
    const level = QC_DATA.levels.find(function (l) {
      return chapterId >= l.range[0] && chapterId <= l.range[1];
    });
    return level ? level.id : 1;
  }

  function renderQuiz(container, chapter) {
    let current = 0;
    let score = 0;
    const total = chapter.quiz.length;

    function renderQuestion() {
      const q = chapter.quiz[current];
      const pct = Math.round((current / total) * 100);
      let optionsHtml = q.options.map(function (opt, i) {
        return `<button class="quiz-option" data-index="${i}">${escapeHtml(opt)}</button>`;
      }).join('');

      container.innerHTML = `
        <div class="quiz-progress-label">Question ${current + 1} of ${total}</div>
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <p class="quiz-prompt">${escapeHtml(q.prompt)}</p>
        <div class="quiz-options">${optionsHtml}</div>
        <div class="quiz-feedback" style="display:none;" aria-live="polite"></div>`;

      container.querySelectorAll('.quiz-option').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          const correct = idx === q.correctIndex;
          if (correct) score++;

          container.querySelectorAll('.quiz-option').forEach(function (b, i) {
            b.disabled = true;
            if (i === q.correctIndex) b.classList.add('is-correct');
            if (i === idx && !correct) b.classList.add('is-wrong');
          });

          const feedback = container.querySelector('.quiz-feedback');
          feedback.style.display = 'block';
          feedback.innerHTML = `
            <p class="quiz-verdict ${correct ? 'is-correct-text' : 'is-wrong-text'}">${correct ? 'Correct!' : 'Not quite.'}</p>
            <p>${escapeHtml(q.explanation)}</p>
            <button class="btn btn-primary btn-sm next-question-btn">${current + 1 < total ? 'Next Question' : 'See Results'}</button>`;

          feedback.querySelector('.next-question-btn').addEventListener('click', function () {
            current++;
            if (current < total) {
              renderQuestion();
            } else {
              renderResults();
            }
          });
        });
      });
    }

    function renderResults() {
      const pct = Math.round((score / total) * 100);
      const passed = pct >= 70;
      let verdict = 'Review and Try Again';
      if (pct >= 90) verdict = 'Excellent';
      else if (pct >= 75) verdict = 'Very Good';
      else if (pct >= 70) verdict = 'Passed';

      container.innerHTML = `
        <div class="quiz-results" aria-live="polite">
          <h3>${verdict}</h3>
          <p class="quiz-score">${score} / ${total} correct (${pct}%)</p>
          <p>${passed ? "You passed this chapter's quiz." : 'You need 70% to pass — give it another attempt.'}</p>
          <button class="btn btn-primary retry-quiz-btn">Retake Quiz</button>
        </div>`;

      if (passed) {
        let p = qcGetProgress();
        p.quizScores[chapter.id] = pct;
        if (p.completedChapters.indexOf(chapter.id) === -1) {
          p.completedChapters.push(chapter.id);
          p.xp += 20;
        }
        p = qcUpdateStreak(p);
        p = qcRefreshBadges(p);
        qcSaveProgress(p);
      }

      container.querySelector('.retry-quiz-btn').addEventListener('click', function () {
        current = 0; score = 0;
        renderQuestion();
      });
    }

    renderQuestion();
  }

  function renderDashboard(container) {
    const progress = qcGetProgress();
    const totalChapters = QC_DATA.chapters.length;
    const completedCount = progress.completedChapters.length;
    const overallPct = totalChapters ? Math.round((completedCount / totalChapters) * 100) : 0;
    const scores = Object.values(progress.quizScores || {});
    const avgScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    const currentChapterObj = QC_DATA.chapters.find(function (c) { return progress.completedChapters.indexOf(c.id) === -1; });
    const currentChapterLabel = currentChapterObj ? `Ch. ${currentChapterObj.id}: ${currentChapterObj.title}` : 'All chapters complete!';
    const earnedBadges = BADGE_DEFS.filter(function (b) { return (progress.badges || []).indexOf(b.id) !== -1; });

    let badgesHtml = earnedBadges.length
      ? earnedBadges.map(function (b) {
          return `<div class="badge-earned" title="${escapeHtml(b.desc)}"><span class="badge badge-purple">🏅 ${escapeHtml(b.label)}</span></div>`;
        }).join('')
      : '<p style="color:var(--text-faint);font-size:var(--fs-sm);">No badges yet — complete a chapter to earn your first one.</p>';

    container.innerHTML = `
      <div class="dashboard-grid">
        <div class="card dash-stat">
          <span class="dash-stat-label">Overall Progress</span>
          <span class="dash-stat-value">${overallPct}%</span>
          <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${overallPct}%"></div></div>
        </div>
        <div class="card dash-stat">
          <span class="dash-stat-label">Completed Chapters</span>
          <span class="dash-stat-value">${completedCount} / ${totalChapters}</span>
        </div>
        <div class="card dash-stat">
          <span class="dash-stat-label">Average Quiz Score</span>
          <span class="dash-stat-value">${avgScore}%</span>
        </div>
        <div class="card dash-stat">
          <span class="dash-stat-label">Current Chapter</span>
          <span class="dash-stat-value" style="font-size:var(--fs-md);">${escapeHtml(currentChapterLabel)}</span>
        </div>
        <div class="card dash-stat">
          <span class="dash-stat-label">XP Earned</span>
          <span class="dash-stat-value">${progress.xp || 0}</span>
        </div>
        <div class="card dash-stat">
          <span class="dash-stat-label">Day Streak</span>
          <span class="dash-stat-value">🔥 ${progress.streak || 0}</span>
        </div>
      </div>
      <div class="card" style="margin-top:var(--sp-5);">
        <h3 style="font-size:var(--fs-md);margin-bottom:var(--sp-4);">Badges</h3>
        <div class="badges-row">${badgesHtml}</div>
      </div>`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('course-app');
    if (!container || typeof QC_DATA === 'undefined') return;
    renderLevelOverview(container);

    const dashContainer = document.getElementById('dashboard-app');
    if (dashContainer) renderDashboard(dashContainer);
  });

  window.QC_RENDER = { renderLevelOverview, renderChapterList, renderChapterDetail, renderDashboard };
})();
